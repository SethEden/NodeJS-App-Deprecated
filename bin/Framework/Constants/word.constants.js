"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cConfirm = exports.cconfirm = exports.cCancel = exports.ccancel = exports.cSelect = exports.cselect = exports.cAt = exports.cat = exports.cAll = exports.call = exports.cDelete = exports.cdelete = exports.cEdit = exports.cUpdate = exports.cOpen = exports.cClose = exports.cAdded = exports.cAdd = exports.c_add = exports.cSubmit = exports.cCreate = exports.ccreate = exports.cFull = exports.cfull = exports.cEmpty = exports.cempty = exports.cConfigurations = exports.cConfiguration = exports.cOOPS = exports.cOops = exports.coops = exports.cWord = exports.cword = exports.cLinux = exports.clinux = exports.cWindows = exports.cwindows = exports.cWindow = exports.cwindow = exports.cWind = exports.cwind = exports.cObjects = exports.cobjects = exports.cObject = exports.cobject = exports.cBooleans = exports.cbooleans = exports.cBoolean = exports.cboolean = exports.cChars = exports.cchars = exports.cChar = exports.cchar = exports.cDoubles = exports.cdoubles = exports.cDouble = exports.cdouble = exports.cShorts = exports.cshorts = exports.cShort = exports.cshort = exports.cLongs = exports.clongs = exports.cLong = exports.clong = exports.cFloats = exports.cfloats = exports.cFloat = exports.cfloat = exports.cIntegers = exports.cintegers = exports.cInteger = exports.cinteger = exports.cStrings = exports.cstrings = exports.cString = exports.cstring = exports.cFlags = exports.cflags = exports.cFlag = exports.cflag = exports.cRegEx = exports.cregEx = exports.cNth = exports.cnth = exports.cURL = exports.curl = exports.cNode = exports.cnode = exports.cKey = exports.ckey = exports.clogs = exports.cLogs = exports.clog = exports.cLog = exports.cOut = exports.cout = exports.c3D = exports.c3d = exports.c1a1d = void 0;
exports.ckeyword = exports.cScripts = exports.cScript = exports.cMessages = exports.cmessages = exports.cMessage = exports.cmessage = exports.cPages = exports.cpages = exports.cPage = exports.cpage = exports.cDebug = exports.cdebug = exports.cbug = exports.cInvalid = exports.cinvalid = exports.cValidate = exports.cvalidate = exports.cValidations = exports.cvalidations = exports.cValidation = exports.cvalidation = exports.cValid = exports.cvalid = exports.cTypes = exports.cType = exports.ctype = exports.cField = exports.cLabel = exports.cLink = exports.cInfo = exports.cinfo = exports.cEntire = exports.cPositive = exports.cNegative = exports.cDownload = exports.cSave = exports.cNavigate = exports.cnavigate = exports.cexpect = exports.cPressKey = exports.cpressKey = exports.cClick = exports.cclick = exports.cLoad = exports.cNew = exports.cView = exports.cview = exports.cUnShare = exports.cUnshare = exports.cUnshared = exports.cUnShared = exports.cShared = exports.cshared = exports.cshares = exports.cShares = exports.cShare = exports.cshare = exports.cLists = exports.cList = exports.cItems = exports.citems = exports.cItem = exports.citem = exports.cThe = exports.cEnding = exports.cending = exports.cEND = exports.cEnd = exports.cend = exports.cBeginning = exports.cbeginning = exports.cBEGIN = exports.cBegin = exports.cbegin = exports.cBottom = exports.cbottom = exports.cTop = exports.ctop = exports.cTo = exports.cRight = exports.cright = exports.cLeft = exports.cleft = exports.cBack = exports.cback = exports.cFront = exports.cfront = exports.cDetails = exports.cdetails = exports.cDetail = exports.cdetail = exports.cWithout = exports.cwithout = exports.cWith = exports.cwith = exports.cMenu = exports.cMe = exports.cHamburger = exports.cAccount = void 0;
exports.cColon = exports.cPlus = exports.cSpaces = exports.cSpace = exports.cReplace = exports.creplace = exports.cFrom = exports.cPut = exports.cput = exports.cGet = exports.cget = exports.cLevel = exports.cAccess = exports.cUser = exports.cAnd = exports.cand = exports.cCompleted = exports.cComplete = exports.cProcessing = exports.cProcess = exports.cGateway = exports.cWay = exports.cway = exports.cGate = exports.cLimit = exports.climit = exports.cPreview = exports.cSetting = exports.csetting = exports.cSet = exports.cset = exports.cBug = exports.cPermission = exports.cViewer = exports.cExit = exports.cexit = exports.cPath = exports.cpath = exports.cIntermediate = exports.cintermediate = exports.cmediate = exports.cStamp = exports.cTime = exports.ctime = exports.cDate = exports.cdate = exports.cReceived = exports.cReceive = exports.cEmails = exports.cEmail = exports.cmail = exports.cID = exports.cId = exports.cid = exports.cPageScriptName = exports.cKeywordName = exports.ckeywordName = exports.cNames = exports.cnames = exports.cName = exports.cname = exports.cEnvironment = exports.cMaster = exports.cRows = exports.cRun = exports.cRow = exports.cOf = exports.cHost = exports.cNumber = exports.cnumber = exports.cAutomation = exports.cActions = exports.cAction = exports.cBrowser = exports.cExhaustive = exports.cBureau = exports.cTestWorkflow = exports.cTestStatusMessage = exports.cTestStatus = exports.cStatus = exports.cTESTS = exports.cTests = exports.ctests = exports.cTEST = exports.cTest = exports.ctest = exports.cWorkflows = exports.cworkflows = exports.cWorkflow = exports.cworkflow = exports.cFlow = exports.cflow = exports.cWork = exports.cwork = exports.cResults = exports.cData = exports.cdata = exports.cKeywords = exports.ckeywords = exports.cKeyword = void 0;
exports.cRide = exports.cride = exports.cOver = exports.cInner = exports.cinner = exports.chtml = exports.cHTML = exports.cawait = exports.cWait = exports.cwait = exports.cAbreviated = exports.cAssignment = exports.cassignment = exports.cAssign = exports.cassign = exports.cSign = exports.csign = exports.cSystem = exports.csystem = exports.cOperating = exports.cOperation = exports.cRaw = exports.cEquals = exports.cEqual = exports.cequal = exports.cTable = exports.ctable = exports.cLibrary = exports.clibrary = exports.cDialog = exports.cVisibility = exports.cvisibility = exports.cVariable = exports.cDetermine = exports.cdetermine = exports.cEnabled = exports.cenabled = exports.cEnable = exports.cenable = exports.cEither = exports.cCode = exports.ccode = exports.cLength = exports.clength = exports.cNumerical = exports.cNumeric = exports.cnumeric = exports.cRange = exports.crange = exports.cFindValue = exports.cfindValue = exports.cfindvalue = exports.cFind = exports.cfind = exports.cValues = exports.cvalues = exports.cValue = exports.cvalue = exports.cParent = exports.cparent = exports.cGenerate = exports.cgenerate = exports.cRandomly = exports.crandomly = exports.cRandom = exports.crandom = exports.cCounter = exports.ccounter = exports.cCount = exports.ccount = exports.cUpper = exports.cLetter = exports.cLet = exports.clet = exports.cDigit = exports.cdigit = exports.cDig = exports.cdig = exports.cExtension = exports.cRemove = exports.cremove = exports.cmove = exports.cCase = exports.cLower = exports.cLow = exports.cConvert = exports.cconvert = exports.cReturn = exports.creturn = exports.cturn = exports.cCarriage = exports.cCleaned = exports.ccleaned = exports.cClean = exports.cclean = exports.cCatagory = exports.cScore = exports.cscore = exports.cUnder = exports.cunder = void 0;
exports.ccafe = exports.cFolders = exports.cfolders = exports.cfolder = exports.cFolder = exports.cFold = exports.cfold = exports.cfiles = exports.cfile = exports.cFiles = exports.cFile = exports.cWebkey = exports.cPageName = exports.cTestName = exports.cPageData = exports.cpageData = exports.ctestData = exports.cCreation = exports.cAdvanced = exports.cAdvance = exports.cProjects = exports.cProject = exports.cproject = exports.cIteration = exports.cConstants = exports.cconstants = exports.cConstant = exports.cconstant = exports.cDescription = exports.cdescription = exports.cInput = exports.cinput = exports.cContext = exports.cTEXT = exports.cText = exports.ctext = exports.cAlphabetic = exports.cbetic = exports.cAlpha = exports.calpha = exports.cMixed = exports.cMix = exports.cOR = exports.cor = exports.cOr = exports.cBY = exports.cBy = exports.cby = exports.cAssertionStyle = exports.cUploadStyle = exports.cAssertionType = exports.cAssertion = exports.cAssertValueGreaterThan = exports.cAssertValueLessThan = exports.cAssertValueNotEqual = exports.cAssertValueEqual = exports.cAssertNotExists = exports.cAssertExists = exports.cThan = exports.cthan = exports.cThen = exports.cthen = exports.cGreater = exports.cgreater = exports.cGreat = exports.cgreat = exports.cLess = exports.cless = exports.cAssert = exports.cStyle = exports.cUpload = exports.cload = exports.cOnce = exports.cAfter = exports.cSwap = exports.cswap = exports.cQuote = exports.cSingle = exports.csingle = exports.cDefault = exports.cdefault = exports.cfault = exports.cUnified = exports.cMulti = exports.cParallel = exports.cSingular = exports.cSynch = exports.cAsynch = exports.cExists = exports.cExist = exports.cIndividually = exports.cIndividual = exports.cSelectors = exports.cSelector = exports.cselector = exports.cLocatorLibrary = exports.cLocators = exports.cLocator = exports.cActionOverride = exports.cOverride = void 0;
exports.cDegree = exports.cdegree = exports.cNormalize = exports.cnormalize = exports.cNormal = exports.cnormal = exports.cQuaternion = exports.cquaternion = exports.cQuarter = exports.cquarter = exports.cQuart = exports.cquart = exports.cRounded = exports.crounded = exports.cRound = exports.cround = exports.cCamel = exports.ccamel = exports.cArray = exports.carray = exports.cDecompose = exports.cdecompose = exports.ccompose = exports.cDashboard = exports.cboard = exports.cDash = exports.cError = exports.cerror = exports.cWarnings = exports.cwarnings = exports.cWarning = exports.cwarning = exports.cWarn = exports.cwarn = exports.cConstructor = exports.cPort = exports.cport = exports.cHung = exports.chung = exports.cCell = exports.ccell = exports.cWoman = exports.cwoman = exports.cMan = exports.cman = exports.cDisabled = exports.cdisabled = exports.cAttributes = exports.cattributes = exports.cFilter = exports.cfilter = exports.cChild = exports.cchild = exports.cSibling = exports.csibling = exports.cExecute = exports.cDwell = exports.cTimeOut = exports.cTimeout = exports.cBinary = exports.cSolid = exports.csolid = exports.cWorks = exports.cEdge = exports.cedge = exports.cCharacters = exports.ccharacters = exports.cCharacter = exports.ccharacter = exports.cSpecial = exports.cspecial = exports.cPublic = exports.cpublic = exports.cHome = exports.chome = exports.cAllowable = exports.callowable = exports.cAllow = exports.callow = exports.cElementName = exports.cElement = exports.celement = exports.cchecked = exports.cCheck = exports.ccheck = exports.cIS = exports.cIs = exports.cis = exports.cIngestion = exports.cClass = exports.cclass = exports.cResources = exports.cresources = exports.cResource = exports.cresource = exports.cSource = exports.csource = exports.cbin = exports.csrc = exports.ccert = void 0;
exports.ceven = exports.cOdd = exports.codd = exports.cBasic = exports.cbasic = exports.cPercent = exports.cpercent = exports.cExecution = exports.cJournal = exports.cMultiple = exports.cmultiple = exports.cFunctions = exports.cfunctions = exports.cFunction = exports.cfunction = exports.cCommon = exports.ccommon = exports.cDemo = exports.cdemo = exports.cReload = exports.creload = exports.cEval = exports.ceval = exports.cRefresh = exports.crefresh = exports.cfresh = exports.cRule = exports.crule = exports.cBusiness = exports.cbusiness = exports.cMetaData = exports.cMeta = exports.cmeta = exports.cSlash = exports.cslash = exports.cForward = exports.cforward = exports.cParse = exports.cparse = exports.cRoot = exports.croot = exports.cRelease = exports.crelease = exports.clease = exports.cDeployment = exports.cdeployment = exports.cDeploy = exports.cdeploy = exports.cBuild = exports.cbuild = exports.cApplication = exports.capplication = exports.cDoes = exports.cdoes = exports.cMatching = exports.cmatching = exports.cMatch = exports.cmatch = exports.cAscertain = exports.cascertain = exports.ccertain = exports.cBetween = exports.cbetween = exports.cBet = exports.cbet = exports.cDifference = exports.cAggregate = exports.caggregate = exports.cProduct = exports.cVideo = exports.cvideo = exports.cContains = exports.ccontains = exports.cContain = exports.ccontain = exports.cCompare = exports.ccompare = exports.cConsolidated = exports.cConsolidate = exports.cconsolidate = exports.cSimplify = exports.csimplify = exports.cSort = exports.csort = exports.cLocation = exports.clocation = exports.cPoint = exports.cpoint = exports.cTransform = exports.ctransform = exports.cform = exports.cVector = exports.cvector = exports.cFraction = exports.cTrap = exports.ctrap = exports.cAngle = exports.cangle = exports.cDegrees = exports.cdegrees = void 0;
exports.cTrack = exports.ctrack = exports.cRack = exports.crack = exports.cMetrics = exports.cmetrics = exports.cMetric = exports.cmetric = exports.cOutput = exports.coutput = exports.cstartup = exports.cStart = exports.cstart = exports.cAbout = exports.cabout = exports.cIndex = exports.cindex = exports.cGenerator = exports.cgenerator = exports.cHive = exports.chive = exports.cPrint = exports.cprint = exports.cHelp = exports.chelp = exports.cDelimiter = exports.cdelimiter = exports.cTertiary = exports.ctertiary = exports.cSecondary = exports.csecondary = exports.cPrimary = exports.cprimary = exports.cSequencer = exports.csequencer = exports.cAliases = exports.caliases = exports.cAlias = exports.calias = exports.cFrame = exports.cframe = exports.cBlob = exports.cblob = exports.cQueue = exports.cqueue = exports.cCommands = exports.ccommands = exports.cCommand = exports.ccommand = exports.cCustom = exports.ccustom = exports.cRules = exports.crules = exports.cClient = exports.cclient = exports.cAverage = exports.caverage = exports.cPalindrom = exports.cpalindrom = exports.cPal = exports.cpal = exports.cAlmost = exports.calmost = exports.cPopular = exports.cpopular = exports.cPop = exports.cpop = exports.cMost = exports.cmost = exports.cBold = exports.cbold = exports.cOld = exports.cold = exports.cColors = exports.ccolors = exports.cColor = exports.ccolor = exports.cModule = exports.cmodule = exports.cFont = exports.cfont = exports.cFiglet = exports.cfiglet = exports.cFig = exports.cfig = exports.cInterface = exports.cinterface = exports.cDriven = exports.cdriven = exports.cDrive = exports.cdrive = exports.cArgument = exports.cargument = exports.cFace = exports.cface = exports.cEvents = exports.cevents = exports.cEvent = exports.cevent = exports.cEven = void 0;
exports.cPrefix = exports.cprefix = exports.cFix = exports.cfix = exports.cQualified = exports.cqualified = exports.cDocument = exports.cdocument = exports.cLine = exports.cline = exports.cSuggested = exports.csuggested = exports.cSuggest = exports.csuggest = exports.cSummary = exports.csummary = exports.cSum = exports.csum = exports.cDisplay = exports.cdisplay = exports.cPlay = exports.cplay = exports.cExport = exports.cexport = exports.cShape = exports.cshape = exports.cPhonics = exports.cphonics = exports.cIsotope = exports.cisotope = exports.cGeneric = exports.cgeneric = exports.cUnits = exports.cunits = exports.cUnit = exports.cunit = exports.cSections = exports.csections = exports.cSection = exports.csection = exports.cLane = exports.clane = exports.cLack = exports.clack = exports.cYell = exports.cyell = exports.cGround = exports.cground = exports.cTraditional = exports.cSimplified = exports.cFAIL = exports.cFail = exports.cfail = exports.cPASS = exports.cPass = exports.cpass = exports.cConversion = exports.cconversion = exports.cPerformance = exports.cControl = exports.cVersion = exports.cversion = exports.cClear = exports.cclear = exports.cAnalysis = exports.canalysis = exports.cDeviation = exports.cdeviation = exports.cStandard = exports.cstandard = exports.cStack = exports.cstack = exports.cTracking = exports.ctracking = void 0;

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
var cshort = b.cs + p.chort; // short

exports.cshort = cshort;
var cShort = b.cS + p.chort; // Short

exports.cShort = cShort;
var cshorts = cshort + b.cs; // shorts

exports.cshorts = cshorts;
var cShorts = cShort + b.cs; // Shorts

exports.cShorts = cShorts;
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
var coops = b.co + p.cops; // oops

exports.coops = coops;
var cOops = b.cO + p.cops; // Oops

exports.cOops = cOops;
var cOOPS = b.cO + p.cOPS; // OOPS

exports.cOOPS = cOOPS;
var cConfiguration = b.cCo + b.cnf + b.cig + b.cur + b.ca + p.ction; // Configuration

exports.cConfiguration = cConfiguration;
var cConfigurations = cConfiguration + b.cs; // Configurations

exports.cConfigurations = cConfigurations;
var cempty = b.cem + b.cpt + b.cy; // empty

exports.cempty = cempty;
var cEmpty = b.cEm + b.cpt + b.cy; // Empty

exports.cEmpty = cEmpty;
var cfull = b.cf + p.cull; // full

exports.cfull = cfull;
var cFull = b.cF + p.cull; // Full

exports.cFull = cFull;
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
var cAdded = cAdd + b.ced; // Added

exports.cAdded = cAdded;
var cClose = b.cCl + b.cos + b.ce; // Close

exports.cClose = cClose;
var cOpen = b.cOp + b.cen; // Open

exports.cOpen = cOpen;
var cUpdate = b.cUp + p.cdate; // Update

exports.cUpdate = cUpdate;
var cEdit = b.cEd + b.cit; // Edit

exports.cEdit = cEdit;
var cdelete = b.cd + p.celete; // delete

exports.cdelete = cdelete;
var cDelete = b.cD + p.celete; // Delete

exports.cDelete = cDelete;
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
var ccancel = b.cca + b.cnc + b.cel; // cancel

exports.ccancel = ccancel;
var cCancel = b.cCa + b.cnc + b.cel; // Cancel

exports.cCancel = cCancel;
var cconfirm = b.cco + b.cnf + b.cir + b.cm; // confirm

exports.cconfirm = cconfirm;
var cConfirm = b.cCo + b.cnf + b.cir + b.cm; // Confirm

exports.cConfirm = cConfirm;
var cAccount = b.cAc + b.cco + b.cun + b.ct; // Account

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
var cList = b.cLi + b.cst; // List

exports.cList = cList;
var cLists = cList + b.cs; // Lists

exports.cLists = cLists;
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
var cLoad = b.cLo + 'ad'; // b.cad; // Load // NOTE: Apparently 'cad' is also a reserved word.

exports.cLoad = cLoad;
var cclick = b.cc + p.click; // click

exports.cclick = cclick;
var cClick = b.cC + p.click; // Click

exports.cClick = cClick;
var cpressKey = b.cp + p.cress + cKey; // pressKey

exports.cpressKey = cpressKey;
var cPressKey = b.cP + p.cress + cKey; // PressKey

exports.cPressKey = cPressKey;
var cexpect = b.cex + b.cpe + b.cct; // expect

exports.cexpect = cexpect;
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
var cResults = b.cRe + b.csu + b.clt + b.cs; // Results

exports.cResults = cResults;
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
var cAction = b.cAc + p.ction; // Action

exports.cAction = cAction;
var cActions = cAction + b.cs; // Actions

exports.cActions = cActions;
var cAutomation = b.cAu + b.cto + b.cma + p.ction; // Automation

exports.cAutomation = cAutomation;
var cnumber = b.cn + p.cumber; // number

exports.cnumber = cnumber;
var cNumber = b.cN + p.cumber; // Number

exports.cNumber = cNumber;
var cHost = b.cHo + b.cst; // Host

exports.cHost = cHost;
var cOf = b.cOf; // Of

exports.cOf = cOf;
var cRow = b.cRo + b.cw; // Row

exports.cRow = cRow;
var cRun = b.cRu + b.cn; // Run

exports.cRun = cRun;
var cRows = cRow + b.cs; // Rows

exports.cRows = cRows;
var cMaster = b.cMa + b.cst + b.cer; // Master

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
var cStamp = b.cSt + b.cam + b.cp; // Stamp

exports.cStamp = cStamp;
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
var climit = b.cli + b.cm + b.ci + b.ct; // limit // NOTE: b.cmi resolves as "s"

exports.climit = climit;
var cLimit = b.cLi + b.cm + b.ci + b.ct; // Limit // NOTE: b.cmi resolves as "s"

exports.cLimit = cLimit;
var cGate = b.cGa + b.cte; // Gate

exports.cGate = cGate;
var cway = b.cwa + b.cy; // way

exports.cway = cway;
var cWay = b.cWa + b.cy; // Way

exports.cWay = cWay;
var cGateway = cGate + cway; // Gateway

exports.cGateway = cGateway;
var cProcess = p.cPro + b.cce + b.css; // Process

exports.cProcess = cProcess;
var cProcessing = cProcess + p.cing; // Processing

exports.cProcessing = cProcessing;
var cComplete = b.cCo + b.cmp + b.cl + p.cete; // Complete

exports.cComplete = cComplete;
var cCompleted = cComplete + b.cd; // Completed

exports.cCompleted = cCompleted;
var cand = b.can + b.cd; // and

exports.cand = cand;
var cAnd = b.cAn + b.cd; // And

exports.cAnd = cAnd;
var cUser = b.cUs + b.cer; // User

exports.cUser = cUser;
var cAccess = b.cAc + b.cce + b.css; // Access

exports.cAccess = cAccess;
var cLevel = b.cLe + b.cve + b.cl; // Level

exports.cLevel = cLevel;
var cget = b.cge + b.ct; // get

exports.cget = cget;
var cGet = b.cGe + b.ct; // Get

exports.cGet = cGet;
var cput = b.cp + b.cut; // put

exports.cput = cput;
var cPut = b.cP + b.cut; // Put

exports.cPut = cPut;
var cFrom = b.cFr + b.com; // From

exports.cFrom = cFrom;
var creplace = b.cr + p.ceplace; // replace

exports.creplace = creplace;
var cReplace = b.cR + p.ceplace; // Replace

exports.cReplace = cReplace;
var cSpace = b.cSp + p.cace; // Space

exports.cSpace = cSpace;
var cSpaces = cSpace + b.cs; // Spaces

exports.cSpaces = cSpaces;
var cPlus = b.cPl + b.cus; // Plus

exports.cPlus = cPlus;
var cColon = b.cCo + b.clo + b.cn; // Colon

exports.cColon = cColon;
var cunder = b.cun + p.cder; // under

exports.cunder = cunder;
var cUnder = b.cUn + p.cder; // Under

exports.cUnder = cUnder;
var cscore = b.cs + p.ccore; // score

exports.cscore = cscore;
var cScore = b.cS + p.ccore; // Score

exports.cScore = cScore;
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
var cLow = b.cLo + b.cw; // Low

exports.cLow = cLow;
var cLower = cLow + b.cer; // Lower

exports.cLower = cLower;
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
var clet = b.cle + b.ct; // let

exports.clet = clet;
var cLet = b.cLe + b.ct; // Let

exports.cLet = cLet;
var cLetter = cLet + b.ct + b.cer; // Letter

exports.cLetter = cLetter;
var cUpper = b.cUp + b.cp + b.cer; // Upper

exports.cUpper = cUpper;
var ccount = b.cco + p.cunt; // count

exports.ccount = ccount;
var cCount = b.cCo + p.cunt; // Count

exports.cCount = cCount;
var ccounter = ccount + b.cer; // counter

exports.ccounter = ccounter;
var cCounter = cCount + b.cer; // Counter

exports.cCounter = cCounter;
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
var cEither = b.cEi + b.cth + b.cer; // Either

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
var cVariable = p.cVar + b.ci + p.cable; // Variable

exports.cVariable = cVariable;
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
var cequal = b.ceq + b.cua + b.cl; // equal

exports.cequal = cequal;
var cEqual = b.cEq + b.cua + b.cl; // Equal

exports.cEqual = cEqual;
var cEquals = cEqual + b.cs; // Equals

exports.cEquals = cEquals;
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
var cExist = b.cEx + b.cis + b.ct; // Exist

exports.cExist = cExist;
var cExists = cExist + b.cs; // Exists

exports.cExists = cExists;
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
var cfault = b.cfa + b.cul + b.ct; // fault

exports.cfault = cfault;
var cdefault = b.cde + cfault; // default

exports.cdefault = cdefault;
var cDefault = b.cDe + cfault; // Default

exports.cDefault = cDefault;
var csingle = b.cs + p.cingle; // single

exports.csingle = csingle;
var cSingle = b.cS + p.cingle; // Single

exports.cSingle = cSingle;
var cQuote = b.cQu + b.cot + b.ce; // Quote

exports.cQuote = cQuote;
var cswap = b.cs + p.cwap; // swap

exports.cswap = cswap;
var cSwap = b.cS + p.cwap; // Swap

exports.cSwap = cSwap;
var cAfter = b.cAf + b.ct + b.cer; // After

exports.cAfter = cAfter;
var cOnce = b.cOn + b.cce; // Once

exports.cOnce = cOnce;
var cload = b.clo + 'ad'; // b.cad; // load // NOTE: Apparently 'cad' is also a reserved word.

exports.cload = cload;
var cUpload = b.cUp + cload; // Upload

exports.cUpload = cUpload;
var cStyle = b.cSt + b.cyl + b.ce; // Style

exports.cStyle = cStyle;
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
var cMix = b.cMi + b.cx; // Mix

exports.cMix = cMix;
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
var cContext = p.cCon + ctext; // Context

exports.cContext = cContext;
var cinput = b.cin + cput; // input

exports.cinput = cinput;
var cInput = b.cIn + cput; // Input

exports.cInput = cInput;
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
var cIteration = b.cIt + b.cer + b.ca + p.ction; // Iteration

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
var cWebkey = b.cWe + b.cb + ckey; // Webkey

exports.cWebkey = cWebkey;
var cFile = b.cF + p.cile; // File

exports.cFile = cFile;
var cFiles = cFile + b.cs; // Files

exports.cFiles = cFiles;
var cfile = b.cf + p.cile; // file

exports.cfile = cfile;
var cfiles = cfile + b.cs; // files

exports.cfiles = cfiles;
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
var csource = b.cs + p.cource; // source

exports.csource = csource;
var cSource = b.cS + p.cource; // Source

exports.cSource = cSource;
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
var cchecked = ccheck + b.ced; // checked

exports.cchecked = cchecked;
var celement = b.cel + b.ce + p.cment; // element

exports.celement = celement;
var cElement = b.cEl + b.ce + p.cment; // Element

exports.cElement = cElement;
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
var cExecute = b.cEx + b.cec + b.cut + b.ce; // Execute

exports.cExecute = cExecute;
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
var cwarning = cwarn + p.cing; // warning

exports.cwarning = cwarning;
var cWarning = cWarn + p.cing; // Warning

exports.cWarning = cWarning;
var cwarnings = cwarning + b.cs; // warnings

exports.cwarnings = cwarnings;
var cWarnings = cWarning + b.cs; // Warnings

exports.cWarnings = cWarnings;
var cerror = b.ce + p.crror; // error

exports.cerror = cerror;
var cError = b.cE + p.crror; // Error

exports.cError = cError;
var cDash = b.cDa + b.csh; // Dash

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
var cform = b.cfo + b.crm; // form

exports.cform = cform;
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
var cConsolidated = cConsolidate + b.cd; // Consolidated

exports.cConsolidated = cConsolidated;
var ccompare = p.ccomp + p.care; // compare

exports.ccompare = ccompare;
var cCompare = p.cComp + p.care; // Compare

exports.cCompare = cCompare;
var ccontain = p.ccon + p.ctain; // contain

exports.ccontain = ccontain;
var cContain = p.cCon + p.ctain; // Contain

exports.cContain = cContain;
var ccontains = ccontain + b.cs; // contains

exports.ccontains = ccontains;
var cContains = cContain + b.cs; // Contains

exports.cContains = cContains;
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
var capplication = p.capp + p.clica + p.ction; // application

exports.capplication = capplication;
var cApplication = p.cApp + p.clica + p.ction; // Application

exports.cApplication = cApplication;
var cbuild = b.cbu + p.cild; // build

exports.cbuild = cbuild;
var cBuild = b.cBu + p.cild; // Build

exports.cBuild = cBuild;
var cdeploy = b.cd + b.cep + p.cloy; // deploy

exports.cdeploy = cdeploy;
var cDeploy = b.cD + b.cep + p.cloy; // Deploy

exports.cDeploy = cDeploy;
var cdeployment = cdeploy + p.cment; // deployment

exports.cdeployment = cdeployment;
var cDeployment = cDeploy + p.cment; // Deployment

exports.cDeployment = cDeployment;
var clease = b.cle + p.c_ase; // lease

exports.clease = clease;
var crelease = b.cre + clease; // release

exports.crelease = crelease;
var cRelease = b.cRe + clease; // Release

exports.cRelease = cRelease;
var croot = b.cr + p.coot; // root

exports.croot = croot;
var cRoot = b.cR + p.coot; // Root

exports.cRoot = cRoot;
var cparse = b.cp + p.carse; // parse

exports.cparse = cparse;
var cParse = b.cP + p.carse; // Parse

exports.cParse = cParse;
var cforward = b.cf + b.cor + p.cward; // forward

exports.cforward = cforward;
var cForward = b.cF + b.cor + p.cward; // Forward

exports.cForward = cForward;
var cslash = b.cs + p.clash; // slash

exports.cslash = cslash;
var cSlash = b.cS + p.clash; // Slash

exports.cSlash = cSlash;
var cmeta = b.cm + p.ceta; // meta

exports.cmeta = cmeta;
var cMeta = b.cM + p.ceta; // Meta

exports.cMeta = cMeta;
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
var cfig = b.cf + b.cig; // fig

exports.cfig = cfig;
var cFig = b.cF + b.cig; // Fig

exports.cFig = cFig;
var cfiglet = cfig + clet; // figlet

exports.cfiglet = cfiglet;
var cFiglet = cFig + clet; // Figlet

exports.cFiglet = cFiglet;
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
var cdelimiter = b.cde + climit + b.cer; // delimiter

exports.cdelimiter = cdelimiter;
var cDelimiter = b.cDe + climit + b.cer; // Delimiter

exports.cDelimiter = cDelimiter;
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
var cControl = b.cCo + b.cnt + b.cro + b.cl; // Control

exports.cControl = cControl;
var cPerformance = b.cPe + b.crf + b.cor + b.cma + b.cnc + b.ce; // Performance

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
var cfail = b.cf + p.cail; // fail

exports.cfail = cfail;
var cFail = b.cF + p.cail; // Fail

exports.cFail = cFail;
var cFAIL = b.cF + p.cAIL; // FAIL

exports.cFAIL = cFAIL;
var cSimplified = b.cSi + b.cmp + b.cli + b.cfi + b.ced; // Simplified

exports.cSimplified = cSimplified;
var cTraditional = b.cTr + 'ad' + b.ci + p.ction + b.cal; // Traditional

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