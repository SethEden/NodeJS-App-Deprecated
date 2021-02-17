"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cconfig = exports.cFiglet = exports.cfiglet = exports.cFig = exports.cfig = exports.cLets = exports.clets = exports.cLet = exports.clet = exports.cOOPS = exports.cOops = exports.coops = exports.cWords = exports.cwords = exports.cWord = exports.cword = exports.cLinux = exports.clinux = exports.cWindows = exports.cwindows = exports.cWindow = exports.cwindow = exports.cWind = exports.cwind = exports.cSubString = exports.csubString = exports.csubstring = exports.cObjects = exports.cobjects = exports.cObject = exports.cobject = exports.cBooleans = exports.cbooleans = exports.cBoolean = exports.cboolean = exports.cChars = exports.cchars = exports.cChar = exports.cchar = exports.cDoubles = exports.cdoubles = exports.cDouble = exports.cdouble = exports.cShortest = exports.cshortest = exports.cShorter = exports.cshorter = exports.cShorts = exports.cshorts = exports.cShort = exports.cshort = exports.cLongest = exports.clongest = exports.cLonger = exports.clonger = exports.cLongs = exports.clongs = exports.cLong = exports.clong = exports.cFloats = exports.cfloats = exports.cFloat = exports.cfloat = exports.cIntegers = exports.cintegers = exports.cInteger = exports.cinteger = exports.cStrings = exports.cstrings = exports.cString = exports.cstring = exports.cFlags = exports.cflags = exports.cFlag = exports.cflag = exports.cRegEx = exports.cregEx = exports.cNth = exports.cnth = exports.cURL = exports.curl = exports.cNode = exports.cnode = exports.cKeying = exports.ckeying = exports.cKeyed = exports.ckeyed = exports.cKeys = exports.ckeys = exports.cKey = exports.ckey = exports.clogs = exports.cLogs = exports.clog = exports.cLog = exports.cOut = exports.cout = exports.c3D = exports.c3d = exports.c1a1d = void 0;
exports.ctop = exports.cTo = exports.cRight = exports.cright = exports.cLeft = exports.cleft = exports.cBack = exports.cback = exports.cFront = exports.cfront = exports.cDetails = exports.cdetails = exports.cDetail = exports.cdetail = exports.cWithout = exports.cwithout = exports.cWith = exports.cwith = exports.cMenu = exports.cMe = exports.cHamburger = exports.cAccount = exports.cCounter = exports.ccounter = exports.cCount = exports.ccount = exports.cConfirm = exports.cconfirm = exports.cCancel = exports.ccancel = exports.cCan = exports.ccan = exports.cSelect = exports.cselect = exports.cAt = exports.cat = exports.cAll = exports.call = exports.cSubstitution = exports.csubstitution = exports.cSubstitute = exports.csubstitute = exports.cInsertion = exports.cinsertion = exports.cInsert = exports.cinsert = exports.cDeletion = exports.cdeletion = exports.cDelete = exports.cdelete = exports.cEdit = exports.cUpdate = exports.cOpening = exports.copening = exports.cOpened = exports.copened = exports.cOpens = exports.copens = exports.cOpen = exports.copen = exports.cClosing = exports.cclosing = exports.cClosed = exports.cclosed = exports.cClose = exports.cclose = exports.cPens = exports.cpens = exports.cPen = exports.cpen = exports.cAdditionals = exports.cadditionals = exports.cADDITIONAL = exports.cAdditional = exports.cadditional = exports.cAdding = exports.cadding = exports.cAdded = exports.cadded = exports.cADD = exports.cAdd = exports.c_add = exports.cSubmit = exports.cCreate = exports.ccreate = exports.cFully = exports.cfully = exports.cFull = exports.cfull = exports.cEmpty = exports.cempty = exports.cConfiguring = exports.cconfiguring = exports.cConfigured = exports.cconfigured = exports.cConfigurations = exports.cconfigurations = exports.cConfiguration = exports.cconfiguration = exports.cConfig = void 0;
exports.cPages = exports.cpages = exports.cPage = exports.cpage = exports.cDebug = exports.cdebug = exports.cbug = exports.cINVALID = exports.cInvalid = exports.cinvalid = exports.cValidate = exports.cvalidate = exports.cValidations = exports.cvalidations = exports.cValidation = exports.cvalidation = exports.cVALID = exports.cValid = exports.cvalid = exports.cTypes = exports.cType = exports.ctype = exports.cField = exports.cLabel = exports.cLink = exports.cInfo = exports.cinfo = exports.cEntire = exports.cPositive = exports.cNegative = exports.cDownload = exports.cSave = exports.cNavigate = exports.cnavigate = exports.cExpecting = exports.cexpecting = exports.cExpected = exports.cexpected = exports.cExpects = exports.cexpects = exports.cExpect = exports.cexpect = exports.cPressKey = exports.cpressKey = exports.cPressing = exports.cpressing = exports.cPressed = exports.cpressed = exports.cPresses = exports.cpresses = exports.cPress = exports.cpress = exports.cClick = exports.cclick = exports.cLoading = exports.cloading = exports.cLoaded = exports.cloaded = exports.cLoads = exports.cloads = exports.cLoad = exports.cload = exports.cNew = exports.cView = exports.cview = exports.cUnShare = exports.cUnshare = exports.cUnshared = exports.cUnShared = exports.cShared = exports.cshared = exports.cshares = exports.cShares = exports.cShare = exports.cshare = exports.cListed = exports.clisted = exports.cLists = exports.clists = exports.cList = exports.clist = exports.cItems = exports.citems = exports.cItem = exports.citem = exports.cThe = exports.cthe = exports.cEnding = exports.cending = exports.cEND = exports.cEnd = exports.cend = exports.cBeginning = exports.cbeginning = exports.cBEGIN = exports.cBegin = exports.cbegin = exports.cBottom = exports.cbottom = exports.cTop = void 0;
exports.cstamp = exports.cRunTime = exports.cRuntime = exports.cruntime = exports.cTime = exports.ctime = exports.cDate = exports.cdate = exports.cReceived = exports.cReceive = exports.cEmails = exports.cEmail = exports.cmail = exports.cID = exports.cId = exports.cid = exports.cPageScriptName = exports.cKeywordName = exports.ckeywordName = exports.cNamed = exports.cnamed = exports.cNames = exports.cnames = exports.cName = exports.cname = exports.cEnvironment = exports.cMaster = exports.cmaster = exports.cRunning = exports.crunning = exports.cRuns = exports.cruns = exports.cRun = exports.crun = exports.cRowing = exports.crowing = exports.cRowed = exports.crowed = exports.cRows = exports.crows = exports.cRow = exports.crow = exports.cOf = exports.cHost = exports.cNumber = exports.cnumber = exports.cAutomation = exports.cautomation = exports.cAuto = exports.cauto = exports.cActual = exports.cactual = exports.cActions = exports.cactions = exports.cAction = exports.caction = exports.cAct = exports.cact = exports.cBrowser = exports.cExhaustive = exports.cBureau = exports.cTestWorkflow = exports.cTestStatusMessage = exports.cTestStatus = exports.cStatus = exports.cTESTS = exports.cTests = exports.ctests = exports.cTEST = exports.cTest = exports.ctest = exports.cWorkflows = exports.cworkflows = exports.cWorkflow = exports.cworkflow = exports.cFlow = exports.cflow = exports.cWork = exports.cwork = exports.cResulting = exports.cresulting = exports.cResulted = exports.cresulted = exports.cResults = exports.cresults = exports.cResult = exports.cresult = exports.cDATA = exports.cData = exports.cdata = exports.cKeywords = exports.ckeywords = exports.cKeyword = exports.ckeyword = exports.cScripts = exports.cScript = exports.cMessages = exports.cmessages = exports.cMessage = exports.cmessage = void 0;
exports.ccleaned = exports.cClean = exports.cclean = exports.cCatagory = exports.cUnderscore = exports.cunderscore = exports.cScore = exports.cscore = exports.cUnder = exports.cunder = exports.cColon = exports.ccolon = exports.cPlus = exports.cplus = exports.cSpaced = exports.cspaced = exports.cSpaces = exports.cspaces = exports.cSpace = exports.cspace = exports.cReplacement = exports.creplacement = exports.cReplacing = exports.creplacing = exports.cReplaced = exports.creplaced = exports.cReplaces = exports.creplaces = exports.cReplace = exports.creplace = exports.cPlacement = exports.cplacement = exports.cPlacing = exports.cplacing = exports.cPlaced = exports.cplaced = exports.cPlaces = exports.cplaces = exports.cPlace = exports.cplace = exports.cFrom = exports.cfrom = exports.cPUT = exports.cPut = exports.cput = exports.cGet = exports.cget = exports.cLevel = exports.clevel = exports.cAccess = exports.cUser = exports.cuser = exports.cUse = exports.cuse = exports.cAnd = exports.cand = exports.cCompleted = exports.ccompleted = exports.cComplete = exports.ccomplete = exports.cPROCESSING = exports.cProcessing = exports.cprocessing = exports.cProcesses = exports.cprocesses = exports.cProcessed = exports.cprocessed = exports.cPROCESS = exports.cProcess = exports.cprocess = exports.cGateway = exports.cWay = exports.cway = exports.cGate = exports.cLimit = exports.climit = exports.cPreview = exports.cSetting = exports.csetting = exports.cSet = exports.cset = exports.cBug = exports.cPermission = exports.cViewer = exports.cExiting = exports.cexiting = exports.cExit = exports.cexit = exports.cPath = exports.cpath = exports.cIntermediate = exports.cintermediate = exports.cmediate = exports.cStamping = exports.cstamping = exports.cStamped = exports.cstamped = exports.cStamps = exports.cstamps = exports.cStamp = void 0;
exports.cWait = exports.cwait = exports.cAbreviated = exports.cAssignment = exports.cassignment = exports.cAssign = exports.cassign = exports.cSign = exports.csign = exports.cSystem = exports.csystem = exports.cOperating = exports.cOperation = exports.cRaw = exports.cEquivalence = exports.cequivalence = exports.cEquals = exports.cequals = exports.cEqual = exports.cequal = exports.cTable = exports.ctable = exports.cLibrary = exports.clibrary = exports.cDialog = exports.cVisibility = exports.cvisibility = exports.cVariability = exports.cvariability = exports.cVariables = exports.cvariables = exports.cVariable = exports.cvariable = exports.cAbilities = exports.cabilities = exports.cAbility = exports.cability = exports.cTies = exports.cties = exports.cDetermine = exports.cdetermine = exports.cEnabled = exports.cenabled = exports.cEnable = exports.cenable = exports.cEither = exports.ceither = exports.cCode = exports.ccode = exports.cLength = exports.clength = exports.cNumerical = exports.cNumeric = exports.cnumeric = exports.cRange = exports.crange = exports.cFindValue = exports.cfindValue = exports.cfindvalue = exports.cFind = exports.cfind = exports.cValues = exports.cvalues = exports.cValue = exports.cvalue = exports.cParent = exports.cparent = exports.cGenerated = exports.cgenerated = exports.cGenerate = exports.cgenerate = exports.cRandomly = exports.crandomly = exports.cRandom = exports.crandom = exports.cUpper = exports.cupper = exports.cLetter = exports.cletter = exports.cDigit = exports.cdigit = exports.cDig = exports.cdig = exports.cExtension = exports.cRemove = exports.cremove = exports.cmove = exports.cCase = exports.ccase = exports.cLower = exports.clower = exports.cLow = exports.clow = exports.cConvert = exports.cconvert = exports.cReturn = exports.creturn = exports.cturn = exports.cCarriage = exports.cCleaned = void 0;
exports.cInput = exports.cinput = exports.cContext = exports.ccontext = exports.cTEXT = exports.cText = exports.ctext = exports.cAlphabetic = exports.cbetic = exports.cAlpha = exports.calpha = exports.cMixed = exports.cmixed = exports.cMix = exports.cmix = exports.cOR = exports.cor = exports.cOr = exports.cBY = exports.cBy = exports.cby = exports.cAssertionStyle = exports.cUploadStyle = exports.cAssertionType = exports.cAssertion = exports.cAssertValueGreaterThan = exports.cAssertValueLessThan = exports.cAssertValueNotEqual = exports.cAssertValueEqual = exports.cAssertNotExists = exports.cAssertExists = exports.cThan = exports.cthan = exports.cThen = exports.cthen = exports.cGreater = exports.cgreater = exports.cGreat = exports.cgreat = exports.cLess = exports.cless = exports.cAssert = exports.cassert = exports.cStyle = exports.cUpload = exports.cOnce = exports.cAFTER = exports.cAfter = exports.cafter = exports.cBEFORE = exports.cBefore = exports.cbefore = exports.cSwap = exports.cswap = exports.cQuoted = exports.cquoted = exports.cQuotes = exports.cquotes = exports.cQuote = exports.cquote = exports.cSingle = exports.csingle = exports.cDEFAULT = exports.cDefault = exports.cdefault = exports.cFAULT = exports.cFault = exports.cfault = exports.cUnified = exports.cMulti = exports.cParallel = exports.cSingular = exports.cSynch = exports.cAsynch = exports.cExisting = exports.cexisting = exports.cExisted = exports.cexisted = exports.cExists = exports.cexists = exports.cExist = exports.cexist = exports.cIndividually = exports.cIndividual = exports.cSelectors = exports.cSelector = exports.cselector = exports.cLocatorLibrary = exports.cLocators = exports.cLocator = exports.cActionOverride = exports.cOverride = exports.cRide = exports.cride = exports.cOver = exports.cInner = exports.cinner = exports.chtml = exports.cHTML = exports.cawait = void 0;
exports.cCharacters = exports.ccharacters = exports.cCharacter = exports.ccharacter = exports.cSpecial = exports.cspecial = exports.cPublic = exports.cpublic = exports.cHome = exports.chome = exports.cAllowable = exports.callowable = exports.cAllow = exports.callow = exports.cElementName = exports.cElements = exports.celements = exports.cElement = exports.celement = exports.cChecked = exports.cchecked = exports.cChecks = exports.cchecks = exports.cCheck = exports.ccheck = exports.cIS = exports.cIs = exports.cis = exports.cIngestion = exports.cClass = exports.cclass = exports.cResources = exports.cresources = exports.cResource = exports.cresource = exports.cDestination = exports.cdestination = exports.cSource = exports.csource = exports.cNation = exports.cnation = exports.cbin = exports.csrc = exports.ccert = exports.ccafe = exports.cFolders = exports.cfolders = exports.cfolder = exports.cFolder = exports.cFold = exports.cfold = exports.cFilenames = exports.cfilenames = exports.cFilename = exports.cfilename = exports.cFiles = exports.cfiles = exports.cFile = exports.cfile = exports.cWebkey = exports.cWebbing = exports.cwebbing = exports.cWebbed = exports.cwebbed = exports.cWebs = exports.cwebs = exports.cWeb = exports.cweb = exports.cBedding = exports.cbedding = exports.cBedded = exports.cbedded = exports.cBeds = exports.cbeds = exports.cBed = exports.cbed = exports.cPageName = exports.cTestName = exports.cPageData = exports.cpageData = exports.ctestData = exports.cCreation = exports.cAdvanced = exports.cAdvance = exports.cProjects = exports.cProject = exports.cproject = exports.cIteration = exports.citeration = exports.cConstants = exports.cconstants = exports.cConstant = exports.cconstant = exports.cDescription = exports.cdescription = exports.cInputting = exports.cinputting = exports.cInputs = exports.cinputs = exports.cINPUT = void 0;
exports.cvector = exports.cFraction = exports.cTrap = exports.ctrap = exports.cAngle = exports.cangle = exports.cDegrees = exports.cdegrees = exports.cDegree = exports.cdegree = exports.cNominal = exports.cnominal = exports.cNormalize = exports.cnormalize = exports.cNormal = exports.cnormal = exports.cQuaternion = exports.cquaternion = exports.cQuarter = exports.cquarter = exports.cQuart = exports.cquart = exports.cRounded = exports.crounded = exports.cRound = exports.cround = exports.cCamel = exports.ccamel = exports.cArrays = exports.carrays = exports.cArray = exports.carray = exports.cDecompose = exports.cdecompose = exports.ccompose = exports.cDashboard = exports.cboard = exports.cDash = exports.cdash = exports.cAsh = exports.cash = exports.cERROR = exports.cError = exports.cerror = exports.cWarnings = exports.cwarnings = exports.cWARNING = exports.cWarning = exports.cwarning = exports.cWARN = exports.cWarn = exports.cwarn = exports.cConstructor = exports.cPort = exports.cport = exports.cHung = exports.chung = exports.cCell = exports.ccell = exports.cWoman = exports.cwoman = exports.cMan = exports.cman = exports.cDisabled = exports.cdisabled = exports.cAttributes = exports.cattributes = exports.cAttribute = exports.cattribute = exports.cFilter = exports.cfilter = exports.cChild = exports.cchild = exports.cSibling = exports.csibling = exports.cExecuting = exports.cexecuting = exports.cExecuted = exports.cexecuted = exports.cExecutes = exports.cexecutes = exports.cExecute = exports.cexecute = exports.cCute = exports.ccute = exports.cCutting = exports.ccutting = exports.cCuts = exports.ccuts = exports.cCut = exports.ccut = exports.cDwell = exports.cTimeOut = exports.cTimeout = exports.cBinary = exports.cSolid = exports.csolid = exports.cWorks = exports.cEdge = exports.cedge = void 0;
exports.cforward = exports.cParsed = exports.cparsed = exports.cPARSER = exports.cParser = exports.cparser = exports.cPARSE = exports.cParse = exports.cparse = exports.cRoot = exports.croot = exports.cReleasing = exports.creleasing = exports.cReleased = exports.creleased = exports.cReleases = exports.creleases = exports.cRELEASE = exports.cRelease = exports.crelease = exports.cLEASE = exports.clease = exports.cDeployment = exports.cdeployment = exports.cDEPLOY = exports.cDeploy = exports.cdeploy = exports.cBuild = exports.cbuild = exports.cAPPLICATION = exports.cApplication = exports.capplication = exports.cDOES = exports.cDoes = exports.cdoes = exports.cMatching = exports.cmatching = exports.cMatch = exports.cmatch = exports.cAscertain = exports.cascertain = exports.ccertain = exports.cBetween = exports.cbetween = exports.cBet = exports.cbet = exports.cDifference = exports.cArguments = exports.carguments = exports.cAggregate = exports.caggregate = exports.cProduct = exports.cVideo = exports.cvideo = exports.cContaining = exports.ccontaining = exports.cContained = exports.ccontained = exports.cContains = exports.ccontains = exports.cContain = exports.ccontain = exports.cComparisons = exports.ccomparisons = exports.cComparison = exports.ccomparison = exports.cComparing = exports.ccomparing = exports.cCompared = exports.ccompared = exports.cCompares = exports.ccompares = exports.cCompare = exports.ccompare = exports.cARE = exports.cAre = exports.care = exports.cConsolidating = exports.cconsolidating = exports.cConsolidates = exports.cconsolidates = exports.cConsolidated = exports.cconsolidated = exports.cConsolidate = exports.cconsolidate = exports.cSimplify = exports.csimplify = exports.cSort = exports.csort = exports.cLocation = exports.clocation = exports.cPoint = exports.cpoint = exports.cTransform = exports.ctransform = exports.cForm = exports.cform = exports.cFor = exports.cfor = exports.cVector = void 0;
exports.caliases = exports.cAlias = exports.calias = exports.cFrame = exports.cframe = exports.cBlob = exports.cblob = exports.cQueue = exports.cqueue = exports.cCommands = exports.ccommands = exports.cCOMMAND = exports.cCommand = exports.ccommand = exports.cCustom = exports.ccustom = exports.cRules = exports.crules = exports.cClient = exports.cclient = exports.cAverage = exports.caverage = exports.cPalindrom = exports.cpalindrom = exports.cPal = exports.cpal = exports.cAlmost = exports.calmost = exports.cPopular = exports.cpopular = exports.cPOP = exports.cPop = exports.cpop = exports.cMost = exports.cmost = exports.cBold = exports.cbold = exports.cOld = exports.cold = exports.cColors = exports.ccolors = exports.cColor = exports.ccolor = exports.cModule = exports.cmodule = exports.cFont = exports.cfont = exports.cInterface = exports.cinterface = exports.cDriven = exports.cdriven = exports.cDrive = exports.cdrive = exports.cArgument = exports.cargument = exports.cFace = exports.cface = exports.cEvents = exports.cevents = exports.cEvent = exports.cevent = exports.cEVEN = exports.cEven = exports.ceven = exports.cOdd = exports.codd = exports.cBasic = exports.cbasic = exports.cPercent = exports.cpercent = exports.cExecution = exports.cJournal = exports.cMultiple = exports.cmultiple = exports.cFunctions = exports.cfunctions = exports.cFunction = exports.cfunction = exports.cCommon = exports.ccommon = exports.cDemo = exports.cdemo = exports.cReload = exports.creload = exports.cEval = exports.ceval = exports.cRefresh = exports.crefresh = exports.cfresh = exports.cRule = exports.crule = exports.cBusiness = exports.cbusiness = exports.cMetaData = exports.cmetaData = exports.cMeta = exports.cmeta = exports.cSlash = exports.cslash = exports.cForward = void 0;
exports.cGround = exports.cground = exports.cTraditional = exports.ctraditional = exports.cSimplified = exports.csimplified = exports.cFailure = exports.cfailure = exports.cFAILED = exports.cFailed = exports.cfailed = exports.cFAIL = exports.cFail = exports.cfail = exports.cBypassing = exports.cbypassing = exports.cBypassed = exports.cbypassed = exports.cBypasses = exports.cbypasses = exports.cBypass = exports.cbypass = exports.cPassing = exports.cpassing = exports.cPASSED = exports.cPassed = exports.cpassed = exports.cPASS = exports.cPass = exports.cpass = exports.cConversion = exports.cconversion = exports.cPerformance = exports.cperformance = exports.cPerform = exports.cperform = exports.cControl = exports.ccontrol = exports.cVersion = exports.cversion = exports.cClear = exports.cclear = exports.cAnalysis = exports.canalysis = exports.cDeviation = exports.cdeviation = exports.cStandard = exports.cstandard = exports.cStack = exports.cstack = exports.cTracking = exports.ctracking = exports.cTrack = exports.ctrack = exports.cRack = exports.crack = exports.cMetrics = exports.cmetrics = exports.cMetric = exports.cmetric = exports.cOutput = exports.coutput = exports.cstartup = exports.cStarted = exports.cstarted = exports.cStarts = exports.cstarts = exports.cStart = exports.cstart = exports.cAbout = exports.cabout = exports.cIndex = exports.cindex = exports.cGenerator = exports.cgenerator = exports.cHive = exports.chive = exports.cPrint = exports.cprint = exports.cHelp = exports.chelp = exports.cDelimiting = exports.cdelimiting = exports.cDelimited = exports.cdelimited = exports.cDelimiters = exports.cdelimiters = exports.cDelimiter = exports.cdelimiter = exports.cDelimit = exports.cdelimit = exports.cTertiary = exports.ctertiary = exports.cSecondary = exports.csecondary = exports.cPrimary = exports.cprimary = exports.cSequencer = exports.csequencer = exports.cAliases = void 0;
exports.cwhat = exports.cWhen = exports.cwhen = exports.cThis = exports.cthis = exports.cThat = exports.cthat = exports.cThose = exports.cthose = exports.cThem = exports.cthem = exports.cHis = exports.chis = exports.cHers = exports.chers = exports.cHim = exports.chim = exports.cHer = exports.cher = exports.cWhere = exports.cwhere = exports.cWere = exports.cwere = exports.cEntering = exports.centering = exports.cEntered = exports.centered = exports.cEnters = exports.centers = exports.cEnter = exports.center = exports.cPlease = exports.cplease = exports.cDuplicate = exports.cduplicate = exports.cUnique = exports.cunique = exports.cStored = exports.cstored = exports.cStore = exports.cstore = exports.cStorage = exports.cstorage = exports.cPRODUCTION = exports.cProduction = exports.cproduction = exports.cDEVELOPMENT = exports.cDevelopment = exports.cdevelopment = exports.cDEVELOP = exports.cDevelop = exports.cdevelop = exports.cSuffix = exports.csuffix = exports.cPrefix = exports.cprefix = exports.cFix = exports.cfix = exports.cQualified = exports.cqualified = exports.cDocument = exports.cdocument = exports.cLine = exports.cline = exports.cSuggested = exports.csuggested = exports.cSuggest = exports.csuggest = exports.cSummary = exports.csummary = exports.cSum = exports.csum = exports.cDisplay = exports.cdisplay = exports.cPlay = exports.cplay = exports.cExport = exports.cexport = exports.cShape = exports.cshape = exports.cPhonics = exports.cphonics = exports.cIsotope = exports.cisotope = exports.cGeneric = exports.cgeneric = exports.cUnits = exports.cunits = exports.cUnit = exports.cunit = exports.cSections = exports.csections = exports.cSection = exports.csection = exports.cLane = exports.clane = exports.cLack = exports.clack = exports.cYell = exports.cyell = void 0;
exports.cSearched = exports.csearched = exports.cSearches = exports.csearches = exports.cSearch = exports.csearch = exports.cSea = exports.csea = exports.cSeparated = exports.cseparated = exports.cSeparate = exports.cseparate = exports.cComas = exports.ccomas = exports.cComa = exports.ccoma = exports.cPatterns = exports.cpatterns = exports.cPattern = exports.cpattern = exports.cPatt = exports.cpatt = exports.cPat = exports.cpat = exports.cRecognizer = exports.crecognizer = exports.cCombinations = exports.ccombinations = exports.cCombination = exports.ccombination = exports.cRecombine = exports.crecombine = exports.cCombining = exports.ccombining = exports.cCombined = exports.ccombined = exports.cCombines = exports.ccombines = exports.cCombine = exports.ccombine = exports.cComb = exports.ccomb = exports.cSome = exports.csome = exports.cOptimized = exports.coptimized = exports.cFulfillment = exports.cfulfillment = exports.cFill = exports.cfill = exports.cDefining = exports.cdefining = exports.cDefines = exports.cdefines = exports.cDefined = exports.cdefined = exports.cDefine = exports.cdefine = exports.cFine = exports.cfine = exports.cLike = exports.clike = exports.cCould = exports.ccould = exports.cShould = exports.cshould = exports.cWould = exports.cwould = exports.cYou = exports.cyou = exports.cScreen = exports.cscreen = exports.cExpansion = exports.cexpansion = exports.cRecursive = exports.crecursive = exports.cCursive = exports.ccursive = exports.cClone = exports.cclone = exports.cDeep = exports.cdeep = exports.cLehmer = exports.cSolve = exports.csolve = exports.cAcronyms = exports.cacronyms = exports.cAcronym = exports.cacronym = exports.cAbreviations = exports.cabreviations = exports.cAbreviation = exports.cabreviation = exports.cOther = exports.cother = exports.cWhy = exports.cwhy = exports.cHow = exports.chow = exports.cWhat = void 0;
exports.cMat = exports.cmat = exports.cAttempting = exports.cattempting = exports.cAttempted = exports.cattempted = exports.cAttempts = exports.cattempts = exports.cAttempt = exports.cattempt = exports.cTempt = exports.ctempt = exports.cTemp = exports.ctemp = exports.cUnknown = exports.cunknown = exports.cKnown = exports.cknown = exports.cKnow = exports.cknow = exports.cNow = exports.cnow = exports.cUnable = exports.cunable = exports.cInto = exports.cinto = exports.cBreak = exports.cbreak = exports.cUsing = exports.cusing = exports.cUsed = exports.cused = exports.cCannot = exports.ccannot = exports.cPeriod = exports.cperiod = exports.cCost = exports.ccost = exports.cTerm = exports.cterm = exports.cVariation = exports.cvariation = exports.cResolving = exports.cresolving = exports.cResolved = exports.cresolved = exports.cResolve = exports.cresolve = exports.cSymbols = exports.csymbols = exports.cSymbol = exports.csymbol = exports.cMode = exports.cmode = exports.cDomain = exports.cdomain = exports.cSpecified = exports.cspecified = exports.cSpecific = exports.cspecific = exports.cBiggest = exports.cbiggest = exports.cBigger = exports.cbigger = exports.cBig = exports.cbig = exports.cWas = exports.cwas = exports.cSafe = exports.csafe = exports.cStay = exports.cstay = exports.cDay = exports.cday = exports.cNice = exports.cnice = exports.cHave = exports.chave = exports.cBye = exports.cbye = exports.cGood = exports.cgood = exports.cLoop = exports.cloop = exports.cProgram = exports.cprogram = exports.cMain = exports.cmain = exports.cGoing = exports.cgoing = exports.cImplementation = exports.cimplementation = exports.cImplements = exports.cimplements = exports.cImplement = exports.cimplement = exports.cNeed = exports.cneed = exports.cSearching = exports.csearching = void 0;
exports.cFound = exports.cfound = exports.cSupporting = exports.csupporting = exports.cSupported = exports.csupported = exports.cSupports = exports.csupports = exports.cSupport = exports.csupport = exports.cSpecify = exports.cspecify = exports.cFar = exports.cfar = exports.cElse = exports.celse = exports.cLookup = exports.clookup = exports.cLooking = exports.clooking = exports.cLooked = exports.clooked = exports.cLooks = exports.clooks = exports.cLook = exports.clook = exports.cCalling = exports.ccalling = exports.cCalled = exports.ccalled = exports.cCalls = exports.ccalls = exports.cCall = exports.ccall = exports.cExpanding = exports.cexpanding = exports.cExpanded = exports.cexpanded = exports.cExpands = exports.cexpands = exports.cExpand = exports.cexpand = exports.cPushing = exports.cpushing = exports.cPushed = exports.cpushed = exports.cPushes = exports.cpushes = exports.cPUSH = exports.cPush = exports.cpush = exports.cCHANGE = exports.cChange = exports.cchange = exports.cHad = exports.chad = exports.cSkiping = exports.cskiping = exports.cSkiped = exports.cskiped = exports.cSkips = exports.cskips = exports.cSkip = exports.cskip = exports.cBeing = exports.cbeing = exports.cDelta = exports.cdelta = exports.cCurrent = exports.ccurrent = exports.cRent = exports.crent = exports.cBut = exports.cbut = exports.cCorrecting = exports.ccorrecting = exports.cCorrectly = exports.ccorrectly = exports.cCorrected = exports.ccorrected = exports.cCorrects = exports.ccorrects = exports.cCorrect = exports.ccorrect = exports.cReformating = exports.creformating = exports.cReformated = exports.creformated = exports.cReformats = exports.creformats = exports.cReformat = exports.creformat = exports.cFormatting = exports.cformatting = exports.cFormatted = exports.cformatted = exports.cFormats = exports.cformats = exports.cFormat = exports.cformat = void 0;
exports.csplit = exports.cLit = exports.clit = exports.cTagging = exports.ctagging = exports.cTagged = exports.ctagged = exports.cTags = exports.ctags = exports.cTag = exports.ctag = exports.cYAY = exports.cYay = exports.cyay = exports.cTick = exports.ctick = exports.cPhasing = exports.cphasing = exports.cPhased = exports.cphased = exports.cPhases = exports.cphases = exports.cPhase = exports.cphase = exports.cDONE = exports.cDone = exports.cdone = exports.cDefinitions = exports.cdefinitions = exports.cDefinition = exports.cdefinition = exports.cFollowing = exports.cfollowing = exports.cFollowed = exports.cfollowed = exports.cFollowes = exports.cfollowes = exports.cFollow = exports.cfollow = exports.cBeen = exports.cbeen = exports.cAlready = exports.calready = exports.cReady = exports.cready = exports.cHas = exports.chas = exports.cMore = exports.cmore = exports.cStructures = exports.cstructures = exports.cStructured = exports.cstructured = exports.cStructure = exports.cstructure = exports.cEXAMPLE = exports.cExample = exports.cexample = exports.cPrompt = exports.cprompt = exports.cMust = exports.cmust = exports.cContents = exports.ccontents = exports.cContent = exports.ccontent = exports.cTenting = exports.ctenting = exports.cTents = exports.ctents = exports.cTent = exports.ctent = exports.cAgain = exports.cagain = exports.cGain = exports.cgain = exports.cTrying = exports.ctrying = exports.cTried = exports.ctried = exports.cTry = exports.ctry = exports.cParameters = exports.cparameters = exports.cParameter = exports.cparameter = exports.cAnother = exports.canother = exports.cBecause = exports.cbecause = exports.cCause = exports.ccause = exports.cOriginals = exports.coriginals = exports.cOriginal = exports.coriginal = exports.cUnfounded = exports.cunfounded = exports.cFounded = exports.cfounded = void 0;
exports.cscans = exports.cScan = exports.cscan = exports.cWriting = exports.cwriting = exports.cWritten = exports.cwritten = exports.cWrites = exports.cwrites = exports.cWrite = exports.cwrite = exports.cReferencing = exports.creferencing = exports.cReferenced = exports.creferenced = exports.cReferences = exports.creferences = exports.cReference = exports.creference = exports.cModifying = exports.cmodifying = exports.cModifies = exports.cmodifies = exports.cModified = exports.cmodified = exports.cModify = exports.cmodify = exports.cTargeting = exports.ctargeting = exports.cTargeted = exports.ctargeted = exports.cTargets = exports.ctargets = exports.cTarget = exports.ctarget = exports.cInside = exports.cinside = exports.cSiding = exports.csiding = exports.cSided = exports.csided = exports.cSides = exports.csides = exports.cSide = exports.cside = exports.cFlattening = exports.cflattening = exports.cFlattened = exports.cflattened = exports.cFlatten = exports.cflatten = exports.cFlats = exports.cflats = exports.cFlat = exports.cflat = exports.cCaught = exports.ccaught = exports.cFinally = exports.cfinally = exports.cFinals = exports.cfinals = exports.cFinal = exports.cfinal = exports.cIncluding = exports.cincluding = exports.cIncluded = exports.cincluded = exports.cIncludes = exports.cincludes = exports.cInclude = exports.cinclude = exports.cMerging = exports.cmerging = exports.cMERGED = exports.cMerged = exports.cmerged = exports.cMerges = exports.cmerges = exports.cMERGE = exports.cMerge = exports.cmerge = exports.cPosting = exports.cposting = exports.cPosted = exports.cposted = exports.cPosts = exports.cposts = exports.cPost = exports.cpost = exports.cBroker = exports.cbroker = exports.cStraight = exports.cstraight = exports.cDoing = exports.cdoing = exports.cSplitting = exports.csplitting = exports.cSplits = exports.csplits = exports.cSplit = void 0;
exports.cjust = exports.cLexicons = exports.clexicons = exports.cLexicon = exports.clexicon = exports.cLexical = exports.clexical = exports.cExpressions = exports.cexpressions = exports.cExpression = exports.cexpression = exports.cRegular = exports.cregular = exports.cBracketing = exports.cbracketing = exports.cBracketed = exports.cbracketed = exports.cBrackets = exports.cbrackets = exports.cBracket = exports.cbracket = exports.cThere = exports.cthere = exports.cSame = exports.csame = exports.cAnalyzing = exports.canalyzing = exports.cAnalyzed = exports.canalyzed = exports.cAnalyzes = exports.canalyzes = exports.cAnalyze = exports.canalyze = exports.cPackaging = exports.cpackaging = exports.cPackaged = exports.cpackaged = exports.cPackages = exports.cpackages = exports.cPackage = exports.cpackage = exports.cPacking = exports.cpacking = exports.cPacked = exports.cpacked = exports.cPacks = exports.cpacks = exports.cPack = exports.cpack = exports.cSuccessful = exports.csuccessful = exports.cSuccesses = exports.csuccesses = exports.cSuccess = exports.csuccess = exports.cCopying = exports.ccopying = exports.cCopied = exports.ccopied = exports.cCopies = exports.ccopies = exports.cCopy = exports.ccopy = exports.cCops = exports.ccops = exports.cCop = exports.ccop = exports.cArchiving = exports.carchiving = exports.cArchives = exports.carchives = exports.cArchived = exports.carchived = exports.cArchive = exports.carchive = exports.cChives = exports.cchives = exports.cChive = exports.cchive = exports.cDirectories = exports.cdirectories = exports.cDirectory = exports.cdirectory = exports.cDirectors = exports.cdirectors = exports.cDirecting = exports.cdirecting = exports.cDirector = exports.cdirector = exports.cDirected = exports.cdirected = exports.cDirects = exports.cdirects = exports.cDirect = exports.cdirect = exports.cScanning = exports.cscanning = exports.cScanned = exports.cscanned = exports.cScans = void 0;
exports.cDjibouti = exports.cDenmark = exports.cDemocraticRepublicOfTheCongo = exports.cCzechia = exports.cCyprus = exports.cCuba = exports.cCroatia = exports.cCostaRica = exports.cCongo = exports.cComoros = exports.cColombia = exports.cChina = exports.cChile = exports.cChad = exports.cCentralAfricanRepublic = exports.cCanada = exports.cCameroon = exports.cCambodia = exports.cCaboVerde = exports.cCotedlvoire = exports.cBurundi = exports.cBurkinaFaso = exports.cBulgaria = exports.cBrunei = exports.cBrazil = exports.cBotswana = exports.cBosnia = exports.cBolivia = exports.cBhutan = exports.cBenin = exports.cBelize = exports.cBelgium = exports.cBelarus = exports.cBarbuda = exports.cBarbados = exports.cBangladesh = exports.cBahrain = exports.cBahamas = exports.cAzerbaijan = exports.cAustria = exports.cAustralia = exports.cArmenia = exports.cArgentina = exports.cAntigua = exports.cAngola = exports.cAndorra = exports.cAlgeria = exports.cAlbania = exports.cAfghanistan = exports.cLiver = exports.cliver = exports.cAmerica = exports.cStates = exports.cEmirates = exports.cArab = exports.cUnited = exports.cTabago = exports.cTrinidad = exports.cPapua = exports.cAfrican = exports.cCentral = exports.cRepublic = exports.cDemocratic = exports.cGeneration = exports.cgeneration = exports.cSuch = exports.csuch = exports.cOnly = exports.conly = exports.cMay = exports.cmay = exports.cEntity = exports.centity = exports.cEntries = exports.centries = exports.cEntry = exports.centry = exports.cLeaf = exports.cleaf = exports.cSleeping = exports.csleeping = exports.cSleeped = exports.csleeped = exports.cSleeps = exports.csleeps = exports.cSleep = exports.csleep = exports.cAdjusting = exports.cadjusting = exports.cAdjusted = exports.cadjusted = exports.cAdjusts = exports.cadjusts = exports.cAdjust = exports.cadjust = exports.cJustified = exports.cjustified = exports.cJustice = exports.cjustice = exports.cJust = void 0;
exports.cRwanda = exports.cRussia = exports.cRomania = exports.cQatar = exports.cPrincipe = exports.cPortugal = exports.cPoland = exports.cPhilippines = exports.cPeru = exports.cParaguay = exports.cPapuaNewGuinea = exports.cPanama = exports.cPalestine = exports.cPalau = exports.cPakistan = exports.cOman = exports.cNorway = exports.cNorthMacedonia = exports.cNorthKorea = exports.cNigeria = exports.cNiger = exports.cNicaragua = exports.cNevis = exports.cNewZealand = exports.cNetherlands = exports.cNepal = exports.cNauru = exports.cNamibia = exports.cMyanmar = exports.cMozambique = exports.cMorocco = exports.cMontenegro = exports.cMongolia = exports.cMonaco = exports.cMoldova = exports.cMicronesia = exports.cMexico = exports.cMauritius = exports.cMauritania = exports.cMarshallIslands = exports.cMalta = exports.cMali = exports.cMaldives = exports.cMalaysia = exports.cMalawi = exports.cMadagascar = exports.cLuxembourg = exports.cLithuania = exports.cLiechtenstein = exports.cLibya = exports.cLiberia = exports.cLesotho = exports.cLebanon = exports.cLatvia = exports.cLaos = exports.cKyrgyzstan = exports.cKuwait = exports.cKiribati = exports.cKenya = exports.cKazakhstan = exports.cJordan = exports.cJapan = exports.cJamaica = exports.cItaly = exports.cIsrael = exports.cIreland = exports.cIraq = exports.cIran = exports.cIndonesia = exports.cIndia = exports.cIceland = exports.cHungary = exports.cHonduras = exports.cHolySee = exports.cHerzegovina = exports.cHaiti = exports.cGuyana = exports.cGuineaBissau = exports.cGuinea = exports.cGuatemala = exports.cGrenada = exports.cGreece = exports.cGhana = exports.cGermany = exports.cGeorgia = exports.cGambia = exports.cGabon = exports.cFrance = exports.cFinland = exports.cFiji = exports.cEthiopia = exports.cEswatini = exports.cEstonia = exports.cEritrea = exports.cEquatorialGuinea = exports.cElSalvador = exports.cEgypt = exports.cEcuador = exports.cDominicanRepublic = exports.cDominica = void 0;
exports.cShimmer = exports.cBittersweet = exports.cSweet = exports.csweet = exports.cBitter = exports.cDazzled = exports.cBeau = exports.cBattleship = exports.cBarn = exports.cBarbie = exports.cMania = exports.cBanana = exports.cMiller = exports.cBaker = exports.cPowder = exports.cEyes = exports.cBaby = exports.cAtomic = exports.cArylide = exports.cArmy = exports.cArctic = exports.cApricot = exports.cApple = exports.cBronze = exports.cBrass = exports.cAntique = exports.cAndroid = exports.cAmaranth = exports.cAlloy = exports.cAlice = exports.cAlabaster = exports.cSuperiority = exports.cAir = exports.cAcid = exports.cAbsolute = exports.cSpanish = exports.cRussian = exports.cPortuguese = exports.cPolish = exports.cMiscellaneous = exports.cKorean = exports.cJapanese = exports.cItalian = exports.cHungarian = exports.cFrench = exports.cEnglish = exports.cCzech = exports.cChineseTraditional = exports.cChineseSimplified = exports.cChinese = exports.cZimbabwe = exports.cZambia = exports.cYemen = exports.cVietnam = exports.cVenezuela = exports.cVanuatu = exports.cUzbekistan = exports.cUruguay = exports.cUnitedStatesOfAmerica = exports.cUnitedKingdom = exports.cUnitedArabEmirates = exports.cUkraine = exports.cUganda = exports.cTuvalu = exports.cTurkmenistan = exports.cTurkey = exports.cTunisia = exports.cTrinidadAndTabago = exports.cTonga = exports.cTogo = exports.cTimorLeste = exports.cThailand = exports.cTanzania = exports.cTajikistan = exports.cSyria = exports.cSwitzerland = exports.cSweden = exports.cSuriname = exports.cSudan = exports.cSriLanka = exports.cSpain = exports.cSouthSudan = exports.cSouthKorea = exports.cSouthAfrica = exports.cSomalia = exports.cSolomonIslands = exports.cSlovenia = exports.cSlovakia = exports.cSingapore = exports.cSierraLeone = exports.cSeychelles = exports.cSerbia = exports.cSenegal = exports.cSaudiArabia = exports.cSaoTome = exports.cSanMarino = exports.cSomoa = exports.cSaintVincent = exports.cSaintLucia = exports.cSaintKitts = void 0;
exports.cFluorescent = exports.cFloral = exports.cEngine = exports.cFire = exports.cFiery = exports.cFern = exports.cFashion = exports.cFalu = exports.cEton = exports.cEerie = exports.cEarth = exports.cDutch = exports.cDuke = exports.cDogwood = exports.cDodger = exports.cDim = exports.cSparkle = exports.cCerise = exports.cDavys = exports.cDartmouth = exports.cSpring = exports.cSlate = exports.cSky = exports.cPastel = exports.cMoss = exports.cHorses = exports.cHorse = exports.cKhaki = exports.cElectric = exports.cByzantium = exports.cDark = exports.cCyber = exports.cCotton = exports.cCoyote = exports.cLatte = exports.cCosmic = exports.cSilk = exports.csilk = exports.cFlowers = exports.cflowers = exports.cFlower = exports.cflower = exports.cCool = exports.cColumbia = exports.cCoffee = exports.cCocoa = exports.cCinnamon = exports.cChrome = exports.cChestnut = exports.cBlossom = exports.cCherry = exports.cChartreuse = exports.cCharm = exports.cCharleston = exports.cCeltic = exports.cCeladon = exports.cChest = exports.cCedar = exports.cCastleton = exports.cCarrot = exports.cCarnation = exports.cCaribbean = exports.cMortuum = exports.cCaput = exports.cCameo = exports.cCambridge = exports.cCafe = exports.cCadet = exports.cBurnt = exports.cBurnished = exports.cBurly = exports.cBud = exports.cBrunswick = exports.cSugar = exports.cRacing = exports.cBrilliant = exports.cBright = exports.cBricks = exports.cbricks = exports.cBrick = exports.cbrick = exports.cBottle = exports.cYonder = exports.cJeans = exports.cWheels = exports.cwheels = exports.cWheel = exports.cwheel = exports.cBell = exports.cPigment = exports.cPantone = exports.cMunsell = exports.cCrayola = exports.cBlood = exports.cBlizzard = exports.cBlast = exports.cBlanched = exports.cShadows = exports.cChocolate = exports.cBean = void 0;
exports.cMount = exports.cMeadow = exports.cMorning = exports.cMisty = exports.cMinion = exports.cMimi = exports.cMikado = exports.cMiddle = exports.cMexican = exports.cSunburst = exports.cSuns = exports.csuns = exports.cSun = exports.csun = exports.cSeaweed = exports.cWeeded = exports.cweeded = exports.cWeeds = exports.cweeds = exports.cWeed = exports.cweed = exports.cMellow = exports.cMedium = exports.cMaya = exports.cMaximum = exports.cMajorelle = exports.cMagic = exports.cHaze = exports.cMadder = exports.cCheese = exports.cMacaroni = exports.cOrgan = exports.cDogs = exports.cBoy = exports.cLittle = exports.cLiseran = exports.cLincoln = exports.cLuster = exports.cSteel = exports.cCoral = exports.cLight = exports.cMeringue = exports.cGlacier = exports.cCurry = exports.cLawn = exports.cLaurel = exports.cLaser = exports.cLazuli = exports.cLapis = exports.cLanguid = exports.cKombu = exports.cKelly = exports.cJam = exports.cjam = exports.cBerry = exports.cberry = exports.cJazz = exports.cjazz = exports.cCarmine = exports.cBridge = exports.cEngineering = exports.cAerospace = exports.cInternational = exports.cNationals = exports.cnationals = exports.cNational = exports.cnational = exports.cDye = exports.cIndian = exports.cIndependence = exports.cworm = exports.cImperial = exports.cIlluminating = exports.cIce = exports.cHunter = exports.cHot = exports.cHookers = exports.cHonolulu = exports.cdew = exports.cHoney = exports.cHollywood = exports.cWave = exports.cHeat = exports.cHarvest = exports.cGun = exports.cLizard = exports.cSmith = exports.cGranny = exports.cGranite = exports.cPoppy = exports.cFusion = exports.cMetallic = exports.cMetal = exports.cGlossy = exports.cGhost = exports.cWuzzy = exports.cFuzzy = exports.cbite = exports.cFrost = exports.cForest = void 0;
exports.cBlaze = exports.cSafety = exports.cSaddle = exports.cState = exports.cSacramento = exports.cRubine = exports.cRubbing = exports.crubbing = exports.cRubbed = exports.crubbed = exports.cRubs = exports.crubs = exports.cRub = exports.crub = exports.cRoyal = exports.cRosy = exports.cCorsa = exports.cRosso = exports.cwood = exports.cVale = exports.cQuartz = exports.cEbony = exports.cDust = exports.cBonbon = exports.cRoman = exports.cRocket = exports.cEgg = exports.cRobin = exports.cRifle = exports.cRich = exports.cResolution = exports.cSalsa = exports.cRebecca = exports.cRazzmic = exports.cDazzle = exports.cRazzle = exports.cGlace = exports.cRaisin = exports.cRadical = exports.cQuinacridone = exports.cQuick = exports.cQueen = exports.cPizzazz = exports.cMajesty = exports.cMountain = exports.cPullman = exports.cPsychedelic = exports.cPrussian = exports.cPrinceton = exports.cPortland = exports.cPower = exports.cPomp = exports.cPolished = exports.cpolished = exports.cpolish = exports.cPlump = exports.cSherbet = exports.cFlamingo = exports.cTree = exports.cPine = exports.cPiggy = exports.cPictorial = exports.cPicotee = exports.cPhthalo = exports.cPewter = exports.cPersian = exports.cLake = exports.cGeranium = exports.cPermanent = exports.cPearly = exports.cPuff = exports.cPaynes = exports.cParis = exports.cParadise = exports.cWhip = exports.cPapaya = exports.cVeronese = exports.cPaolo = exports.cPansy = exports.cPale = exports.cPalatinate = exports.cPacific = exports.cOxford = exports.cOutrageous = exports.cOuter = exports.cSoda = exports.cPeel = exports.cOpera = exports.cLace = exports.cOcean = exports.cPhoto = exports.cYork = exports.cNeon = exports.cNavy = exports.cNavajo = exports.cNaples = exports.cNadeshiko = exports.cMyrtle = exports.cMulberry = exports.cbatten = void 0;
exports.cYale = exports.cDream = exports.cWinter = exports.cDregs = exports.cWindsor = exports.cWild = exports.cWarm = exports.cVivid = exports.cVenetian = exports.cVegas = exports.cDyke = exports.cVan = exports.cvan = exports.cUranian = exports.cUpsdell = exports.cNations = exports.cUnbleached = exports.cUltra = exports.cTyrian = exports.cTwilight = exports.cTumble = exports.cTufts = exports.cTrypan = exports.cRain = exports.cTropical = exports.cwolf = exports.cTimber = exports.cTiffany = exports.cTickle = exports.cThulian = exports.cCotta = exports.cTerra = exports.cTea = exports.cTart = exports.cTango = exports.cSuper = exports.cglow = exports.cGrain = exports.cStil = exports.cStar = exports.cBistre = exports.cSonic = exports.cSmoky = exports.cSlimy = exports.cSunrise = exports.cSizzling = exports.cChalice = exports.cShocking = exports.cShiny = exports.cBlush = exports.cShimmering = exports.cShamrock = exports.cSelective = exports.cshell = exports.cSeal = exports.cScreamin = exports.cBus = exports.cSchool = exports.cSchauss = exports.cSheen = exports.cSatin = exports.cSap = exports.csap = exports.cSandy = exports.cPatricks = void 0;

var b = _interopRequireWildcard(require("./basic.constants"));

var p = _interopRequireWildcard(require("./phonics.constants"));

var n = _interopRequireWildcard(require("./numeric.constants"));

var g = _interopRequireWildcard(require("./generic.constants"));

var u = _interopRequireWildcard(require("./units.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file word.constants.js
 * @module word-constants
 * @description Contains many re-usable word constants.
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:numeric-constants
 * @requires module:generic-constants
 * @requires module:units-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// Miscelaneious Words
var c1a1d = 'a' + 'd'; // ad // 'ca' & 'cd' is some how a reserved word.

exports.c1a1d = c1a1d;
var c3d = n.c3 + b.cd; // 3d

exports.c3d = c3d;
var c3D = n.c3 + b.cD; // 3D

exports.c3D = c3D;
var cout = b.co + b.cut; // out

exports.cout = cout;
var cOut = b.cO + b.cut; // Out

exports.cOut = cOut;
var cLog = b.cL + b.cog; // Log

exports.cLog = cLog;
var clog = b.cl + b.cog; // log

exports.clog = clog;
var cLogs = cLog + b.cs; // Logs

exports.cLogs = cLogs;
var clogs = clog + b.cs; // logs

exports.clogs = clogs;
var ckey = b.ck + b.cey; // key

exports.ckey = ckey;
var cKey = b.cK + b.cey; // Key

exports.cKey = cKey;
var ckeys = ckey + b.cs; // keys

exports.ckeys = ckeys;
var cKeys = cKey + b.cs; // Keys

exports.cKeys = cKeys;
var ckeyed = ckey + b.ced; // keyed

exports.ckeyed = ckeyed;
var cKeyed = cKey + b.ced; // Keyed

exports.cKeyed = cKeyed;
var ckeying = ckey + p.cing; // keying

exports.ckeying = ckeying;
var cKeying = cKey + p.cing; // Keying

exports.cKeying = cKeying;
var cnode = b.cn + p.code; // node

exports.cnode = cnode;
var cNode = b.cN + p.code; // Node

exports.cNode = cNode;
var curl = b.cur + b.cl; // url

exports.curl = curl;
var cURL = b.cUR + b.cL; // URL

exports.cURL = cURL;
var cnth = b.cn + b.cth; // nth

exports.cnth = cnth;
var cNth = b.cN + b.cth; // Nth

exports.cNth = cNth;
var cregEx = p.creg + b.cEx; // regEx

exports.cregEx = cregEx;
var cRegEx = p.cReg + b.cEx; // RegEx

exports.cRegEx = cRegEx;
var cflag = b.cfl + b.cag; // flag

exports.cflag = cflag;
var cFlag = b.cFl + b.cag; // Flag

exports.cFlag = cFlag;
var cflags = cflag + b.cs; // flags

exports.cflags = cflags;
var cFlags = cFlag + b.cs; // Flags
// Data Types

exports.cFlags = cFlags;
var cstring = b.cs + p.ctring; // string

exports.cstring = cstring;
var cString = b.cS + p.ctring; // String

exports.cString = cString;
var cstrings = cstring + b.cs; // strings

exports.cstrings = cstrings;
var cStrings = cString + b.cs; // Strings

exports.cStrings = cStrings;
var cinteger = b.ci + p.cnteger; // integer

exports.cinteger = cinteger;
var cInteger = b.cI + p.cnteger; // Integer

exports.cInteger = cInteger;
var cintegers = cinteger + b.cs; // integers

exports.cintegers = cintegers;
var cIntegers = cInteger + b.cs; // Integers

exports.cIntegers = cIntegers;
var cfloat = b.cf + p.cloat; // float

exports.cfloat = cfloat;
var cFloat = b.cF + p.cloat; // Float

exports.cFloat = cFloat;
var cfloats = cfloat + b.cs; // floats

exports.cfloats = cfloats;
var cFloats = cFloat + b.cs; // Floats

exports.cFloats = cFloats;
var clong = b.cl + p.cong; // long

exports.clong = clong;
var cLong = b.cL + p.cong; // Long

exports.cLong = cLong;
var clongs = clong + b.cs; // longs

exports.clongs = clongs;
var cLongs = cLong + b.cs; // Longs

exports.cLongs = cLongs;
var clonger = clong + b.cer; // longer

exports.clonger = clonger;
var cLonger = cLong + b.cer; // Longer

exports.cLonger = cLonger;
var clongest = clong + p.cest; // longest

exports.clongest = clongest;
var cLongest = cLong + p.cest; // Longest

exports.cLongest = cLongest;
var cshort = b.cs + p.chort; // short

exports.cshort = cshort;
var cShort = b.cS + p.chort; // Short

exports.cShort = cShort;
var cshorts = cshort + b.cs; // shorts

exports.cshorts = cshorts;
var cShorts = cShort + b.cs; // Shorts

exports.cShorts = cShorts;
var cshorter = cshort + b.cer; // shorter

exports.cshorter = cshorter;
var cShorter = cShort + b.cer; // Shorter

exports.cShorter = cShorter;
var cshortest = cshort + p.cest; // shortest

exports.cshortest = cshortest;
var cShortest = cShort + p.cest; // Shortest

exports.cShortest = cShortest;
var cdouble = b.cd + p.couble; // double

exports.cdouble = cdouble;
var cDouble = b.cD + p.couble; // Double

exports.cDouble = cDouble;
var cdoubles = cdouble + b.cs; // doubles

exports.cdoubles = cdoubles;
var cDoubles = cDouble + b.cs; // Doubles

exports.cDoubles = cDoubles;
var cchar = b.cch + b.car; // char

exports.cchar = cchar;
var cChar = b.cCh + b.car; // Char

exports.cChar = cChar;
var cchars = cchar + b.cs; // chars

exports.cchars = cchars;
var cChars = cChar + b.cs; // Chars

exports.cChars = cChars;
var cboolean = b.cb + p.coolean; // boolean

exports.cboolean = cboolean;
var cBoolean = b.cB + p.coolean; // Boolean

exports.cBoolean = cBoolean;
var cbooleans = cboolean + b.cs; // booleans

exports.cbooleans = cbooleans;
var cBooleans = cBoolean + b.cs; // Booleans

exports.cBooleans = cBooleans;
var cobject = b.co + p.cbject; // object

exports.cobject = cobject;
var cObject = b.cO + p.cbject; // Object

exports.cObject = cObject;
var cobjects = cobject + b.cs; // objects

exports.cobjects = cobjects;
var cObjects = cObject + b.cs; // Objects
// General Use Words

exports.cObjects = cObjects;
var csubstring = p.csub + cstring; // substring

exports.csubstring = csubstring;
var csubString = p.csub + cString; // subString

exports.csubString = csubString;
var cSubString = p.cSub + cString; // SubString

exports.cSubString = cSubString;
var cwind = b.cw + p.cind; // wind

exports.cwind = cwind;
var cWind = b.cW + p.cind; // Wind

exports.cWind = cWind;
var cwindow = cwind + b.cow; // window

exports.cwindow = cwindow;
var cWindow = cWind + b.cow; // Window

exports.cWindow = cWindow;
var cwindows = cwindow + b.cs; // windows

exports.cwindows = cwindows;
var cWindows = cWindow + b.cs; // Windows

exports.cWindows = cWindows;
var clinux = p.clin + b.cux; // linux

exports.clinux = clinux;
var cLinux = p.cLin + b.cux; // Linux

exports.cLinux = cLinux;
var cword = b.cw + p.cord; // word

exports.cword = cword;
var cWord = b.cW + p.cord; // Word

exports.cWord = cWord;
var cwords = cword + b.cs; // words

exports.cwords = cwords;
var cWords = cWord + b.cs; // Words

exports.cWords = cWords;
var coops = b.co + p.cops; // oops

exports.coops = coops;
var cOops = b.cO + p.cops; // Oops

exports.cOops = cOops;
var cOOPS = b.cO + p.cOPS; // OOPS

exports.cOOPS = cOOPS;
var clet = b.cle + b.ct; // let

exports.clet = clet;
var cLet = b.cLe + b.ct; // Let

exports.cLet = cLet;
var clets = clet + b.cs; // lets

exports.clets = clets;
var cLets = cLet + b.cs; // Lets

exports.cLets = cLets;
var cfig = b.cf + b.cig; // fig

exports.cfig = cfig;
var cFig = b.cF + b.cig; // Fig

exports.cFig = cFig;
var cfiglet = cfig + clet; // figlet

exports.cfiglet = cfiglet;
var cFiglet = cFig + clet; // Figlet

exports.cFiglet = cFiglet;
var cconfig = p.ccon + cfig; // config

exports.cconfig = cconfig;
var cConfig = p.cCon + cfig; // Config

exports.cConfig = cConfig;
var cconfiguration = cconfig + b.cur + p.cation; // configuration

exports.cconfiguration = cconfiguration;
var cConfiguration = cConfig + b.cur + p.cation; // Configuration

exports.cConfiguration = cConfiguration;
var cconfigurations = cconfiguration + b.cs; // configurations

exports.cconfigurations = cconfigurations;
var cConfigurations = cConfiguration + b.cs; // Configurations

exports.cConfigurations = cConfigurations;
var cconfigured = cconfig + p.cured; // configured

exports.cconfigured = cconfigured;
var cConfigured = cConfig + p.cured; // Configured

exports.cConfigured = cConfigured;
var cconfiguring = cconfig + b.cur + p.cing; // configuring

exports.cconfiguring = cconfiguring;
var cConfiguring = cConfig + b.cur + p.cing; // Configuring

exports.cConfiguring = cConfiguring;
var cempty = b.cem + b.cpt + b.cy; // empty

exports.cempty = cempty;
var cEmpty = b.cEm + b.cpt + b.cy; // Empty

exports.cEmpty = cEmpty;
var cfull = b.cf + p.cull; // full

exports.cfull = cfull;
var cFull = b.cF + p.cull; // Full

exports.cFull = cFull;
var cfully = cfull + b.cy; // fully

exports.cfully = cfully;
var cFully = cFull + b.cy; // Fully

exports.cFully = cFully;
var ccreate = b.cc + p.create; // create

exports.ccreate = ccreate;
var cCreate = b.cC + p.create; // Create

exports.cCreate = cCreate;
var cSubmit = b.cSu + b.cbm + b.cit; // Submit

exports.cSubmit = cSubmit;
var c_add = c1a1d + b.cd; // add

exports.c_add = c_add;
var cAdd = b.cAd + b.cd; // Add

exports.cAdd = cAdd;
var cADD = b.cAD + b.cD; // ADD

exports.cADD = cADD;
var cadded = c_add + b.ced; // added

exports.cadded = cadded;
var cAdded = cAdd + b.ced; // Added

exports.cAdded = cAdded;
var cadding = c_add + p.cing; // adding

exports.cadding = cadding;
var cAdding = cAdd + p.cing; // Adding

exports.cAdding = cAdding;
var cadditional = c_add + p.cition + b.cal; // additional

exports.cadditional = cadditional;
var cAdditional = cAdd + p.cition + b.cal; // Additional

exports.cAdditional = cAdditional;
var cADDITIONAL = cADD + p.cITION + b.cAL; // ADDITIONAL

exports.cADDITIONAL = cADDITIONAL;
var cadditionals = cadditional + b.cs; // additionals

exports.cadditionals = cadditionals;
var cAdditionals = cAdditional + b.cs; // Additionals

exports.cAdditionals = cAdditionals;
var cpen = b.cpe + b.cn; // pen

exports.cpen = cpen;
var cPen = b.cPe + b.cn; // Pen

exports.cPen = cPen;
var cpens = cpen + b.cs; // pens

exports.cpens = cpens;
var cPens = cPen + b.cs; // Pens

exports.cPens = cPens;
var cclose = b.ccl + p.cose; // close

exports.cclose = cclose;
var cClose = b.cCl + p.cose; // Close

exports.cClose = cClose;
var cclosed = cclose + b.cd; // closed

exports.cclosed = cclosed;
var cClosed = cClose + b.cd; // Closed

exports.cClosed = cClosed;
var cclosing = b.ccl + b.cos + p.cing; // closing

exports.cclosing = cclosing;
var cClosing = b.cCl + b.cos + p.cing; // Closing

exports.cClosing = cClosing;
var copen = b.co + cpen; // open

exports.copen = copen;
var cOpen = b.cO + cpen; // Open

exports.cOpen = cOpen;
var copens = copen + b.cs; // opens

exports.copens = copens;
var cOpens = cOpen + b.cs; // Opens

exports.cOpens = cOpens;
var copened = copen + b.ced; // opened

exports.copened = copened;
var cOpened = cOpen + b.ced; // Opened

exports.cOpened = cOpened;
var copening = copen + p.cing; // opening

exports.copening = copening;
var cOpening = cOpen + p.cing; // Opening

exports.cOpening = cOpening;
var cUpdate = b.cUp + p.cdate; // Update

exports.cUpdate = cUpdate;
var cEdit = b.cEd + b.cit; // Edit

exports.cEdit = cEdit;
var cdelete = b.cd + p.celete; // delete

exports.cdelete = cdelete;
var cDelete = b.cD + p.celete; // Delete

exports.cDelete = cDelete;
var cdeletion = p.cdel + b.ce + p.ction; // deletion

exports.cdeletion = cdeletion;
var cDeletion = p.cDel + b.ce + p.ction; // Deletion

exports.cDeletion = cDeletion;
var cinsert = b.cin + p.csert; // insert

exports.cinsert = cinsert;
var cInsert = b.cIn + p.csert; // Insert

exports.cInsert = cInsert;
var cinsertion = cinsert + p.cion; // insertion

exports.cinsertion = cinsertion;
var cInsertion = cInsert + p.cion; // Insertion

exports.cInsertion = cInsertion;
var csubstitute = p.csub + b.cs + p.ctit + p.cute; // substitute

exports.csubstitute = csubstitute;
var cSubstitute = p.cSub + b.cs + p.ctit + p.cute; // Substitute

exports.cSubstitute = cSubstitute;
var csubstitution = p.csub + b.cs + p.ctit + b.cu + p.ction; // substitution

exports.csubstitution = csubstitution;
var cSubstitution = p.cSub + b.cs + p.ctit + b.cu + p.ction; // Substitution

exports.cSubstitution = cSubstitution;
var call = p.call; // all

exports.call = call;
var cAll = p.cAll; // All

exports.cAll = cAll;
var cat = b.ca + b.ct; // at

exports.cat = cat;
var cAt = b.cA + b.ct; // At // Not to be confused with the b.cAt = '@'!!!

exports.cAt = cAt;
var cselect = b.cse + b.cle + b.cct; // select

exports.cselect = cselect;
var cSelect = b.cSe + b.cle + b.cct; // Select

exports.cSelect = cSelect;
var ccan = b.cca + b.cn; // can

exports.ccan = ccan;
var cCan = b.cCa + b.cn; // Can

exports.cCan = cCan;
var ccancel = ccan + p.ccel; // cancel

exports.ccancel = ccancel;
var cCancel = cCan + p.ccel; // Cancel

exports.cCancel = cCancel;
var cconfirm = b.cco + b.cnf + b.cir + b.cm; // confirm

exports.cconfirm = cconfirm;
var cConfirm = b.cCo + b.cnf + b.cir + b.cm; // Confirm

exports.cConfirm = cConfirm;
var ccount = b.cco + p.cunt; // count

exports.ccount = ccount;
var cCount = b.cCo + p.cunt; // Count

exports.cCount = cCount;
var ccounter = ccount + b.cer; // counter

exports.ccounter = ccounter;
var cCounter = cCount + b.cer; // Counter

exports.cCounter = cCounter;
var cAccount = b.cAc + ccount; // Account

exports.cAccount = cAccount;
var cHamburger = b.cHa + b.cmb + b.cur + b.cge + b.cr; // Hamburger

exports.cHamburger = cHamburger;
var cMe = b.cM + b.ce; // Me

exports.cMe = cMe;
var cMenu = cMe + b.cnu; // Menu

exports.cMenu = cMenu;
var cwith = b.cw + p.cith; // with

exports.cwith = cwith;
var cWith = b.cW + p.cith; // With

exports.cWith = cWith;
var cwithout = cwith + cout; // without

exports.cwithout = cwithout;
var cWithout = cWith + cout; // Without

exports.cWithout = cWithout;
var cdetail = b.cde + b.cta + b.cil; // detail

exports.cdetail = cdetail;
var cDetail = b.cDe + b.cta + b.cil; // Detail

exports.cDetail = cDetail;
var cdetails = cdetail + b.cs; // details

exports.cdetails = cdetails;
var cDetails = cDetail + b.cs; // Details

exports.cDetails = cDetails;
var cfront = b.cfr + b.con + b.ct; // front

exports.cfront = cfront;
var cFront = b.cFr + b.con + b.ct; // Front

exports.cFront = cFront;
var cback = b.cba + b.cck; // back

exports.cback = cback;
var cBack = b.cBa + b.cck; // Back

exports.cBack = cBack;
var cleft = b.cle + b.cft; // left

exports.cleft = cleft;
var cLeft = b.cLe + b.cft; // Left

exports.cLeft = cLeft;
var cright = b.cri + b.cgh + b.ct; // right

exports.cright = cright;
var cRight = b.cRi + b.cgh + b.ct; // Right

exports.cRight = cRight;
var cTo = b.cTo; // To

exports.cTo = cTo;
var ctop = b.cto + b.cp; // top

exports.ctop = ctop;
var cTop = cTo + b.cp; // Top

exports.cTop = cTop;
var cbottom = b.cbo + b.ctt + b.com; // bottom

exports.cbottom = cbottom;
var cBottom = b.cBo + b.ctt + b.com; // Bottom

exports.cBottom = cBottom;
var cbegin = b.cbe + b.cgi + b.cn; // begin

exports.cbegin = cbegin;
var cBegin = b.cBe + b.cgi + b.cn; // Begin

exports.cBegin = cBegin;
var cBEGIN = b.cBE + b.cGI + b.cN; // BEGIN

exports.cBEGIN = cBEGIN;
var cbeginning = cbegin + b.cn + p.cing; // beginning

exports.cbeginning = cbeginning;
var cBeginning = cBegin + b.cn + p.cing; // Beginning

exports.cBeginning = cBeginning;
var cend = b.cen + b.cd; // end

exports.cend = cend;
var cEnd = b.cEn + b.cd; // End

exports.cEnd = cEnd;
var cEND = b.cEN + b.cD; // END

exports.cEND = cEND;
var cending = cend + p.cing; // ending

exports.cending = cending;
var cEnding = cEnd + p.cing; // Ending

exports.cEnding = cEnding;
var cthe = b.cth + b.ce; // the

exports.cthe = cthe;
var cThe = b.cTh + b.ce; // The

exports.cThe = cThe;
var citem = b.cit + b.cem; // item

exports.citem = citem;
var cItem = b.cIt + b.cem; // Item

exports.cItem = cItem;
var citems = citem + b.cs; // items

exports.citems = citems;
var cItems = cItem + b.cs; // Items

exports.cItems = cItems;
var clist = b.cli + b.cst; // list

exports.clist = clist;
var cList = b.cLi + b.cst; // List

exports.cList = cList;
var clists = clist + b.cs; // lists

exports.clists = clists;
var cLists = cList + b.cs; // Lists

exports.cLists = cLists;
var clisted = clist + b.ced; // listed

exports.clisted = clisted;
var cListed = cList + b.ced; // Listed

exports.cListed = cListed;
var cshare = b.cs + p.chare; // share

exports.cshare = cshare;
var cShare = b.cS + p.chare; // Share

exports.cShare = cShare;
var cShares = cShare + b.cs; // Shares

exports.cShares = cShares;
var cshares = cshare + b.cs; // shares

exports.cshares = cshares;
var cshared = cshare + b.cd; // shared

exports.cshared = cshared;
var cShared = cShare + b.cd; // Shared

exports.cShared = cShared;
var cUnShared = b.cUn + cShared; // UnShared

exports.cUnShared = cUnShared;
var cUnshared = b.cUn + cshared; // Unshared

exports.cUnshared = cUnshared;
var cUnshare = b.cUn + cshare; // Unshare

exports.cUnshare = cUnshare;
var cUnShare = b.cUn + cShare; // UnShare

exports.cUnShare = cUnShare;
var cview = b.cv + p.ciew; // view

exports.cview = cview;
var cView = b.cV + p.ciew; // View

exports.cView = cView;
var cNew = b.cNe + b.cw; // New

exports.cNew = cNew;
var cload = b.clo + 'ad'; // b.cad; // load // NOTE: Apparently 'cad' is also a reserved word.

exports.cload = cload;
var cLoad = b.cLo + 'ad'; // b.cad; // Load // NOTE: Apparently 'cad' is also a reserved word.

exports.cLoad = cLoad;
var cloads = cload + b.cs; // loads

exports.cloads = cloads;
var cLoads = cLoad + b.cs; // Loads

exports.cLoads = cLoads;
var cloaded = cload + b.ced; // loaded

exports.cloaded = cloaded;
var cLoaded = cLoad + b.ced; // Loaded

exports.cLoaded = cLoaded;
var cloading = cload + p.cing; // loading

exports.cloading = cloading;
var cLoading = cLoad + p.cing; // Loading

exports.cLoading = cLoading;
var cclick = b.cc + p.click; // click

exports.cclick = cclick;
var cClick = b.cC + p.click; // Click

exports.cClick = cClick;
var cpress = b.cp + p.cress; // press

exports.cpress = cpress;
var cPress = b.cP + p.cress; // Press

exports.cPress = cPress;
var cpresses = cpress + b.ces; // presses

exports.cpresses = cpresses;
var cPresses = cPress + b.ces; // Presses

exports.cPresses = cPresses;
var cpressed = cpress + b.ced; // pressed

exports.cpressed = cpressed;
var cPressed = cPress + b.ced; // Pressed

exports.cPressed = cPressed;
var cpressing = cpress + p.cing; // pressing

exports.cpressing = cpressing;
var cPressing = cPress + p.cing; // Pressing

exports.cPressing = cPressing;
var cpressKey = cpress + cKey; // pressKey

exports.cpressKey = cpressKey;
var cPressKey = cPress + cKey; // PressKey

exports.cPressKey = cPressKey;
var cexpect = p.cexp + p.cect; // expect

exports.cexpect = cexpect;
var cExpect = p.cExp + p.cect; // Expect

exports.cExpect = cExpect;
var cexpects = cexpect + b.cs; // expects

exports.cexpects = cexpects;
var cExpects = cExpect + b.cs; // Expects

exports.cExpects = cExpects;
var cexpected = cexpect + b.ced; // expected

exports.cexpected = cexpected;
var cExpected = cExpect + b.ced; // Expected

exports.cExpected = cExpected;
var cexpecting = cexpect + p.cing; // expecting

exports.cexpecting = cexpecting;
var cExpecting = cExpect + p.cing; // Expecting

exports.cExpecting = cExpecting;
var cnavigate = b.cn + p.cavigate; // navigate

exports.cnavigate = cnavigate;
var cNavigate = b.cN + p.cavigate; // Navigate

exports.cNavigate = cNavigate;
var cSave = b.cSa + b.cve; // Save

exports.cSave = cSave;
var cDownload = b.cDo + b.cwn + b.clo + 'ad'; // Download

exports.cDownload = cDownload;
var cNegative = b.cNe + b.cga + p.ctive; // Negative

exports.cNegative = cNegative;
var cPositive = b.cPo + b.csi + p.ctive; // Positive

exports.cPositive = cPositive;
var cEntire = b.cEn + b.cti + b.cre; // Entire

exports.cEntire = cEntire;
var cinfo = b.cin + b.cfo; // info

exports.cinfo = cinfo;
var cInfo = b.cIn + b.cfo; // Info

exports.cInfo = cInfo;
var cLink = b.cLi + b.cnk; // Link

exports.cLink = cLink;
var cLabel = b.cLa + b.cbe + b.cl; // Label

exports.cLabel = cLabel;
var cField = b.cFi + b.cel + b.cd; // Field

exports.cField = cField;
var ctype = b.ct + p.cype; // type

exports.ctype = ctype;
var cType = b.cT + p.cype; // Type

exports.cType = cType;
var cTypes = cType + b.cs; // Types

exports.cTypes = cTypes;
var cvalid = b.cv + p.calid; // valid

exports.cvalid = cvalid;
var cValid = b.cV + p.calid; // Valid

exports.cValid = cValid;
var cVALID = b.cV + p.cALID; // VALID

exports.cVALID = cVALID;
var cvalidation = cvalid + b.ca + p.ction; // validation

exports.cvalidation = cvalidation;
var cValidation = cValid + b.ca + p.ction; // Validation

exports.cValidation = cValidation;
var cvalidations = cvalidation + b.cs; // validations

exports.cvalidations = cvalidations;
var cValidations = cValidation + b.cs; // Validations

exports.cValidations = cValidations;
var cvalidate = b.cva + b.cli + p.cdate; // validate

exports.cvalidate = cvalidate;
var cValidate = b.cVa + b.cli + p.cdate; // Validate

exports.cValidate = cValidate;
var cinvalid = b.cin + cvalid; // invalid

exports.cinvalid = cinvalid;
var cInvalid = b.cIn + cvalid; // Invalid

exports.cInvalid = cInvalid;
var cINVALID = b.cIN + cVALID; // INVALID

exports.cINVALID = cINVALID;
var cbug = b.cbu + b.cg; // bug

exports.cbug = cbug;
var cdebug = b.cde + cbug; // debug

exports.cdebug = cdebug;
var cDebug = b.cDe + cbug; // Debug

exports.cDebug = cDebug;
var cpage = b.cp + p.cage; // page

exports.cpage = cpage;
var cPage = b.cP + p.cage; // Page

exports.cPage = cPage;
var cpages = cpage + b.cs; // pages

exports.cpages = cpages;
var cPages = cPage + b.cs; // Pages

exports.cPages = cPages;
var cmessage = b.cme + b.css + p.cage; // message

exports.cmessage = cmessage;
var cMessage = cMe + b.css + p.cage; // Message

exports.cMessage = cMessage;
var cmessages = cmessage + b.cs; // messages

exports.cmessages = cmessages;
var cMessages = cMessage + b.cs; // Messages

exports.cMessages = cMessages;
var cScript = b.cSc + b.cri + b.cpt; // Script

exports.cScript = cScript;
var cScripts = cScript + b.cs; // Scripts

exports.cScripts = cScripts;
var ckeyword = ckey + cword; // keyword

exports.ckeyword = ckeyword;
var cKeyword = cKey + cword; // Keyword

exports.cKeyword = cKeyword;
var ckeywords = ckeyword + b.cs; // keywords

exports.ckeywords = ckeywords;
var cKeywords = cKeyword + b.cs; // Keywords

exports.cKeywords = cKeywords;
var cdata = b.cd + p.cata; // data

exports.cdata = cdata;
var cData = b.cD + p.cata; // Data

exports.cData = cData;
var cDATA = b.cD + p.cATA; // DATA

exports.cDATA = cDATA;
var cresult = p.cres + p.cult; // result

exports.cresult = cresult;
var cResult = p.cRes + p.cult; // Result

exports.cResult = cResult;
var cresults = cresult + b.cs; // results

exports.cresults = cresults;
var cResults = cResult + b.cs; // Results

exports.cResults = cResults;
var cresulted = cresult + b.ced; // resulted

exports.cresulted = cresulted;
var cResulted = cResult + b.ced; // Resulted

exports.cResulted = cResulted;
var cresulting = cresult + p.cing; // resulting

exports.cresulting = cresulting;
var cResulting = cResult + p.cing; // Resulting

exports.cResulting = cResulting;
var cwork = b.cwo + b.crk; // work

exports.cwork = cwork;
var cWork = b.cWo + b.crk; // Work

exports.cWork = cWork;
var cflow = b.cfl + b.cow; // flow

exports.cflow = cflow;
var cFlow = b.cFl + b.cow; // Flow

exports.cFlow = cFlow;
var cworkflow = cwork + cflow; // workflow

exports.cworkflow = cworkflow;
var cWorkflow = cWork + cflow; // Workflow

exports.cWorkflow = cWorkflow;
var cworkflows = cworkflow + b.cs; // workflows

exports.cworkflows = cworkflows;
var cWorkflows = cWorkflow + b.cs; // Workflows

exports.cWorkflows = cWorkflows;
var ctest = b.ct + p.cest; // test

exports.ctest = ctest;
var cTest = b.cT + p.cest; // Test

exports.cTest = cTest;
var cTEST = b.cTE + b.cST; // TEST

exports.cTEST = cTEST;
var ctests = ctest + b.cs; // tests

exports.ctests = ctests;
var cTests = cTest + b.cs; // Tests

exports.cTests = cTests;
var cTESTS = cTEST + b.cS; // TESTS

exports.cTESTS = cTESTS;
var cStatus = b.cSt + b.cat + b.cus; // Status

exports.cStatus = cStatus;
var cTestStatus = cTest + cStatus; // TestStatus

exports.cTestStatus = cTestStatus;
var cTestStatusMessage = cTest + cStatus + cMessage; // TestStatusMessage

exports.cTestStatusMessage = cTestStatusMessage;
var cTestWorkflow = cTest + cWorkflow; // TestWorkflow

exports.cTestWorkflow = cTestWorkflow;
var cBureau = b.cBu + b.cre + b.cau; // Bureau

exports.cBureau = cBureau;
var cExhaustive = b.cEx + b.cha + b.cus + b.cti + b.cve; // Exhaustive

exports.cExhaustive = cExhaustive;
var cBrowser = b.cBr + b.cow + b.cse + b.cr; // Browser

exports.cBrowser = cBrowser;
var cact = b.cac + b.ct; // act

exports.cact = cact;
var cAct = b.cAc + b.ct; // Act

exports.cAct = cAct;
var caction = cact + p.cion; // action

exports.caction = caction;
var cAction = cAct + p.cion; // Action

exports.cAction = cAction;
var cactions = caction + b.cs; // actions

exports.cactions = cactions;
var cActions = cAction + b.cs; // Actions

exports.cActions = cActions;
var cactual = cact + p.cual; // actual

exports.cactual = cactual;
var cActual = cAct + p.cual; // Actual

exports.cActual = cActual;
var cauto = b.ca + p.cuto; // auto

exports.cauto = cauto;
var cAuto = b.cA + p.cuto; // Auto

exports.cAuto = cAuto;
var cautomation = cauto + p.cmation; // automation

exports.cautomation = cautomation;
var cAutomation = cAuto + p.cmation; // Automation

exports.cAutomation = cAutomation;
var cnumber = b.cn + p.cumber; // number

exports.cnumber = cnumber;
var cNumber = b.cN + p.cumber; // Number

exports.cNumber = cNumber;
var cHost = b.cHo + b.cst; // Host

exports.cHost = cHost;
var cOf = b.cOf; // Of

exports.cOf = cOf;
var crow = b.cro + b.cw; // row

exports.crow = crow;
var cRow = b.cRo + b.cw; // Row

exports.cRow = cRow;
var crows = crow + b.cs; // rows

exports.crows = crows;
var cRows = cRow + b.cs; // Rows

exports.cRows = cRows;
var crowed = crow + b.ced; // rowed

exports.crowed = crowed;
var cRowed = cRow + b.ced; // Rowed

exports.cRowed = cRowed;
var crowing = crow + p.cing; // rowing

exports.crowing = crowing;
var cRowing = cRow + p.cing; // Rowing

exports.cRowing = cRowing;
var crun = b.cru + b.cn; // run

exports.crun = crun;
var cRun = b.cRu + b.cn; // Run

exports.cRun = cRun;
var cruns = crun + b.cs; // runs

exports.cruns = cruns;
var cRuns = cRun + b.cs; // Runs

exports.cRuns = cRuns;
var crunning = crun + b.cn + p.cing; // running

exports.crunning = crunning;
var cRunning = cRun + b.cn + p.cing; // Running

exports.cRunning = cRunning;
var cmaster = p.cmas + p.cter; // master

exports.cmaster = cmaster;
var cMaster = p.cMas + p.cter; // Master

exports.cMaster = cMaster;
var cEnvironment = b.cEn + b.cvi + b.cro + b.cn + p.cment; // Environment

exports.cEnvironment = cEnvironment;
var cname = b.cn + p.came; // name

exports.cname = cname;
var cName = b.cN + p.came; // Name

exports.cName = cName;
var cnames = cname + b.cs; // names

exports.cnames = cnames;
var cNames = cName + b.cs; // Names

exports.cNames = cNames;
var cnamed = cname + b.cd; // named

exports.cnamed = cnamed;
var cNamed = cName + b.cd; // Named

exports.cNamed = cNamed;
var ckeywordName = ckeyword + cName; // keywordName

exports.ckeywordName = ckeywordName;
var cKeywordName = cKeyword + cName; // KeywordName

exports.cKeywordName = cKeywordName;
var cPageScriptName = cPage + cScript + cName; // PageScriptName

exports.cPageScriptName = cPageScriptName;
var cid = b.cid; // id

exports.cid = cid;
var cId = b.cId; // Id

exports.cId = cId;
var cID = b.cID; // ID

exports.cID = cID;
var cmail = b.cma + b.cil; // mail

exports.cmail = cmail;
var cEmail = b.cE + cmail; // Email

exports.cEmail = cEmail;
var cEmails = cEmail + b.cs; // Emails

exports.cEmails = cEmails;
var cReceive = b.cRe + b.cce + b.civ + b.ce; // Receive

exports.cReceive = cReceive;
var cReceived = cReceive + b.cd; // Received

exports.cReceived = cReceived;
var cdate = p.cdate; // date

exports.cdate = cdate;
var cDate = b.cD + p.cate; // Date

exports.cDate = cDate;
var ctime = b.ct + p.cime; // time

exports.ctime = ctime;
var cTime = b.cT + p.cime; // Time

exports.cTime = cTime;
var cruntime = crun + ctime; // runtime

exports.cruntime = cruntime;
var cRuntime = cRun + ctime; // Runtime

exports.cRuntime = cRuntime;
var cRunTime = cRun + cTime; // RunTime

exports.cRunTime = cRunTime;
var cstamp = b.cst + p.camp; // stamp

exports.cstamp = cstamp;
var cStamp = b.cSt + p.camp; // Stamp

exports.cStamp = cStamp;
var cstamps = cstamp + b.cs; // stamps

exports.cstamps = cstamps;
var cStamps = cStamp + b.cs; // Stamps

exports.cStamps = cStamps;
var cstamped = cstamp + b.ced; // stamped

exports.cstamped = cstamped;
var cStamped = cStamp + b.ced; // Stamped

exports.cStamped = cStamped;
var cstamping = cstamp + p.cing; // stamping

exports.cstamping = cstamping;
var cStamping = cStamp + p.cing; // Stamping

exports.cStamping = cStamping;
var cmediate = p.cmed + b.ci + p.cate; // mediate

exports.cmediate = cmediate;
var cintermediate = p.cinter + cmediate; // intermediate

exports.cintermediate = cintermediate;
var cIntermediate = p.cInter + cmediate; // Intermediate

exports.cIntermediate = cIntermediate;
var cpath = b.cp + p.cath; // path

exports.cpath = cpath;
var cPath = b.cP + p.cath; // Path

exports.cPath = cPath;
var cexit = b.cex + b.cit; // exit

exports.cexit = cexit;
var cExit = b.cEx + b.cit; // Exit

exports.cExit = cExit;
var cexiting = cexit + p.cing; // exiting

exports.cexiting = cexiting;
var cExiting = cExit + p.cing; // Exiting

exports.cExiting = cExiting;
var cViewer = b.cVi + b.cew + b.cer; // Viewer

exports.cViewer = cViewer;
var cPermission = b.cPe + b.crm + b.cis + b.csi + b.con; // Permission

exports.cPermission = cPermission;
var cBug = b.cBu + b.cg; // Bug

exports.cBug = cBug;
var cset = b.cse + b.ct; // set

exports.cset = cset;
var cSet = b.cSe + b.ct; // Set

exports.cSet = cSet;
var csetting = cset + b.ct + p.cing; // setting

exports.csetting = csetting;
var cSetting = cSet + b.ct + p.cing; // Setting

exports.cSetting = cSetting;
var cPreview = p.cPre + cview; // Preview

exports.cPreview = cPreview;
var climit = b.cli + p.cmit; // limit // NOTE: b.cmi resolves as "s"

exports.climit = climit;
var cLimit = b.cLi + p.cmit; // Limit // NOTE: b.cmi resolves as "s"

exports.cLimit = cLimit;
var cGate = b.cGa + b.cte; // Gate

exports.cGate = cGate;
var cway = b.cwa + b.cy; // way

exports.cway = cway;
var cWay = b.cWa + b.cy; // Way

exports.cWay = cWay;
var cGateway = cGate + cway; // Gateway

exports.cGateway = cGateway;
var cprocess = p.cpro + p.ccess; // process

exports.cprocess = cprocess;
var cProcess = p.cPro + p.ccess; // Process

exports.cProcess = cProcess;
var cPROCESS = p.cPRO + p.cCESS; // PROCESS

exports.cPROCESS = cPROCESS;
var cprocessed = cprocess + b.ced; // processed

exports.cprocessed = cprocessed;
var cProcessed = cProcess + b.ced; // Processed

exports.cProcessed = cProcessed;
var cprocesses = cprocess + b.ces; // processes

exports.cprocesses = cprocesses;
var cProcesses = cProcess + b.ces; // Processes

exports.cProcesses = cProcesses;
var cprocessing = cprocess + p.cing; // processing

exports.cprocessing = cprocessing;
var cProcessing = cProcess + p.cing; // Processing

exports.cProcessing = cProcessing;
var cPROCESSING = cPROCESS + p.cING; // PROCESSING

exports.cPROCESSING = cPROCESSING;
var ccomplete = g.ccom + b.cp + p.clete; // complete

exports.ccomplete = ccomplete;
var cComplete = g.cCom + b.cp + p.clete; // Complete

exports.cComplete = cComplete;
var ccompleted = ccomplete + b.cd; // completed

exports.ccompleted = ccompleted;
var cCompleted = cComplete + b.cd; // Completed

exports.cCompleted = cCompleted;
var cand = b.can + b.cd; // and

exports.cand = cand;
var cAnd = b.cAn + b.cd; // And

exports.cAnd = cAnd;
var cuse = b.cus + b.ce; // use

exports.cuse = cuse;
var cUse = b.cUs + b.ce; // Use

exports.cUse = cUse;
var cuser = cuse + b.cr; // user

exports.cuser = cuser;
var cUser = cUse + b.cr; // User

exports.cUser = cUser;
var cAccess = b.cAc + p.ccess; // Access

exports.cAccess = cAccess;
var clevel = b.cle + p.cvel; // level

exports.clevel = clevel;
var cLevel = b.cLe + p.cvel; // Level

exports.cLevel = cLevel;
var cget = b.cge + b.ct; // get

exports.cget = cget;
var cGet = b.cGe + b.ct; // Get

exports.cGet = cGet;
var cput = b.cp + b.cut; // put

exports.cput = cput;
var cPut = b.cP + b.cut; // Put

exports.cPut = cPut;
var cPUT = b.cP + b.cUT; // PUT

exports.cPUT = cPUT;
var cfrom = b.cfr + b.com; // from

exports.cfrom = cfrom;
var cFrom = b.cFr + b.com; // From

exports.cFrom = cFrom;
var cplace = p.cplac + b.ce; // place

exports.cplace = cplace;
var cPlace = b.cPl + p.cace; // Place

exports.cPlace = cPlace;
var cplaces = cplace + b.cs; // places

exports.cplaces = cplaces;
var cPlaces = cPlace + b.cs; // Places

exports.cPlaces = cPlaces;
var cplaced = cplace + b.cd; // placed

exports.cplaced = cplaced;
var cPlaced = cPlace + b.cd; // Placed

exports.cPlaced = cPlaced;
var cplacing = p.cplac + p.cing; // placing

exports.cplacing = cplacing;
var cPlacing = b.cPl + b.cac + p.cing; // Placing

exports.cPlacing = cPlacing;
var cplacement = cplace + p.cment; // placement

exports.cplacement = cplacement;
var cPlacement = cPlace + p.cment; // Placement

exports.cPlacement = cPlacement;
var creplace = b.cre + cplace; // replace

exports.creplace = creplace;
var cReplace = b.cRe + cplace; // Replace

exports.cReplace = cReplace;
var creplaces = creplace + b.cs; // replaces

exports.creplaces = creplaces;
var cReplaces = cReplace + b.cs; // Replaces

exports.cReplaces = cReplaces;
var creplaced = creplace + b.cd; // replaced

exports.creplaced = creplaced;
var cReplaced = cReplace + b.cd; // Replaced

exports.cReplaced = cReplaced;
var creplacing = b.cre + cplacing; // replacing

exports.creplacing = creplacing;
var cReplacing = b.cRe + cplacing; // Replacing

exports.cReplacing = cReplacing;
var creplacement = creplace + p.cment; // replacement

exports.creplacement = creplacement;
var cReplacement = cReplace + p.cment; // Replacement

exports.cReplacement = cReplacement;
var cspace = b.csp + p.cace; // space

exports.cspace = cspace;
var cSpace = b.cSp + p.cace; // Space

exports.cSpace = cSpace;
var cspaces = cspace + b.cs; // spaces

exports.cspaces = cspaces;
var cSpaces = cSpace + b.cs; // Spaces

exports.cSpaces = cSpaces;
var cspaced = cspace + b.cd; // spaced

exports.cspaced = cspaced;
var cSpaced = cSpace + b.cd; // Spaced

exports.cSpaced = cSpaced;
var cplus = b.cp + p.clus; // plus

exports.cplus = cplus;
var cPlus = b.cP + p.clus; // Plus

exports.cPlus = cPlus;
var ccolon = b.cco + p.clon; // colon

exports.ccolon = ccolon;
var cColon = b.cCo + p.clon; // Colon

exports.cColon = cColon;
var cunder = b.cun + p.cder; // under

exports.cunder = cunder;
var cUnder = b.cUn + p.cder; // Under

exports.cUnder = cUnder;
var cscore = b.cs + p.ccore; // score

exports.cscore = cscore;
var cScore = b.cS + p.ccore; // Score

exports.cScore = cScore;
var cunderscore = cunder + cscore; // underscore

exports.cunderscore = cunderscore;
var cUnderscore = cUnder + cscore; // Underscore

exports.cUnderscore = cUnderscore;
var cCatagory = b.cCa + b.cta + b.cgo + b.cry; // Catagory

exports.cCatagory = cCatagory;
var cclean = b.cc + p.clean; // clean

exports.cclean = cclean;
var cClean = b.cC + p.clean; // Clean

exports.cClean = cClean;
var ccleaned = cclean + b.ced; // cleaned

exports.ccleaned = ccleaned;
var cCleaned = cClean + b.ced; // Cleaned

exports.cCleaned = cCleaned;
var cCarriage = b.cCa + b.crr + b.ci + p.cage; // Carriage

exports.cCarriage = cCarriage;
var cturn = b.ctu + b.crn; // turn

exports.cturn = cturn;
var creturn = b.cre + cturn; // return

exports.creturn = creturn;
var cReturn = b.cRe + cturn; // Return

exports.cReturn = cReturn;
var cconvert = b.cc + p.convert; // convert

exports.cconvert = cconvert;
var cConvert = b.cC + p.convert; // Convert

exports.cConvert = cConvert;
var clow = b.clo + b.cw; // low

exports.clow = clow;
var cLow = b.cLo + b.cw; // Low

exports.cLow = cLow;
var clower = clow + b.cer; // lower

exports.clower = clower;
var cLower = cLow + b.cer; // Lower

exports.cLower = cLower;
var ccase = b.cc + p.c_ase; // case

exports.ccase = ccase;
var cCase = b.cC + p.c_ase; // Case

exports.cCase = cCase;
var cmove = b.cmo + b.cve; // move

exports.cmove = cmove;
var cremove = b.cre + cmove; // remove

exports.cremove = cremove;
var cRemove = b.cRe + cmove; // Remove

exports.cRemove = cRemove;
var cExtension = p.cExt + b.cen + b.cs + p.cion; // Extension

exports.cExtension = cExtension;
var cdig = b.cdi + b.cg; // dig

exports.cdig = cdig;
var cDig = b.cDi + b.cg; // Dig

exports.cDig = cDig;
var cdigit = cdig + b.cit; // digit

exports.cdigit = cdigit;
var cDigit = cDig + b.cit; // Digit

exports.cDigit = cDigit;
var cletter = clet + b.ct + b.cer; // letter

exports.cletter = cletter;
var cLetter = cLet + b.ct + b.cer; // Letter

exports.cLetter = cLetter;
var cupper = b.cup + b.cp + b.cer; // upper

exports.cupper = cupper;
var cUpper = b.cUp + b.cp + b.cer; // Upper

exports.cUpper = cUpper;
var crandom = b.cr + p.candom; // random

exports.crandom = crandom;
var cRandom = b.cR + p.candom; // Random

exports.cRandom = cRandom;
var crandomly = crandom + b.cly; // randomly

exports.crandomly = crandomly;
var cRandomly = cRandom + b.cly; // Randomly

exports.cRandomly = cRandomly;
var cgenerate = b.cg + p.cenerate; // generate

exports.cgenerate = cgenerate;
var cGenerate = b.cG + p.cenerate; // Generate

exports.cGenerate = cGenerate;
var cgenerated = cgenerate + b.cd; // generated

exports.cgenerated = cgenerated;
var cGenerated = cGenerate + b.cd; // Generated

exports.cGenerated = cGenerated;
var cparent = b.cp + p.carent; // parent

exports.cparent = cparent;
var cParent = b.cP + p.carent; // Parent

exports.cParent = cParent;
var cvalue = b.cva + b.clu + b.ce; // value

exports.cvalue = cvalue;
var cValue = b.cVa + b.clu + b.ce; // Value

exports.cValue = cValue;
var cvalues = cvalue + b.cs; // values

exports.cvalues = cvalues;
var cValues = cValue + b.cs; // Values

exports.cValues = cValues;
var cfind = b.cfi + b.cnd; // find

exports.cfind = cfind;
var cFind = b.cFi + b.cnd; // Find

exports.cFind = cFind;
var cfindvalue = cfind + cvalue; // findvalue

exports.cfindvalue = cfindvalue;
var cfindValue = cfind + cValue; // findValue

exports.cfindValue = cfindValue;
var cFindValue = cFind + cValue; // FindValue

exports.cFindValue = cFindValue;
var crange = b.cra + b.cng + b.ce; // range

exports.crange = crange;
var cRange = b.cRa + b.cng + b.ce; // Range

exports.cRange = cRange;
var cnumeric = b.cnu + b.cme + b.cri + b.cc; // numeric

exports.cnumeric = cnumeric;
var cNumeric = b.cNu + b.cme + b.cri + b.cc; // Numeric

exports.cNumeric = cNumeric;
var cNumerical = cNumeric + b.cal; // Numerical

exports.cNumerical = cNumerical;
var clength = b.cle + b.cng + b.cth; // length

exports.clength = clength;
var cLength = b.cLe + b.cng + b.cth; // Length

exports.cLength = cLength;
var ccode = b.cco + b.cde; // code

exports.ccode = ccode;
var cCode = b.cCo + b.cde; // Code

exports.cCode = cCode;
var ceither = b.cei + p.cther; // either

exports.ceither = ceither;
var cEither = b.cEi + p.cther; // Either

exports.cEither = cEither;
var cenable = b.cen + p.cable; // enable

exports.cenable = cenable;
var cEnable = b.cEn + p.cable; // Enable

exports.cEnable = cEnable;
var cenabled = cenable + b.cd; // enabled

exports.cenabled = cenabled;
var cEnabled = cEnable + b.cd; // Enabled

exports.cEnabled = cEnabled;
var cdetermine = b.cd + p.cetermine; // determine

exports.cdetermine = cdetermine;
var cDetermine = b.cD + p.cetermine; // Determine

exports.cDetermine = cDetermine;
var cties = b.ct + p.cies; // ties

exports.cties = cties;
var cTies = b.cT + p.cies; // Ties

exports.cTies = cTies;
var cability = b.cab + p.cility; // ability

exports.cability = cability;
var cAbility = b.cAb + p.cility; // Ability

exports.cAbility = cAbility;
var cabilities = b.cab + p.cili + cties; // abilities

exports.cabilities = cabilities;
var cAbilities = b.cAb + p.cili + cties; // Abilities

exports.cAbilities = cAbilities;
var cvariable = p.cvar + b.ci + p.cable; // variable

exports.cvariable = cvariable;
var cVariable = p.cVar + b.ci + p.cable; // Variable

exports.cVariable = cVariable;
var cvariables = cvariable + b.cs; // variables

exports.cvariables = cvariables;
var cVariables = cVariable + b.cs; // Variables

exports.cVariables = cVariables;
var cvariability = p.cvar + b.ci + cability; // variability

exports.cvariability = cvariability;
var cVariability = p.cVar + b.ci + cability; // Variability

exports.cVariability = cVariability;
var cvisibility = b.cv + p.cisibility; // visibility

exports.cvisibility = cvisibility;
var cVisibility = b.cV + p.cisibility; // Visibility

exports.cVisibility = cVisibility;
var cDialog = b.cDi + b.ca + clog; // Dialog

exports.cDialog = cDialog;
var clibrary = b.cli + b.cbr + b.car + b.cy; // library

exports.clibrary = clibrary;
var cLibrary = b.cLi + b.cbr + b.car + b.cy; // Library

exports.cLibrary = cLibrary;
var ctable = b.cta + b.cbl + b.ce; // table

exports.ctable = ctable;
var cTable = b.cTa + b.cbl + b.ce; // Table

exports.cTable = cTable;
var cequal = p.cequ + b.cal; // equal

exports.cequal = cequal;
var cEqual = p.cEqu + b.cal; // Equal

exports.cEqual = cEqual;
var cequals = cequal + b.cs; // equals

exports.cequals = cequals;
var cEquals = cEqual + b.cs; // Equals

exports.cEquals = cEquals;
var cequivalence = p.cequ + b.ci + p.cval + p.cence; // equivalence

exports.cequivalence = cequivalence;
var cEquivalence = p.cEqu + b.ci + p.cval + p.cence; // Equivalence

exports.cEquivalence = cEquivalence;
var cRaw = b.cRa + b.cw; // Raw

exports.cRaw = cRaw;
var cOperation = p.cOperat + p.cion; // Operation

exports.cOperation = cOperation;
var cOperating = p.cOperat + p.cing; // Operating

exports.cOperating = cOperating;
var csystem = b.csy + b.cst + b.cem; // system

exports.csystem = csystem;
var cSystem = b.cSy + b.cst + b.cem; // System

exports.cSystem = cSystem;
var csign = b.csi + b.cgn; // sign

exports.csign = csign;
var cSign = b.cSi + b.cgn; // Sign

exports.cSign = cSign;
var cassign = b.cas + csign; // assign

exports.cassign = cassign;
var cAssign = b.cAs + csign; // Assign

exports.cAssign = cAssign;
var cassignment = cassign + p.cment; // assignment

exports.cassignment = cassignment;
var cAssignment = cAssign + p.cment; // Assignment

exports.cAssignment = cAssignment;
var cAbreviated = b.cAb + b.cre + b.cvi + b.cat + b.ced; // Abreviated

exports.cAbreviated = cAbreviated;
var cwait = b.cw + p.cait; // wait

exports.cwait = cwait;
var cWait = b.cW + p.cait; // Wait

exports.cWait = cWait;
var cawait = b.ca + cwait; // await

exports.cawait = cawait;
var cHTML = b.cHT + b.cML; // HTML

exports.cHTML = cHTML;
var chtml = b.cht + b.cml; // html

exports.chtml = chtml;
var cinner = b.ci + p.cnner; // inner

exports.cinner = cinner;
var cInner = b.cI + p.cnner; // Inner

exports.cInner = cInner;
var cOver = b.cOv + b.cer; // Over

exports.cOver = cOver;
var cride = b.cr + p.cide; // ride

exports.cride = cride;
var cRide = b.cR + p.cide; // Ride

exports.cRide = cRide;
var cOverride = cOver + cride; // Override

exports.cOverride = cOverride;
var cActionOverride = cAction + cOverride; // ActionOverride

exports.cActionOverride = cActionOverride;
var cLocator = b.cLo + b.cca + b.cto + b.cr; // Locator

exports.cLocator = cLocator;
var cLocators = cLocator + b.cs; // Locators

exports.cLocators = cLocators;
var cLocatorLibrary = cLocator + cLibrary; // LocatorLibrary

exports.cLocatorLibrary = cLocatorLibrary;
var cselector = b.cs + p.celector; // selector

exports.cselector = cselector;
var cSelector = b.cS + p.celector; // Selector

exports.cSelector = cSelector;
var cSelectors = cSelector + b.cs; // Selectors

exports.cSelectors = cSelectors;
var cIndividual = b.cIn + b.cdi + b.cvi + b.cdu + b.cal; // Individual

exports.cIndividual = cIndividual;
var cIndividually = cIndividual + b.cly; // Individually

exports.cIndividually = cIndividually;
var cexist = b.cex + p.cist; // exist

exports.cexist = cexist;
var cExist = b.cEx + p.cist;
exports.cExist = cExist;
; // Exist

var cexists = cexist + b.cs; // exists

exports.cexists = cexists;
var cExists = cExist + b.cs; // Exists

exports.cExists = cExists;
var cexisted = cexist + b.ced; // existed

exports.cexisted = cexisted;
var cExisted = cExist + b.ced; // Existed

exports.cExisted = cExisted;
var cexisting = cexist + p.cing; // existing

exports.cexisting = cexisting;
var cExisting = cExist + p.cing; // Existing

exports.cExisting = cExisting;
var cAsynch = b.cAs + p.cynch; // Asynch

exports.cAsynch = cAsynch;
var cSynch = b.cS + p.cynch; // Synch

exports.cSynch = cSynch;
var cSingular = b.cSi + b.cng + b.cul + b.car; // Singular

exports.cSingular = cSingular;
var cParallel = b.cPa + b.cra + b.cll + b.cel; // Parallel

exports.cParallel = cParallel;
var cMulti = b.cMu + b.clt + b.ci; // Multi

exports.cMulti = cMulti;
var cUnified = b.cUn + b.cif + b.cie + b.cd; // Unified

exports.cUnified = cUnified;
var cfault = b.cf + p.cault; // fault

exports.cfault = cfault;
var cFault = b.cF + p.cault; // Fault

exports.cFault = cFault;
var cFAULT = b.cF + p.cAULT; // FAULT

exports.cFAULT = cFAULT;
var cdefault = b.cde + cfault; // default

exports.cdefault = cdefault;
var cDefault = b.cDe + cfault; // Default

exports.cDefault = cDefault;
var cDEFAULT = b.cDE + cFAULT; // DEFAULT

exports.cDEFAULT = cDEFAULT;
var csingle = b.cs + p.cingle; // single

exports.csingle = csingle;
var cSingle = b.cS + p.cingle; // Single

exports.cSingle = cSingle;
var cquote = b.cqu + p.cote; // quote

exports.cquote = cquote;
var cQuote = b.cQu + p.cote; // Quote

exports.cQuote = cQuote;
var cquotes = cquote + b.cs; // quotes

exports.cquotes = cquotes;
var cQuotes = cQuote + b.cs; // Quotes

exports.cQuotes = cQuotes;
var cquoted = cquote + b.cd; // quoted

exports.cquoted = cquoted;
var cQuoted = cQuote + b.cd; // Quoted

exports.cQuoted = cQuoted;
var cswap = b.cs + p.cwap; // swap

exports.cswap = cswap;
var cSwap = b.cS + p.cwap; // Swap

exports.cSwap = cSwap;
var cbefore = b.cbe + p.cfore; // before

exports.cbefore = cbefore;
var cBefore = b.cBe + p.cfore; // Before

exports.cBefore = cBefore;
var cBEFORE = b.cBE + p.cFORE; // BEFORE

exports.cBEFORE = cBEFORE;
var cafter = b.caf + p.cter; // after

exports.cafter = cafter;
var cAfter = b.cAf + p.cter; // After

exports.cAfter = cAfter;
var cAFTER = b.cAF + p.cTER; // AFTER

exports.cAFTER = cAFTER;
var cOnce = b.cOn + b.cce; // Once

exports.cOnce = cOnce;
var cUpload = b.cUp + cload; // Upload

exports.cUpload = cUpload;
var cStyle = b.cSt + b.cyl + b.ce; // Style

exports.cStyle = cStyle;
var cassert = b.cas + b.cse + b.crt; // assert

exports.cassert = cassert;
var cAssert = b.cAs + b.cse + b.crt; // Assert

exports.cAssert = cAssert;
var cless = b.cl + p.cess; // less

exports.cless = cless;
var cLess = b.cL + p.cess; // Less

exports.cLess = cLess;
var cgreat = b.cgr + p.ceat; // great

exports.cgreat = cgreat;
var cGreat = b.cGr + p.ceat; // Great

exports.cGreat = cGreat;
var cgreater = cgreat + b.cer; // greater

exports.cgreater = cgreater;
var cGreater = cGreat + b.cer; // Greater

exports.cGreater = cGreater;
var cthen = b.ct + p.chen; // then

exports.cthen = cthen;
var cThen = b.cT + p.chen; // Then

exports.cThen = cThen;
var cthan = b.ct + p.chan; // than

exports.cthan = cthan;
var cThan = b.cT + p.chan; // Than

exports.cThan = cThan;
var cAssertExists = cAssert + cExists; // AssertExists

exports.cAssertExists = cAssertExists;
var cAssertNotExists = cAssert + g.cNot + cExists; // AssertNotExists

exports.cAssertNotExists = cAssertNotExists;
var cAssertValueEqual = cAssert + cValue + cEqual; // AssertValueEqual

exports.cAssertValueEqual = cAssertValueEqual;
var cAssertValueNotEqual = cAssert + cValue + g.cNot + cEqual; // AssertValueNotEqual

exports.cAssertValueNotEqual = cAssertValueNotEqual;
var cAssertValueLessThan = cAssert + cValue + cLess + cThan; // AssertValueLessThan

exports.cAssertValueLessThan = cAssertValueLessThan;
var cAssertValueGreaterThan = cAssert + cValue + cGreater + cThan; // AssertValueGreaterThan

exports.cAssertValueGreaterThan = cAssertValueGreaterThan;
var cAssertion = cAssert + p.cion; // Assertion

exports.cAssertion = cAssertion;
var cAssertionType = cAssertion + cType; // AssertionType

exports.cAssertionType = cAssertionType;
var cUploadStyle = cUpload + cStyle; // UploadStyle

exports.cUploadStyle = cUploadStyle;
var cAssertionStyle = cAssertion + cStyle; // AssertionStyle

exports.cAssertionStyle = cAssertionStyle;
var cby = b.cby; // by

exports.cby = cby;
var cBy = b.cBy; // By

exports.cBy = cBy;
var cBY = b.cBY; // BY

exports.cBY = cBY;
var cOr = b.cOr; // Or

exports.cOr = cOr;
var cor = b.cor; // or

exports.cor = cor;
var cOR = b.cOR; // OR

exports.cOR = cOR;
var cmix = b.camai + b.cx; // mix // For some reason JavaScript doesn't like cmi.

exports.cmix = cmix;
var cMix = b.cMi + b.cx; // Mix

exports.cMix = cMix;
var cmixed = cmix + b.ced; // mixed

exports.cmixed = cmixed;
var cMixed = cMix + b.ced; // Mixed

exports.cMixed = cMixed;
var calpha = b.ca + p.clpha; // alpha

exports.calpha = calpha;
var cAlpha = b.cA + p.clpha; // Alpha

exports.cAlpha = cAlpha;
var cbetic = b.cbe + b.cti + b.cc; // betic

exports.cbetic = cbetic;
var cAlphabetic = cAlpha + cbetic; // Alphabetic

exports.cAlphabetic = cAlphabetic;
var ctext = b.ct + p.cext; // text

exports.ctext = ctext;
var cText = b.cT + p.cext; // Text

exports.cText = cText;
var cTEXT = b.cTE + b.cXT; // TEXT

exports.cTEXT = cTEXT;
var ccontext = p.ccon + ctext; // context

exports.ccontext = ccontext;
var cContext = p.cCon + ctext; // Context

exports.cContext = cContext;
var cinput = b.cin + cput; // input

exports.cinput = cinput;
var cInput = b.cIn + cput; // Input

exports.cInput = cInput;
var cINPUT = b.cIN + cPUT; // INPUT

exports.cINPUT = cINPUT;
var cinputs = cinput + b.cs; // inputs

exports.cinputs = cinputs;
var cInputs = cInput + b.cs; // Inputs

exports.cInputs = cInputs;
var cinputting = cinput + b.ct + p.cing; // inputting

exports.cinputting = cinputting;
var cInputting = cInput + b.ct + p.cing; // Inputting

exports.cInputting = cInputting;
var cdescription = b.cde + b.csc + b.cri + b.cp + p.ction; // description

exports.cdescription = cdescription;
var cDescription = b.cDe + b.csc + b.cri + b.cp + p.ction; // Description

exports.cDescription = cDescription;
var cconstant = p.ccon + p.cstant; //constant

exports.cconstant = cconstant;
var cConstant = p.cCon + b.cst + b.can + b.ct; // Constant

exports.cConstant = cConstant;
var cconstants = cconstant + b.cs; // constants

exports.cconstants = cconstants;
var cConstants = cConstant + b.cs; // Constants

exports.cConstants = cConstants;
var citeration = b.cit + p.cera + p.ction; // iteration

exports.citeration = citeration;
var cIteration = b.cIt + p.cera + p.ction; // Iteration

exports.cIteration = cIteration;
var cproject = b.cp + p.croject; // project

exports.cproject = cproject;
var cProject = b.cP + p.croject; // Project

exports.cProject = cProject;
var cProjects = cProject + b.cs; // Projects

exports.cProjects = cProjects;
var cAdvance = b.cAd + b.cva + b.cnc + b.ce; // Advance

exports.cAdvance = cAdvance;
var cAdvanced = cAdvance + b.cd; // Advanced

exports.cAdvanced = cAdvanced;
var cCreation = b.cCr + b.cea + p.ction; // Creation

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
var cbed = b.cbe + b.cd; // bed

exports.cbed = cbed;
var cBed = b.cBe + b.cd; // Bed

exports.cBed = cBed;
var cbeds = cbed + b.cs; // beds

exports.cbeds = cbeds;
var cBeds = cBed + b.cs; // Beds

exports.cBeds = cBeds;
var cbedded = cbed + p.cded; // bedded

exports.cbedded = cbedded;
var cBedded = cBed + p.cded; // Bedded

exports.cBedded = cBedded;
var cbedding = cbed + b.cd + p.cing; // bedding

exports.cbedding = cbedding;
var cBedding = cBed + b.cd + p.cing; // Bedding

exports.cBedding = cBedding;
var cweb = b.cwe + b.cb; // web

exports.cweb = cweb;
var cWeb = b.cWe + b.cb; // Web

exports.cWeb = cWeb;
var cwebs = cweb + b.cs; // webs

exports.cwebs = cwebs;
var cWebs = cWeb + b.cs; // Webs

exports.cWebs = cWebs;
var cwebbed = cweb + cbed; // webbed

exports.cwebbed = cwebbed;
var cWebbed = cWeb + cbed; // webbed

exports.cWebbed = cWebbed;
var cwebbing = cweb + p.cbing; // webbing

exports.cwebbing = cwebbing;
var cWebbing = cWeb + p.cbing; // Webbing

exports.cWebbing = cWebbing;
var cWebkey = b.cWe + b.cb + ckey; // Webkey

exports.cWebkey = cWebkey;
var cfile = b.cf + p.cile; // file

exports.cfile = cfile;
var cFile = b.cF + p.cile; // File

exports.cFile = cFile;
var cfiles = cfile + b.cs; // files

exports.cfiles = cfiles;
var cFiles = cFile + b.cs; // Files

exports.cFiles = cFiles;
var cfilename = cfile + cname; // filename

exports.cfilename = cfilename;
var cFilename = cFile + cname; // Filename

exports.cFilename = cFilename;
var cfilenames = cfilename + b.cs; // filenames

exports.cfilenames = cfilenames;
var cFilenames = cFilename + b.cs; // Filenames

exports.cFilenames = cFilenames;
var cfold = b.cfo + b.cld; // fold

exports.cfold = cfold;
var cFold = b.cFo + b.cld; // Fold

exports.cFold = cFold;
var cFolder = cFold + b.cer; // Folder

exports.cFolder = cFolder;
var cfolder = cfold + b.cer; // folder

exports.cfolder = cfolder;
var cfolders = cfolder + b.cs; // folders

exports.cfolders = cfolders;
var cFolders = cFolder + b.cs; // Folders

exports.cFolders = cFolders;
var ccafe = b.cca + b.cfe; // cafe

exports.ccafe = ccafe;
var ccert = b.cce + b.crt; // cert

exports.ccert = ccert;
var csrc = b.csr + b.cc; // src

exports.csrc = csrc;
var cbin = b.cbi + b.cn; // bin

exports.cbin = cbin;
var cnation = b.cn + p.cation; // nation

exports.cnation = cnation;
var cNation = b.cN + p.cation; // Nation

exports.cNation = cNation;
var csource = b.cs + p.cource; // source

exports.csource = csource;
var cSource = b.cS + p.cource; // Source

exports.cSource = cSource;
var cdestination = p.cdest + b.ci + cnation; // destination

exports.cdestination = cdestination;
var cDestination = p.cDest + b.ci + cnation; // Destination

exports.cDestination = cDestination;
var cresource = b.cre + csource; // resource

exports.cresource = cresource;
var cResource = b.cRe + csource; // Resource

exports.cResource = cResource;
var cresources = cresource + b.cs; // resources

exports.cresources = cresources;
var cResources = cResource + b.cs; // Resources

exports.cResources = cResources;
var cclass = b.cc + p.c_lass; // class

exports.cclass = cclass;
var cClass = b.cC + p.c_lass; // Class

exports.cClass = cClass;
var cIngestion = b.cIn + b.cge + b.cs + p.ction; // Ingestion

exports.cIngestion = cIngestion;
var cis = b.cis; // is

exports.cis = cis;
var cIs = b.cIs; // Is

exports.cIs = cIs;
var cIS = b.cIS; // IS

exports.cIS = cIS;
var ccheck = b.cc + p.check; // check

exports.ccheck = ccheck;
var cCheck = b.cC + p.check; // Check

exports.cCheck = cCheck;
var cchecks = ccheck + b.cs; // checks

exports.cchecks = cchecks;
var cChecks = cCheck + b.cs; // Checks

exports.cChecks = cChecks;
var cchecked = ccheck + b.ced; // checked

exports.cchecked = cchecked;
var cChecked = cCheck + b.ced; // Checked

exports.cChecked = cChecked;
var celement = b.cel + b.ce + p.cment; // element

exports.celement = celement;
var cElement = b.cEl + b.ce + p.cment; // Element

exports.cElement = cElement;
var celements = celement + b.cs; // elements

exports.celements = celements;
var cElements = cElement + b.cs; // Elements

exports.cElements = cElements;
var cElementName = cElement + cName; // ElementName

exports.cElementName = cElementName;
var callow = call + b.cow; // allow

exports.callow = callow;
var cAllow = cAll + b.cow; // Allow

exports.cAllow = cAllow;
var callowable = callow + p.cable; // allowable

exports.callowable = callowable;
var cAllowable = cAllow + p.cable; // Allowable

exports.cAllowable = cAllowable;
var chome = b.cho + b.cme; // home

exports.chome = chome;
var cHome = b.cHo + b.cme; // Home

exports.cHome = cHome;
var cpublic = b.cpu + b.cbl + b.cic; // public

exports.cpublic = cpublic;
var cPublic = b.cPu + b.cbl + b.cic; // Public

exports.cPublic = cPublic;
var cspecial = b.csp + b.cec + b.cia + b.cl; // special

exports.cspecial = cspecial;
var cSpecial = b.cSp + b.cec + b.cia + b.cl; // Special

exports.cSpecial = cSpecial;
var ccharacter = cchar + b.cac + p.cter; // character

exports.ccharacter = ccharacter;
var cCharacter = cChar + b.cac + p.cter; // Character

exports.cCharacter = cCharacter;
var ccharacters = ccharacter + b.cs; // characters

exports.ccharacters = ccharacters;
var cCharacters = cCharacter + b.cs; // Characters

exports.cCharacters = cCharacters;
var cedge = b.ced + b.cge; // edge

exports.cedge = cedge;
var cEdge = b.cEd + b.cge; // Edge

exports.cEdge = cEdge;
var cWorks = cWork + b.cs; // Works

exports.cWorks = cWorks;
var csolid = b.cs + p.colid; // solid

exports.csolid = csolid;
var cSolid = b.cS + p.colid; // Solid

exports.cSolid = cSolid;
var cBinary = b.cBi + b.cna + b.cry; // Binary

exports.cBinary = cBinary;
var cTimeout = cTime + cout; // Timeout

exports.cTimeout = cTimeout;
var cTimeOut = cTime + cOut; // TimeOut

exports.cTimeOut = cTimeOut;
var cDwell = b.cDw + b.cel + b.cl; // Dwell

exports.cDwell = cDwell;
var ccut = b.ccu + b.ct; // cut

exports.ccut = ccut;
var cCut = b.cCu + b.ct; // Cut

exports.cCut = cCut;
var ccuts = ccut + b.cs; // cuts

exports.ccuts = ccuts;
var cCuts = cCut + b.cs; // Cuts

exports.cCuts = cCuts;
var ccutting = ccut + b.ct + p.cing; // cutting

exports.ccutting = ccutting;
var cCutting = cCut + b.ct + p.cing; // Cutting

exports.cCutting = cCutting;
var ccute = b.cc + p.cute; // cute

exports.ccute = ccute;
var cCute = b.cC + p.cute; // Cute

exports.cCute = cCute;
var cexecute = g.cexe + ccute; // execute

exports.cexecute = cexecute;
var cExecute = g.cExe + ccute; // Execute

exports.cExecute = cExecute;
var cexecutes = cexecute + b.cs; // executes

exports.cexecutes = cexecutes;
var cExecutes = cExecute + b.cs; // Executes

exports.cExecutes = cExecutes;
var cexecuted = cexecute + b.cd; // executed

exports.cexecuted = cexecuted;
var cExecuted = cExecute + b.cd; // Executed

exports.cExecuted = cExecuted;
var cexecuting = g.cexe + ccut + p.cing; // executing

exports.cexecuting = cexecuting;
var cExecuting = g.cExe + ccut + p.cing; // Executing

exports.cExecuting = cExecuting;
var csibling = b.cs + p.cibling; // sibling

exports.csibling = csibling;
var cSibling = b.cS + p.cibling; // Sibling

exports.cSibling = cSibling;
var cchild = b.cc + p.child; // child

exports.cchild = cchild;
var cChild = b.cC + p.child; // Child

exports.cChild = cChild;
var cfilter = b.cf + p.cilter; // filter

exports.cfilter = cfilter;
var cFilter = b.cF + p.cilter; // Filter

exports.cFilter = cFilter;
var cattribute = b.ca + p.cttribute; // attribute

exports.cattribute = cattribute;
var cAttribute = b.cA + p.cttribute; // Attribute

exports.cAttribute = cAttribute;
var cattributes = b.ca + p.cttributes; // attributes

exports.cattributes = cattributes;
var cAttributes = b.cA + p.cttributes; // Attributes

exports.cAttributes = cAttributes;
var cdisabled = b.cd + p.cisabled; // disabled

exports.cdisabled = cdisabled;
var cDisabled = b.cD + p.cisabled; // Disabled

exports.cDisabled = cDisabled;
var cman = b.cma + b.cn; // man

exports.cman = cman;
var cMan = b.cMa + b.cn; // Man

exports.cMan = cMan;
var cwoman = b.cwo + cman; // woman

exports.cwoman = cwoman;
var cWoman = b.cWo + cman; // Woman

exports.cWoman = cWoman;
var ccell = b.cc + p.cell; // cell

exports.ccell = ccell;
var cCell = b.cC + p.cell; // Cell

exports.cCell = cCell;
var chung = b.ch + p.cung; // hung

exports.chung = chung;
var cHung = b.cH + p.cung; // Hung

exports.cHung = cHung;
var cport = b.cpo + b.crt; // port

exports.cport = cport;
var cPort = b.cPo + b.crt; // Port

exports.cPort = cPort;
var cConstructor = b.cCo + b.cns + b.ctr + b.cu + p.cctor; // Constructor

exports.cConstructor = cConstructor;
var cwarn = b.cw + p.carn; // warn

exports.cwarn = cwarn;
var cWarn = b.cW + p.carn; // Warn

exports.cWarn = cWarn;
var cWARN = b.cW + b.cAR + b.cN; // WARN

exports.cWARN = cWARN;
var cwarning = cwarn + p.cing; // warning

exports.cwarning = cwarning;
var cWarning = cWarn + p.cing; // Warning

exports.cWarning = cWarning;
var cWARNING = cWARN + p.cING; // WARNING

exports.cWARNING = cWARNING;
var cwarnings = cwarning + b.cs; // warnings

exports.cwarnings = cwarnings;
var cWarnings = cWarning + b.cs; // Warnings

exports.cWarnings = cWarnings;
var cerror = b.ce + p.crror; // error

exports.cerror = cerror;
var cError = b.cE + p.crror; // Error

exports.cError = cError;
var cERROR = b.cE + p.cRROR; // ERROR

exports.cERROR = cERROR;
var cash = b.cas + b.ch; // ash

exports.cash = cash;
var cAsh = b.cAs + b.ch; // Ash

exports.cAsh = cAsh;
var cdash = b.cd + cash; // dash

exports.cdash = cdash;
var cDash = b.cD + cash; // Dash

exports.cDash = cDash;
var cboard = b.cbo + p.card; // board

exports.cboard = cboard;
var cDashboard = cDash + cboard; // Dashboard

exports.cDashboard = cDashboard;
var ccompose = b.cco + b.cmp + p.cose; // compose

exports.ccompose = ccompose;
var cdecompose = b.cde + ccompose; // decompose

exports.cdecompose = cdecompose;
var cDecompose = b.cDe + ccompose; // Decompose

exports.cDecompose = cDecompose;
var carray = b.car + p.cray; // array

exports.carray = carray;
var cArray = b.cAr + p.cray; // Array

exports.cArray = cArray;
var carrays = carray + b.cs; // arrays

exports.carrays = carrays;
var cArrays = cArray + b.cs; // Arrays

exports.cArrays = cArrays;
var ccamel = b.cca + p.cmel; // camel

exports.ccamel = ccamel;
var cCamel = b.cCa + p.cmel; // Camel

exports.cCamel = cCamel;
var cround = b.cr + p.cound; // round

exports.cround = cround;
var cRound = b.cR + p.cound; // Round

exports.cRound = cRound;
var crounded = cround + b.ced; // rounded

exports.crounded = crounded;
var cRounded = cRound + b.ced; // Rounded

exports.cRounded = cRounded;
var cquart = b.cqu + p.cart; // quart

exports.cquart = cquart;
var cQuart = b.cQu + p.cart; // Quart

exports.cQuart = cQuart;
var cquarter = cquart + b.cer; // quarter

exports.cquarter = cquarter;
var cQuarter = cQuart + b.cer; // Quarter

exports.cQuarter = cQuarter;
var cquaternion = b.cqu + b.cat + b.cer + p.cnion; // quaternion

exports.cquaternion = cquaternion;
var cQuaternion = b.cQu + b.cat + b.cer + p.cnion; // Quaternion

exports.cQuaternion = cQuaternion;
var cnormal = b.cn + p.cormal; // normal

exports.cnormal = cnormal;
var cNormal = b.cN + p.cormal; // Normal

exports.cNormal = cNormal;
var cnormalize = cnormal + p.cize; // normalize

exports.cnormalize = cnormalize;
var cNormalize = cNormal + p.cize; // Normalize

exports.cNormalize = cNormalize;
var cnominal = p.cnom + p.cinal; // nominal

exports.cnominal = cnominal;
var cNominal = p.cNom + p.cinal; // Nominal

exports.cNominal = cNominal;
var cdegree = b.cd + p.cegree; // degree

exports.cdegree = cdegree;
var cDegree = b.cD + p.cegree; // Degree

exports.cDegree = cDegree;
var cdegrees = cdegree + b.cs; // degrees

exports.cdegrees = cdegrees;
var cDegrees = cDegree + b.cs; // Degrees

exports.cDegrees = cDegrees;
var cangle = b.can + p.cgle; // angle

exports.cangle = cangle;
var cAngle = b.cAn + p.cgle; // Angle

exports.cAngle = cAngle;
var ctrap = b.ct + p.crap; // trap

exports.ctrap = ctrap;
var cTrap = b.cT + p.crap; // Trap

exports.cTrap = cTrap;
var cFraction = p.cFra + p.cction; // Fraction

exports.cFraction = cFraction;
var cvector = b.cve + p.cctor; // vector

exports.cvector = cvector;
var cVector = b.cVe + p.cctor; // Vector

exports.cVector = cVector;
var cfor = b.cfo + b.cr; // for

exports.cfor = cfor;
var cFor = b.cFo + b.cr; // For

exports.cFor = cFor;
var cform = cfor + b.cm; // form

exports.cform = cform;
var cForm = cFor + b.cm; // Form

exports.cForm = cForm;
var ctransform = p.ctrans + cform; // transform

exports.ctransform = ctransform;
var cTransform = p.cTrans + cform; // Transform

exports.cTransform = cTransform;
var cpoint = b.cpo + p.cint; // point

exports.cpoint = cpoint;
var cPoint = b.cPo + p.cint; // Point

exports.cPoint = cPoint;
var clocation = p.cloc + p.cation; // location

exports.clocation = clocation;
var cLocation = p.cLoc + p.cation; // Location

exports.cLocation = cLocation;
var csort = b.cs + p.cort; // sort

exports.csort = csort;
var cSort = b.cS + p.cort; // Sort

exports.cSort = cSort;
var csimplify = p.csim + p.cplify; // simplify

exports.csimplify = csimplify;
var cSimplify = p.cSim + p.cplify; // Simplify

exports.cSimplify = cSimplify;
var cconsolidate = p.ccon + p.csol + b.ci + cdate; // consolidate

exports.cconsolidate = cconsolidate;
var cConsolidate = p.cCon + p.csol + b.ci + cdate; // Consolidate

exports.cConsolidate = cConsolidate;
var cconsolidated = cconsolidate + b.cd; // consolidated

exports.cconsolidated = cconsolidated;
var cConsolidated = cConsolidate + b.cd; // Consolidated

exports.cConsolidated = cConsolidated;
var cconsolidates = cconsolidate + b.cs; // consolidates

exports.cconsolidates = cconsolidates;
var cConsolidates = cConsolidate + b.cs; // Consolidates

exports.cConsolidates = cConsolidates;
var cconsolidating = p.ccon + csolid + b.cat + p.cing; // consolidating

exports.cconsolidating = cconsolidating;
var cConsolidating = p.cCon + csolid + b.cat + p.cing; // Consolidating

exports.cConsolidating = cConsolidating;
var care = p.care; // are

exports.care = care;
var cAre = b.cAr + b.ce; // Are

exports.cAre = cAre;
var cARE = b.cAR + b.cE; // ARE

exports.cARE = cARE;
var ccompare = p.ccomp + p.care; // compare

exports.ccompare = ccompare;
var cCompare = p.cComp + p.care; // Compare

exports.cCompare = cCompare;
var ccompares = ccompare + b.cs; // compares

exports.ccompares = ccompares;
var cCompares = cCompare + b.cs; // Compares

exports.cCompares = cCompares;
var ccompared = ccompare + b.cd; // compared

exports.ccompared = ccompared;
var cCompared = cCompare + b.cd; // Compared

exports.cCompared = cCompared;
var ccomparing = p.ccomp + b.car + p.cing; // comparing

exports.ccomparing = ccomparing;
var cComparing = p.cComp + b.car + p.cing; // Comparing

exports.cComparing = cComparing;
var ccomparison = p.ccomp + b.car + p.cison; // comparison

exports.ccomparison = ccomparison;
var cComparison = p.cComp + b.car + p.cison; // Comparison

exports.cComparison = cComparison;
var ccomparisons = ccomparison + b.cs; // comparisons

exports.ccomparisons = ccomparisons;
var cComparisons = cComparison + b.cs; // Comparisons

exports.cComparisons = cComparisons;
var ccontain = p.ccon + p.ctain; // contain

exports.ccontain = ccontain;
var cContain = p.cCon + p.ctain; // Contain

exports.cContain = cContain;
var ccontains = ccontain + b.cs; // contains

exports.ccontains = ccontains;
var cContains = cContain + b.cs; // Contains

exports.cContains = cContains;
var ccontained = ccontain + b.ced; // contained

exports.ccontained = ccontained;
var cContained = cContain + b.ced; // Contained

exports.cContained = cContained;
var ccontaining = ccontain + p.cing; // containing

exports.ccontaining = ccontaining;
var cContaining = cContain + p.cing; // Containing

exports.cContaining = cContaining;
var cvideo = b.cv + p.cideo; // video

exports.cvideo = cvideo;
var cVideo = b.cV + p.cideo; // Video

exports.cVideo = cVideo;
var cProduct = p.cPro + p.cduct; // Product

exports.cProduct = cProduct;
var caggregate = b.ca + p.cggregate; // aggregate

exports.caggregate = caggregate;
var cAggregate = b.cA + p.cggregate; // Aggregate

exports.cAggregate = cAggregate;
var carguments = b.ca + b.crg + b.cu + p.cments; // arguments

exports.carguments = carguments;
var cArguments = b.cA + b.crg + b.cu + p.cments; // Arguments

exports.cArguments = cArguments;
var cDifference = p.cDiff + b.cer + p.cence; // Difference

exports.cDifference = cDifference;
var cbet = b.cbe + b.ct; // bet

exports.cbet = cbet;
var cBet = b.cBe + b.ct; // Bet

exports.cBet = cBet;
var cbetween = cbet + p.cween; // between

exports.cbetween = cbetween;
var cBetween = cBet + p.cween; // Between

exports.cBetween = cBetween;
var ccertain = b.cce + b.crt + p.cain; // certain

exports.ccertain = ccertain;
var cascertain = b.cas + ccertain; // ascertain

exports.cascertain = cascertain;
var cAscertain = b.cAs + ccertain; // Ascertain

exports.cAscertain = cAscertain;
var cmatch = b.cma + p.ctch; // match

exports.cmatch = cmatch;
var cMatch = b.cMa + p.ctch; // Match

exports.cMatch = cMatch;
var cmatching = cmatch + p.cing; // matching

exports.cmatching = cmatching;
var cMatching = cMatch + p.cing; // Matching

exports.cMatching = cMatching;
var cdoes = b.cdo + b.ces; // does

exports.cdoes = cdoes;
var cDoes = b.cDo + b.ces; // Does

exports.cDoes = cDoes;
var cDOES = b.cDO + b.cES; // DOES

exports.cDOES = cDOES;
var capplication = p.capp + p.clica + p.ction; // application

exports.capplication = capplication;
var cApplication = p.cApp + p.clica + p.ction; // Application

exports.cApplication = cApplication;
var cAPPLICATION = p.cAPP + p.cLICA + p.cTION; // APPLICATION

exports.cAPPLICATION = cAPPLICATION;
var cbuild = b.cbu + p.cild; // build

exports.cbuild = cbuild;
var cBuild = b.cBu + p.cild; // Build

exports.cBuild = cBuild;
var cdeploy = b.cd + b.cep + p.cloy; // deploy

exports.cdeploy = cdeploy;
var cDeploy = b.cD + b.cep + p.cloy; // Deploy

exports.cDeploy = cDeploy;
var cDEPLOY = b.cD + b.cEP + p.cLOY; // DEPLOY

exports.cDEPLOY = cDEPLOY;
var cdeployment = cdeploy + p.cment; // deployment

exports.cdeployment = cdeployment;
var cDeployment = cDeploy + p.cment; // Deployment

exports.cDeployment = cDeployment;
var clease = b.cle + p.c_ase; // lease

exports.clease = clease;
var cLEASE = b.cLE + p.c_ASE; // LEASE

exports.cLEASE = cLEASE;
var crelease = b.cre + clease; // release

exports.crelease = crelease;
var cRelease = b.cRe + clease; // Release

exports.cRelease = cRelease;
var cRELEASE = b.cRE + cLEASE; // RELEASE

exports.cRELEASE = cRELEASE;
var creleases = crelease + b.cs; // releases

exports.creleases = creleases;
var cReleases = cRelease + b.cs; // Releases

exports.cReleases = cReleases;
var creleased = crelease + b.cd; // released

exports.creleased = creleased;
var cReleased = cRelease + b.cd; // Released

exports.cReleased = cReleased;
var creleasing = b.cre + p.cleas + p.cing; // releasing

exports.creleasing = creleasing;
var cReleasing = b.cRe + p.cleas + p.cing; // Releasing

exports.cReleasing = cReleasing;
var croot = b.cr + p.coot; // root

exports.croot = croot;
var cRoot = b.cR + p.coot; // Root

exports.cRoot = cRoot;
var cparse = b.cp + p.carse; // parse

exports.cparse = cparse;
var cParse = b.cP + p.carse; // Parse

exports.cParse = cParse;
var cPARSE = b.cP + p.cARSE; // PARSE

exports.cPARSE = cPARSE;
var cparser = cparse + b.cr; // parser

exports.cparser = cparser;
var cParser = cParse + b.cr; // Parser

exports.cParser = cParser;
var cPARSER = cPARSE + b.cR; // PARSER

exports.cPARSER = cPARSER;
var cparsed = cparse + b.cd; // parsed

exports.cparsed = cparsed;
var cParsed = cParse + b.cd; // Parsed

exports.cParsed = cParsed;
var cforward = cfor + p.cward; // forward

exports.cforward = cforward;
var cForward = cFor + p.cward; // Forward

exports.cForward = cForward;
var cslash = b.cs + p.clash; // slash

exports.cslash = cslash;
var cSlash = b.cS + p.clash; // Slash

exports.cSlash = cSlash;
var cmeta = b.cm + p.ceta; // meta

exports.cmeta = cmeta;
var cMeta = b.cM + p.ceta; // Meta

exports.cMeta = cMeta;
var cmetaData = cmeta + cData; // metaData

exports.cmetaData = cmetaData;
var cMetaData = cMeta + cData; // MetaData

exports.cMetaData = cMetaData;
var cbusiness = b.cb + p.cusiness; // business

exports.cbusiness = cbusiness;
var cBusiness = b.cB + p.cusiness; // Business

exports.cBusiness = cBusiness;
var crule = b.cr + p.cule; // rule

exports.crule = crule;
var cRule = b.cR + p.cule; // Rule

exports.cRule = cRule;
var cfresh = b.cfr + p.cesh; // fresh

exports.cfresh = cfresh;
var crefresh = b.cre + cfresh; // refresh

exports.crefresh = crefresh;
var cRefresh = b.cRe + cfresh; // Refresh

exports.cRefresh = cRefresh;
var ceval = b.ce + p.cval; // eval

exports.ceval = ceval;
var cEval = b.cE + p.cval; // Eval

exports.cEval = cEval;
var creload = b.cre + cload; // reload

exports.creload = creload;
var cReload = b.cRe + cload; // Reload

exports.cReload = cReload;
var cdemo = b.cd + p.cemo; // demo

exports.cdemo = cdemo;
var cDemo = b.cD + p.cemo; // Demo

exports.cDemo = cDemo;
var ccommon = b.cc + p.common; // common

exports.ccommon = ccommon;
var cCommon = b.cC + p.common; // Common

exports.cCommon = cCommon;
var cfunction = b.cf + b.cun + p.cction; // function

exports.cfunction = cfunction;
var cFunction = b.cF + b.cun + p.cction; // Function

exports.cFunction = cFunction;
var cfunctions = cfunction + b.cs; // functions

exports.cfunctions = cfunctions;
var cFunctions = cFunction + b.cs; // Functions

exports.cFunctions = cFunctions;
var cmultiple = p.cmulti + p.cple; // multiple

exports.cmultiple = cmultiple;
var cMultiple = p.cMulti + p.cple; // Multiple

exports.cMultiple = cMultiple;
var cJournal = b.cJo + b.cur + p.cnal; // Journal

exports.cJournal = cJournal;
var cExecution = p.cExe + b.ccu + p.ction; // Execution

exports.cExecution = cExecution;
var cpercent = p.cper + p.ccent; // percent

exports.cpercent = cpercent;
var cPercent = p.cPer + p.ccent; // Percent

exports.cPercent = cPercent;
var cbasic = b.cb + p.casic; // basic

exports.cbasic = cbasic;
var cBasic = b.cB + p.casic; // Basic

exports.cBasic = cBasic;
var codd = b.cod + b.cd; // odd

exports.codd = codd;
var cOdd = b.cOd + b.cd; // Odd

exports.cOdd = cOdd;
var ceven = b.ce + p.cven; // even

exports.ceven = ceven;
var cEven = b.cE + p.cven; // Even

exports.cEven = cEven;
var cEVEN = b.cE + p.cVEN; // EVEN

exports.cEVEN = cEVEN;
var cevent = b.ce + p.cvent; // event

exports.cevent = cevent;
var cEvent = b.cE + p.cvent; // Event

exports.cEvent = cEvent;
var cevents = cevent + b.cs; // events

exports.cevents = cevents;
var cEvents = cEvent + b.cs; // Events

exports.cEvents = cEvents;
var cface = b.cfa + b.cce; // face

exports.cface = cface;
var cFace = b.cFa + b.cce; // Face

exports.cFace = cFace;
var cargument = p.carg + b.cu + p.cment; // argument

exports.cargument = cargument;
var cArgument = p.cArg + b.cu + p.cment; // Argument

exports.cArgument = cArgument;
var cdrive = b.cd + p.crive; // drive

exports.cdrive = cdrive;
var cDrive = b.cD + p.crive; // Drive

exports.cDrive = cDrive;
var cdriven = cdrive + b.cn; // driven

exports.cdriven = cdriven;
var cDriven = cDrive + b.cn; // Driven

exports.cDriven = cDriven;
var cinterface = p.cinter + cface; // interface

exports.cinterface = cinterface;
var cInterface = p.cInter + cface; // Interface

exports.cInterface = cInterface;
var cfont = b.cf + p.cont; // font

exports.cfont = cfont;
var cFont = b.cF + p.cont; // Font

exports.cFont = cFont;
var cmodule = p.cmod + p.cule; // module

exports.cmodule = cmodule;
var cModule = p.cMod + p.cule; // Module

exports.cModule = cModule;
var ccolor = p.ccol + b.cor; // color

exports.ccolor = ccolor;
var cColor = p.cCol + b.cor; // Color

exports.cColor = cColor;
var ccolors = ccolor + b.cs; // colors

exports.ccolors = ccolors;
var cColors = cColor + b.cs; // Colors

exports.cColors = cColors;
var cold = b.col + b.cd; // old

exports.cold = cold;
var cOld = b.cOl + b.cd; // Old

exports.cOld = cOld;
var cbold = b.cb + cold; // bold

exports.cbold = cbold;
var cBold = b.cB + cold; // Bold

exports.cBold = cBold;
var cmost = b.cm + p.cost; // most

exports.cmost = cmost;
var cMost = b.cM + p.cost; // Most

exports.cMost = cMost;
var cpop = b.cpo + b.cp; // pop

exports.cpop = cpop;
var cPop = b.cPo + b.cp; // Pop

exports.cPop = cPop;
var cPOP = b.cPO + b.cP; // POP

exports.cPOP = cPOP;
var cpopular = cpop + p.cular; // popular

exports.cpopular = cpopular;
var cPopular = cPop + p.cular; // Popular

exports.cPopular = cPopular;
var calmost = b.cal + cmost; // almost

exports.calmost = calmost;
var cAlmost = b.cAl + cmost; // Almost

exports.cAlmost = cAlmost;
var cpal = b.cpa + b.cl; // pal

exports.cpal = cpal;
var cPal = b.cPa + b.cl; // Pal

exports.cPal = cPal;
var cpalindrom = cpal + b.cin + p.cdrom; // palindrom

exports.cpalindrom = cpalindrom;
var cPalindrom = cPal + b.cin + p.cdrom; // Palindrom

exports.cPalindrom = cPalindrom;
var caverage = p.cave + p.crage; // average

exports.caverage = caverage;
var cAverage = p.cAve + p.crage; // Average

exports.cAverage = cAverage;
var cclient = p.ccli + p.cent; // client

exports.cclient = cclient;
var cClient = p.cCli + p.cent; // Client

exports.cClient = cClient;
var crules = b.cr + p.cules; // rules

exports.crules = crules;
var cRules = b.cR + p.cules; // Rules

exports.cRules = cRules;
var ccustom = p.ccust + b.com; // custom

exports.ccustom = ccustom;
var cCustom = p.cCust + b.com; // Custom

exports.cCustom = cCustom;
var ccommand = p.ccom + p.cmand; // command

exports.ccommand = ccommand;
var cCommand = p.cCom + p.cmand; // Command

exports.cCommand = cCommand;
var cCOMMAND = p.cCOM + p.cMAND; // COMMAND

exports.cCOMMAND = cCOMMAND;
var ccommands = ccommand + b.cs; // commands

exports.ccommands = ccommands;
var cCommands = cCommand + b.cs; // Commands

exports.cCommands = cCommands;
var cqueue = b.cqu + b.ceu + b.ce; // queue

exports.cqueue = cqueue;
var cQueue = b.cQu + b.ceu + b.ce; // Queue

exports.cQueue = cQueue;
var cblob = b.cb + p.clob; // blob

exports.cblob = cblob;
var cBlob = b.cB + p.clob; // Blob

exports.cBlob = cBlob;
var cframe = b.cf + p.crame; // frame

exports.cframe = cframe;
var cFrame = b.cF + p.crame; // Frame

exports.cFrame = cFrame;
var calias = b.cal + p.cias; // alias

exports.calias = calias;
var cAlias = b.cAl + p.cias; // Alias

exports.cAlias = cAlias;
var caliases = calias + b.ces; // aliases

exports.caliases = caliases;
var cAliases = cAlias + b.ces; // Aliases

exports.cAliases = cAliases;
var csequencer = p.cseq + b.cue + p.cncer; // sequencer

exports.csequencer = csequencer;
var cSequencer = p.cSeq + b.cue + p.cncer; // Sequencer

exports.cSequencer = cSequencer;
var cprimary = p.cpri + p.cmary; // primary

exports.cprimary = cprimary;
var cPrimary = p.cPri + p.cmary; // Primary

exports.cPrimary = cPrimary;
var csecondary = u.csecond + p.cary; // secondary

exports.csecondary = csecondary;
var cSecondary = u.cSecond + p.cary; // Secondary

exports.cSecondary = cSecondary;
var ctertiary = p.ctert + p.ciary; // tertiary

exports.ctertiary = ctertiary;
var cTertiary = p.cTert + p.ciary; // Tertiary

exports.cTertiary = cTertiary;
var cdelimit = b.cde + climit; // delimit

exports.cdelimit = cdelimit;
var cDelimit = b.cDe + climit; // Delimit

exports.cDelimit = cDelimit;
var cdelimiter = cdelimit + b.cer; // delimiter

exports.cdelimiter = cdelimiter;
var cDelimiter = cDelimit + b.cer; // Delimiter

exports.cDelimiter = cDelimiter;
var cdelimiters = cdelimiter + b.cs; // delimiters

exports.cdelimiters = cdelimiters;
var cDelimiters = cDelimiter + b.cs; // Delimiters

exports.cDelimiters = cDelimiters;
var cdelimited = cdelimit + b.ced; // delimited

exports.cdelimited = cdelimited;
var cDelimited = cDelimit + b.ced; // Delimited

exports.cDelimited = cDelimited;
var cdelimiting = cdelimit + p.cing; // delimiting

exports.cdelimiting = cdelimiting;
var cDelimiting = cDelimit + p.cing; // Delimiting

exports.cDelimiting = cDelimiting;
var chelp = b.che + b.clp; // help

exports.chelp = chelp;
var cHelp = b.cHe + b.clp; // Help

exports.cHelp = cHelp;
var cprint = b.cp + p.crint; // print

exports.cprint = cprint;
var cPrint = b.cP + p.crint; // Print

exports.cPrint = cPrint;
var chive = b.ch + p.cive; // hive

exports.chive = chive;
var cHive = b.cH + p.cive; // Hive

exports.cHive = cHive;
var cgenerator = p.cgen + b.cer + p.cator; // generator

exports.cgenerator = cgenerator;
var cGenerator = p.cGen + b.cer + p.cator; // Generator

exports.cGenerator = cGenerator;
var cindex = b.cin + p.cdex; // index

exports.cindex = cindex;
var cIndex = b.cIn + p.cdex; // Index

exports.cIndex = cIndex;
var cabout = b.ca + p.cbout; // about

exports.cabout = cabout;
var cAbout = b.cA + p.cbout; // About

exports.cAbout = cAbout;
var cstart = b.cs + p.ctart; // start

exports.cstart = cstart;
var cStart = b.cS + p.ctart; // Start

exports.cStart = cStart;
var cstarts = cstart + b.cs; // starts

exports.cstarts = cstarts;
var cStarts = cStart + b.cs; // Starts

exports.cStarts = cStarts;
var cstarted = cstart + b.ced; // started

exports.cstarted = cstarted;
var cStarted = cStart + b.ced; // Started

exports.cStarted = cStarted;
var cstartup = cstart + b.cup; // startup

exports.cstartup = cstartup;
var coutput = cout + cput; // output

exports.coutput = coutput;
var cOutput = cOut + cput; // Output

exports.cOutput = cOutput;
var cmetric = p.cmet + p.cric; // metric

exports.cmetric = cmetric;
var cMetric = p.cMet + p.cric; // Metric

exports.cMetric = cMetric;
var cmetrics = cmetric + b.cs; // metrics

exports.cmetrics = cmetrics;
var cMetrics = cMetric + b.cs; // Metrics

exports.cMetrics = cMetrics;
var crack = b.cr + p.cack; // rack

exports.crack = crack;
var cRack = b.cR + p.cack; // Rack

exports.cRack = cRack;
var ctrack = b.ct + crack; // track

exports.ctrack = ctrack;
var cTrack = b.cT + crack; // Track

exports.cTrack = cTrack;
var ctracking = ctrack + p.cing; // tracking

exports.ctracking = ctracking;
var cTracking = cTrack + p.cing; // Tracking

exports.cTracking = cTracking;
var cstack = b.cst + p.cack; // stack

exports.cstack = cstack;
var cStack = b.cSt + p.cack; // Stack

exports.cStack = cStack;
var cstandard = b.cst + cand + p.card; // standard

exports.cstandard = cstandard;
var cStandard = b.cSt + cand + p.card; // Standard

exports.cStandard = cStandard;
var cdeviation = p.cdev + b.cia + p.ction; // deviation

exports.cdeviation = cdeviation;
var cDeviation = p.cDev + b.cia + p.ction; // Deviation

exports.cDeviation = cDeviation;
var canalysis = p.cana + b.cly + p.csis; // analysis

exports.canalysis = canalysis;
var cAnalysis = p.cAna + b.cly + p.csis; // Analysis

exports.cAnalysis = cAnalysis;
var cclear = b.ccl + p.cear; // clear

exports.cclear = cclear;
var cClear = b.cCl + p.cear; // Clear

exports.cClear = cClear;
var cversion = p.cver + p.csion; // version

exports.cversion = cversion;
var cVersion = p.cVer + p.csion; // Version

exports.cVersion = cVersion;
var ccontrol = p.ccon + p.ctrol; // control

exports.ccontrol = ccontrol;
var cControl = p.cCon + p.ctrol; // Control

exports.cControl = cControl;
var cperform = p.cper + cform; // perform

exports.cperform = cperform;
var cPerform = p.cPer + cform; // Perform

exports.cPerform = cPerform;
var cperformance = cperform + p.cance; // performance

exports.cperformance = cperformance;
var cPerformance = cPerform + p.cance; // Performance

exports.cPerformance = cPerformance;
var cconversion = p.ccon + cversion; // conversion

exports.cconversion = cconversion;
var cConversion = p.cCon + cversion; // Conversion

exports.cConversion = cConversion;
var cpass = b.cp + p.cass; // pass

exports.cpass = cpass;
var cPass = b.cP + p.cass; // Pass

exports.cPass = cPass;
var cPASS = b.cP + p.cASS; // PASS

exports.cPASS = cPASS;
var cpassed = cpass + b.ced; // passed

exports.cpassed = cpassed;
var cPassed = cPass + b.ced; // Passed

exports.cPassed = cPassed;
var cPASSED = cPASS + b.cED; // PASSED

exports.cPASSED = cPASSED;
var cpassing = cpass + p.cing; // passing

exports.cpassing = cpassing;
var cPassing = cPass + p.cing; // Passing

exports.cPassing = cPassing;
var cbypass = b.cby + cpass; // bypass

exports.cbypass = cbypass;
var cBypass = b.cBy + cpass; // Bypass

exports.cBypass = cBypass;
var cbypasses = cbypass + b.ces; // bypasses

exports.cbypasses = cbypasses;
var cBypasses = cBypass + b.ces; // Bypasses

exports.cBypasses = cBypasses;
var cbypassed = cbypass + b.ced; // bypassed

exports.cbypassed = cbypassed;
var cBypassed = cBypass + b.ced; // Bypassed

exports.cBypassed = cBypassed;
var cbypassing = cbypass + p.cing; // bypassing

exports.cbypassing = cbypassing;
var cBypassing = cBypass + p.cing; // Bypassing

exports.cBypassing = cBypassing;
var cfail = b.cf + p.cail; // fail

exports.cfail = cfail;
var cFail = b.cF + p.cail; // Fail

exports.cFail = cFail;
var cFAIL = b.cF + p.cAIL; // FAIL

exports.cFAIL = cFAIL;
var cfailed = cfail + b.ced; // failed

exports.cfailed = cfailed;
var cFailed = cFail + b.ced; // Failed

exports.cFailed = cFailed;
var cFAILED = cFAIL + b.cED; // FAILED

exports.cFAILED = cFAILED;
var cfailure = cfail + p.cure; // failure

exports.cfailure = cfailure;
var cFailure = cFail + p.cure; // Failure

exports.cFailure = cFailure;
var csimplified = p.csim + b.cpl + p.cified; // simplified

exports.csimplified = csimplified;
var cSimplified = p.cSim + b.cpl + p.cified; // Simplified

exports.cSimplified = cSimplified;
var ctraditional = p.ctrad + b.ci + p.ctional; // traditional

exports.ctraditional = ctraditional;
var cTraditional = p.cTrad + b.ci + p.ctional; // Traditional

exports.cTraditional = cTraditional;
var cground = b.cgr + p.cound; // ground

exports.cground = cground;
var cGround = b.cGr + p.cound; // Ground

exports.cGround = cGround;
var cyell = b.cye + b.cll; // yell

exports.cyell = cyell;
var cYell = b.cYe + b.cll; // Yell

exports.cYell = cYell;
var clack = b.cla + b.cck; // lack

exports.clack = clack;
var cLack = b.cLa + b.cck; // Lack

exports.cLack = cLack;
var clane = b.cl + p.cane; // lane

exports.clane = clane;
var cLane = b.cL + p.cane; // Lane

exports.cLane = cLane;
var csection = p.csec + p.ction; // section

exports.csection = csection;
var cSection = p.cSec + p.ction; // Section

exports.cSection = cSection;
var csections = csection + b.cs; // sections

exports.csections = csections;
var cSections = cSection + b.cs; // Sections

exports.cSections = cSections;
var cunit = p.cuni + b.ct; // unit

exports.cunit = cunit;
var cUnit = p.cUni + b.ct; // Unit

exports.cUnit = cUnit;
var cunits = cunit + b.cs;
exports.cunits = cunits;
var cUnits = cUnit + b.cs;
exports.cUnits = cUnits;
var cgeneric = p.cgen + b.ce + p.cric; // generic

exports.cgeneric = cgeneric;
var cGeneric = p.cGen + b.ce + p.cric; // Generic

exports.cGeneric = cGeneric;
var cisotope = p.ciso + p.ctope; // isotope

exports.cisotope = cisotope;
var cIsotope = p.cIso + p.ctope; // Isotope

exports.cIsotope = cIsotope;
var cphonics = p.cphon + p.cics; // phonics

exports.cphonics = cphonics;
var cPhonics = p.cPhon + p.cics; // Phonics

exports.cPhonics = cPhonics;
var cshape = p.csha + b.cpe; // shape

exports.cshape = cshape;
var cShape = p.cSha + b.cpe; // Shape

exports.cShape = cShape;
var cexport = b.cex + cport; // export

exports.cexport = cexport;
var cExport = b.cEx + cport; // Export

exports.cExport = cExport;
var cplay = b.cp + p.clay; // play

exports.cplay = cplay;
var cPlay = b.cP + p.clay; // Play

exports.cPlay = cPlay;
var cdisplay = b.cd + b.cis + cplay; // display

exports.cdisplay = cdisplay;
var cDisplay = b.cD + b.cis + cplay; // Display

exports.cDisplay = cDisplay;
var csum = b.csu + b.cm; // sum

exports.csum = csum;
var cSum = b.cSu + b.cm; // Sum

exports.cSum = cSum;
var csummary = csum + p.cmary; // summary

exports.csummary = csummary;
var cSummary = cSum + p.cmary; // Summary

exports.cSummary = cSummary;
var csuggest = p.csug + p.cgest; // suggest

exports.csuggest = csuggest;
var cSuggest = p.cSug + p.cgest; // Suggest

exports.cSuggest = cSuggest;
var csuggested = csuggest + b.ced; // suggested

exports.csuggested = csuggested;
var cSuggested = cSuggest + b.ced; // Suggested

exports.cSuggested = cSuggested;
var cline = b.cli + b.cne; // line

exports.cline = cline;
var cLine = b.cLi + b.cne; // Line

exports.cLine = cLine;
var cdocument = g.cdoc + b.cu + p.cment; // document

exports.cdocument = cdocument;
var cDocument = g.cDoc + b.cu + p.cment; // Document

exports.cDocument = cDocument;
var cqualified = b.cq + p.cual + p.cified; // qualified

exports.cqualified = cqualified;
var cQualified = b.cQ + p.cual + p.cified; // Qualified

exports.cQualified = cQualified;
var cfix = b.cf + b.cix; // fix

exports.cfix = cfix;
var cFix = b.cF + b.cix; // Fix

exports.cFix = cFix;
var cprefix = p.cpre + cfix; // prefix

exports.cprefix = cprefix;
var cPrefix = p.cPre + cfix; // Prefix

exports.cPrefix = cPrefix;
var csuffix = p.csuf + cfix; // suffix

exports.csuffix = csuffix;
var cSuffix = p.cSuf + cfix; // Suffix

exports.cSuffix = cSuffix;
var cdevelop = p.cdev + b.ce + p.clop; // develop

exports.cdevelop = cdevelop;
var cDevelop = p.cDev + b.ce + p.clop; // Develop

exports.cDevelop = cDevelop;
var cDEVELOP = p.cDEV + b.cE + p.cLOP; // DEVELOP

exports.cDEVELOP = cDEVELOP;
var cdevelopment = cdevelop + p.cment; // development

exports.cdevelopment = cdevelopment;
var cDevelopment = cDevelop + p.cment; // Development

exports.cDevelopment = cDevelopment;
var cDEVELOPMENT = cDEVELOP + p.cMENT; // DEVELOPMENT

exports.cDEVELOPMENT = cDEVELOPMENT;
var cproduction = p.cprod + b.cuc + p.ction; // production

exports.cproduction = cproduction;
var cProduction = p.cProd + b.cuc + p.ction; // Production

exports.cProduction = cProduction;
var cPRODUCTION = p.cPROD + b.cUC + p.cTION; // PRODUCTION

exports.cPRODUCTION = cPRODUCTION;
var cstorage = p.cstor + p.cage; // storage

exports.cstorage = cstorage;
var cStorage = p.cStor + p.cage; // Storage

exports.cStorage = cStorage;
var cstore = p.cstor + b.ce; // store

exports.cstore = cstore;
var cStore = p.cStor + b.ce; // Store

exports.cStore = cStore;
var cstored = p.cstor + b.ced; // stored

exports.cstored = cstored;
var cStored = p.cStor + b.ced; // Stored

exports.cStored = cStored;
var cunique = p.cuni + p.cque; // unique

exports.cunique = cunique;
var cUnique = p.cUni + p.cque; // Unique

exports.cUnique = cUnique;
var cduplicate = p.cdup + b.cli + p.ccate; // duplicate

exports.cduplicate = cduplicate;
var cDuplicate = p.cDup + b.cli + p.ccate; // Duplicate

exports.cDuplicate = cDuplicate;
var cplease = b.cpl + p.cease; // please

exports.cplease = cplease;
var cPlease = b.cPl + p.cease; // Please

exports.cPlease = cPlease;
var center = b.cen + p.cter; // enter

exports.center = center;
var cEnter = b.cEn + p.cter; // Enter

exports.cEnter = cEnter;
var centers = center + b.cs; // enters

exports.centers = centers;
var cEnters = cEnter + b.cs; // Enters

exports.cEnters = cEnters;
var centered = center + b.ced; // entered

exports.centered = centered;
var cEntered = cEnter + b.ced; // Entered

exports.cEntered = cEntered;
var centering = center + p.cing; // entering

exports.centering = centering;
var cEntering = cEnter + p.cing; // Entering

exports.cEntering = cEntering;
var cwere = b.cw + p.cere; // were

exports.cwere = cwere;
var cWere = b.cW + p.cere; // Were

exports.cWere = cWere;
var cwhere = b.cwh + p.cere; // where

exports.cwhere = cwhere;
var cWhere = b.cWh + p.cere; // Where

exports.cWhere = cWhere;
var cher = b.che + b.cr; // her

exports.cher = cher;
var cHer = b.cHe + b.cr; // Her

exports.cHer = cHer;
var chim = b.chi + b.cm; // him

exports.chim = chim;
var cHim = b.cHi + b.cm; // Him

exports.cHim = cHim;
var chers = cher + b.cs; // hers

exports.chers = chers;
var cHers = cHer + b.cs; // Hers

exports.cHers = cHers;
var chis = b.chi + b.cs; // his

exports.chis = chis;
var cHis = b.cHi + b.cs; // His

exports.cHis = cHis;
var cthem = b.cth + b.cem; // them

exports.cthem = cthem;
var cThem = b.cTh + b.cem; // Them

exports.cThem = cThem;
var cthose = b.cth + p.cose; // those

exports.cthose = cthose;
var cThose = b.cTh + p.cose; // Those

exports.cThose = cThose;
var cthat = b.cth + b.cat; // that

exports.cthat = cthat;
var cThat = b.cTh + b.cat; // That

exports.cThat = cThat;
var cthis = b.ct + chis; // this

exports.cthis = cthis;
var cThis = b.cT + chis; // This

exports.cThis = cThis;
var cwhen = b.cwh + b.cen; // when

exports.cwhen = cwhen;
var cWhen = b.cWh + b.cen; // When

exports.cWhen = cWhen;
var cwhat = b.cwh + b.cat; // what

exports.cwhat = cwhat;
var cWhat = b.cWh + b.cat; // What

exports.cWhat = cWhat;
var chow = b.cho + b.cw; // how

exports.chow = chow;
var cHow = b.cHo + b.cw; // How

exports.cHow = cHow;
var cwhy = b.cwh + b.cy; // why

exports.cwhy = cwhy;
var cWhy = b.cWh + b.cy; // Why

exports.cWhy = cWhy;
var cother = b.cot + cher; // other

exports.cother = cother;
var cOther = b.cOt + cher; // Other

exports.cOther = cOther;
var cabreviation = b.cab + p.crev + b.cia + p.ction; // abreviation

exports.cabreviation = cabreviation;
var cAbreviation = b.cAb + p.crev + b.cia + p.ction; // Abreviation

exports.cAbreviation = cAbreviation;
var cabreviations = cabreviation + b.cs; // abreviations

exports.cabreviations = cabreviations;
var cAbreviations = cAbreviation + b.cs; // Abreviations

exports.cAbreviations = cAbreviations;
var cacronym = b.cac + p.cron + b.cym; // acronym

exports.cacronym = cacronym;
var cAcronym = b.cAc + p.cron + b.cym; // Acronym

exports.cAcronym = cAcronym;
var cacronyms = cacronym + b.cs; // acronyms

exports.cacronyms = cacronyms;
var cAcronyms = cAcronym + b.cs; // Acronyms

exports.cAcronyms = cAcronyms;
var csolve = b.cs + p.colve; // solve

exports.csolve = csolve;
var cSolve = b.cS + p.colve; // Solve

exports.cSolve = cSolve;
var cLehmer = b.cLe + b.chm + b.cer; // Lehmer

exports.cLehmer = cLehmer;
var cdeep = b.cd + p.ceep; // deep

exports.cdeep = cdeep;
var cDeep = b.cD + p.ceep; // Deep

exports.cDeep = cDeep;
var cclone = b.ccl + n.cone; // clone

exports.cclone = cclone;
var cClone = b.cCl + n.cone; // Clone

exports.cClone = cClone;
var ccursive = p.ccur + p.csive; // cursive

exports.ccursive = ccursive;
var cCursive = p.cCur + p.csive; // Cursive

exports.cCursive = cCursive;
var crecursive = b.cre + ccursive; // recursive

exports.crecursive = crecursive;
var cRecursive = b.cRe + ccursive; // Recursive

exports.cRecursive = cRecursive;
var cexpansion = p.cexp + b.can + p.csion; // expansion

exports.cexpansion = cexpansion;
var cExpansion = p.cExp + b.can + p.csion; // Expansion

exports.cExpansion = cExpansion;
var cscreen = b.csc + p.creen; // screen

exports.cscreen = cscreen;
var cScreen = b.cSc + p.creen; // Screen

exports.cScreen = cScreen;
var cyou = b.cyo + b.cu; // you

exports.cyou = cyou;
var cYou = b.cYo + b.cu; // You

exports.cYou = cYou;
var cwould = b.cw + p.could; // would

exports.cwould = cwould;
var cWould = b.cW + p.could; // Would

exports.cWould = cWould;
var cshould = b.csh + p.could; // should

exports.cshould = cshould;
var cShould = b.cSh + p.could; // Should

exports.cShould = cShould;
var ccould = b.cc + p.could; // could

exports.ccould = ccould;
var cCould = b.cC + p.could; // Could

exports.cCould = cCould;
var clike = b.cl + p.cike; // like

exports.clike = clike;
var cLike = b.cL + p.cike; // Like

exports.cLike = cLike;
var cfine = b.cf + p.cine; // fine

exports.cfine = cfine;
var cFine = b.cF + p.cine; // Fine

exports.cFine = cFine;
var cdefine = b.cde + cfine; // define

exports.cdefine = cdefine;
var cDefine = b.cDe + cfine; // Define

exports.cDefine = cDefine;
var cdefined = cdefine + b.cd; // defined

exports.cdefined = cdefined;
var cDefined = cDefine + b.cd; // Defined

exports.cDefined = cDefined;
var cdefines = cdefine + b.cs; // defines

exports.cdefines = cdefines;
var cDefines = cDefine + b.cs; // Defines

exports.cDefines = cDefines;
var cdefining = b.cde + p.cfin + p.cing; // defining

exports.cdefining = cdefining;
var cDefining = b.cDe + p.cfin + p.cing; // Defining

exports.cDefining = cDefining;
var cfill = b.cf + p.cill; // fill

exports.cfill = cfill;
var cFill = b.cF + p.cill; // Fill

exports.cFill = cFill;
var cfulfillment = p.cful + cfill + p.cment; // fulfillment

exports.cfulfillment = cfulfillment;
var cFulfillment = p.cFul + cfill + p.cment; // Fulfillment

exports.cFulfillment = cFulfillment;
var coptimized = p.copt + b.cim + p.cized; // optimized

exports.coptimized = coptimized;
var cOptimized = p.cOpt + b.cim + p.cized; // Optimized

exports.cOptimized = cOptimized;
var csome = b.cs + p.come; // some

exports.csome = csome;
var cSome = b.cS + p.come; // Some

exports.cSome = cSome;
var ccomb = b.cc + p.comb; // comb

exports.ccomb = ccomb;
var cComb = b.cC + p.comb; // Comb

exports.cComb = cComb;
var ccombine = ccomb + p.cine; // combine

exports.ccombine = ccombine;
var cCombine = cComb + p.cine; // Combine

exports.cCombine = cCombine;
var ccombines = ccombine + b.cs; // combines

exports.ccombines = ccombines;
var cCombines = cCombine + b.cs; // Combines

exports.cCombines = cCombines;
var ccombined = ccombine + b.cd; // combined

exports.ccombined = ccombined;
var cCombined = cCombine + b.cd; // Combined

exports.cCombined = cCombined;
var ccombining = ccomb + b.cin + p.cing; // combining

exports.ccombining = ccombining;
var cCombining = cComb + b.cin + p.cing; // Combining

exports.cCombining = cCombining;
var crecombine = b.cre + ccombine; // recombine

exports.crecombine = crecombine;
var cRecombine = b.cRe + ccombine; // Recombine

exports.cRecombine = cRecombine;
var ccombination = ccomb + b.cin + p.cation; // combination

exports.ccombination = ccombination;
var cCombination = cComb + b.cin + p.cation; // Combination

exports.cCombination = cCombination;
var ccombinations = ccombination + b.cs; // combinations

exports.ccombinations = ccombinations;
var cCombinations = cCombination + b.cs; // Combinations

exports.cCombinations = cCombinations;
var crecognizer = p.crec + b.cog + b.cn + p.cizer; // recognizer

exports.crecognizer = crecognizer;
var cRecognizer = p.cRec + b.cog + b.cn + p.cizer; // Recognizer

exports.cRecognizer = cRecognizer;
var cpat = b.cpa + b.ct; // pat

exports.cpat = cpat;
var cPat = b.cPa + b.ct; // Pat

exports.cPat = cPat;
var cpatt = cpat + b.ct; // patt

exports.cpatt = cpatt;
var cPatt = cPat + b.ct; // Patt

exports.cPatt = cPatt;
var cpattern = cpatt + p.cern; // pattern

exports.cpattern = cpattern;
var cPattern = cPatt + p.cern; // Pattern

exports.cPattern = cPattern;
var cpatterns = cpattern + b.cs; // patterns

exports.cpatterns = cpatterns;
var cPatterns = cPattern + b.cs; // Patterns

exports.cPatterns = cPatterns;
var ccoma = g.ccom + b.ca; // coma

exports.ccoma = ccoma;
var cComa = g.cCom + b.ca; // Coma

exports.cComa = cComa;
var ccomas = ccoma + b.cs; // comas

exports.ccomas = ccomas;
var cComas = cComa + b.cs; // Comas

exports.cComas = cComas;
var cseparate = b.cse + b.cpa + p.crate; // separate

exports.cseparate = cseparate;
var cSeparate = b.cSe + b.cpa + p.crate; // Separate

exports.cSeparate = cSeparate;
var cseparated = cseparate + b.cd; // separated

exports.cseparated = cseparated;
var cSeparated = cSeparate + b.cd; // Separated

exports.cSeparated = cSeparated;
var csea = b.cse + b.ca; // sea

exports.csea = csea;
var cSea = b.cSe + b.ca; // Sea

exports.cSea = cSea;
var csearch = csea + p.crch; // search

exports.csearch = csearch;
var cSearch = cSea + p.crch; // Search

exports.cSearch = cSearch;
var csearches = csearch + b.ces; // searches

exports.csearches = csearches;
var cSearches = cSearch + b.ces; // Searches

exports.cSearches = cSearches;
var csearched = csearch + b.ced; // searched

exports.csearched = csearched;
var cSearched = cSearch + b.ced; // Searched

exports.cSearched = cSearched;
var csearching = csearch + p.cing; // searching

exports.csearching = csearching;
var cSearching = cSearch + p.cing; // Searching

exports.cSearching = cSearching;
var cneed = b.cn + p.ceed; // need

exports.cneed = cneed;
var cNeed = b.cN + p.ceed; // Need

exports.cNeed = cNeed;
var cimplement = b.cim + p.cple + p.cment; // implement

exports.cimplement = cimplement;
var cImplement = b.cIm + p.cple + p.cment; // Implement

exports.cImplement = cImplement;
var cimplements = cimplement + b.cs; // implements

exports.cimplements = cimplements;
var cImplements = cImplement + b.cs; // Implements

exports.cImplements = cImplements;
var cimplementation = cimplement + p.cation; // implementation

exports.cimplementation = cimplementation;
var cImplementation = cImplement + p.cation; // Implementation

exports.cImplementation = cImplementation;
var cgoing = b.cgo + p.cing; // going

exports.cgoing = cgoing;
var cGoing = b.cGo + p.cing; // Going

exports.cGoing = cGoing;
var cmain = b.cm + p.cain; // main

exports.cmain = cmain;
var cMain = b.cM + p.cain; // Main

exports.cMain = cMain;
var cprogram = p.cpro + b.cg + p.cram; // program

exports.cprogram = cprogram;
var cProgram = p.cPro + b.cg + p.cram; // Program

exports.cProgram = cProgram;
var cloop = b.cl + p.coop; // loop

exports.cloop = cloop;
var cLoop = b.cL + p.coop; // Loop

exports.cLoop = cLoop;
var cgood = b.cg + p.cood; // good

exports.cgood = cgood;
var cGood = b.cG + p.cood; // Good

exports.cGood = cGood;
var cbye = b.cby + b.ce; // bye

exports.cbye = cbye;
var cBye = b.cBy + b.ce; // Bye

exports.cBye = cBye;
var chave = b.ch + p.cave; // have

exports.chave = chave;
var cHave = b.cH + p.cave; // Have

exports.cHave = cHave;
var cnice = b.cn + p.cice; // nice

exports.cnice = cnice;
var cNice = b.cN + p.cice; // Nice

exports.cNice = cNice;
var cday = b.cda + b.cy; // day

exports.cday = cday;
var cDay = b.cDa + b.cy; // Day

exports.cDay = cDay;
var cstay = b.cs + p.ctay; // stay

exports.cstay = cstay;
var cStay = b.cS + p.ctay; // Stay

exports.cStay = cStay;
var csafe = b.cs + p.cafe; // safe

exports.csafe = csafe;
var cSafe = b.cS + p.cafe; // Safe

exports.cSafe = cSafe;
var cwas = b.cwa + b.cs; // was

exports.cwas = cwas;
var cWas = b.cWa + b.cs; // Was

exports.cWas = cWas;
var cbig = b.cbi + b.cg; // big

exports.cbig = cbig;
var cBig = b.cBi + b.cg; // Big

exports.cBig = cBig;
var cbigger = cbig + p.cger; // bigger

exports.cbigger = cbigger;
var cBigger = cBig + p.cger; // Bigger

exports.cBigger = cBigger;
var cbiggest = cbig + p.cgest; // biggest

exports.cbiggest = cbiggest;
var cBiggest = cBig + p.cgest; // Biggest

exports.cBiggest = cBiggest;
var cspecific = p.cspec + p.cific; // specific

exports.cspecific = cspecific;
var cSpecific = p.cSpec + p.cific; // Specific

exports.cSpecific = cSpecific;
var cspecified = p.cspec + p.cified; // specified

exports.cspecified = cspecified;
var cSpecified = p.cSpec + p.cified; // Specified

exports.cSpecified = cSpecified;
var cdomain = b.cdo + cmain; // domain

exports.cdomain = cdomain;
var cDomain = b.cDo + cmain; // Domain

exports.cDomain = cDomain;
var cmode = b.cm + p.code; // mode

exports.cmode = cmode;
var cMode = b.cM + p.code; // Mode

exports.cMode = cMode;
var csymbol = p.csym + p.cbol; // symbol

exports.csymbol = csymbol;
var cSymbol = p.cSym + p.cbol; // Symbol

exports.cSymbol = cSymbol;
var csymbols = csymbol + b.cs; // symbols

exports.csymbols = csymbols;
var cSymbols = cSymbol + b.cs; // Symbols

exports.cSymbols = cSymbols;
var cresolve = p.cres + p.colv + b.ce; // resolve

exports.cresolve = cresolve;
var cResolve = p.cRes + p.colv + b.ce; // Resolve

exports.cResolve = cResolve;
var cresolved = cresolve + b.cd; // resolved

exports.cresolved = cresolved;
var cResolved = cResolve + b.cd; // Resolved

exports.cResolved = cResolved;
var cresolving = p.cres + p.colv + p.cing; // resolving

exports.cresolving = cresolving;
var cResolving = p.cRes + p.colv + p.cing; // Resolving

exports.cResolving = cResolving;
var cvariation = p.cvar + b.cia + p.ction; // variation

exports.cvariation = cvariation;
var cVariation = p.cVar + b.cia + p.ction; // Variation

exports.cVariation = cVariation;
var cterm = b.ct + p.cerm; // term

exports.cterm = cterm;
var cTerm = b.cT + p.cerm; // Term

exports.cTerm = cTerm;
var ccost = b.cc + p.cost; // cost

exports.ccost = ccost;
var cCost = b.cC + p.cost; // Cost

exports.cCost = cCost;
var cperiod = p.cper + p.ciod; // period

exports.cperiod = cperiod;
var cPeriod = p.cPer + p.ciod; // Period

exports.cPeriod = cPeriod;
var ccannot = ccan + g.cnot; // cannot

exports.ccannot = ccannot;
var cCannot = cCan + g.cnot; // Cannot

exports.cCannot = cCannot;
var cused = cuse + b.cd; // used

exports.cused = cused;
var cUsed = cUse + b.cd; // Used

exports.cUsed = cUsed;
var cusing = b.cus + p.cing; // using

exports.cusing = cusing;
var cUsing = b.cUs + p.cing; // Using

exports.cUsing = cUsing;
var cbreak = b.cbr + p.ceak; // break

exports.cbreak = cbreak;
var cBreak = b.cBr + p.ceak; // Break

exports.cBreak = cBreak;
var cinto = b.ci + p.cnto; // into

exports.cinto = cinto;
var cInto = b.cI + p.cnto; // Into

exports.cInto = cInto;
var cunable = b.cun + p.cable; // unable

exports.cunable = cunable;
var cUnable = b.cUn + p.cable; // Unable

exports.cUnable = cUnable;
var cnow = b.cno + b.cw; // now

exports.cnow = cnow;
var cNow = b.cNo + b.cw; // Now

exports.cNow = cNow;
var cknow = b.ck + cnow; // know

exports.cknow = cknow;
var cKnow = b.cK + cnow; // Know

exports.cKnow = cKnow;
var cknown = cknow + b.cn; // known

exports.cknown = cknown;
var cKnown = cKnow + b.cn; // Known

exports.cKnown = cKnown;
var cunknown = b.cun + cknown; // unknown

exports.cunknown = cunknown;
var cUnknown = b.cUn + cknown; // Unknown

exports.cUnknown = cUnknown;
var ctemp = b.ct + p.cemp; // temp

exports.ctemp = ctemp;
var cTemp = b.cT + p.cemp; // Temp

exports.cTemp = cTemp;
var ctempt = ctemp + b.ct; // tempt

exports.ctempt = ctempt;
var cTempt = cTemp + b.ct; // Tempt

exports.cTempt = cTempt;
var cattempt = b.cat + ctempt; // attempt

exports.cattempt = cattempt;
var cAttempt = b.cA + b.ct + ctempt; // Attempt

exports.cAttempt = cAttempt;
var cattempts = cattempt + b.cs; // attempts

exports.cattempts = cattempts;
var cAttempts = cAttempt + b.cs; // Attempts

exports.cAttempts = cAttempts;
var cattempted = cattempt + b.ced; // attempted

exports.cattempted = cattempted;
var cAttempted = cAttempt + b.ced; // Attempted

exports.cAttempted = cAttempted;
var cattempting = cattempt + p.cing; // attempting

exports.cattempting = cattempting;
var cAttempting = cAttempt + p.cing; // Attempting

exports.cAttempting = cAttempting;
var cmat = b.cma + b.ct; // mat

exports.cmat = cmat;
var cMat = b.cMa + b.ct; // Mat

exports.cMat = cMat;
var cformat = cfor + cmat; // format

exports.cformat = cformat;
var cFormat = cFor + cmat; // Format

exports.cFormat = cFormat;
var cformats = cformat + b.cs; // formats

exports.cformats = cformats;
var cFormats = cFormat + b.cs; // Formats

exports.cFormats = cFormats;
var cformatted = cformat + p.cted; // formatted

exports.cformatted = cformatted;
var cFormatted = cFormat + p.cted; // Formatted

exports.cFormatted = cFormatted;
var cformatting = cformat + b.ct + p.cing; // formatting

exports.cformatting = cformatting;
var cFormatting = cFormat + b.ct + p.cing; // Formatting

exports.cFormatting = cFormatting;
var creformat = b.cre + cformat; // reformat

exports.creformat = creformat;
var cReformat = b.cRe + cformat; // Reformat

exports.cReformat = cReformat;
var creformats = creformat + b.cs; // reformats

exports.creformats = creformats;
var cReformats = cReformat + b.cs; // Reformats

exports.cReformats = cReformats;
var creformated = creformat + b.ced; // reformatted

exports.creformated = creformated;
var cReformated = cReformat + b.ced; // Reformatted

exports.cReformated = cReformated;
var creformating = creformat + p.cing; // reformatting

exports.creformating = creformating;
var cReformating = cReformat + p.cing; // Reformatting

exports.cReformating = cReformating;
var ccorrect = p.ccor + p.crect; // correct

exports.ccorrect = ccorrect;
var cCorrect = p.cCor + p.crect; // Correct

exports.cCorrect = cCorrect;
var ccorrects = ccorrect + b.cs; // corrects

exports.ccorrects = ccorrects;
var cCorrects = cCorrect + b.cs; // Corrects

exports.cCorrects = cCorrects;
var ccorrected = ccorrect + b.ced; // corrected

exports.ccorrected = ccorrected;
var cCorrected = cCorrect + b.ced; // Corrected

exports.cCorrected = cCorrected;
var ccorrectly = ccorrect + b.cly; // correctly

exports.ccorrectly = ccorrectly;
var cCorrectly = cCorrect + b.cly; // Correctly

exports.cCorrectly = cCorrectly;
var ccorrecting = ccorrect + p.cing; // correcting

exports.ccorrecting = ccorrecting;
var cCorrecting = cCorrect + p.cing; // Correcting

exports.cCorrecting = cCorrecting;
var cbut = b.cbu + b.ct; // but

exports.cbut = cbut;
var cBut = b.cBu + b.ct; // But

exports.cBut = cBut;
var crent = b.cr + p.cent; // rent

exports.crent = crent;
var cRent = b.cR + p.cent; // Rent

exports.cRent = cRent;
var ccurrent = p.ccur + crent; // current

exports.ccurrent = ccurrent;
var cCurrent = p.cCur + crent; // Current

exports.cCurrent = cCurrent;
var cdelta = b.cde + p.clta; // delta

exports.cdelta = cdelta;
var cDelta = b.cDe + p.clta; // Delta

exports.cDelta = cDelta;
var cbeing = b.cbe + p.cing; // being

exports.cbeing = cbeing;
var cBeing = b.cBe + p.cing; // Being

exports.cBeing = cBeing;
var cskip = b.csk + b.cip; // skip

exports.cskip = cskip;
var cSkip = b.cSk + b.cip; // Skip

exports.cSkip = cSkip;
var cskips = cskip + b.cs; // skips

exports.cskips = cskips;
var cSkips = cSkip + b.cs; // Skips

exports.cSkips = cSkips;
var cskiped = cskip + b.ced; // skiped

exports.cskiped = cskiped;
var cSkiped = cSkip + b.ced; // Skiped

exports.cSkiped = cSkiped;
var cskiping = cskip + p.cing; // skiping

exports.cskiping = cskiping;
var cSkiping = cSkip + p.cing; // Skiping

exports.cSkiping = cSkiping;
var chad = b.cha + b.cd; // had

exports.chad = chad;
var cHad = b.cHa + b.cd; // Had

exports.cHad = cHad;
var cchange = b.cch + p.cange; // change

exports.cchange = cchange;
var cChange = b.cCh + p.cange; // Change

exports.cChange = cChange;
var cCHANGE = b.cCH + p.cANGE; // CHANGE

exports.cCHANGE = cCHANGE;
var cpush = b.cp + p.cush; // push

exports.cpush = cpush;
var cPush = b.cP + p.cush; // Push

exports.cPush = cPush;
var cPUSH = b.cP + p.cUSH; // PUSH

exports.cPUSH = cPUSH;
var cpushes = cpush + b.ces; // pushes

exports.cpushes = cpushes;
var cPushes = cPush + b.ces; // Pushes

exports.cPushes = cPushes;
var cpushed = cpush + b.ced; // pushed

exports.cpushed = cpushed;
var cPushed = cPush + b.ced; // Pushed

exports.cPushed = cPushed;
var cpushing = cpush + p.cing; // pushing

exports.cpushing = cpushing;
var cPushing = cPush + p.cing; // Pushing

exports.cPushing = cPushing;
var cexpand = b.cex + p.cpand; // expand

exports.cexpand = cexpand;
var cExpand = b.cEx + p.cpand; // Expand

exports.cExpand = cExpand;
var cexpands = cexpand + b.cs; // expands

exports.cexpands = cexpands;
var cExpands = cExpand + b.cs; // Expands

exports.cExpands = cExpands;
var cexpanded = cexpand + b.ced; // expanded

exports.cexpanded = cexpanded;
var cExpanded = cExpand + b.ced; // Expanded

exports.cExpanded = cExpanded;
var cexpanding = cexpand + p.cing; // expanding

exports.cexpanding = cexpanding;
var cExpanding = cExpand + p.cing; // Expanding

exports.cExpanding = cExpanding;
var ccall = b.cc + call; // call

exports.ccall = ccall;
var cCall = b.cC + call; // Call

exports.cCall = cCall;
var ccalls = ccall + b.cs; // calls

exports.ccalls = ccalls;
var cCalls = cCall + b.cs; // Calls

exports.cCalls = cCalls;
var ccalled = ccall + b.ced; // called

exports.ccalled = ccalled;
var cCalled = cCall + b.ced; // Called

exports.cCalled = cCalled;
var ccalling = ccall + p.cing; // calling

exports.ccalling = ccalling;
var cCalling = cCall + p.cing; // Calling

exports.cCalling = cCalling;
var clook = b.cl + p.cook; // look

exports.clook = clook;
var cLook = b.cL + p.cook; // Look

exports.cLook = cLook;
var clooks = clook + b.cs; // looks

exports.clooks = clooks;
var cLooks = cLook + b.cs; // Looks

exports.cLooks = cLooks;
var clooked = clook + b.ced; // looked

exports.clooked = clooked;
var cLooked = cLook + b.ced; // Looked

exports.cLooked = cLooked;
var clooking = clook + p.cing; // looking

exports.clooking = clooking;
var cLooking = cLook + p.cing; // Looking

exports.cLooking = cLooking;
var clookup = clook + b.cup; // lookup

exports.clookup = clookup;
var cLookup = cLook + b.cup; // Lookup

exports.cLookup = cLookup;
var celse = b.ce + p.clse; // else

exports.celse = celse;
var cElse = b.cE + p.clse; // Else

exports.cElse = cElse;
var cfar = b.cfa + b.cr; // far

exports.cfar = cfar;
var cFar = b.cFa + b.cr; // Far

exports.cFar = cFar;
var cspecify = p.cspec + p.cify; // specify

exports.cspecify = cspecify;
var cSpecify = p.cSpec + p.cify; // Specify

exports.cSpecify = cSpecify;
var csupport = p.csup + cport; // support

exports.csupport = csupport;
var cSupport = p.cSup + cport; // Support

exports.cSupport = cSupport;
var csupports = csupport + b.cs; // supports

exports.csupports = csupports;
var cSupports = cSupport + b.cs; // Supports

exports.cSupports = cSupports;
var csupported = csupport + b.ced; // supported

exports.csupported = csupported;
var cSupported = cSupport + b.ced; // Supported

exports.cSupported = cSupported;
var csupporting = csupport + p.cing; // supporting

exports.csupporting = csupporting;
var cSupporting = cSupport + p.cing; // Supporting

exports.cSupporting = cSupporting;
var cfound = b.cfo + p.cund; // found

exports.cfound = cfound;
var cFound = b.cFo + p.cund; // Found

exports.cFound = cFound;
var cfounded = cfound + b.ced; // founded

exports.cfounded = cfounded;
var cFounded = cFound + b.ced; // Founded

exports.cFounded = cFounded;
var cunfounded = b.cun + cfounded; // unfounded

exports.cunfounded = cunfounded;
var cUnfounded = b.cUn + cfounded; // Unfounded

exports.cUnfounded = cUnfounded;
var coriginal = p.cori + b.cg + p.cinal; // original

exports.coriginal = coriginal;
var cOriginal = p.cOri + b.cg + p.cinal; // Original

exports.cOriginal = cOriginal;
var coriginals = coriginal + b.cs; // originals

exports.coriginals = coriginals;
var cOriginals = cOriginal + b.cs; // Originals

exports.cOriginals = cOriginals;
var ccause = b.cca + cuse; // cause

exports.ccause = ccause;
var cCause = b.cCa + cuse; // Cause

exports.cCause = cCause;
var cbecause = b.cbe + ccause; // because

exports.cbecause = cbecause;
var cBecause = b.cBe + ccause; // Because

exports.cBecause = cBecause;
var canother = b.can + cother; // another

exports.canother = canother;
var cAnother = b.cAn + cother; // Another

exports.cAnother = cAnother;
var cparameter = p.cpara + p.cmet + b.cer; // parameter

exports.cparameter = cparameter;
var cParameter = p.cPara + p.cmet + b.cer; // Parameter

exports.cParameter = cParameter;
var cparameters = cparameter + b.cs; // parameters

exports.cparameters = cparameters;
var cParameters = cParameter + b.cs; // Parameters

exports.cParameters = cParameters;
var ctry = b.ctr + b.cy; // try

exports.ctry = ctry;
var cTry = b.cTr + b.cy; // Try

exports.cTry = cTry;
var ctried = b.ctr + p.cied; // tried

exports.ctried = ctried;
var cTried = b.cTr + p.cied; // Tried

exports.cTried = cTried;
var ctrying = ctry + p.cing; // trying

exports.ctrying = ctrying;
var cTrying = cTry + p.cing; // Trying

exports.cTrying = cTrying;
var cgain = b.cg + p.cain; // gain

exports.cgain = cgain;
var cGain = b.cG + p.cain; // Gain

exports.cGain = cGain;
var cagain = b.ca + cgain; // again

exports.cagain = cagain;
var cAgain = b.cA + cgain; // Again

exports.cAgain = cAgain;
var ctent = b.ct + p.cent; // tent

exports.ctent = ctent;
var cTent = b.cT + p.cent; // Tent

exports.cTent = cTent;
var ctents = ctent + b.cs; // tents

exports.ctents = ctents;
var cTents = cTent + b.cs; // Tents

exports.cTents = cTents;
var ctenting = ctent + p.cing; // tenting

exports.ctenting = ctenting;
var cTenting = cTent + p.cing; // Tenting

exports.cTenting = cTenting;
var ccontent = p.ccon + ctent; // content

exports.ccontent = ccontent;
var cContent = p.cCon + ctent; // Content

exports.cContent = cContent;
var ccontents = ccontent + b.cs; // contents

exports.ccontents = ccontents;
var cContents = cContent + b.cs; // Contents

exports.cContents = cContents;
var cmust = b.cm + p.cust; // must

exports.cmust = cmust;
var cMust = b.cM + p.cust; // Must

exports.cMust = cMust;
var cprompt = p.cpro + p.cmpt; // prompt

exports.cprompt = cprompt;
var cPrompt = p.cPro + p.cmpt; // Prompt

exports.cPrompt = cPrompt;
var cexample = b.cex + p.cample; // example

exports.cexample = cexample;
var cExample = b.cEx + p.cample; // Example

exports.cExample = cExample;
var cEXAMPLE = b.cEX + p.cAMPLE; // EXAMPLE

exports.cEXAMPLE = cEXAMPLE;
var cstructure = b.cst + p.cruc + p.cture; // structure

exports.cstructure = cstructure;
var cStructure = b.cSt + p.cruc + p.cture; // Structure

exports.cStructure = cStructure;
var cstructured = cstructure + b.cd; // structured

exports.cstructured = cstructured;
var cStructured = cStructure + b.cd; // Structured

exports.cStructured = cStructured;
var cstructures = cstructure + b.cs; // structures

exports.cstructures = cstructures;
var cStructures = cStructure + b.cs; // Structures

exports.cStructures = cStructures;
var cmore = b.cm + p.core; // more

exports.cmore = cmore;
var cMore = b.cM + p.core; // More

exports.cMore = cMore;
var chas = b.cha + b.cs; // has

exports.chas = chas;
var cHas = b.cHa + b.cs; // Has

exports.cHas = cHas;
var cready = p.crea + b.cdy; // ready

exports.cready = cready;
var cReady = p.cRea + b.cdy; // Ready

exports.cReady = cReady;
var calready = b.cal + cready; // already

exports.calready = calready;
var cAlready = b.cAl + cready; // Already

exports.cAlready = cAlready;
var cbeen = b.cb + p.ceen; // been

exports.cbeen = cbeen;
var cBeen = b.cB + p.ceen; // Been

exports.cBeen = cBeen;
var cfollow = b.cf + b.col + clow; // follow

exports.cfollow = cfollow;
var cFollow = b.cF + b.col + clow; // Follow

exports.cFollow = cFollow;
var cfollowes = cfollow + b.ces; // followes

exports.cfollowes = cfollowes;
var cFollowes = cFollow + b.ces; // Followes

exports.cFollowes = cFollowes;
var cfollowed = cfollow + b.ced; // followed

exports.cfollowed = cfollowed;
var cFollowed = cFollow + b.ced; // Followed

exports.cFollowed = cFollowed;
var cfollowing = cfollow + p.cing; // following

exports.cfollowing = cfollowing;
var cFollowing = cFollow + p.cing; // Following

exports.cFollowing = cFollowing;
var cdefinition = b.cde + p.cfin + p.cition; // definition

exports.cdefinition = cdefinition;
var cDefinition = b.cDe + p.cfin + p.cition; // Definition

exports.cDefinition = cDefinition;
var cdefinitions = cdefinition + b.cs; // definitions

exports.cdefinitions = cdefinitions;
var cDefinitions = cDefinition + b.cs; // Definitions

exports.cDefinitions = cDefinitions;
var cdone = b.cdo + b.cne; // done

exports.cdone = cdone;
var cDone = b.cDo + b.cne; // Done

exports.cDone = cDone;
var cDONE = b.cDO + b.cNE; // DONE

exports.cDONE = cDONE;
var cphase = b.cph + p.c_ase; // phase

exports.cphase = cphase;
var cPhase = b.cPh + p.c_ase; // Phase

exports.cPhase = cPhase;
var cphases = cphase + b.cs; // phases

exports.cphases = cphases;
var cPhases = cPhase + b.cs; // Phases

exports.cPhases = cPhases;
var cphased = cphase + b.cd; // phased

exports.cphased = cphased;
var cPhased = cPhase + b.cd; // Phased

exports.cPhased = cPhased;
var cphasing = b.cph + b.cas + p.cing; // phasing

exports.cphasing = cphasing;
var cPhasing = b.cPh + b.cas + p.cing; // Phasing

exports.cPhasing = cPhasing;
var ctick = b.ct + p.cick; // tick

exports.ctick = ctick;
var cTick = b.cT + p.cick; // Tick

exports.cTick = cTick;
var cyay = b.cya + b.cy; // yay

exports.cyay = cyay;
var cYay = b.cYa + b.cy; // Yay

exports.cYay = cYay;
var cYAY = b.cYA + b.cY; // YAY

exports.cYAY = cYAY;
var ctag = b.cta + b.cg; // tag

exports.ctag = ctag;
var cTag = b.cTa + b.cg; // Tag

exports.cTag = cTag;
var ctags = ctag + b.cs; // tags

exports.ctags = ctags;
var cTags = cTag + b.cs; // Tags

exports.cTags = cTags;
var ctagged = ctag + b.cg + b.ced; // tagged

exports.ctagged = ctagged;
var cTagged = cTag + b.cg + b.ced; // Tagged

exports.cTagged = cTagged;
var ctagging = ctag + b.cg + p.cing; // tagging

exports.ctagging = ctagging;
var cTagging = cTag + b.cg + p.cing; // Tagging

exports.cTagging = cTagging;
var clit = b.cli + b.ct; // lit

exports.clit = clit;
var cLit = b.cLi + b.ct; // Lit

exports.cLit = cLit;
var csplit = b.csp + clit; // split

exports.csplit = csplit;
var cSplit = b.cSp + clit; // Split

exports.cSplit = cSplit;
var csplits = csplit + b.cs; // splits

exports.csplits = csplits;
var cSplits = cSplit + b.cs; // Splits

exports.cSplits = cSplits;
var csplitting = csplit + b.ct + p.cing; // splitting

exports.csplitting = csplitting;
var cSplitting = cSplit + b.ct + p.cing; // Splitting

exports.cSplitting = cSplitting;
var cdoing = b.cdo + p.cing; // doing

exports.cdoing = cdoing;
var cDoing = b.cDo + p.cing; // Doing

exports.cDoing = cDoing;
var cstraight = b.cs + p.ctra + p.cight; // straight

exports.cstraight = cstraight;
var cStraight = b.cS + p.ctra + p.cight; // Straight

exports.cStraight = cStraight;
var cbroker = b.cbr + p.coker; // broker

exports.cbroker = cbroker;
var cBroker = b.cBr + p.coker; // Broker

exports.cBroker = cBroker;
var cpost = b.cp + p.cost; // post

exports.cpost = cpost;
var cPost = b.cP + p.cost; // Post

exports.cPost = cPost;
var cposts = cpost + b.cs; // posts

exports.cposts = cposts;
var cPosts = cPost + b.cs; // Posts

exports.cPosts = cPosts;
var cposted = cpost + b.ced; // posted

exports.cposted = cposted;
var cPosted = cPost + b.ced; // Posted

exports.cPosted = cPosted;
var cposting = cpost + p.cing; // posting

exports.cposting = cposting;
var cPosting = cPost + p.cing; // Posting

exports.cPosting = cPosting;
var cmerge = b.cm + p.cerge; // merge

exports.cmerge = cmerge;
var cMerge = b.cM + p.cerge; // Merge

exports.cMerge = cMerge;
var cMERGE = b.cM + p.cERGE; // MERGE

exports.cMERGE = cMERGE;
var cmerges = cmerge + b.cs; // merges

exports.cmerges = cmerges;
var cMerges = cMerge + b.cs; // Merges

exports.cMerges = cMerges;
var cmerged = cmerge + b.cd; // merged

exports.cmerged = cmerged;
var cMerged = cMerge + b.cd; // Merged

exports.cMerged = cMerged;
var cMERGED = cMERGE + b.cD; // MERGED

exports.cMERGED = cMERGED;
var cmerging = b.cm + p.cerg + p.cing; // merging

exports.cmerging = cmerging;
var cMerging = b.cM + p.cerg + p.cing; // Merging

exports.cMerging = cMerging;
var cinclude = b.cin + b.cc + p.clude; // include

exports.cinclude = cinclude;
var cInclude = b.cIn + b.cc + p.clude; // Include

exports.cInclude = cInclude;
var cincludes = cinclude + b.cs; // includes

exports.cincludes = cincludes;
var cIncludes = cInclude + b.cs; // Includes

exports.cIncludes = cIncludes;
var cincluded = cinclude + b.cd; // included

exports.cincluded = cincluded;
var cIncluded = cInclude + b.cd; // Included

exports.cIncluded = cIncluded;
var cincluding = b.cin + b.cc + p.clud + p.cing; // including

exports.cincluding = cincluding;
var cIncluding = b.cIn + b.cc + p.clud + p.cing; // Including

exports.cIncluding = cIncluding;
var cfinal = p.cfin + b.cal; // final

exports.cfinal = cfinal;
var cFinal = p.cFin + b.cal; // Final

exports.cFinal = cFinal;
var cfinals = cfinal + b.cs; // finals

exports.cfinals = cfinals;
var cFinals = cFinal + b.cs; // Finals

exports.cFinals = cFinals;
var cfinally = cfinal + b.cly; // finally

exports.cfinally = cfinally;
var cFinally = cFinal + b.cly; // Finally

exports.cFinally = cFinally;
var ccaught = p.ccau + p.cght; // caught

exports.ccaught = ccaught;
var cCaught = p.cCau + p.cght; // Caught

exports.cCaught = cCaught;
var cflat = b.cf + p.clat; // flat

exports.cflat = cflat;
var cFlat = b.cF + p.clat; // Flat

exports.cFlat = cFlat;
var cflats = cflat + b.cs; // flats

exports.cflats = cflats;
var cFlats = cFlat + b.cs; // Flats

exports.cFlats = cFlats;
var cflatten = cflat + p.cten; // flatten

exports.cflatten = cflatten;
var cFlatten = cFlat + p.cten; // Flatten

exports.cFlatten = cFlatten;
var cflattened = cflat + b.cte + p.cned; // flattened

exports.cflattened = cflattened;
var cFlattened = cFlat + b.cte + p.cned; // Flattened

exports.cFlattened = cFlattened;
var cflattening = cflatten + p.cing; // flattening

exports.cflattening = cflattening;
var cFlattening = cFlatten + p.cing; // Flattening

exports.cFlattening = cFlattening;
var cside = b.cs + p.cide; // side

exports.cside = cside;
var cSide = b.cS + p.cide; // Side

exports.cSide = cSide;
var csides = cside + b.cs; // sides

exports.csides = csides;
var cSides = cSide + b.cs; // Sides

exports.cSides = cSides;
var csided = cside + b.cd; // sided

exports.csided = csided;
var cSided = cSide + b.cd; // Sided

exports.cSided = cSided;
var csiding = p.csid + p.cing; // siding

exports.csiding = csiding;
var cSiding = p.cSid + p.cing; // Siding

exports.cSiding = cSiding;
var cinside = b.cin + cside; // inside

exports.cinside = cinside;
var cInside = b.cIn + cside; // Inside

exports.cInside = cInside;
var ctarget = p.ctar + cget; // target

exports.ctarget = ctarget;
var cTarget = p.cTar + cget; // Target

exports.cTarget = cTarget;
var ctargets = ctarget + b.cs; // targets

exports.ctargets = ctargets;
var cTargets = cTarget + b.cs; // Targets

exports.cTargets = cTargets;
var ctargeted = ctarget + b.ced; // targeted

exports.ctargeted = ctargeted;
var cTargeted = cTarget + b.ced; // Targeted

exports.cTargeted = cTargeted;
var ctargeting = ctarget + p.cing; // targeting

exports.ctargeting = ctargeting;
var cTargeting = cTarget + p.cing; // Targeting

exports.cTargeting = cTargeting;
var cmodify = p.cmod + p.cify; // modify

exports.cmodify = cmodify;
var cModify = p.cMod + p.cify; // Modify

exports.cModify = cModify;
var cmodified = p.cmod + p.cified; // modified

exports.cmodified = cmodified;
var cModified = p.cMod + p.cified; // Modified

exports.cModified = cModified;
var cmodifies = p.cmod + p.cifies; // modifies

exports.cmodifies = cmodifies;
var cModifies = p.cMod + p.cifies; // Modifies

exports.cModifies = cModifies;
var cmodifying = cmodify + p.cing; // modifying

exports.cmodifying = cmodifying;
var cModifying = cModify + p.cing; // Modifying

exports.cModifying = cModifying;
var creference = p.cref + b.cer + p.cence; // reference

exports.creference = creference;
var cReference = p.cRef + b.cer + p.cence; // Reference

exports.cReference = cReference;
var creferences = creference + b.cs; // references

exports.creferences = creferences;
var cReferences = cReference + b.cs; // References

exports.cReferences = cReferences;
var creferenced = creference + b.cd; // referenced

exports.creferenced = creferenced;
var cReferenced = cReference + b.cd; // Referenced

exports.cReferenced = cReferenced;
var creferencing = p.cref + b.cer + p.cenc + p.cing; // referencing

exports.creferencing = creferencing;
var cReferencing = p.cRef + b.cer + p.cenc + p.cing; // Referencing

exports.cReferencing = cReferencing;
var cwrite = b.cwr + p.cite; // write

exports.cwrite = cwrite;
var cWrite = b.cWr + p.cite; // Write

exports.cWrite = cWrite;
var cwrites = cwrite + b.cs; // writes

exports.cwrites = cwrites;
var cWrites = cWrite + b.cs; // Writes

exports.cWrites = cWrites;
var cwritten = b.cw + p.crit + p.cten; // written

exports.cwritten = cwritten;
var cWritten = b.cW + p.crit + p.cten; // Written

exports.cWritten = cWritten;
var cwriting = b.cw + p.crit + p.cing; // writing

exports.cwriting = cwriting;
var cWriting = b.cW + p.crit + p.cing; // Writing

exports.cWriting = cWriting;
var cscan = b.cs + ccan; // scan

exports.cscan = cscan;
var cScan = b.cS + ccan; // Scan

exports.cScan = cScan;
var cscans = cscan + b.cs; // scans

exports.cscans = cscans;
var cScans = cScan + b.cs; // Scans

exports.cScans = cScans;
var cscanned = cscan + p.cned; // scanned

exports.cscanned = cscanned;
var cScanned = cScan + p.cned; // Scanned

exports.cScanned = cScanned;
var cscanning = cscan + b.cn + p.cing; // scanning

exports.cscanning = cscanning;
var cScanning = cScan + b.cn + p.cing; // Scanning

exports.cScanning = cScanning;
var cdirect = b.cdi + p.crect; // direct

exports.cdirect = cdirect;
var cDirect = b.cDi + p.crect; // Direct

exports.cDirect = cDirect;
var cdirects = cdirect + b.cs; // directs

exports.cdirects = cdirects;
var cDirects = cDirect + b.cs; // Directs

exports.cDirects = cDirects;
var cdirected = cdirect + b.ced; // directed

exports.cdirected = cdirected;
var cDirected = cDirect + b.ced; // Directed

exports.cDirected = cDirected;
var cdirector = cdirect + b.cor; // director

exports.cdirector = cdirector;
var cDirector = cDirect + b.cor; // Director

exports.cDirector = cDirector;
var cdirecting = cdirect + p.cing; // directing

exports.cdirecting = cdirecting;
var cDirecting = cDirect + p.cing; // Directing

exports.cDirecting = cDirecting;
var cdirectors = cdirector + b.cs; // directors

exports.cdirectors = cdirectors;
var cDirectors = cDirector + b.cs; // Directors

exports.cDirectors = cDirectors;
var cdirectory = cdirector + b.cy; // directory

exports.cdirectory = cdirectory;
var cDirectory = cDirector + b.cy; // Directory

exports.cDirectory = cDirectory;
var cdirectories = cdirector + p.cies; // directories

exports.cdirectories = cdirectories;
var cDirectories = cDirector + p.cies; // Directories

exports.cDirectories = cDirectories;
var cchive = b.cc + chive; // chive

exports.cchive = cchive;
var cChive = b.cC + chive; // Chive

exports.cChive = cChive;
var cchives = cchive + b.cs; // chives

exports.cchives = cchives;
var cChives = cChive + b.cs; // Chives

exports.cChives = cChives;
var carchive = b.car + cchive; // archive

exports.carchive = carchive;
var cArchive = b.cAr + cchive; // Archive

exports.cArchive = cArchive;
var carchived = carchive + b.cd; // archived

exports.carchived = carchived;
var cArchived = cArchive + b.cd; // Archived

exports.cArchived = cArchived;
var carchives = carchive + b.cs; // archives

exports.carchives = carchives;
var cArchives = cArchive + b.cs; // Archives

exports.cArchives = cArchives;
var carchiving = b.car + p.cchiv + p.cing; // archiving

exports.carchiving = carchiving;
var cArchiving = b.cAr + p.cchiv + p.cing; // Archiving

exports.cArchiving = cArchiving;
var ccop = b.cco + b.cp; // cop

exports.ccop = ccop;
var cCop = b.cCo + b.cp; // Cop

exports.cCop = cCop;
var ccops = ccop + b.cs; // cops

exports.ccops = ccops;
var cCops = cCop + b.cs; // Cops

exports.cCops = cCops;
var ccopy = b.cc + p.copy; // copy

exports.ccopy = ccopy;
var cCopy = b.cC + p.copy; // Copy

exports.cCopy = cCopy;
var ccopies = ccop + p.cies; // copies

exports.ccopies = ccopies;
var cCopies = cCop + p.cies; // Copies

exports.cCopies = cCopies;
var ccopied = ccop + p.cied; // copied

exports.ccopied = ccopied;
var cCopied = cCop + p.cied; // Copied

exports.cCopied = cCopied;
var ccopying = ccopy + p.cing; // copying

exports.ccopying = ccopying;
var cCopying = cCopy + p.cing; // Copying

exports.cCopying = cCopying;
var csuccess = b.csu + p.cccess; // success

exports.csuccess = csuccess;
var cSuccess = b.cSu + p.cccess; // Success

exports.cSuccess = cSuccess;
var csuccesses = csuccess + b.ces; // successes

exports.csuccesses = csuccesses;
var cSuccesses = cSuccess + b.ces; // Successes

exports.cSuccesses = cSuccesses;
var csuccessful = csuccess + p.cful; // successful

exports.csuccessful = csuccessful;
var cSuccessful = cSuccess + p.cful; // Successful

exports.cSuccessful = cSuccessful;
var cpack = b.cp + p.cack; // pack

exports.cpack = cpack;
var cPack = b.cP + p.cack; // Pack

exports.cPack = cPack;
var cpacks = cpack + b.cs; // packs

exports.cpacks = cpacks;
var cPacks = cPack + b.cs; // Packs

exports.cPacks = cPacks;
var cpacked = cpack + b.ced; // packed

exports.cpacked = cpacked;
var cPacked = cPack + b.ced; // Packed

exports.cPacked = cPacked;
var cpacking = cpack + p.cing; // packing

exports.cpacking = cpacking;
var cPacking = cPack + p.cing; // Packing

exports.cPacking = cPacking;
var cpackage = cpack + p.cage; // package

exports.cpackage = cpackage;
var cPackage = cPack + p.cage; // Package

exports.cPackage = cPackage;
var cpackages = cpackage + b.cs; // packages

exports.cpackages = cpackages;
var cPackages = cPackage + b.cs; // Packages

exports.cPackages = cPackages;
var cpackaged = cpackage + b.cd; // packaged

exports.cpackaged = cpackaged;
var cPackaged = cPackage + b.cd; // Packaged

exports.cPackaged = cPackaged;
var cpackaging = cpack + b.cag + p.cing; // packaging

exports.cpackaging = cpackaging;
var cPackaging = cPack + b.cag + p.cing; // Packaging

exports.cPackaging = cPackaging;
var canalyze = p.cana + p.clyze; // analyze

exports.canalyze = canalyze;
var cAnalyze = p.cAna + p.clyze; // Analyze

exports.cAnalyze = cAnalyze;
var canalyzes = canalyze + b.cs; // analyzes

exports.canalyzes = canalyzes;
var cAnalyzes = cAnalyze + b.cs; // Analyzes

exports.cAnalyzes = cAnalyzes;
var canalyzed = canalyze + b.cd; // analyzed

exports.canalyzed = canalyzed;
var cAnalyzed = cAnalyze + b.cd; // Analyzed

exports.cAnalyzed = cAnalyzed;
var canalyzing = p.cana + p.clyz + p.cing; // analyzing

exports.canalyzing = canalyzing;
var cAnalyzing = p.cAna + p.clyz + p.cing; // Analyzing

exports.cAnalyzing = cAnalyzing;
var csame = b.cs + p.came; // same

exports.csame = csame;
var cSame = b.cS + p.came; // Same

exports.cSame = cSame;
var cthere = cthe + b.cre; // there

exports.cthere = cthere;
var cThere = cThe + b.cre; // There

exports.cThere = cThere;
var cbracket = p.cbra + b.cc + p.cket; // bracket

exports.cbracket = cbracket;
var cBracket = p.cBra + b.cc + p.cket; // Bracket

exports.cBracket = cBracket;
var cbrackets = cbracket + b.cs; // brackets

exports.cbrackets = cbrackets;
var cBrackets = cBracket + b.cs; // Brackets

exports.cBrackets = cBrackets;
var cbracketed = cbracket + b.ced; // bracketed

exports.cbracketed = cbracketed;
var cBracketed = cBracket + b.ced; // Bracketed

exports.cBracketed = cBracketed;
var cbracketing = cbracket + p.cing; // bracketing

exports.cbracketing = cbracketing;
var cBracketing = cBracket + p.cing; // Bracketing

exports.cBracketing = cBracketing;
var cregular = p.creg + p.cular; // regular

exports.cregular = cregular;
var cRegular = p.cReg + p.cular; // Regular

exports.cRegular = cRegular;
var cexpression = b.cex + cpress + p.cion; // expression

exports.cexpression = cexpression;
var cExpression = b.cEx + cpress + p.cion; // Expression

exports.cExpression = cExpression;
var cexpressions = cexpression + b.cs; // expressions

exports.cexpressions = cexpressions;
var cExpressions = cExpression + b.cs; // Expressions

exports.cExpressions = cExpressions;
var clexical = p.clex + p.cical; // lexical

exports.clexical = clexical;
var cLexical = p.cLex + p.cical; // Lexical

exports.cLexical = cLexical;
var clexicon = p.clex + p.cicon; // lexicon

exports.clexicon = clexicon;
var cLexicon = p.cLex + p.cicon; // Lexicon

exports.cLexicon = cLexicon;
var clexicons = clexicon + b.cs; // lexicons

exports.clexicons = clexicons;
var cLexicons = cLexicon + b.cs; // Lexicons

exports.cLexicons = cLexicons;
var cjust = b.cj + p.cust; // just

exports.cjust = cjust;
var cJust = b.cJ + p.cust; // Just

exports.cJust = cJust;
var cjustice = cjust + p.cice; // justice

exports.cjustice = cjustice;
var cJustice = cJust + p.cice; // Justice

exports.cJustice = cJustice;
var cjustified = cjust + p.cified; // justified

exports.cjustified = cjustified;
var cJustified = cJust + p.cified; // Justified

exports.cJustified = cJustified;
var cadjust = b.ca + b.cd + cjust; // adjust

exports.cadjust = cadjust;
var cAdjust = b.cAd + cjust; // Adjust

exports.cAdjust = cAdjust;
var cadjusts = cadjust + b.cs; // adjusts

exports.cadjusts = cadjusts;
var cAdjusts = cAdjust + b.cs; // Adjusts

exports.cAdjusts = cAdjusts;
var cadjusted = cadjust + b.ced; // adjusted

exports.cadjusted = cadjusted;
var cAdjusted = cAdjust + b.ced; // Adjusted

exports.cAdjusted = cAdjusted;
var cadjusting = cadjust + p.cing; // adjusting

exports.cadjusting = cadjusting;
var cAdjusting = cAdjust + p.cing; // Adjusting

exports.cAdjusting = cAdjusting;
var csleep = b.csl + p.ceep; // sleep

exports.csleep = csleep;
var cSleep = b.cSl + p.ceep; // Sleep

exports.cSleep = cSleep;
var csleeps = csleep + b.cs; // sleeps

exports.csleeps = csleeps;
var cSleeps = cSleep + b.cs; // Sleeps

exports.cSleeps = cSleeps;
var csleeped = csleep + b.ced; // sleeped

exports.csleeped = csleeped;
var cSleeped = cSleep + b.ced; // Sleeped

exports.cSleeped = cSleeped;
var csleeping = csleep + p.cing; // sleeping

exports.csleeping = csleeping;
var cSleeping = cSleep + p.cing; // Sleeping

exports.cSleeping = cSleeping;
var cleaf = b.cl + p.ceaf; // leaf

exports.cleaf = cleaf;
var cLeaf = b.cL + p.ceaf; // Leaf

exports.cLeaf = cLeaf;
var centry = b.cen + ctry; // entry

exports.centry = centry;
var cEntry = b.cEn + ctry; // Entry

exports.cEntry = cEntry;
var centries = b.cen + b.ctr + p.cies; // entries

exports.centries = centries;
var cEntries = b.cEn + b.ctr + p.cies; // Entries

exports.cEntries = cEntries;
var centity = b.cen + p.ctity; // entity

exports.centity = centity;
var cEntity = b.cEn + p.ctity; // Entity

exports.cEntity = cEntity;
var cmay = b.cma + b.cy; // may

exports.cmay = cmay;
var cMay = b.cMa + b.cy; // May

exports.cMay = cMay;
var conly = b.co + p.cnly; // only

exports.conly = conly;
var cOnly = b.cO + p.cnly; // Only

exports.cOnly = cOnly;
var csuch = b.cs + p.cuch; // such

exports.csuch = csuch;
var cSuch = b.cS + p.cuch; // Such

exports.cSuch = cSuch;
var cgeneration = p.cgen + b.cer + p.cation; // generation

exports.cgeneration = cgeneration;
var cGeneration = p.cGen + b.cer + p.cation; // Generation

exports.cGeneration = cGeneration;
var cDemocratic = cDemo + b.ccr + p.cati + b.cc; // Democratic

exports.cDemocratic = cDemocratic;
var cRepublic = b.cRe + cpublic; // Republic

exports.cRepublic = cRepublic;
var cCentral = u.cCent + p.cral; // Central

exports.cCentral = cCentral;
var cAfrican = b.cAf + p.crica + b.cn; // African

exports.cAfrican = cAfrican;
var cPapua = b.cPa + b.cpu + b.ca; // Papua

exports.cPapua = cPapua;
var cTrinidad = p.cTri + b.cni + b.cda + b.cd; // Trinidad

exports.cTrinidad = cTrinidad;
var cTabago = b.cTa + b.cba + b.cgo; // Tabago

exports.cTabago = cTabago;
var cUnited = cUnit + b.ced; // United

exports.cUnited = cUnited;
var cArab = b.cAr + b.cab; // Arab

exports.cArab = cArab;
var cEmirates = b.cEm + b.cir + p.cates; // Emirates

exports.cEmirates = cEmirates;
var cStates = b.cSt + p.cates; // States

exports.cStates = cStates;
var cAmerica = b.cAm + b.cer + p.cica; // America

exports.cAmerica = cAmerica;
var cliver = b.cli + p.cver; // liver

exports.cliver = cliver;
var cLiver = b.cLi + p.cver; // Liver
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Countires

exports.cLiver = cLiver;
var cAfghanistan = b.cAf + b.cgh + b.can + p.cistan; // Afghanistan

exports.cAfghanistan = cAfghanistan;
var cAlbania = b.cAl + b.cba + p.cnia; // Albania

exports.cAlbania = cAlbania;
var cAlgeria = b.cAl + p.cgeria; // Algeria

exports.cAlgeria = cAlgeria;
var cAndorra = cAnd + b.cor + b.cra; // Andorra

exports.cAndorra = cAndorra;
var cAngola = b.cAn + b.cgo + b.cla; // Angola

exports.cAngola = cAngola;
var cAntigua = b.cAn + b.cti + p.cgua; // Antigua

exports.cAntigua = cAntigua;
var cArgentina = g.cArg + p.cent + p.cina; // Argentina

exports.cArgentina = cArgentina;
var cArmenia = b.cAr + p.cmen + b.cia; // Armenia

exports.cArmenia = cArmenia;
var cAustralia = b.cAu + b.cst + p.cral + b.cia; // Australia

exports.cAustralia = cAustralia;
var cAustria = b.cAu + b.cst + p.cria; // Austria

exports.cAustria = cAustria;
var cAzerbaijan = b.cAz + b.cer + b.cba + b.cij + b.can; // Azerbaijan

exports.cAzerbaijan = cAzerbaijan;
var cBahamas = b.cBa + b.cha + p.cmas; // Bahamas

exports.cBahamas = cBahamas;
var cBahrain = b.cBa + b.chr + p.cain; // Bahrain

exports.cBahrain = cBahrain;
var cBangladesh = b.cBa + b.cng + b.cla + b.cde + b.csh; // Bangladesh

exports.cBangladesh = cBangladesh;
var cBarbados = b.cBa + b.crb + c1a1d + b.cos; // Barbados

exports.cBarbados = cBarbados;
var cBarbuda = b.cBa + b.crb + p.cuda; // Barbuda

exports.cBarbuda = cBarbuda;
var cBelarus = b.cBe + b.cla + p.crus; // Belarus

exports.cBelarus = cBelarus;
var cBelgium = b.cBe + b.clg + b.ciu + b.cm; // Belgium

exports.cBelgium = cBelgium;
var cBelize = b.cBe + b.cli + b.cze; // Belize

exports.cBelize = cBelize;
var cBenin = b.cBe + b.cni + b.cn; // Benin

exports.cBenin = cBenin;
var cBhutan = b.cBh + b.cut + b.can; // Bhutan

exports.cBhutan = cBhutan;
var cBolivia = b.cBo + b.cli + p.cvia; // Bolivia

exports.cBolivia = cBolivia;
var cBosnia = b.cBo + b.csn + b.cia; // Bosnia

exports.cBosnia = cBosnia;
var cBotswana = b.cBo + b.cts + b.cwa + b.cna; // Botswana

exports.cBotswana = cBotswana;
var cBrazil = p.cBra + b.czi + b.cl; // Brazil

exports.cBrazil = cBrazil;
var cBrunei = b.cBr + b.cun + b.cei; // Brunei

exports.cBrunei = cBrunei;
var cBulgaria = b.cBu + b.clg + b.car + b.cia; // Bulgaria

exports.cBulgaria = cBulgaria;
var cBurkinaFaso = b.cBu + b.crk + p.cina + b.cFa + b.cso; // BurkinaFaso

exports.cBurkinaFaso = cBurkinaFaso;
var cBurundi = b.cBu + crun + b.cdi; // Burundi

exports.cBurundi = cBurundi;
var cCotedlvoire = b.cCo + b.cte + b.cSpace + b.cd + b.clv + b.coi + b.cre; // Cote dlvoire

exports.cCotedlvoire = cCotedlvoire;
var cCaboVerde = b.cCa + b.cbo + b.cSpace + p.cVer + b.cde; // Cabo Verde

exports.cCaboVerde = cCaboVerde;
var cCambodia = b.cCa + b.cmb + b.cod + b.cia; // Cambodia

exports.cCambodia = cCambodia;
var cCameroon = b.cCa + b.cme + b.cro + b.con; // Cameroon

exports.cCameroon = cCameroon;
var cCanada = cCan + p.cada; // Canada

exports.cCanada = cCanada;
var cCentralAfricanRepublic = cCentral + b.cSpace + cAfrican + b.cSpace + cRepublic; // Central African Republic

exports.cCentralAfricanRepublic = cCentralAfricanRepublic;
var cChad = b.cCh + b.ca + b.cd; // Chad

exports.cChad = cChad;
var cChile = g.cChi + b.cle; // Chile

exports.cChile = cChile;
var cChina = g.cChi + b.cna; // China

exports.cChina = cChina;
var cColombia = p.cCol + p.comb + b.cia; // Colombia

exports.cColombia = cColombia;
var cComoros = g.cCom + b.cor + b.cos; // Comoros

exports.cComoros = cComoros;
var cCongo = b.cC + p.congo; // Congo

exports.cCongo = cCongo;
var cCostaRica = cCost + b.ca + b.cSpace + b.cR + p.cica; // Costa Rica

exports.cCostaRica = cCostaRica;
var cCroatia = b.cCr + b.coa + b.cti + b.ca; // Croatia

exports.cCroatia = cCroatia;
var cCuba = b.cCu + b.cba; // Cuba

exports.cCuba = cCuba;
var cCyprus = b.cCy + b.cpr + b.cus; // Cyprus

exports.cCyprus = cCyprus;
var cCzechia = b.cCz + b.cec + b.chi + b.ca; // Czechia

exports.cCzechia = cCzechia;
var cDemocraticRepublicOfTheCongo = cDemocratic + b.cSpace + cRepublic + b.cSpace + b.cof + b.cSpace + cthe + b.cSpace + cCongo; // Democratic Republic of the Congo

exports.cDemocraticRepublicOfTheCongo = cDemocraticRepublicOfTheCongo;
var cDenmark = b.cDe + p.cnmar + b.ck; // Denmark

exports.cDenmark = cDenmark;
var cDjibouti = b.cDj + b.cib + cout + b.ci; // Djibouti

exports.cDjibouti = cDjibouti;
var cDominica = b.cDo + p.cminica; // Dominica

exports.cDominica = cDominica;
var cDominicanRepublic = b.cDo + p.cminica + b.cn + b.cSpace + b.cR + b.cep + p.cublic; // cDominican Republic

exports.cDominicanRepublic = cDominicanRepublic;
var cEcuador = b.cEc + b.cua + p.cdor; // Ecuador

exports.cEcuador = cEcuador;
var cEgypt = b.cEg + b.cyp + b.ct; // Egypt

exports.cEgypt = cEgypt;
var cElSalvador = b.cEl + b.cSpace + b.cSa + b.clv + p.cador; // El Salvador

exports.cElSalvador = cElSalvador;
var cEquatorialGuinea = p.cEqu + p.cator + b.cia + b.cl + b.cSpace + b.cG + p.cuinea; // Equatorial Guinea

exports.cEquatorialGuinea = cEquatorialGuinea;
var cEritrea = b.cEr + b.cit + p.crea; // Eritrea

exports.cEritrea = cEritrea;
var cEstonia = b.cEs + b.cto + p.cnia; // Estonia

exports.cEstonia = cEstonia;
var cEswatini = b.cEs + b.cwa + b.cti + b.cni; // Eswatini -- Formerly Swaziland

exports.cEswatini = cEswatini;
var cEthiopia = b.cEt + b.chi + b.cop + b.cia; // Ethiopia

exports.cEthiopia = cEthiopia;
var cFiji = b.cFi + b.cji; // Fiji

exports.cFiji = cFiji;
var cFinland = p.cFin + b.cla + b.cnd; // Finland

exports.cFinland = cFinland;
var cFrance = p.cFra + p.cnce; // France

exports.cFrance = cFrance;
var cGabon = b.cGa + b.cbo + b.cn; // Gabon

exports.cGabon = cGabon;
var cGambia = b.cGa + p.cmbia; // Gambia

exports.cGambia = cGambia;
var cGeorgia = b.cGe + b.cor + b.cgi + b.ca; // Georgia

exports.cGeorgia = cGeorgia;
var cGermany = b.cGe + p.crman + b.cy; // Germany

exports.cGermany = cGermany;
var cGhana = b.cGh + p.cana; // Ghana

exports.cGhana = cGhana;
var cGreece = b.cGr + b.cee + b.cce; // Greece

exports.cGreece = cGreece;
var cGrenada = b.cGr + b.cen + p.cada; // Grenada

exports.cGrenada = cGrenada;
var cGuatemala = b.cGu + p.cate + p.cmal + b.ca; // Guatemala

exports.cGuatemala = cGuatemala;
var cGuinea = b.cGu + p.cinea; // Guinea

exports.cGuinea = cGuinea;
var cGuineaBissau = b.cGu + p.cinea + b.cDash + b.cBi + b.css + b.cau; // Guinea-Bissau

exports.cGuineaBissau = cGuineaBissau;
var cGuyana = b.cGu + p.cyan + b.ca; // Guyana

exports.cGuyana = cGuyana;
var cHaiti = b.cHa + p.citi; // Haiti

exports.cHaiti = cHaiti;
var cHerzegovina = cHer + b.cze + b.cgo + b.cvi + b.cna; // Herzegovina

exports.cHerzegovina = cHerzegovina;
var cHolySee = b.cHo + b.cly + b.cSpace + b.cSe + b.ce; // Holy See

exports.cHolySee = cHolySee;
var cHonduras = b.cHo + b.cnd + b.cur + b.cas; // Honduras

exports.cHonduras = cHonduras;
var cHungary = cHung + p.cary; // Hungary

exports.cHungary = cHungary;
var cIceland = b.cIc + p.celand; // Iceland

exports.cIceland = cIceland;
var cIndia = b.cIn + p.cdia; // India

exports.cIndia = cIndia;
var cIndonesia = b.cIn + cdone + p.csia; // Indonesia

exports.cIndonesia = cIndonesia;
var cIran = b.cIr + b.can; // Iran

exports.cIran = cIran;
var cIraq = b.cIr + b.caq; // Iraq

exports.cIraq = cIraq;
var cIreland = b.cIr + p.celand; // Ireland

exports.cIreland = cIreland;
var cIsrael = b.cIs + b.cra + b.cel; // Israel

exports.cIsrael = cIsrael;
var cItaly = b.cIt + b.cal + b.cy; // Italy

exports.cItaly = cItaly;
var cJamaica = b.cJa + b.cma + p.cica; // Jamaica

exports.cJamaica = cJamaica;
var cJapan = b.cJa + b.cpa + b.cn; // Japan

exports.cJapan = cJapan;
var cJordan = b.cJo + b.crd + b.can; // Jordan

exports.cJordan = cJordan;
var cKazakhstan = b.cKa + b.cza + b.ckh + p.cstan; // Kazakhstan

exports.cKazakhstan = cKazakhstan;
var cKenya = b.cKe + b.cny + b.ca; // Kenya

exports.cKenya = cKenya;
var cKiribati = b.cKi + b.cri + b.cba + b.cti; // Kiribati

exports.cKiribati = cKiribati;
var cKuwait = b.cKu + cwait; // Kuwait

exports.cKuwait = cKuwait;
var cKyrgyzstan = b.cKy + b.crg + b.cyz + p.cstan; // Kyrgyzstan

exports.cKyrgyzstan = cKyrgyzstan;
var cLaos = b.cLa + b.cos; // Laos

exports.cLaos = cLaos;
var cLatvia = b.cLa + b.ctv + b.cia; // Latvia

exports.cLatvia = cLatvia;
var cLebanon = b.cLe + b.cba + p.cnon; // Lebanon

exports.cLebanon = cLebanon;
var cLesotho = b.cLe + b.cso + b.cth + b.co; // Lesotho

exports.cLesotho = cLesotho;
var cLiberia = b.cLi + b.cbe + p.cria; // Liberia

exports.cLiberia = cLiberia;
var cLibya = b.cLi + b.cby + b.ca; // Libya

exports.cLibya = cLibya;
var cLiechtenstein = b.cLi + b.cec + b.cht + b.cen + p.cste + b.cin; // Liechtenstein

exports.cLiechtenstein = cLiechtenstein;
var cLithuania = cLit + b.chu + p.cania; // Lithuania

exports.cLithuania = cLithuania;
var cLuxembourg = b.cLu + b.cxe + b.cmb + p.cour + b.cg; // Luxembourg

exports.cLuxembourg = cLuxembourg;
var cMadagascar = b.cMa + b.cda + b.cga + b.csc + b.car; // Madagascar

exports.cMadagascar = cMadagascar;
var cMalawi = b.cMa + b.cla + b.cwi; // Malawi

exports.cMalawi = cMalawi;
var cMalaysia = b.cMa + p.clay + p.csia; // Malaysia

exports.cMalaysia = cMalaysia;
var cMaldives = b.cMa + b.cld + p.cive + b.cs; // Maldives

exports.cMaldives = cMaldives;
var cMali = b.cMa + b.cli; // Mali

exports.cMali = cMali;
var cMalta = b.cMa + p.clta; // Malta

exports.cMalta = cMalta;
var cMarshallIslands = b.cMa + b.crs + b.cha + b.cll + b.cSpace + b.cIs + b.cla + p.cnds; // Marshall Islands

exports.cMarshallIslands = cMarshallIslands;
var cMauritania = b.cMa + b.cur + b.cit + p.cania; // Mauritania

exports.cMauritania = cMauritania;
var cMauritius = b.cMa + b.cur + p.citi + b.cus; // Mauritius

exports.cMauritius = cMauritius;
var cMexico = b.cMe + b.cxi + b.cco; // Mexico

exports.cMexico = cMexico;
var cMicronesia = u.cMicro + p.cnesia; // Micronesia

exports.cMicronesia = cMicronesia;
var cMoldova = b.cMo + b.cld + p.cova; // Moldova

exports.cMoldova = cMoldova;
var cMonaco = b.cMo + b.cna + b.cco; // Monaco

exports.cMonaco = cMonaco;
var cMongolia = b.cMo + p.cngo + p.clia; // Mongolia

exports.cMongolia = cMongolia;
var cMontenegro = b.cMo + b.cnt + b.cen + b.ceg + b.cro; // Montenegro

exports.cMontenegro = cMontenegro;
var cMorocco = b.cMo + b.cro + b.ccc + b.co; // Morocco

exports.cMorocco = cMorocco;
var cMozambique = b.cMo + b.cza + b.cmb + b.ciq + b.cue; // Mozambique

exports.cMozambique = cMozambique;
var cMyanmar = b.cMy + b.can + p.cmar; // Myanmar

exports.cMyanmar = cMyanmar;
var cNamibia = b.cNa + b.camai + p.cbia; // Namibia

exports.cNamibia = cNamibia;
var cNauru = b.cNa + p.curu; // Nauru

exports.cNauru = cNauru;
var cNepal = b.cNe + cpal; // Nepal

exports.cNepal = cNepal;
var cNetherlands = b.cNe + p.cther + b.cla + p.cnds; // Netherlands

exports.cNetherlands = cNetherlands;
var cNewZealand = cNew + b.cSpace + b.cZe + p.cala + b.cnd; // New Zealand

exports.cNewZealand = cNewZealand;
var cNevis = b.cNe + b.cvi + b.cs; // Nevis

exports.cNevis = cNevis;
var cNicaragua = b.cNi + p.ccar + p.cagua; // Nicaragua

exports.cNicaragua = cNicaragua;
var cNiger = b.cNi + p.cger; // Niger

exports.cNiger = cNiger;
var cNigeria = b.cNi + p.cgeria; // Nigeria

exports.cNigeria = cNigeria;
var cNorthKorea = b.cNo + b.crt + b.ch + b.cSpace + b.cK + p.corea; // North Korea

exports.cNorthKorea = cNorthKorea;
var cNorthMacedonia = b.cNo + b.crt + b.ch + b.cSpace + b.cM + p.cace + b.cdo + p.cnia; // North Macedonia

exports.cNorthMacedonia = cNorthMacedonia;
var cNorway = b.cNo + b.crw + b.cay; // Norway

exports.cNorway = cNorway;
var cOman = b.cOm + b.can; // Oman

exports.cOman = cOman;
var cPakistan = b.cPa + p.ckistan; // Pakistan

exports.cPakistan = cPakistan;
var cPalau = cPal + b.cau; // Palau

exports.cPalau = cPalau;
var cPalestine = cPal + p.cest + p.cine; // Palestine

exports.cPalestine = cPalestine;
var cPanama = b.cPa + p.cnam + b.ca; // Panama

exports.cPanama = cPanama;
var cPapuaNewGuinea = cPapua + b.cSpace + cNew + b.cSpace + cGuinea; // Papua New Guinea

exports.cPapuaNewGuinea = cPapuaNewGuinea;
var cParaguay = p.cPara + p.cguay; // Paraguay

exports.cParaguay = cParaguay;
var cPeru = p.cPer + b.cu; // Peru

exports.cPeru = cPeru;
var cPhilippines = g.cPhi + b.cli + b.cpp + p.cine + b.cs; // Philippines

exports.cPhilippines = cPhilippines;
var cPoland = b.cPo + b.cla + b.cnd; // Poland

exports.cPoland = cPoland;
var cPortugal = cPort + b.cug + b.cal; // Portugal

exports.cPortugal = cPortugal;
var cPrincipe = p.cPri + b.cnc + b.cip + b.ce; // Principe

exports.cPrincipe = cPrincipe;
var cQatar = b.cQa + p.ctar; // Qatar

exports.cQatar = cQatar;
var cRomania = b.cRo + cman + b.cia; // Romania

exports.cRomania = cRomania;
var cRussia = b.cRu + b.css + b.cia; // Russia

exports.cRussia = cRussia;
var cRwanda = b.cRw + p.canda; // Rwanda

exports.cRwanda = cRwanda;
var cSaintKitts = b.cSa + p.cint + b.cSpace + b.cKi + b.ctt + b.cs; // Saint Kitts

exports.cSaintKitts = cSaintKitts;
var cSaintLucia = b.cSa + p.cint + b.cSpace + b.cLu + b.cci + b.ca; // Saint Lucia

exports.cSaintLucia = cSaintLucia;
var cSaintVincent = b.cSa + p.cint + b.cSpace + b.cVi + p.cnce + b.cnt; // Saint Vincent

exports.cSaintVincent = cSaintVincent;
var cSomoa = b.cSo + b.cmo + b.ca; // Somoa

exports.cSomoa = cSomoa;
var cSanMarino = g.cSan + b.cSpace + b.cMa + b.cri + b.cno; // San Marino

exports.cSanMarino = cSanMarino;
var cSaoTome = b.cSa + b.co + b.cSpace + b.cT + p.come; // Sao Tome

exports.cSaoTome = cSaoTome;
var cSaudiArabia = b.cSa + b.cud + b.ci + b.cSpace + b.cA + b.cra + p.cbia; // Saudi Arabia

exports.cSaudiArabia = cSaudiArabia;
var cSenegal = b.cSe + b.cne + p.cgal; // Senegal

exports.cSenegal = cSenegal;
var cSerbia = b.cSe + b.crb + b.cia; // Serbia

exports.cSerbia = cSerbia;
var cSeychelles = b.cSe + b.cyc + b.che + b.cll + b.ces; // Seychelles

exports.cSeychelles = cSeychelles;
var cSierraLeone = g.cSierra + b.cSpace + b.cLe + n.cone; // Sierra Leone

exports.cSierraLeone = cSierraLeone;
var cSingapore = b.cSi + p.cnga + b.cpo + b.cre; // Singapore

exports.cSingapore = cSingapore;
var cSlovakia = b.cSl + p.cova + b.cki + b.ca; // Slovakia

exports.cSlovakia = cSlovakia;
var cSlovenia = b.cSl + b.cov + p.cenia; // Slovenia

exports.cSlovenia = cSlovenia;
var cSolomonIslands = b.cSo + b.clo + p.cmon + b.cSpace + b.cIs + b.cla + p.cnds; // Solomon Islands

exports.cSolomonIslands = cSolomonIslands;
var cSomalia = b.cSo + p.cmal + b.cia; // Somalia

exports.cSomalia = cSomalia;
var cSouthAfrica = b.cSo + b.cut + b.ch + b.cSpace + b.cA + p.cfrica; // South Africa

exports.cSouthAfrica = cSouthAfrica;
var cSouthKorea = b.cSo + b.cut + b.ch + b.cSpace + b.cK + p.corea; // South Korea

exports.cSouthKorea = cSouthKorea;
var cSouthSudan = b.cSo + b.cut + b.ch + b.cSpace + b.cS + p.cudan; // South Sudan

exports.cSouthSudan = cSouthSudan;
var cSpain = b.cSp + p.cain; // Spain

exports.cSpain = cSpain;
var cSriLanka = b.cSr + b.ci + b.cSpace + b.cL + b.can + b.cka; // Sri Lanka

exports.cSriLanka = cSriLanka;
var cSudan = b.cSu + p.cdan; // Sudan

exports.cSudan = cSudan;
var cSuriname = b.cSu + b.cri + cname; // Suriname

exports.cSuriname = cSuriname;
var cSweden = b.cSw + b.ced + b.cen; // Sweden

exports.cSweden = cSweden;
var cSwitzerland = b.cSw + b.cit + b.cze + p.crland; // Switzerland

exports.cSwitzerland = cSwitzerland;
var cSyria = b.cSy + p.cria; // Syria

exports.cSyria = cSyria;
var cTajikistan = b.cTa + b.cji + p.ckistan; // Tajikistan

exports.cTajikistan = cTajikistan;
var cTanzania = b.cTa + b.cn + b.cza + p.cnia; // Tanzania

exports.cTanzania = cTanzania;
var cThailand = b.cTh + p.cail + p.cand; // Thailand

exports.cThailand = cThailand;
var cTimorLeste = b.cTi + b.cmo + b.cr + b.cDash + b.cL + p.cest + b.ce; // Timor-Leste

exports.cTimorLeste = cTimorLeste;
var cTogo = b.cTo + b.cgo; // Togo

exports.cTogo = cTogo;
var cTonga = b.cTo + p.cnga; // Tonga

exports.cTonga = cTonga;
var cTrinidadAndTabago = cTrinidad + b.cSpace + cand + b.cSpace + cTabago; // Trinidad and Tabago

exports.cTrinidadAndTabago = cTrinidadAndTabago;
var cTunisia = b.cTu + b.cni + p.csia; // Tunisia

exports.cTunisia = cTunisia;
var cTurkey = b.cTu + b.crk + b.cey; // Turkey

exports.cTurkey = cTurkey;
var cTurkmenistan = b.cTu + b.crk + p.cmen + p.cistan; // Turkmenistan

exports.cTurkmenistan = cTurkmenistan;
var cTuvalu = b.cTu + p.cval + b.cu; // Tuvalu

exports.cTuvalu = cTuvalu;
var cUganda = b.cUg + p.canda; // Uganda

exports.cUganda = cUganda;
var cUkraine = b.cUk + p.crain + b.ce; // Ukraine

exports.cUkraine = cUkraine;
var cUnitedArabEmirates = cUnited + b.cSpace + cArab + b.cSpace + cEmirates; // United Arab Emirates

exports.cUnitedArabEmirates = cUnitedArabEmirates;
var cUnitedKingdom = cUnited + b.cSpace + b.cKi + b.cng + p.cdom; // United Kingdom

exports.cUnitedKingdom = cUnitedKingdom;
var cUnitedStatesOfAmerica = cUnited + b.cSpace + cStates + b.cSpace + b.cof + b.cSpace + cAmerica; // United States Of Ammerica

exports.cUnitedStatesOfAmerica = cUnitedStatesOfAmerica;
var cUruguay = b.cUr + b.cug + p.cuay; // Uruguay

exports.cUruguay = cUruguay;
var cUzbekistan = b.cUz + b.cbe + p.ckistan; // Uzbekistan

exports.cUzbekistan = cUzbekistan;
var cVanuatu = b.cVa + b.cnu + b.cat + b.cu; // Vanuatu

exports.cVanuatu = cVanuatu;
var cVenezuela = b.cVe + b.cne + b.czu + p.cela; // Venezuela

exports.cVenezuela = cVenezuela;
var cVietnam = b.cVi + b.cet + p.cnam; // Vietnam

exports.cVietnam = cVietnam;
var cYemen = b.cYe + p.cmen; // Yemen

exports.cYemen = cYemen;
var cZambia = b.cZa + p.cmbia; // Zambia

exports.cZambia = cZambia;
var cZimbabwe = b.cZi + b.cmb + b.cab + b.cwe; // Zimbabwe
// Languages

exports.cZimbabwe = cZimbabwe;
var cChinese = p.cChi + b.cn + p.cese; // Chinese

exports.cChinese = cChinese;
var cChineseSimplified = cChinese + cSimplified; // ChineseSimplified

exports.cChineseSimplified = cChineseSimplified;
var cChineseTraditional = cChinese + cTraditional; // ChineseTraditional

exports.cChineseTraditional = cChineseTraditional;
var cCzech = b.cCz + b.ce + b.cch; // Czech

exports.cCzech = cCzech;
var cEnglish = b.cEn + b.cgl + p.cish; // English

exports.cEnglish = cEnglish;
var cFrench = b.cFr + b.cen + b.cch; // French
// cGerman = b.cGe + b.cr + cman; // German // Defined above in the countries section

exports.cFrench = cFrench;
var cHungarian = cHung + b.car + p.cian; // Hungarian

exports.cHungarian = cHungarian;
var cItalian = b.cIt + b.cal + p.cian; // Italian

exports.cItalian = cItalian;
var cJapanese = cJapan + p.cese; // Japanese

exports.cJapanese = cJapanese;
var cKorean = b.cKo + b.cre + b.can; // Korean

exports.cKorean = cKorean;
var cMiscellaneous = p.cMis + ccell + b.can + p.ceous; // Miscellaneous

exports.cMiscellaneous = cMiscellaneous;
var cPolish = b.cPo + b.cl + p.cish; // Polish

exports.cPolish = cPolish;
var cPortuguese = cPort + b.cug + b.cu + p.cese; // Portuguese

exports.cPortuguese = cPortuguese;
var cRussian = b.cRu + b.css + p.cian; // Russian

exports.cRussian = cRussian;
var cSpanish = b.cSp + b.can + p.cish; // Spanish
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

exports.cSpanish = cSpanish;
var cAbsolute = b.cAb + p.csol + p.cute; // Absolute

exports.cAbsolute = cAbsolute;
var cAcid = b.cAc + b.cid; // Acid

exports.cAcid = cAcid;
var cAir = b.cAi + b.cr; // Air

exports.cAir = cAir;
var cSuperiority = p.cSup + b.cer + b.cio + p.crit + b.cy; // Superiority

exports.cSuperiority = cSuperiority;
var cAlabaster = b.cAl + b.cab + b.cas + p.cter; // Alabaster

exports.cAlabaster = cAlabaster;
var cAlice = b.cAl + p.cice; // Alice

exports.cAlice = cAlice;
var cAlloy = p.cAll + b.coy; // Alloy

exports.cAlloy = cAlloy;
var cAmaranth = b.cAm + p.caranth; // Amaranth

exports.cAmaranth = cAmaranth;
var cAndroid = cAnd + b.cro + b.cid; // Android

exports.cAndroid = cAndroid;
var cAntique = b.cAn + b.cti + p.cque; // Antique

exports.cAntique = cAntique;
var cBrass = p.cBra + b.css; // Brass

exports.cBrass = cBrass;
var cBronze = b.cBr + p.conze; // Bronze

exports.cBronze = cBronze;
var cApple = g.cApp + b.cle; // Apple

exports.cApple = cApple;
var cApricot = b.cAp + p.cricot; // Apricot

exports.cApricot = cApricot;
var cArctic = b.cAr + b.cct + b.cic; // Arctic

exports.cArctic = cArctic;
var cArmy = b.cAr + b.cmy; // Army

exports.cArmy = cArmy;
var cArylide = b.cAr + b.cyl + p.cide; // Arylide

exports.cArylide = cArylide;
var cAtomic = b.cA + b.ct + b.com + b.cic; // Atomic

exports.cAtomic = cAtomic;
var cBaby = b.cBa + b.cby; // Baby

exports.cBaby = cBaby;
var cEyes = b.cEy + b.ces; // Eyes

exports.cEyes = cEyes;
var cPowder = b.cPo + p.cwder; // Powder

exports.cPowder = cPowder;
var cBaker = b.cBa + b.cke + b.cr; // Baker

exports.cBaker = cBaker;
var cMiller = u.cMill + b.cer; // Miller

exports.cMiller = cMiller;
var cBanana = b.cBa + b.cna + b.cna; // Banana

exports.cBanana = cBanana;
var cMania = cMan + b.cia; // Mania

exports.cMania = cMania;
var cBarbie = b.cBa + b.crb + b.cie; // Barbie

exports.cBarbie = cBarbie;
var cBarn = b.cBa + b.crn; // Barn

exports.cBarn = cBarn;
var cBattleship = b.cBa + b.ctt + p.cles + p.chip; // Battleship

exports.cBattleship = cBattleship;
var cBeau = b.cBe + b.cau; // Beau

exports.cBeau = cBeau;
var cDazzled = b.cDa + b.czz + b.cle + b.cd; // Dazzled

exports.cDazzled = cDazzled;
var cBitter = b.cBi + p.ctte + b.cr; // Bitter

exports.cBitter = cBitter;
var csweet = b.cs + p.cweet; // sweet

exports.csweet = csweet;
var cSweet = b.cS + p.cweet; // Sweet

exports.cSweet = cSweet;
var cBittersweet = b.cBi + p.ctte + b.crs + p.cweet; // Bittersweet

exports.cBittersweet = cBittersweet;
var cShimmer = b.cSh + p.cimmer; // Shimmer

exports.cShimmer = cShimmer;
var cBean = b.cBe + b.can; // Bean

exports.cBean = cBean;
var cChocolate = b.cCh + p.cocolate; // Chocolate

exports.cChocolate = cChocolate;
var cShadows = p.cSha + p.cdow + b.cs; // Shadows

exports.cShadows = cShadows;
var cBlanched = b.cBl + b.can + b.cch + b.ced; // Blanched

exports.cBlanched = cBlanched;
var cBlast = b.cBl + b.cas + b.ct; // Blast

exports.cBlast = cBlast;
var cBlizzard = b.cBl + b.ciz + p.czard; // Blizzard

exports.cBlizzard = cBlizzard;
var cBlood = b.cBl + p.cood; // Blood

exports.cBlood = cBlood;
var cCrayola = b.cCr + p.cayola; // Crayola

exports.cCrayola = cCrayola;
var cMunsell = b.cMu + p.cnsell; // Munsell

exports.cMunsell = cMunsell;
var cPantone = b.cPa + p.cntone; // Pantone

exports.cPantone = cPantone;
var cPigment = b.cPi + p.cgment; // Pigment

exports.cPigment = cPigment;
var cBell = b.cBe + b.cll; // Bell

exports.cBell = cBell;
var cwheel = b.cwh + p.ceel; // wheel

exports.cwheel = cwheel;
var cWheel = b.cWh + p.ceel; // Wheel

exports.cWheel = cWheel;
var cwheels = cwheel + b.cs; // wheels

exports.cwheels = cwheels;
var cWheels = cWheel + b.cs; // Wheels

exports.cWheels = cWheels;
var cJeans = b.cJe + p.cans; // Jeans

exports.cJeans = cJeans;
var cYonder = b.cYo + p.cnder; // Yonder

exports.cYonder = cYonder;
var cBottle = b.cBo + b.ctt + b.cle; // Bottle

exports.cBottle = cBottle;
var cbrick = b.cbr + p.cick; // brick

exports.cbrick = cbrick;
var cBrick = b.cBr + p.cick; // Brick

exports.cBrick = cBrick;
var cbricks = cbrick + b.cs; // bricks

exports.cbricks = cbricks;
var cBricks = cBrick + b.cs; // Bricks

exports.cBricks = cBricks;
var cBright = b.cBr + p.cight; // Bright

exports.cBright = cBright;
var cBrilliant = b.cBr + p.cill + p.cian + b.ct; // Brilliant

exports.cBrilliant = cBrilliant;
var cRacing = b.cRa + b.cci + b.cng; // Racing

exports.cRacing = cRacing;
var cSugar = p.cSug + b.car; // Sugar

exports.cSugar = cSugar;
var cBrunswick = b.cBr + b.cun + b.csw + p.cick; // Brunswick

exports.cBrunswick = cBrunswick;
var cBud = b.cBu + b.cd; // Bud

exports.cBud = cBud;
var cBurly = b.cBu + b.crl + b.cy; // Burly

exports.cBurly = cBurly;
var cBurnished = b.cBu + b.crn + p.cish + b.ced; // Burnished

exports.cBurnished = cBurnished;
var cBurnt = b.cBu + b.crn + b.ct; // Burnt

exports.cBurnt = cBurnt;
var cCadet = b.cCa + p.cdet; // Cadet

exports.cCadet = cCadet;
var cCafe = b.cCa + b.cfe; // Cafe

exports.cCafe = cCafe;
var cCambridge = b.cCa + b.cmb + b.cri + b.cdg + b.ce; // Cambridge

exports.cCambridge = cCambridge;
var cCameo = b.cCa + b.cme + b.co; // Cameo

exports.cCameo = cCameo;
var cCaput = b.cCa + cput; // Caput

exports.cCaput = cCaput;
var cMortuum = b.cMo + b.crt + b.cuu + b.cm; // Mortuum

exports.cMortuum = cMortuum;
var cCaribbean = b.cCa + b.cri + b.cbb + p.cean; // Caribbean

exports.cCaribbean = cCaribbean;
var cCarnation = b.cCa + b.crn + p.cation; // Carnation

exports.cCarnation = cCarnation;
var cCarrot = b.cCa + p.crrot; // Carrot

exports.cCarrot = cCarrot;
var cCastleton = b.cCa + p.cstle + p.cton; // Castleton

exports.cCastleton = cCastleton;
var cCedar = b.cCe + b.cda + b.cr; // Cedar

exports.cCedar = cCedar;
var cChest = b.cC + p.chest; // Chest

exports.cChest = cChest;
var cCeladon = p.cCel + p.cadon; // Celadon

exports.cCeladon = cCeladon;
var cCeltic = p.cCel + p.ctic; // Celtic

exports.cCeltic = cCeltic;
var cCharleston = cChar + p.cles + p.cton; // Charleston

exports.cCharleston = cCharleston;
var cCharm = cChar + b.cm; // Charm

exports.cCharm = cCharm;
var cChartreuse = cChar + p.ctre + cuse; // Chartreuse

exports.cChartreuse = cChartreuse;
var cCherry = b.cCh + p.cerry; // Cherry

exports.cCherry = cCherry;
var cBlossom = b.cBl + p.coss + b.com; // Blossom

exports.cBlossom = cBlossom;
var cChestnut = cChest + b.cnu + b.ct; // Chestnut

exports.cChestnut = cChestnut;
var cChrome = b.cCh + b.cro + b.cme; // Chrome

exports.cChrome = cChrome;
var cCinnamon = b.cCi + p.cnna + p.cmon; // Cinnamon

exports.cCinnamon = cCinnamon;
var cCocoa = b.cCo + b.cco + b.ca; // Cocoa

exports.cCocoa = cCocoa;
var cCoffee = b.cCo + p.cffee; // Coffee

exports.cCoffee = cCoffee;
var cColumbia = p.cCol + b.cum + p.cbia; // Columbia

exports.cColumbia = cColumbia;
var cCool = b.cCo + b.col; // Cool

exports.cCool = cCool;
var cflower = b.cf + clower; // flower

exports.cflower = cflower;
var cFlower = b.cF + clower; // Flower

exports.cFlower = cFlower;
var cflowers = cflower + b.cs; // flowers

exports.cflowers = cflowers;
var cFlowers = cFlower + b.cs; // Flowers

exports.cFlowers = cFlowers;
var csilk = b.cs + p.cilk; // silk

exports.csilk = csilk;
var cSilk = b.cS + p.cilk; // Silk

exports.cSilk = cSilk;
var cCosmic = b.cCo + b.csm + b.cic; // Cosmic

exports.cCosmic = cCosmic;
var cLatte = b.cLa + p.ctte; // Latte

exports.cLatte = cLatte;
var cCoyote = b.cCo + b.cyo + b.cte; // Coyote

exports.cCoyote = cCoyote;
var cCotton = b.cCo + b.ctt + b.con; // Cotton

exports.cCotton = cCotton;
var cCyber = b.cCy + p.cber; // Cyber

exports.cCyber = cCyber;
var cDark = b.cDa + b.crk; // Dark

exports.cDark = cDark;
var cByzantium = b.cBy + p.czantium; // Byzantium

exports.cByzantium = cByzantium;
var cElectric = b.cEl + p.cect + p.cric; // Electric

exports.cElectric = cElectric;
var cKhaki = b.cKh + p.caki; // Khaki

exports.cKhaki = cKhaki;
var cHorse = b.cHo + p.crse; // Horse

exports.cHorse = cHorse;
var cHorses = cHorse + b.cs; // Horses

exports.cHorses = cHorses;
var cMoss = b.cMo + b.css; // Moss

exports.cMoss = cMoss;
var cPastel = b.cPa + p.cste + b.cl; // Pastel

exports.cPastel = cPastel;
var cSky = b.cSk + b.cy; // Sky

exports.cSky = cSky;
var cSlate = b.cSl + p.cate; // Slate

exports.cSlate = cSlate;
var cSpring = b.cSp + p.crin + b.cg; // Spring

exports.cSpring = cSpring;
var cDartmouth = b.cDa + b.crt + b.cmo + p.cuth; // Dartmouth

exports.cDartmouth = cDartmouth;
var cDavys = b.cDa + b.cvy + b.cs; // Davys

exports.cDavys = cDavys;
var cCerise = b.cCe + p.crise; // Cerise

exports.cCerise = cCerise;
var cSparkle = b.cSp + p.cark + b.cle; // Sparkle

exports.cSparkle = cSparkle;
var cDim = b.cDi + b.cm; // Dim

exports.cDim = cDim;
var cDodger = b.cDo + b.cdg + b.cer; // Dodger

exports.cDodger = cDodger;
var cDogwood = b.cDo + b.cgw + p.cood; // Dogwood

exports.cDogwood = cDogwood;
var cDuke = b.cDu + b.cke; // Duke

exports.cDuke = cDuke;
var cDutch = b.cDu + p.ctch; // Dutch

exports.cDutch = cDutch;
var cEarth = b.cEa + b.crt + b.ch; // Earth

exports.cEarth = cEarth;
var cEerie = b.cEe + b.cri + b.ce; // Eerie

exports.cEerie = cEerie;
var cEton = b.cEt + b.con; // Eton

exports.cEton = cEton;
var cFalu = b.cFa + b.clu; // Falu

exports.cFalu = cFalu;
var cFashion = b.cFa + b.csh + p.cion; // Fashion

exports.cFashion = cFashion;
var cFern = b.cFe + b.crn; // Fern

exports.cFern = cFern;
var cFiery = b.cFi + b.cer + b.cy; // Fiery

exports.cFiery = cFiery;
var cFire = b.cFi + b.cre; // Fire

exports.cFire = cFire;
var cEngine = b.cEn + b.cgi + b.cne; // Engine

exports.cEngine = cEngine;
var cFloral = b.cFl + p.coral; // Floral

exports.cFloral = cFloral;
var cFluorescent = b.cFl + b.cuo + p.cres + p.ccent; // Fluorescent

exports.cFluorescent = cFluorescent;
var cForest = cFor + p.cest; // Forest

exports.cForest = cForest;
var cFrost = b.cFr + p.cost; // Frost

exports.cFrost = cFrost;
var cbite = b.cbi + b.cte; // bite

exports.cbite = cbite;
var cFuzzy = b.cFu + b.czz + b.cy; // Fuzzy

exports.cFuzzy = cFuzzy;
var cWuzzy = b.cW + b.cuz + b.czy; // Wuzzy

exports.cWuzzy = cWuzzy;
var cGhost = b.cGh + p.cost; // Ghost

exports.cGhost = cGhost;
var cGlossy = b.cGl + p.coss + b.cy; // Glossy

exports.cGlossy = cGlossy;
var cMetal = cMeta + b.cl; // Metal

exports.cMetal = cMetal;
var cMetallic = cMeta + p.cllic; // Metallic

exports.cMetallic = cMetallic;
var cFusion = b.cFu + p.csion; // Fusion

exports.cFusion = cFusion;
var cPoppy = cPop + b.cpy; // Poppy

exports.cPoppy = cPoppy;
var cGranite = b.cGr + b.can + p.cite; // Granite

exports.cGranite = cGranite;
var cGranny = b.cGr + b.can + b.cny; // Granny

exports.cGranny = cGranny;
var cSmith = b.cSm + p.cith; // Smith

exports.cSmith = cSmith;
var cLizard = b.cLi + p.czard; // Lizard

exports.cLizard = cLizard;
var cGun = b.cGu + b.cn; // Gun

exports.cGun = cGun;
var cHarvest = b.cHa + b.crv + p.cest; // Harvest

exports.cHarvest = cHarvest;
var cHeat = b.cHe + b.cat; // Heat

exports.cHeat = cHeat;
var cWave = b.cWa + b.cve; // Wave

exports.cWave = cWave;
var cHollywood = b.cHo + b.cll + b.cyw + p.cood; // Hollywood

exports.cHollywood = cHollywood;
var cHoney = b.cHo + b.cne + b.cy; // Honey

exports.cHoney = cHoney;
var cdew = b.cd + b.cew; // dew

exports.cdew = cdew;
var cHonolulu = b.cHo + b.cno + b.clu + b.clu; // Honolulu

exports.cHonolulu = cHonolulu;
var cHookers = b.cHo + p.coker + b.cs; // Hookers

exports.cHookers = cHookers;
var cHot = b.cHo + b.ct; // Hot

exports.cHot = cHot;
var cHunter = b.cHu + b.cnt + b.cer; // Hunter

exports.cHunter = cHunter;
var cIce = b.cIc + b.ce; // Ice

exports.cIce = cIce;
var cIlluminating = b.cIl + p.clum + p.cina + p.ctin + b.cg; // Illuminating

exports.cIlluminating = cIlluminating;
var cImperial = b.cIm + p.cper + b.cia + b.cl; // Imperial

exports.cImperial = cImperial;
var cworm = b.cwo + b.crm; // worm

exports.cworm = cworm;
var cIndependence = b.cIn + b.cde + cpen + p.cden + b.cce; // Independence

exports.cIndependence = cIndependence;
var cIndian = g.cIndia + b.cn; // Indian

exports.cIndian = cIndian;
var cDye = b.cDy + b.ce; // Dye

exports.cDye = cDye;
var cnational = cnation + b.cal; // national

exports.cnational = cnational;
var cNational = cNation + b.cal; // National

exports.cNational = cNational;
var cnationals = cnational + b.cs; // nationals

exports.cnationals = cnationals;
var cNationals = cNational + b.cs; // Nationals

exports.cNationals = cNationals;
var cInternational = p.cInter + cnation + b.cal; // International

exports.cInternational = cInternational;
var cAerospace = b.cAe + b.cro + cspace; // Aerospace

exports.cAerospace = cAerospace;
var cEngineering = b.cEn + b.cgi + b.cne + b.cer + p.cing; // Engineering

exports.cEngineering = cEngineering;
var cBridge = b.cBr + b.cid + b.cge; // Bridge

exports.cBridge = cBridge;
var cCarmine = b.cCa + p.crmine; // Carmine

exports.cCarmine = cCarmine;
var cjazz = b.cja + b.czz; // jazz

exports.cjazz = cjazz;
var cJazz = b.cJa + b.czz; // Jazz

exports.cJazz = cJazz;
var cberry = p.cber + b.cry; // berry

exports.cberry = cberry;
var cBerry = p.cBer + b.cry; // Berry

exports.cBerry = cBerry;
var cjam = b.cja + b.cm; // jam

exports.cjam = cjam;
var cJam = b.cJa + b.cm; // Jam

exports.cJam = cJam;
var cKelly = b.cKe + b.cll + b.cy; // Kelly

exports.cKelly = cKelly;
var cKombu = b.cKo + b.cmb + b.cu; // Kombu

exports.cKombu = cKombu;
var cLanguid = b.cLa + b.cng + b.cui + b.cd; // Languid

exports.cLanguid = cLanguid;
var cLapis = b.cLa + b.cpi + b.cs; // Lapis

exports.cLapis = cLapis;
var cLazuli = b.cL + b.caz + p.culi; // Lazuli

exports.cLazuli = cLazuli;
var cLaser = b.cLa + b.cse + b.cr; // Laser

exports.cLaser = cLaser;
var cLaurel = b.cLa + p.cure + b.cl; // Laurel

exports.cLaurel = cLaurel;
var cLawn = b.cLa + b.cwn; // Lawn

exports.cLawn = cLawn;
var cCurry = p.cCur + b.cry; // Curry

exports.cCurry = cCurry;
var cGlacier = b.cGl + b.cac + p.cier; // Glacier

exports.cGlacier = cGlacier;
var cMeringue = b.cMe + p.crin + b.cgu + b.ce; // Meringue

exports.cMeringue = cMeringue;
var cLight = b.cLi + p.cght; // Light

exports.cLight = cLight;
var cCoral = p.cCor + b.cal; // Coral

exports.cCoral = cCoral;
var cSteel = b.cSt + p.ceel; // Steel

exports.cSteel = cSteel;
var cLuster = b.cLu + p.cster; // Luster

exports.cLuster = cLuster;
var cLincoln = p.cLin + p.ccol + b.cn; // Lincoln

exports.cLincoln = cLincoln;
var cLiseran = b.cLi + b.cse + p.cran; // Liseran

exports.cLiseran = cLiseran;
var cLittle = cLit + p.ctle; // Little

exports.cLittle = cLittle;
var cBoy = b.cBo + b.cy; // Boy

exports.cBoy = cBoy;
var cDogs = b.cDo + b.cgs; // Dogs

exports.cDogs = cDogs;
var cOrgan = b.cOr + p.cgan; // Organ

exports.cOrgan = cOrgan;
var cMacaroni = p.cMac + p.caro + b.cni; // Macaroni

exports.cMacaroni = cMacaroni;
var cCheese = b.cCh + b.cee + b.cse; // Cheese

exports.cCheese = cCheese;
var cMadder = b.cMa + p.cdder; // Madder

exports.cMadder = cMadder;
var cHaze = b.cHa + b.cze; // Haze

exports.cHaze = cHaze;
var cMagic = b.cMa + b.cgi + b.cc; // Magic

exports.cMagic = cMagic;
var cMajorelle = b.cMa + b.cjo + b.cre + b.cll + b.ce; // Majorelle

exports.cMajorelle = cMajorelle;
var cMaximum = g.cMax + b.cim + b.cum; // Maximum

exports.cMaximum = cMaximum;
var cMaya = g.cMay + b.ca; // Maya

exports.cMaya = cMaya;
var cMedium = b.cMe + p.cdium; // Medium

exports.cMedium = cMedium;
var cMellow = b.cMe + p.cllow; // Mellow

exports.cMellow = cMellow;
var cweed = b.cwe + b.ced; // weed

exports.cweed = cweed;
var cWeed = b.cWe + b.ced; // Weed

exports.cWeed = cWeed;
var cweeds = cweed + b.cs; // weeds

exports.cweeds = cweeds;
var cWeeds = cWeed + b.cs; // Weeds

exports.cWeeds = cWeeds;
var cweeded = cweed + b.ced; // weeded

exports.cweeded = cweeded;
var cWeeded = cWeed + b.ced; // Weeded

exports.cWeeded = cWeeded;
var cSeaweed = cSea + cweed; // Seaweed

exports.cSeaweed = cSeaweed;
var csun = b.csu + b.cn; // sun

exports.csun = csun;
var cSun = b.cSu + b.cn; // Sun

exports.cSun = cSun;
var csuns = csun + b.cs; // suns

exports.csuns = csuns;
var cSuns = cSun + b.cs; // Suns

exports.cSuns = cSuns;
var cSunburst = b.cSu + b.cnb + b.cur + b.cst; // Sunburst

exports.cSunburst = cSunburst;
var cMexican = b.cMe + b.cxi + p.ccan; // Mexican

exports.cMexican = cMexican;
var cMiddle = b.cMi + b.cdd + b.cle; // Middle

exports.cMiddle = cMiddle;
var cMikado = b.cMi + b.cka + b.cdo; // Mikado

exports.cMikado = cMikado;
var cMimi = b.cMi + b.cm + b.ci; // Mimi

exports.cMimi = cMimi;
var cMinion = g.cMin + p.cion; // Minion

exports.cMinion = cMinion;
var cMisty = p.cMis + b.cty; // Misty

exports.cMisty = cMisty;
var cMorning = b.cMo + b.crn + p.cing; // Morning

exports.cMorning = cMorning;
var cMeadow = b.cMe + p.cadow; // Meadow

exports.cMeadow = cMeadow;
var cMount = b.cMo + p.cunt; // Mount

exports.cMount = cMount;
var cbatten = b.cba + p.ctten; // batten

exports.cbatten = cbatten;
var cMulberry = b.cMu + b.clb + p.cerry; // Mulberry

exports.cMulberry = cMulberry;
var cMyrtle = b.cMy + b.crt + b.cle; // Myrtle

exports.cMyrtle = cMyrtle;
var cNadeshiko = b.cNa + b.cde + b.csh + b.cik + b.co; // Nadeshiko

exports.cNadeshiko = cNadeshiko;
var cNaples = b.cNa + p.cple + b.cs; // Naples

exports.cNaples = cNaples;
var cNavajo = b.cNa + b.cva + b.cjo; // Navajo

exports.cNavajo = cNavajo;
var cNavy = b.cNa + b.cvy; // Navy

exports.cNavy = cNavy;
var cNeon = b.cNe + b.con; // Neon

exports.cNeon = cNeon;
var cYork = b.cYo + b.crk; // York

exports.cYork = cYork;
var cPhoto = b.cPh + b.cot + b.co; // Photo

exports.cPhoto = cPhoto;
var cOcean = b.cOc + p.cean; // Ocean

exports.cOcean = cOcean;
var cLace = b.cLa + b.cce; // Lace

exports.cLace = cLace;
var cOpera = b.cOp + p.cera; // Opera

exports.cOpera = cOpera;
var cPeel = b.cPe + b.cel; // Peel

exports.cPeel = cPeel;
var cSoda = b.cSo + b.cda; // Soda

exports.cSoda = cSoda;
var cOuter = cOut + b.cer; // Outer

exports.cOuter = cOuter;
var cOutrageous = cOut + p.crage + p.cous; // Outrageous

exports.cOutrageous = cOutrageous;
var cOxford = b.cOx + cfor + b.cd; // Oxford

exports.cOxford = cOxford;
var cPacific = b.cPa + b.cci + p.cfic; // Pacific

exports.cPacific = cPacific;
var cPalatinate = cPal + p.catin + p.cate; // Palatinate

exports.cPalatinate = cPalatinate;
var cPale = cPal + b.ce; // Pale

exports.cPale = cPale;
var cPansy = b.cPa + b.cns + b.cy; // Pansy

exports.cPansy = cPansy;
var cPaolo = b.cPa + b.col + b.co; // Paolo

exports.cPaolo = cPaolo;
var cVeronese = p.cVer + n.cone + b.cse; // Veronese

exports.cVeronese = cVeronese;
var cPapaya = g.cPapa + b.cya; // Papaya

exports.cPapaya = cPapaya;
var cWhip = b.cWh + b.cip; // Whip

exports.cWhip = cWhip;
var cParadise = p.cPara + b.cdi + b.cse; // Paradise

exports.cParadise = cParadise;
var cParis = b.cPa + p.cris; // Paris

exports.cParis = cParis;
var cPaynes = b.cPa + b.cyn + b.ces; // Paynes

exports.cPaynes = cPaynes;
var cPuff = b.cPu + b.cff; // Puff

exports.cPuff = cPuff;
var cPearly = b.cPe + b.car + b.cly; // Pearly

exports.cPearly = cPearly;
var cPermanent = p.cPer + cman + p.cent; // Permanent

exports.cPermanent = cPermanent;
var cGeranium = b.cGe + p.cran + p.cium; // Geranium

exports.cGeranium = cGeranium;
var cLake = b.cLa + b.cke; // Lake

exports.cLake = cLake;
var cPersian = p.cPer + p.csia + b.cn; // Persian

exports.cPersian = cPersian;
var cPewter = b.cPe + b.cwt + b.cer; // Pewter

exports.cPewter = cPewter;
var cPhthalo = b.cPh + b.cth + b.cal + b.co; // Phthalo

exports.cPhthalo = cPhthalo;
var cPicotee = u.cPico + p.ctee; // Picotee

exports.cPicotee = cPicotee;
var cPictorial = b.cPi + p.cctor + b.cia + b.cl; // Pictorial

exports.cPictorial = cPictorial;
var cPiggy = b.cPi + b.cgg + b.cy; // Piggy

exports.cPiggy = cPiggy;
var cPine = b.cPi + b.cne; // Pine

exports.cPine = cPine;
var cTree = b.cTr + b.cee; // Tree

exports.cTree = cTree;
var cFlamingo = b.cFl + b.cam + p.cing + b.co; // Flamingo

exports.cFlamingo = cFlamingo;
var cSherbet = b.cSh + b.cer + cbet; // Sherbet

exports.cSherbet = cSherbet;
var cPlump = b.cPl + b.cum + b.cp; // Plump

exports.cPlump = cPlump;
var cpolish = b.cpo + p.clish; // polish

exports.cpolish = cpolish;
var cpolished = cpolish + b.ced; // polished

exports.cpolished = cpolished;
var cPolished = cPolish + b.ced; // Polished

exports.cPolished = cPolished;
var cPomp = b.cPo + b.cmp; // Pomp

exports.cPomp = cPomp;
var cPower = b.cPo + p.cwer; // Power

exports.cPower = cPower;
var cPortland = cPort + b.cla + b.cnd; // Portland

exports.cPortland = cPortland;
var cPrinceton = p.cPri + p.cnce + p.cton; // Princeton

exports.cPrinceton = cPrinceton;
var cPrussian = b.cPr + b.cus + p.csia + b.cn; // Prussian

exports.cPrussian = cPrussian;
var cPsychedelic = b.cPs + b.cyc + b.che + p.cdel + b.cic; // Psychedelic

exports.cPsychedelic = cPsychedelic;
var cPullman = b.cPu + b.cll + cman; // Pullman

exports.cPullman = cPullman;
var cMountain = b.cMo + p.cunt + p.cain; // Mountain

exports.cMountain = cMountain;
var cMajesty = b.cMa + b.cje + p.csty; // Majesty

exports.cMajesty = cMajesty;
var cPizzazz = b.cPi + b.czz + p.cazz; // Pizzazz

exports.cPizzazz = cPizzazz;
var cQueen = p.cQue + b.cen; // Queen

exports.cQueen = cQueen;
var cQuick = b.cQu + p.cick; // Quick

exports.cQuick = cQuick;
var cQuinacridone = b.cQu + p.cina + b.ccr + b.cid + n.cone; // Quinacridone

exports.cQuinacridone = cQuinacridone;
var cRadical = b.cRa + b.cdi + p.ccal; // Radical

exports.cRadical = cRadical;
var cRaisin = b.cRa + b.cis + b.cin; // Raisin

exports.cRaisin = cRaisin;
var cGlace = b.cGl + p.cace; // Glace

exports.cGlace = cGlace;
var cRazzle = b.cRa + b.czz + b.cle; // Razzle

exports.cRazzle = cRazzle;
var cDazzle = b.cDa + b.czz + b.cle; // Dazzle

exports.cDazzle = cDazzle;
var cRazzmic = b.cRa + b.czz + b.camai + b.cc; // Razzmic

exports.cRazzmic = cRazzmic;
var cRebecca = b.cRe + b.cbe + b.ccc + b.ca; // Rebecca

exports.cRebecca = cRebecca;
var cSalsa = b.cSa + b.cls + b.ca; // Salsa

exports.cSalsa = cSalsa;
var cResolution = p.cRes + b.col + b.cut + p.cion; // Resolution

exports.cResolution = cResolution;
var cRich = b.cRi + b.cch; // Rich

exports.cRich = cRich;
var cRifle = b.cRi + b.cfl + b.ce; // Rifle

exports.cRifle = cRifle;
var cRobin = b.cRo + g.cbin; // Robin

exports.cRobin = cRobin;
var cEgg = b.cEg + b.cg; // Egg

exports.cEgg = cEgg;
var cRocket = b.cRo + b.cck + b.cet; // Rocket

exports.cRocket = cRocket;
var cRoman = b.cRo + cman; // Roman

exports.cRoman = cRoman;
var cBonbon = b.cBo + b.cnb + b.con; // Bonbon

exports.cBonbon = cBonbon;
var cDust = b.cDu + b.cst; // Dust

exports.cDust = cDust;
var cEbony = b.cEb + p.cony; // Ebony

exports.cEbony = cEbony;
var cQuartz = cQuart + b.cz; // Quartz

exports.cQuartz = cQuartz;
var cVale = b.cVa + b.cle; // Vale

exports.cVale = cVale;
var cwood = b.cwo + b.cod; // wood

exports.cwood = cwood;
var cRosso = b.cRo + b.css + b.co; // Rosso

exports.cRosso = cRosso;
var cCorsa = b.cC + b.cor + b.csa; // Corsa

exports.cCorsa = cCorsa;
var cRosy = b.cRo + b.csy; // Rosy

exports.cRosy = cRosy;
var cRoyal = b.cRo + b.cya + b.cl; // Royal

exports.cRoyal = cRoyal;
var crub = b.cru + b.cb; // rub

exports.crub = crub;
var cRub = b.cRu + b.cb; // Rub

exports.cRub = cRub;
var crubs = crub + b.cs; // rubs

exports.crubs = crubs;
var cRubs = cRub + b.cs; // Rubs

exports.cRubs = cRubs;
var crubbed = crub + cbed; // rubbed

exports.crubbed = crubbed;
var cRubbed = cRub + cbed; // Rubbed

exports.cRubbed = cRubbed;
var crubbing = crub + p.cbing; // rubbing

exports.crubbing = crubbing;
var cRubbing = cRub + p.cbing; // Rubbing

exports.cRubbing = cRubbing;
var cRubine = cRub + p.cine; // Rubine

exports.cRubine = cRubine;
var cSacramento = b.cSa + b.ccr + p.camen + b.cto; // Sacramento

exports.cSacramento = cSacramento;
var cState = b.cSt + p.cate; // State

exports.cState = cState;
var cSaddle = b.cSa + b.cdd + b.cle; // Saddle

exports.cSaddle = cSaddle;
var cSafety = cSafe + b.cty; // Safety

exports.cSafety = cSafety;
var cBlaze = b.cBl + p.caze; // Blaze

exports.cBlaze = cBlaze;
var cPatricks = cPat + p.crick + b.cs; // Patricks

exports.cPatricks = cPatricks;
var cSandy = g.cSan + b.cdy; // Sandy

exports.cSandy = cSandy;
var csap = b.csa + b.cp; // sap

exports.csap = csap;
var cSap = b.cSa + b.cp; // Sap

exports.cSap = cSap;
var cSatin = b.cSa + p.ctin; // Satin

exports.cSatin = cSatin;
var cSheen = b.cSh + p.ceen; // Sheen

exports.cSheen = cSheen;
var cSchauss = b.cSc + b.cha + b.cus + b.cs; // Schauss

exports.cSchauss = cSchauss;
var cSchool = b.cSc + b.cho + b.col; // School

exports.cSchool = cSchool;
var cBus = b.cBu + b.cs; // Bus

exports.cBus = cBus;
var cScreamin = b.cSc + p.cream + b.cin; // Screamin

exports.cScreamin = cScreamin;
var cSeal = cSea + b.cl; // Seal

exports.cSeal = cSeal;
var cshell = b.csh + p.cell; // shell

exports.cshell = cshell;
var cSelective = cSelect + p.cive; // Selective

exports.cSelective = cSelective;
var cShamrock = p.cSha + b.cmr + p.cock; // Shamrock

exports.cShamrock = cShamrock;
var cShimmering = cShimmer + p.cing; // Shimmering

exports.cShimmering = cShimmering;
var cBlush = b.cBl + p.cush; // Blush

exports.cBlush = cBlush;
var cShiny = b.cSh + b.cin + b.cy; // Shiny

exports.cShiny = cShiny;
var cShocking = b.cSh + p.cock + p.cing; // Shocking

exports.cShocking = cShocking;
var cChalice = b.cCh + p.cali + b.cce; // Chalice

exports.cChalice = cChalice;
var cSizzling = b.cSi + b.czz + p.clin + b.cg; // Sizzling

exports.cSizzling = cSizzling;
var cSunrise = b.cS + b.cun + p.crise; // Sunrise

exports.cSunrise = cSunrise;
var cSlimy = b.cSl + b.cim + b.cy; // Slimy

exports.cSlimy = cSlimy;
var cSmoky = b.cSm + b.cok + b.cy; // Smoky

exports.cSmoky = cSmoky;
var cSonic = b.cSo + p.cnic; // Sonic

exports.cSonic = cSonic;
var cBistre = b.cBi + p.cstre; // Bistre

exports.cBistre = cBistre;
var cStar = b.cSt + b.car; // Star

exports.cStar = cStar;
var cStil = b.cSt + b.cil; // Stil

exports.cStil = cStil;
var cGrain = b.cGr + p.cain; // Grain

exports.cGrain = cGrain;
var cglow = b.cg + clow; // glow

exports.cglow = cglow;
var cSuper = p.cSup + b.cer; // Super

exports.cSuper = cSuper;
var cTango = g.cTango; // Tango

exports.cTango = cTango;
var cTart = p.cTart; // Tart

exports.cTart = cTart;
var cTea = b.cTe + b.ca; // Tea

exports.cTea = cTea;
var cTerra = b.cTe + p.crra; // Terra

exports.cTerra = cTerra;
var cCotta = b.cCo + b.ctt + b.ca; // Cotta

exports.cCotta = cCotta;
var cThulian = b.cTh + p.culi + b.can; // Thulian

exports.cThulian = cThulian;
var cTickle = cTick + b.cle; // Tickle

exports.cTickle = cTickle;
var cTiffany = b.cTi + b.cff + p.cany; // Tiffany

exports.cTiffany = cTiffany;
var cTimber = b.cTi + p.cmber; // Timber

exports.cTimber = cTimber;
var cwolf = b.cwo + b.clf; // wolf

exports.cwolf = cwolf;
var cTropical = b.cTr + b.cop + p.cical; // Tropical

exports.cTropical = cTropical;
var cRain = b.cR + p.cain; // Rain

exports.cRain = cRain;
var cTrypan = cTry + b.cpa + b.cn; // Trypan

exports.cTrypan = cTrypan;
var cTufts = b.cTu + b.cft + b.cs; // Tufts

exports.cTufts = cTufts;
var cTumble = b.cTu + b.cmb + b.cle; // Tumble

exports.cTumble = cTumble;
var cTwilight = b.cTw + p.cili + p.cght; // Twilight

exports.cTwilight = cTwilight;
var cTyrian = b.cTy + p.cria + b.cn; // Tyrian

exports.cTyrian = cTyrian;
var cUltra = b.cUl + p.ctra; // Ultra

exports.cUltra = cUltra;
var cUnbleached = b.cUn + p.cble + p.cach + b.ced; // Unbleached

exports.cUnbleached = cUnbleached;
var cNations = cNation + b.cs; // Nations

exports.cNations = cNations;
var cUpsdell = b.cUp + b.csd + p.cell; // Upsdell

exports.cUpsdell = cUpsdell;
var cUranian = b.cUr + p.cania + b.cn; // Uranian

exports.cUranian = cUranian;
var cvan = b.cva + b.cn; // van

exports.cvan = cvan;
var cVan = b.cVa + b.cn; // Van

exports.cVan = cVan;
var cDyke = b.cDy + b.cke; // Dyke

exports.cDyke = cDyke;
var cVegas = b.cVe + b.cga + b.cs; // Vegas

exports.cVegas = cVegas;
var cVenetian = b.cVe + b.cne + b.cti + b.can; // Venetian

exports.cVenetian = cVenetian;
var cVivid = b.cVi + p.cvid; // Vivid

exports.cVivid = cVivid;
var cWarm = b.cWa + b.crm; // Warm

exports.cWarm = cWarm;
var cWild = b.cWi + b.cld; // Wild

exports.cWild = cWild;
var cWindsor = cWind + b.cso + b.cr; // Windsor

exports.cWindsor = cWindsor;
var cDregs = b.cDr + b.ceg + b.cs; // Dregs

exports.cDregs = cDregs;
var cWinter = b.cWi + b.cnt + b.cer; // Winter

exports.cWinter = cWinter;
var cDream = b.cDr + p.ceam; // Dream

exports.cDream = cDream;
var cYale = b.cYa + b.cle; // Yale

exports.cYale = cYale;