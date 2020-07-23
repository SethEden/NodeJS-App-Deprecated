"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cConfirm = exports.cconfirm = exports.cCancel = exports.ccancel = exports.cSelect = exports.cselect = exports.cAt = exports.cat = exports.cAll = exports.call = exports.cdelete = exports.cDelete = exports.cEdit = exports.cUpdate = exports.cOpen = exports.cClose = exports.cAdded = exports.cAdd = exports.c_add = exports.cSubmit = exports.cCreate = exports.ccreate = exports.cFull = exports.cfull = exports.cEmpty = exports.cempty = exports.cConfigurations = exports.cConfiguration = exports.coops = exports.cOops = exports.cOOPS = exports.cWord = exports.cword = exports.cLinux = exports.clinux = exports.cWindows = exports.cwindows = exports.cWindow = exports.cwindow = exports.cWind = exports.cwind = exports.cObjects = exports.cobjects = exports.cObject = exports.cobject = exports.cBooleans = exports.cbooleans = exports.cBoolean = exports.cboolean = exports.cChars = exports.cchars = exports.cChar = exports.cchar = exports.cDoubles = exports.cdoubles = exports.cDouble = exports.cdouble = exports.cShorts = exports.cshorts = exports.cShort = exports.cshort = exports.cLongs = exports.clongs = exports.cLong = exports.clong = exports.cFloats = exports.cfloats = exports.cFloat = exports.cfloat = exports.cIntegers = exports.cintegers = exports.cInteger = exports.cinteger = exports.cStrings = exports.cstrings = exports.cstring = exports.cString = exports.cFlags = exports.cflags = exports.cFlag = exports.cflag = exports.cRegEx = exports.cregEx = exports.cnth = exports.cNth = exports.cURL = exports.curl = exports.cnode = exports.cNode = exports.ckey = exports.cKey = exports.clogs = exports.cLogs = exports.clog = exports.cLog = exports.cOut = exports.cout = exports.c3D = exports.c3d = exports.c1a1d = void 0;
exports.cwork = exports.cResults = exports.cdata = exports.cData = exports.ckeywords = exports.cKeywords = exports.ckeyword = exports.cKeyword = exports.cScripts = exports.cScript = exports.cMessage = exports.cmessage = exports.cPages = exports.cpages = exports.cPage = exports.cpage = exports.cDebug = exports.cdebug = exports.cbug = exports.cInvalid = exports.cValidate = exports.cValidation = exports.cvalid = exports.cValid = exports.cTypes = exports.ctype = exports.cType = exports.cField = exports.cLabel = exports.cLink = exports.cInfo = exports.cinfo = exports.cEntire = exports.cPositive = exports.cNegative = exports.cDownload = exports.cSave = exports.cNavigate = exports.cnavigate = exports.cexpect = exports.cpressKey = exports.cPressKey = exports.cclick = exports.cClick = exports.cLoad = exports.cNew = exports.cView = exports.cview = exports.cUnShare = exports.cUnshare = exports.cUnshared = exports.cUnShared = exports.cshared = exports.cShared = exports.cshares = exports.cShares = exports.cShare = exports.cshare = exports.cLists = exports.cList = exports.cItems = exports.citems = exports.cItem = exports.citem = exports.cThe = exports.cEnding = exports.cending = exports.cEND = exports.cEnd = exports.cend = exports.cBeginning = exports.cbeginning = exports.cBEGIN = exports.cBegin = exports.cbegin = exports.cBottom = exports.cbottom = exports.cTop = exports.ctop = exports.cTo = exports.cRight = exports.cright = exports.cLeft = exports.cleft = exports.cBack = exports.cback = exports.cFront = exports.cfront = exports.cDetails = exports.cdetails = exports.cDetail = exports.cdetail = exports.cWithout = exports.cwithout = exports.cWith = exports.cwith = exports.cMenu = exports.cMe = exports.cHamburger = exports.cAccount = void 0;
exports.ccleaned = exports.cClean = exports.cclean = exports.cCatagory = exports.cScore = exports.cscore = exports.cUnder = exports.cunder = exports.cColon = exports.cPlus = exports.cSpaces = exports.cSpace = exports.cReplace = exports.creplace = exports.cFrom = exports.cput = exports.cPut = exports.cGet = exports.cget = exports.cLevel = exports.cAccess = exports.cUser = exports.cand = exports.cAnd = exports.cComplete = exports.cProcessing = exports.cProcess = exports.cGateway = exports.cWay = exports.cway = exports.cGate = exports.cLimit = exports.climit = exports.cPreview = exports.cSetting = exports.csetting = exports.cSet = exports.cset = exports.cBug = exports.cPermission = exports.cViewer = exports.cExit = exports.cexit = exports.cPath = exports.cpath = exports.cIntermediate = exports.cintermediate = exports.cmediate = exports.cStamp = exports.ctime = exports.cTime = exports.cDate = exports.cdate = exports.cReceived = exports.cReceive = exports.cEmails = exports.cEmail = exports.cmail = exports.cId = exports.cid = exports.cID = exports.cPageScriptName = exports.cKeywordName = exports.ckeywordName = exports.cNames = exports.cnames = exports.cName = exports.cname = exports.cEnvironment = exports.cMaster = exports.cRows = exports.cRun = exports.cRow = exports.cOf = exports.cHost = exports.cNumber = exports.cnumber = exports.cAutomation = exports.cActions = exports.cAction = exports.cBrowser = exports.cExhaustive = exports.cBureau = exports.cTestWorkflow = exports.cTestStatusMessage = exports.cTestStatus = exports.cStatus = exports.cTESTS = exports.ctests = exports.cTests = exports.ctest = exports.cTEST = exports.cTest = exports.cWorkflows = exports.cworkflows = exports.cWorkflow = exports.cworkflow = exports.cFlow = exports.cflow = exports.cWork = void 0;
exports.cMulti = exports.cParallel = exports.cSingular = exports.cSynch = exports.cAsynch = exports.cExists = exports.cExist = exports.cIndividually = exports.cIndividual = exports.cSelectors = exports.cselector = exports.cSelector = exports.cLocatorLibrary = exports.cLocators = exports.cLocator = exports.cActionOverride = exports.cOverride = exports.cride = exports.cRide = exports.cOver = exports.cInner = exports.cinner = exports.chtml = exports.cHTML = exports.cawait = exports.cWait = exports.cwait = exports.cAbreviated = exports.cAssignment = exports.cSystem = exports.cOperating = exports.cOperation = exports.cRaw = exports.cEquals = exports.cEqual = exports.cequal = exports.cTable = exports.ctable = exports.cLibrary = exports.clibrary = exports.cDialog = exports.cvisibility = exports.cVisibility = exports.cVariable = exports.cDetermine = exports.cdetermine = exports.cEnabled = exports.cenabled = exports.cEnable = exports.cenable = exports.cEither = exports.cCode = exports.ccode = exports.cLength = exports.clength = exports.cNumerical = exports.cNumeric = exports.cRange = exports.crange = exports.cFindValue = exports.cfindValue = exports.cfindvalue = exports.cFind = exports.cfind = exports.cValue = exports.cvalue = exports.cparent = exports.cParent = exports.cGenerate = exports.cgenerate = exports.cRandomly = exports.crandomly = exports.cRandom = exports.crandom = exports.cCounter = exports.ccounter = exports.cCount = exports.ccount = exports.cUpper = exports.cLetter = exports.cLet = exports.clet = exports.cDigit = exports.cdigit = exports.cDig = exports.cdig = exports.cExtension = exports.cRemove = exports.cremove = exports.cmove = exports.cCase = exports.cLower = exports.cLow = exports.cConvert = exports.cconvert = exports.cReturn = exports.creturn = exports.cturn = exports.cCarriage = exports.cCleaned = void 0;
exports.callow = exports.cElementName = exports.cElement = exports.cchecked = exports.cCheck = exports.ccheck = exports.cIS = exports.cIs = exports.cis = exports.cIngestion = exports.cclass = exports.cClass = exports.cResources = exports.cresources = exports.cResource = exports.cresource = exports.cSource = exports.csource = exports.cbin = exports.csrc = exports.ccert = exports.ccafe = exports.cFolders = exports.cfolders = exports.cFolder = exports.cfolder = exports.cFold = exports.cfold = exports.cfiles = exports.cfile = exports.cFiles = exports.cFile = exports.cWebkey = exports.cPageName = exports.cTestName = exports.cPageData = exports.cpageData = exports.ctestData = exports.cCreation = exports.cAdvanced = exports.cAdvance = exports.cProjects = exports.cproject = exports.cProject = exports.cIteration = exports.cConstant = exports.cDescription = exports.cInput = exports.cinput = exports.cContext = exports.cTEXT = exports.cText = exports.ctext = exports.cAlphabetic = exports.cbetic = exports.calpha = exports.cAlpha = exports.cMixed = exports.cMix = exports.cOR = exports.cor = exports.cOr = exports.cBY = exports.cBy = exports.cby = exports.cAssertionStyle = exports.cUploadStyle = exports.cAssertionType = exports.cAssertion = exports.cAssertValueGreaterThan = exports.cAssertValueLessThan = exports.cAssertValueNotEqual = exports.cAssertValueEqual = exports.cAssertNotExists = exports.cAssertExists = exports.cThan = exports.cthan = exports.cThen = exports.cthen = exports.cgreater = exports.cGreater = exports.cgreat = exports.cGreat = exports.cless = exports.cLess = exports.cAssert = exports.cStyle = exports.cUpload = exports.cload = exports.cOnce = exports.cAfter = exports.cSwap = exports.cswap = exports.cQuote = exports.cSingle = exports.csingle = exports.cDefault = exports.cdefault = exports.cfault = exports.cUnified = void 0;
exports.cConsolidate = exports.cconsolidate = exports.cSimplify = exports.csimplify = exports.csort = exports.cSort = exports.cLocation = exports.clocation = exports.cPoint = exports.cpoint = exports.cTransform = exports.ctransform = exports.cform = exports.cVector = exports.cvector = exports.cFraction = exports.cTrap = exports.ctrap = exports.cAngle = exports.cangle = exports.cDegrees = exports.cdegrees = exports.cDegree = exports.cdegree = exports.cNormalize = exports.cnormalize = exports.cNormal = exports.cnormal = exports.cQuaternion = exports.cquaternion = exports.cQuarter = exports.cquarter = exports.cQuart = exports.cquart = exports.cRounded = exports.crounded = exports.cRound = exports.cround = exports.cCamel = exports.ccamel = exports.cArray = exports.carray = exports.cDecompose = exports.cdecompose = exports.ccompose = exports.cDashboard = exports.cboard = exports.cDash = exports.cError = exports.cerror = exports.cWarnings = exports.cwarnings = exports.cWarning = exports.cwarning = exports.cWarn = exports.cwarn = exports.cConstructor = exports.cPort = exports.cport = exports.chung = exports.cHung = exports.cCell = exports.ccell = exports.cwoman = exports.cWoman = exports.cman = exports.cMan = exports.cdisabled = exports.cDisabled = exports.cattributes = exports.cAttributes = exports.cfilter = exports.cFilter = exports.cChild = exports.cchild = exports.cSibling = exports.csibling = exports.cExecute = exports.cDwell = exports.cTimeOut = exports.cTimeout = exports.cBinary = exports.cSolid = exports.csolid = exports.cWorks = exports.cEdge = exports.cedge = exports.cCharacters = exports.ccharacters = exports.cCharacter = exports.ccharacter = exports.cSpecial = exports.cspecial = exports.cPublic = exports.cpublic = exports.cHome = exports.chome = exports.cAllowable = exports.callowable = exports.cAllow = void 0;
exports.ccolors = exports.cColor = exports.ccolor = exports.cModule = exports.cmodule = exports.cFont = exports.cfont = exports.cFiglet = exports.cfiglet = exports.cFig = exports.cfig = exports.cInterface = exports.cinterface = exports.cDriven = exports.cdriven = exports.cDrive = exports.cdrive = exports.cArgument = exports.cargument = exports.cFace = exports.cface = exports.cEvents = exports.cevents = exports.cEvent = exports.cevent = exports.cEven = exports.ceven = exports.cOdd = exports.codd = exports.cBasic = exports.cbasic = exports.cPercent = exports.cpercent = exports.cExecution = exports.cJournal = exports.cMultiple = exports.cmultiple = exports.cFunctions = exports.cfunctions = exports.cFunction = exports.cfunction = exports.cCommon = exports.ccommon = exports.cDemo = exports.cdemo = exports.cReload = exports.creload = exports.cEval = exports.ceval = exports.cRefresh = exports.crefresh = exports.cfresh = exports.cRule = exports.crule = exports.cBusiness = exports.cbusiness = exports.cMetaData = exports.cMeta = exports.cmeta = exports.cSlash = exports.cslash = exports.cForward = exports.cforward = exports.cParse = exports.cparse = exports.cRoot = exports.croot = exports.cRelease = exports.crelease = exports.clease = exports.cDeploy = exports.cdeploy = exports.cApplication = exports.capplication = exports.cDoes = exports.cdoes = exports.cMatching = exports.cmatching = exports.cMatch = exports.cmatch = exports.cAscertain = exports.cascertain = exports.ccertain = exports.cBetween = exports.cbetween = exports.cBet = exports.cbet = exports.cDifference = exports.cAggregate = exports.caggregate = exports.cProduct = exports.cVideo = exports.cvideo = exports.cContains = exports.ccontains = exports.cContain = exports.ccontain = exports.cCompare = exports.ccompare = exports.cConsolidated = void 0;
exports.cYell = exports.cyell = exports.cGround = exports.cground = exports.cTraditional = exports.cSimplified = exports.cPass = exports.cpass = exports.cConversion = exports.cconversion = exports.cPerformance = exports.cControl = exports.cVersion = exports.cversion = exports.cClear = exports.cclear = exports.cAnalysis = exports.canalysis = exports.cDeviation = exports.cdeviation = exports.cStandard = exports.cstandard = exports.cStack = exports.cstack = exports.cTracking = exports.ctracking = exports.cTrack = exports.ctrack = exports.cRack = exports.crack = exports.cMetrics = exports.cmetrics = exports.cMetric = exports.cmetric = exports.cOutput = exports.coutput = exports.cstartup = exports.cStart = exports.cstart = exports.cAbout = exports.cabout = exports.cIndex = exports.cindex = exports.cGenerator = exports.cgenerator = exports.cHive = exports.chive = exports.cPrint = exports.cprint = exports.cHelp = exports.chelp = exports.cDelimiter = exports.cdelimiter = exports.cTertiary = exports.ctertiary = exports.cSecondary = exports.csecondary = exports.cPrimary = exports.cprimary = exports.cSequencer = exports.csequencer = exports.cAliases = exports.caliases = exports.cAlias = exports.calias = exports.cFrame = exports.cframe = exports.cBlob = exports.cblob = exports.cQueue = exports.cqueue = exports.cCommands = exports.ccommands = exports.cCommand = exports.ccommand = exports.cCustom = exports.ccustom = exports.cRules = exports.crules = exports.cClient = exports.cclient = exports.cAverage = exports.caverage = exports.cPalindrom = exports.cpalindrom = exports.cPal = exports.cpal = exports.cAlmost = exports.calmost = exports.cPopular = exports.cpopular = exports.cPop = exports.cpop = exports.cMost = exports.cmost = exports.cBold = exports.cbold = exports.cOld = exports.cold = exports.cColors = void 0;
exports.cUnit = exports.cunit = exports.cSections = exports.csections = exports.cSection = exports.csection = exports.cLane = exports.clane = exports.cLack = exports.clack = void 0;

var b = _interopRequireWildcard(require("./basic.constants"));

var p = _interopRequireWildcard(require("./phonics.constants"));

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
 * @requires module:generic-constants
 * @requires module:units-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// Miscelaneious Words
var c1a1d = 'a' + 'd'; // 'ca' & 'cd' is some how a reserved word.

exports.c1a1d = c1a1d;
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
var cNode = b.cN + p.code;
exports.cNode = cNode;
var cnode = b.cn + p.code;
exports.cnode = cnode;
var curl = b.cur + b.cl; // 'url';

exports.curl = curl;
var cURL = b.cUR + b.cL;
exports.cURL = cURL;
var cNth = b.cN + b.cth;
exports.cNth = cNth;
var cnth = b.cn + b.cth;
exports.cnth = cnth;
var cregEx = p.creg + b.cEx;
exports.cregEx = cregEx;
var cRegEx = p.cReg + b.cEx;
exports.cRegEx = cRegEx;
var cflag = b.cfl + b.cag;
exports.cflag = cflag;
var cFlag = b.cFl + b.cag;
exports.cFlag = cFlag;
var cflags = cflag + b.cs;
exports.cflags = cflags;
var cFlags = cFlag + b.cs; // Data Types

exports.cFlags = cFlags;
var cString = b.cS + p.ctring;
exports.cString = cString;
var cstring = b.cs + p.ctring;
exports.cstring = cstring;
var cstrings = cstring + b.cs;
exports.cstrings = cstrings;
var cStrings = cString + b.cs;
exports.cStrings = cStrings;
var cinteger = b.ci + p.cnteger;
exports.cinteger = cinteger;
var cInteger = b.cI + p.cnteger; // 'Integer';

exports.cInteger = cInteger;
var cintegers = cinteger + b.cs;
exports.cintegers = cintegers;
var cIntegers = cInteger + b.cs;
exports.cIntegers = cIntegers;
var cfloat = b.cf + p.cloat;
exports.cfloat = cfloat;
var cFloat = b.cF + p.cloat; // 'Float';

exports.cFloat = cFloat;
var cfloats = cfloat + b.cs;
exports.cfloats = cfloats;
var cFloats = cFloat + b.cs;
exports.cFloats = cFloats;
var clong = b.cl + p.cong;
exports.clong = clong;
var cLong = b.cL + p.cong; // 'Long';

exports.cLong = cLong;
var clongs = clong + b.cs;
exports.clongs = clongs;
var cLongs = cLong + b.cs;
exports.cLongs = cLongs;
var cshort = b.cs + p.chort;
exports.cshort = cshort;
var cShort = b.cS + p.chort; // 'Short';

exports.cShort = cShort;
var cshorts = cshort + b.cs;
exports.cshorts = cshorts;
var cShorts = cShort + b.cs;
exports.cShorts = cShorts;
var cdouble = b.cd + p.couble;
exports.cdouble = cdouble;
var cDouble = b.cD + p.couble; // 'Double';

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
var cboolean = b.cb + p.coolean;
exports.cboolean = cboolean;
var cBoolean = b.cB + p.coolean;
exports.cBoolean = cBoolean;
var cbooleans = cboolean + b.cs;
exports.cbooleans = cbooleans;
var cBooleans = cBoolean + b.cs;
exports.cBooleans = cBooleans;
var cobject = b.co + p.cbject;
exports.cobject = cobject;
var cObject = b.cO + p.cbject;
exports.cObject = cObject;
var cobjects = cobject + b.cs;
exports.cobjects = cobjects;
var cObjects = cObject + b.cs; // General Use Words

exports.cObjects = cObjects;
var cwind = b.cw + p.cind;
exports.cwind = cwind;
var cWind = b.cW + p.cind;
exports.cWind = cWind;
var cwindow = cwind + b.cow;
exports.cwindow = cwindow;
var cWindow = cWind + b.cow;
exports.cWindow = cWindow;
var cwindows = cwindow + b.cs;
exports.cwindows = cwindows;
var cWindows = cWindow + b.cs;
exports.cWindows = cWindows;
var clinux = p.clin + b.cux;
exports.clinux = clinux;
var cLinux = p.cLin + b.cux;
exports.cLinux = cLinux;
var cword = b.cw + p.cord; // 'word';

exports.cword = cword;
var cWord = b.cW + p.cord;
exports.cWord = cWord;
var cOOPS = b.cO + p.cOPS;
exports.cOOPS = cOOPS;
var cOops = b.cO + p.cops; // 'Oops';

exports.cOops = cOops;
var coops = b.co + p.cops;
exports.coops = coops;
var cConfiguration = b.cCo + b.cnf + b.cig + b.cur + b.ca + p.ction; // 'Configura' + p.ction;

exports.cConfiguration = cConfiguration;
var cConfigurations = cConfiguration + b.cs;
exports.cConfigurations = cConfigurations;
var cempty = b.cem + b.cpt + b.cy;
exports.cempty = cempty;
var cEmpty = b.cEm + b.cpt + b.cy; // 'Empty';

exports.cEmpty = cEmpty;
var cfull = b.cf + p.cull;
exports.cfull = cfull;
var cFull = b.cF + p.cull;
exports.cFull = cFull;
var ccreate = b.cc + p.create;
exports.ccreate = ccreate;
var cCreate = b.cC + p.create; // 'Create';

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
var cUpdate = b.cUp + p.cdate; // 'Update';

exports.cUpdate = cUpdate;
var cEdit = b.cEd + b.cit; // 'Edit';

exports.cEdit = cEdit;
var cDelete = b.cD + p.celete;
exports.cDelete = cDelete;
var cdelete = b.cd + p.celete;
exports.cdelete = cdelete;
var call = p.call;
exports.call = call;
var cAll = p.cAll; // 'All';

exports.cAll = cAll;
var cat = b.ca + b.ct;
exports.cat = cat;
var cAt = b.cA + b.ct; // 'At'; // Not to be confused with the b.cAt = '@'!!!

exports.cAt = cAt;
var cselect = b.cse + b.cle + b.cct;
exports.cselect = cselect;
var cSelect = b.cSe + b.cle + b.cct; // 'Select';

exports.cSelect = cSelect;
var ccancel = b.cca + b.cnc + b.cel;
exports.ccancel = ccancel;
var cCancel = b.cCa + b.cnc + b.cel; // 'Cancel';

exports.cCancel = cCancel;
var cconfirm = b.cco + b.cnf + b.cir + b.cm;
exports.cconfirm = cconfirm;
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
var cwith = b.cw + p.cith;
exports.cwith = cwith;
var cWith = b.cW + p.cith;
exports.cWith = cWith;
var cwithout = cwith + cout;
exports.cwithout = cwithout;
var cWithout = cWith + cout;
exports.cWithout = cWithout;
var cdetail = b.cde + b.cta + b.cil;
exports.cdetail = cdetail;
var cDetail = b.cDe + b.cta + b.cil; // 'Detail';

exports.cDetail = cDetail;
var cdetails = cdetail + b.cs;
exports.cdetails = cdetails;
var cDetails = cDetail + b.cs;
exports.cDetails = cDetails;
var cfront = b.cfr + b.con + b.ct;
exports.cfront = cfront;
var cFront = b.cFr + b.con + b.ct; // 'Front';

exports.cFront = cFront;
var cback = b.cba + b.cck;
exports.cback = cback;
var cBack = b.cBa + b.cck; // 'Back';

exports.cBack = cBack;
var cleft = b.cle + b.cft;
exports.cleft = cleft;
var cLeft = b.cLe + b.cft; // 'Left';

exports.cLeft = cLeft;
var cright = b.cri + b.cgh + b.ct;
exports.cright = cright;
var cRight = b.cRi + b.cgh + b.ct; // 'Right';

exports.cRight = cRight;
var cTo = b.cTo; // 'To';

exports.cTo = cTo;
var ctop = b.cto + b.cp;
exports.ctop = ctop;
var cTop = cTo + b.cp;
exports.cTop = cTop;
var cbottom = b.cbo + b.ctt + b.com;
exports.cbottom = cbottom;
var cBottom = b.cBo + b.ctt + b.com; // 'Bottom';

exports.cBottom = cBottom;
var cbegin = b.cbe + b.cgi + b.cn;
exports.cbegin = cbegin;
var cBegin = b.cBe + b.cgi + b.cn; // 'Begin';

exports.cBegin = cBegin;
var cBEGIN = b.cBE + b.cGI + b.cN;
exports.cBEGIN = cBEGIN;
var cbeginning = cbegin + b.cn + p.cing;
exports.cbeginning = cbeginning;
var cBeginning = cBegin + b.cn + p.cing;
exports.cBeginning = cBeginning;
var cend = b.cen + b.cd;
exports.cend = cend;
var cEnd = b.cEn + b.cd; // 'End';

exports.cEnd = cEnd;
var cEND = b.cEN + b.cD;
exports.cEND = cEND;
var cending = cend + p.cing;
exports.cending = cending;
var cEnding = cEnd + p.cing;
exports.cEnding = cEnding;
var cThe = b.cTh + b.ce; // 'The';

exports.cThe = cThe;
var citem = b.cit + b.cem;
exports.citem = citem;
var cItem = b.cIt + b.cem; // 'Item';

exports.cItem = cItem;
var citems = citem + b.cs;
exports.citems = citems;
var cItems = cItem + b.cs;
exports.cItems = cItems;
var cList = b.cLi + b.cst; // 'List';

exports.cList = cList;
var cLists = cList + b.cs;
exports.cLists = cLists;
var cshare = b.cs + p.chare;
exports.cshare = cshare;
var cShare = b.cS + p.chare;
exports.cShare = cShare;
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
var cview = b.cv + p.ciew;
exports.cview = cview;
var cView = b.cV + p.ciew; // 'View';

exports.cView = cView;
var cNew = b.cNe + b.cw; // 'New';

exports.cNew = cNew;
var cLoad = b.cLo + 'ad'; // b.cad; // 'Load'; // NOTE: Apparently 'cad' is also a reserved word.

exports.cLoad = cLoad;
var cClick = b.cC + p.click;
exports.cClick = cClick;
var cclick = b.cc + p.click;
exports.cclick = cclick;
var cPressKey = b.cP + p.cress + cKey;
exports.cPressKey = cPressKey;
var cpressKey = b.cp + p.cress + cKey;
exports.cpressKey = cpressKey;
var cexpect = b.cex + b.cpe + b.cct; // 'expect';

exports.cexpect = cexpect;
var cnavigate = b.cn + p.cavigate;
exports.cnavigate = cnavigate;
var cNavigate = b.cN + p.cavigate; // 'Navigate';

exports.cNavigate = cNavigate;
var cSave = b.cSa + b.cve; // 'Save';

exports.cSave = cSave;
var cDownload = b.cDo + b.cwn + b.clo + b.cad; // 'Download';

exports.cDownload = cDownload;
var cNegative = b.cNe + b.cga + p.ctive; // 'Negative';

exports.cNegative = cNegative;
var cPositive = b.cPo + b.csi + p.ctive;
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
var cType = b.cT + p.cype;
exports.cType = cType;
var ctype = b.ct + p.cype;
exports.ctype = ctype;
var cTypes = cType + b.cs;
exports.cTypes = cTypes;
var cValid = b.cV + p.calid;
exports.cValid = cValid;
var cvalid = b.cv + p.calid;
exports.cvalid = cvalid;
var cValidation = cValid + b.ca + p.ction;
exports.cValidation = cValidation;
var cValidate = b.cVa + b.cli + p.cdate; // 'Validate';

exports.cValidate = cValidate;
var cInvalid = b.cIn + cvalid;
exports.cInvalid = cInvalid;
var cbug = b.cbu + b.cg;
exports.cbug = cbug;
var cdebug = b.cde + cbug;
exports.cdebug = cdebug;
var cDebug = b.cDe + cbug; // 'Debug';

exports.cDebug = cDebug;
var cpage = b.cp + p.cage;
exports.cpage = cpage;
var cPage = b.cP + p.cage;
exports.cPage = cPage;
var cpages = cpage + b.cs;
exports.cpages = cpages;
var cPages = cPage + b.cs;
exports.cPages = cPages;
var cmessage = b.cme + b.css + p.cage;
exports.cmessage = cmessage;
var cMessage = cMe + b.css + p.cage;
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
var cData = b.cD + p.cata;
exports.cData = cData;
var cdata = b.cd + p.cata;
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
var cworkflow = cwork + cflow;
exports.cworkflow = cworkflow;
var cWorkflow = cWork + cflow; // 'Workflow';

exports.cWorkflow = cWorkflow;
var cworkflows = cworkflow + b.cs;
exports.cworkflows = cworkflows;
var cWorkflows = cWorkflow + b.cs;
exports.cWorkflows = cWorkflows;
var cTest = b.cT + p.cest;
exports.cTest = cTest;
var cTEST = b.cTE + b.cST; // 'TEST';

exports.cTEST = cTEST;
var ctest = b.ct + p.cest;
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
var cAction = b.cAc + p.ction; // 'Action';

exports.cAction = cAction;
var cActions = cAction + b.cs;
exports.cActions = cActions;
var cAutomation = b.cAu + b.cto + b.cma + p.ction; // 'Automation';

exports.cAutomation = cAutomation;
var cnumber = b.cn + p.cumber;
exports.cnumber = cnumber;
var cNumber = b.cN + p.cumber; // 'Number';

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
var cEnvironment = b.cEn + b.cvi + b.cro + b.cn + p.cment; // 'Environment';

exports.cEnvironment = cEnvironment;
var cname = b.cn + p.came;
exports.cname = cname;
var cName = b.cN + p.came;
exports.cName = cName;
var cnames = cname + b.cs;
exports.cnames = cnames;
var cNames = cName + b.cs;
exports.cNames = cNames;
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
var cdate = p.cdate;
exports.cdate = cdate;
var cDate = b.cD + p.cate; // 'Date';

exports.cDate = cDate;
var cTime = b.cT + p.cime; // 'Time';

exports.cTime = cTime;
var ctime = b.ct + p.cime; // 'time';

exports.ctime = ctime;
var cStamp = b.cSt + b.cam + b.cp; // 'Stamp';

exports.cStamp = cStamp;
var cmediate = p.cmed + b.ci + p.cate;
exports.cmediate = cmediate;
var cintermediate = p.cinter + cmediate;
exports.cintermediate = cintermediate;
var cIntermediate = p.cInter + cmediate; // 'Intermediate';

exports.cIntermediate = cIntermediate;
var cpath = b.cp + p.cath;
exports.cpath = cpath;
var cPath = b.cP + p.cath; // 'Path';

exports.cPath = cPath;
var cexit = b.cex + b.cit;
exports.cexit = cexit;
var cExit = b.cEx + b.cit; // 'Exit';

exports.cExit = cExit;
var cViewer = b.cVi + b.cew + b.cer; // 'Viewer';

exports.cViewer = cViewer;
var cPermission = b.cPe + b.crm + b.cis + b.csi + b.con; // 'Permission';

exports.cPermission = cPermission;
var cBug = b.cBu + b.cg; // 'Bug';

exports.cBug = cBug;
var cset = b.cse + b.ct;
exports.cset = cset;
var cSet = b.cSe + b.ct; // 'Set';

exports.cSet = cSet;
var csetting = cset + b.ct + p.cing;
exports.csetting = csetting;
var cSetting = cSet + b.ct + p.cing;
exports.cSetting = cSetting;
var cPreview = p.cPre + cview; // 'Preview';

exports.cPreview = cPreview;
var climit = b.cli + b.cm + b.ci + b.ct; // b.cli + b.cmi + b.ct; // NOTE: b.cmi resolves as "s"

exports.climit = climit;
var cLimit = b.cli + b.cm + b.ci + b.ct; // b.cLi + b.cmi + b.ct; // NOTE: b.cmi resolves as "s"

exports.cLimit = cLimit;
var cGate = b.cGa + b.cte;
exports.cGate = cGate;
var cway = b.cwa + b.cy;
exports.cway = cway;
var cWay = b.cWa + b.cy;
exports.cWay = cWay;
var cGateway = cGate + cway; // 'Gateway';

exports.cGateway = cGateway;
var cProcess = p.cPro + b.cce + b.css;
exports.cProcess = cProcess;
var cProcessing = cProcess + p.cing; // 'Processing';

exports.cProcessing = cProcessing;
var cComplete = b.cCo + b.cmp + b.cl + p.cete; // 'Complete';

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
var creplace = b.cr + p.ceplace;
exports.creplace = creplace;
var cReplace = b.cR + p.ceplace; // 'Replace';

exports.cReplace = cReplace;
var cSpace = b.cSp + p.cace; // 'Space';

exports.cSpace = cSpace;
var cSpaces = cSpace + b.cs; // 'Spaces';

exports.cSpaces = cSpaces;
var cPlus = b.cPl + b.cus; // 'Plus';

exports.cPlus = cPlus;
var cColon = b.cCo + b.clo + b.cn; // 'Colon';

exports.cColon = cColon;
var cunder = b.cun + p.cder;
exports.cunder = cunder;
var cUnder = b.cUn + p.cder;
exports.cUnder = cUnder;
var cscore = b.cs + p.ccore;
exports.cscore = cscore;
var cScore = b.cS + p.ccore;
exports.cScore = cScore;
var cCatagory = b.cCa + b.cta + b.cgo + b.cry; // 'Catagory';

exports.cCatagory = cCatagory;
var cclean = b.cc + p.clean;
exports.cclean = cclean;
var cClean = b.cC + p.clean; // 'Clean';

exports.cClean = cClean;
var ccleaned = cclean + b.ced;
exports.ccleaned = ccleaned;
var cCleaned = cClean + b.ced;
exports.cCleaned = cCleaned;
var cCarriage = b.cCa + b.crr + b.ci + p.cage; // 'Carriage';

exports.cCarriage = cCarriage;
var cturn = b.ctu + b.crn;
exports.cturn = cturn;
var creturn = b.cre + cturn;
exports.creturn = creturn;
var cReturn = b.cRe + cturn; // 'Return';

exports.cReturn = cReturn;
var cconvert = b.cc + p.convert;
exports.cconvert = cconvert;
var cConvert = b.cC + p.convert; // 'Convert';

exports.cConvert = cConvert;
var cLow = b.cLo + b.cw;
exports.cLow = cLow;
var cLower = cLow + b.cer; // 'Lower';

exports.cLower = cLower;
var cCase = b.cC + p.c_ase; // 'Case';

exports.cCase = cCase;
var cmove = b.cmo + b.cve;
exports.cmove = cmove;
var cremove = b.cre + cmove;
exports.cremove = cremove;
var cRemove = b.cRe + cmove; // 'Remove';

exports.cRemove = cRemove;
var cExtension = p.cExt + b.cen + b.cs + p.cion; // 'Extension';

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
var ccount = b.cco + p.cunt;
exports.ccount = ccount;
var cCount = b.cCo + p.cunt; // 'Count';

exports.cCount = cCount;
var ccounter = ccount + b.cer;
exports.ccounter = ccounter;
var cCounter = cCount + b.cer;
exports.cCounter = cCounter;
var crandom = b.cr + p.candom;
exports.crandom = crandom;
var cRandom = b.cR + p.candom; // 'Random';

exports.cRandom = cRandom;
var crandomly = crandom + b.cly;
exports.crandomly = crandomly;
var cRandomly = cRandom + b.cly;
exports.cRandomly = cRandomly;
var cgenerate = b.cg + p.cenerate;
exports.cgenerate = cgenerate;
var cGenerate = b.cG + p.cenerate; // 'Generate';

exports.cGenerate = cGenerate;
var cParent = b.cP + p.carent;
exports.cParent = cParent;
var cparent = b.cp + p.carent;
exports.cparent = cparent;
var cvalue = b.cva + b.clu + b.ce;
exports.cvalue = cvalue;
var cValue = b.cVa + b.clu + b.ce; // 'Value';

exports.cValue = cValue;
var cfind = b.cfi + b.cnd;
exports.cfind = cfind;
var cFind = b.cFi + b.cnd; // 'Find';

exports.cFind = cFind;
var cfindvalue = cfind + cvalue;
exports.cfindvalue = cfindvalue;
var cfindValue = cfind + cValue;
exports.cfindValue = cfindValue;
var cFindValue = cFind + cValue;
exports.cFindValue = cFindValue;
var crange = b.cra + b.cng + b.ce;
exports.crange = crange;
var cRange = b.cRa + b.cng + b.ce; // 'Range';

exports.cRange = cRange;
var cNumeric = b.cNu + b.cme + b.cri + b.cc; // 'Numeric';

exports.cNumeric = cNumeric;
var cNumerical = cNumeric + b.cal;
exports.cNumerical = cNumerical;
var clength = b.cle + b.cng + b.cth;
exports.clength = clength;
var cLength = b.cLe + b.cng + b.cth; // 'Length';

exports.cLength = cLength;
var ccode = b.cco + b.cde;
exports.ccode = ccode;
var cCode = b.cCo + b.cde; // 'Code';

exports.cCode = cCode;
var cEither = b.cEi + b.cth + b.cer; // 'Either';

exports.cEither = cEither;
var cenable = b.cen + p.cable;
exports.cenable = cenable;
var cEnable = b.cEn + p.cable;
exports.cEnable = cEnable;
var cenabled = cenable + b.cd;
exports.cenabled = cenabled;
var cEnabled = cEnable + b.cd; // 'Enabled';

exports.cEnabled = cEnabled;
var cdetermine = b.cd + p.cetermine;
exports.cdetermine = cdetermine;
var cDetermine = b.cD + p.cetermine; // 'Determine';

exports.cDetermine = cDetermine;
var cVariable = p.cVar + b.ci + p.cable; // 'Variable';

exports.cVariable = cVariable;
var cVisibility = b.cV + p.cisibility;
exports.cVisibility = cVisibility;
var cvisibility = b.cv + p.cisibility;
exports.cvisibility = cvisibility;
var cDialog = b.cDi + b.ca + clog; // 'Dia' + clog;

exports.cDialog = cDialog;
var clibrary = b.cli + b.cbr + b.car + b.cy;
exports.clibrary = clibrary;
var cLibrary = b.cLi + b.cbr + b.car + b.cy; // 'Library';

exports.cLibrary = cLibrary;
var ctable = b.cta + b.cbl + b.ce;
exports.ctable = ctable;
var cTable = b.cTa + b.cbl + b.ce; // 'Table';

exports.cTable = cTable;
var cequal = b.ceq + b.cua + b.cl;
exports.cequal = cequal;
var cEqual = b.cEq + b.cua + b.cl; // 'Equal';

exports.cEqual = cEqual;
var cEquals = cEqual + b.cs;
exports.cEquals = cEquals;
var cRaw = b.cRa + b.cw; // 'Raw';

exports.cRaw = cRaw;
var cOperation = p.cOperat + b.cion;
exports.cOperation = cOperation;
var cOperating = p.cOperat + b.cing;
exports.cOperating = cOperating;
var cSystem = b.cSy + b.cst + b.cem; // 'System';

exports.cSystem = cSystem;
var cAssignment = b.cAs + b.si + b.cgn + p.cment; // 'Assignment';

exports.cAssignment = cAssignment;
var cAbreviated = b.cAb + b.cre + b.cvi + b.cat + b.ced; // 'Abreviated';

exports.cAbreviated = cAbreviated;
var cwait = b.cw + p.cait;
exports.cwait = cwait;
var cWait = b.cW + p.cait;
exports.cWait = cWait;
var cawait = b.ca + cwait; // 'await';

exports.cawait = cawait;
var cHTML = b.cHT + b.cML;
exports.cHTML = cHTML;
var chtml = b.cht + b.cml;
exports.chtml = chtml;
var cinner = b.ci + p.cnner;
exports.cinner = cinner;
var cInner = b.cI + p.cnner;
exports.cInner = cInner;
var cOver = b.cOv + b.cer; // 'Over';

exports.cOver = cOver;
var cRide = b.cR + p.cide;
exports.cRide = cRide;
var cride = b.cr + p.cide;
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
var cSelector = b.cS + p.celector;
exports.cSelector = cSelector;
var cselector = b.cs + p.celector;
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
var cAsynch = b.cAs + p.cynch;
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
var cfault = b.cfa + b.cul + b.ct;
exports.cfault = cfault;
var cdefault = b.cde + cfault;
exports.cdefault = cdefault;
var cDefault = b.cDe + cfault; // 'Default';

exports.cDefault = cDefault;
var csingle = b.cs + p.cingle;
exports.csingle = csingle;
var cSingle = b.cS + p.cingle; // 'Single';

exports.cSingle = cSingle;
var cQuote = b.cQu + b.cot + b.ce; // 'Quote';

exports.cQuote = cQuote;
var cswap = b.cs + p.cwap;
exports.cswap = cswap;
var cSwap = b.cS + p.cwap; // 'Swap';

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
var cLess = b.cL + p.cess;
exports.cLess = cLess;
var cless = b.cl + p.cess;
exports.cless = cless;
var cGreat = b.cGr + p.ceat;
exports.cGreat = cGreat;
var cgreat = b.cgr + p.ceat;
exports.cgreat = cgreat;
var cGreater = cGreat + b.cer;
exports.cGreater = cGreater;
var cgreater = cgreat + b.cer;
exports.cgreater = cgreater;
var cthen = b.ct + p.chen;
exports.cthen = cthen;
var cThen = b.cT + p.chen;
exports.cThen = cThen;
var cthan = b.ct + p.chan;
exports.cthan = cthan;
var cThan = b.cT + p.chan;
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
var cAlpha = b.cA + p.clpha;
exports.cAlpha = cAlpha;
var calpha = b.ca + p.clpha;
exports.calpha = calpha;
var cbetic = b.cbe + b.cti + b.cc; // 'betic';

exports.cbetic = cbetic;
var cAlphabetic = cAlpha + cbetic;
exports.cAlphabetic = cAlphabetic;
var ctext = b.ct + p.cext;
exports.ctext = ctext;
var cText = b.cT + p.cext;
exports.cText = cText;
var cTEXT = b.cTE + b.cXT; // 'TEXT';

exports.cTEXT = cTEXT;
var cContext = p.cCon + ctext;
exports.cContext = cContext;
var cinput = b.cin + cput;
exports.cinput = cinput;
var cInput = b.cIn + cput;
exports.cInput = cInput;
var cDescription = b.cDe + b.csc + b.cri + b.cp + p.ction; // 'Descrip' + b.ction;

exports.cDescription = cDescription;
var cConstant = p.cCon + b.cst + b.can + b.ct; // 'stant';

exports.cConstant = cConstant;
var cIteration = b.cIt + b.cer + b.ca + p.ction; // 'Itera' + b.ction;

exports.cIteration = cIteration;
var cProject = b.cP + p.croject;
exports.cProject = cProject;
var cproject = b.cp + p.croject;
exports.cproject = cproject;
var cProjects = cProject + b.cs;
exports.cProjects = cProjects;
var cAdvance = b.cAd + b.cva + b.cnc + b.ce; // 'Advance';

exports.cAdvance = cAdvance;
var cAdvanced = cAdvance + b.cd;
exports.cAdvanced = cAdvanced;
var cCreation = b.cCr + b.cea + p.ction; // 'Crea' + b.ction;

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
var cFile = b.cF + p.cile;
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
var csource = b.cs + p.cource;
exports.csource = csource;
var cSource = b.cS + p.cource;
exports.cSource = cSource;
var cresource = b.cre + csource;
exports.cresource = cresource;
var cResource = b.cRe + csource;
exports.cResource = cResource;
var cresources = cresource + b.cs; // 'resource' + b.cs;

exports.cresources = cresources;
var cResources = cResource + b.cs;
exports.cResources = cResources;
var cClass = b.cC + p.c_lass;
exports.cClass = cClass;
var cclass = b.cc + p.c_lass;
exports.cclass = cclass;
var cIngestion = b.cIn + b.cge + b.cs + p.ction; // 'Inges' + b.ction;

exports.cIngestion = cIngestion;
var cis = b.cis;
exports.cis = cis;
var cIs = b.cIs;
exports.cIs = cIs;
var cIS = b.cIS;
exports.cIS = cIS;
var ccheck = b.cc + p.check;
exports.ccheck = ccheck;
var cCheck = b.cC + p.check;
exports.cCheck = cCheck;
var cchecked = ccheck + b.ced;
exports.cchecked = cchecked;
var cElement = b.cEl + b.ce + p.cment; // 'Element';

exports.cElement = cElement;
var cElementName = cElement + cName;
exports.cElementName = cElementName;
var callow = call + b.cow;
exports.callow = callow;
var cAllow = cAll + b.cow;
exports.cAllow = cAllow;
var callowable = callow + p.cable;
exports.callowable = callowable;
var cAllowable = cAllow + p.cable;
exports.cAllowable = cAllowable;
var chome = b.cho + b.cme;
exports.chome = chome;
var cHome = b.cHo + b.cme; // 'Home';

exports.cHome = cHome;
var cpublic = b.cpu + b.cbl + b.cic;
exports.cpublic = cpublic;
var cPublic = b.cPu + b.cbl + b.cic; // 'Public';

exports.cPublic = cPublic;
var cspecial = b.csp + b.cec + b.cia + b.cl;
exports.cspecial = cspecial;
var cSpecial = b.cSp + b.cec + b.cia + b.cl; // 'Special';

exports.cSpecial = cSpecial;
var ccharacter = cchar + b.cac + p.cter;
exports.ccharacter = ccharacter;
var cCharacter = cChar + b.cac + p.cter; // 'Character';

exports.cCharacter = cCharacter;
var ccharacters = ccharacter + b.cs;
exports.ccharacters = ccharacters;
var cCharacters = cCharacter + b.cs;
exports.cCharacters = cCharacters;
var cedge = b.ced + b.cge;
exports.cedge = cedge;
var cEdge = b.cEd + b.cge; // 'Edge';

exports.cEdge = cEdge;
var cWorks = cWork + b.cs;
exports.cWorks = cWorks;
var csolid = b.cs + p.colid;
exports.csolid = csolid;
var cSolid = b.cS + p.colid;
exports.cSolid = cSolid;
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
var csibling = b.cs + p.cibling;
exports.csibling = csibling;
var cSibling = b.cS + p.cibling;
exports.cSibling = cSibling;
var cchild = b.cc + p.child;
exports.cchild = cchild;
var cChild = b.cC + p.child;
exports.cChild = cChild;
var cFilter = b.cF + p.cilter;
exports.cFilter = cFilter;
var cfilter = b.cf + p.cilter;
exports.cfilter = cfilter;
var cAttributes = b.cA + p.cttributes;
exports.cAttributes = cAttributes;
var cattributes = b.ca + p.cttributes;
exports.cattributes = cattributes;
var cDisabled = b.cD + p.cisabled;
exports.cDisabled = cDisabled;
var cdisabled = b.cd + p.cisabled;
exports.cdisabled = cdisabled;
var cMan = b.cMa + b.cn;
exports.cMan = cMan;
var cman = b.cma + b.cn;
exports.cman = cman;
var cWoman = b.cWo + cman;
exports.cWoman = cWoman;
var cwoman = b.cwo + cman;
exports.cwoman = cwoman;
var ccell = b.cel + b.cl;
exports.ccell = ccell;
var cCell = b.Cel + b.cl;
exports.cCell = cCell;
var cHung = b.cH + p.cung;
exports.cHung = cHung;
var chung = b.ch + p.cung;
exports.chung = chung;
var cport = b.cpo + b.crt;
exports.cport = cport;
var cPort = b.cPo + b.crt;
exports.cPort = cPort;
var cConstructor = b.cCo + b.cns + b.ctr + b.cu + p.cctor;
exports.cConstructor = cConstructor;
var cwarn = b.cw + p.carn;
exports.cwarn = cwarn;
var cWarn = b.cW + p.carn;
exports.cWarn = cWarn;
var cwarning = cwarn + p.cing; //b.cw + p.carning;

exports.cwarning = cwarning;
var cWarning = cWarn + p.cing; //b.cW + p.carning;

exports.cWarning = cWarning;
var cwarnings = cwarning + b.cs;
exports.cwarnings = cwarnings;
var cWarnings = cWarning + b.cs;
exports.cWarnings = cWarnings;
var cerror = b.ce + p.crror;
exports.cerror = cerror;
var cError = b.cE + p.crror;
exports.cError = cError;
var cDash = b.cDa + b.csh;
exports.cDash = cDash;
var cboard = b.cbo + p.card;
exports.cboard = cboard;
var cDashboard = cDash + cboard;
exports.cDashboard = cDashboard;
var ccompose = b.co + b.cmp + p.cose;
exports.ccompose = ccompose;
var cdecompose = b.cde + ccompose;
exports.cdecompose = cdecompose;
var cDecompose = b.cDe + ccompose;
exports.cDecompose = cDecompose;
var carray = b.car + p.cray;
exports.carray = carray;
var cArray = b.cAr + p.cray;
exports.cArray = cArray;
var ccamel = b.cca + p.cmel;
exports.ccamel = ccamel;
var cCamel = b.cCa + p.cmel;
exports.cCamel = cCamel;
var cround = b.cr + p.cound;
exports.cround = cround;
var cRound = b.cR + p.cound;
exports.cRound = cRound;
var crounded = cround + b.ced;
exports.crounded = crounded;
var cRounded = cRound + b.ced;
exports.cRounded = cRounded;
var cquart = b.cqu + p.cart;
exports.cquart = cquart;
var cQuart = b.cQu + p.cart;
exports.cQuart = cQuart;
var cquarter = cquart + b.cer;
exports.cquarter = cquarter;
var cQuarter = cQuart + b.cer;
exports.cQuarter = cQuarter;
var cquaternion = b.cqu + b.cat + b.cer + p.cnion;
exports.cquaternion = cquaternion;
var cQuaternion = b.cQu + b.cat + b.cer + p.cnion;
exports.cQuaternion = cQuaternion;
var cnormal = b.cn + p.cormal;
exports.cnormal = cnormal;
var cNormal = b.cN + p.cormal;
exports.cNormal = cNormal;
var cnormalize = cnormal + p.cize;
exports.cnormalize = cnormalize;
var cNormalize = cNormal + p.cize;
exports.cNormalize = cNormalize;
var cdegree = b.cd + p.cegree;
exports.cdegree = cdegree;
var cDegree = b.cD + p.cegree;
exports.cDegree = cDegree;
var cdegrees = cdegree + b.cs;
exports.cdegrees = cdegrees;
var cDegrees = cDegree + b.cs;
exports.cDegrees = cDegrees;
var cangle = b.can + p.cgle;
exports.cangle = cangle;
var cAngle = b.cAn + p.cgle;
exports.cAngle = cAngle;
var ctrap = b.ct + p.crap;
exports.ctrap = ctrap;
var cTrap = b.cT + p.crap;
exports.cTrap = cTrap;
var cFraction = p.cFra + p.cction;
exports.cFraction = cFraction;
var cvector = b.cve + p.cctor;
exports.cvector = cvector;
var cVector = b.cVe + p.cctor;
exports.cVector = cVector;
var cform = b.cfo + b.crm;
exports.cform = cform;
var ctransform = p.ctrans + cform;
exports.ctransform = ctransform;
var cTransform = p.cTrans + cform;
exports.cTransform = cTransform;
var cpoint = b.cpo + p.cint;
exports.cpoint = cpoint;
var cPoint = b.cPo + p.cint;
exports.cPoint = cPoint;
var clocation = p.cloc + p.cation;
exports.clocation = clocation;
var cLocation = p.cLoc + p.cation;
exports.cLocation = cLocation;
var cSort = b.cS + p.cort;
exports.cSort = cSort;
var csort = b.cs + p.cort;
exports.csort = csort;
var csimplify = p.csim + p.cplify;
exports.csimplify = csimplify;
var cSimplify = p.cSim + p.cplify;
exports.cSimplify = cSimplify;
var cconsolidate = p.ccon + p.csol + b.ci + cdate;
exports.cconsolidate = cconsolidate;
var cConsolidate = p.cCon + p.csol + b.ci + cdate;
exports.cConsolidate = cConsolidate;
var cConsolidated = cConsolidate + b.cd;
exports.cConsolidated = cConsolidated;
var ccompare = p.ccomp + p.care;
exports.ccompare = ccompare;
var cCompare = p.cComp + p.care;
exports.cCompare = cCompare;
var ccontain = p.ccon + p.ctain;
exports.ccontain = ccontain;
var cContain = p.cCon + p.ctain;
exports.cContain = cContain;
var ccontains = ccontain + b.cs;
exports.ccontains = ccontains;
var cContains = cContain + b.cs;
exports.cContains = cContains;
var cvideo = b.cv + p.cideo;
exports.cvideo = cvideo;
var cVideo = b.cV + p.cideo;
exports.cVideo = cVideo;
var cProduct = p.cPro + p.cduct;
exports.cProduct = cProduct;
var caggregate = b.ca + p.cggregate;
exports.caggregate = caggregate;
var cAggregate = b.cA + p.cggregate;
exports.cAggregate = cAggregate;
var cDifference = p.cDiff + b.cer + p.cence;
exports.cDifference = cDifference;
var cbet = b.cbe + b.ct;
exports.cbet = cbet;
var cBet = b.cBe + b.ct;
exports.cBet = cBet;
var cbetween = cbet + p.cween;
exports.cbetween = cbetween;
var cBetween = cBet + p.cween;
exports.cBetween = cBetween;
var ccertain = b.cce + b.crt + p.cain;
exports.ccertain = ccertain;
var cascertain = b.cas + ccertain;
exports.cascertain = cascertain;
var cAscertain = b.cAs + ccertain;
exports.cAscertain = cAscertain;
var cmatch = b.cma + p.ctch;
exports.cmatch = cmatch;
var cMatch = b.cMa + p.ctch;
exports.cMatch = cMatch;
var cmatching = cmatch + p.cing;
exports.cmatching = cmatching;
var cMatching = cMatch + p.cing;
exports.cMatching = cMatching;
var cdoes = b.cdo + b.ces;
exports.cdoes = cdoes;
var cDoes = b.cDo + b.ces;
exports.cDoes = cDoes;
var capplication = p.capp + p.clica + p.ction;
exports.capplication = capplication;
var cApplication = p.cApp + p.clica + p.ction;
exports.cApplication = cApplication;
var cdeploy = b.cd + b.cep + p.cloy;
exports.cdeploy = cdeploy;
var cDeploy = b.cD + b.cep + p.cloy;
exports.cDeploy = cDeploy;
var clease = b.cle + p.c_ase;
exports.clease = clease;
var crelease = b.cre + clease;
exports.crelease = crelease;
var cRelease = b.cRe + clease;
exports.cRelease = cRelease;
var croot = b.cr + p.coot;
exports.croot = croot;
var cRoot = b.cR + p.coot;
exports.cRoot = cRoot;
var cparse = b.cp + p.carse;
exports.cparse = cparse;
var cParse = b.cP + p.carse;
exports.cParse = cParse;
var cforward = b.cf + b.cor + p.cward;
exports.cforward = cforward;
var cForward = b.cF + b.cor + p.cward;
exports.cForward = cForward;
var cslash = b.cs + p.clash;
exports.cslash = cslash;
var cSlash = b.cS + p.clash;
exports.cSlash = cSlash;
var cmeta = b.cm + p.ceta;
exports.cmeta = cmeta;
var cMeta = b.cM + p.ceta;
exports.cMeta = cMeta;
var cMetaData = cMeta + cData;
exports.cMetaData = cMetaData;
var cbusiness = b.cb + p.cusiness;
exports.cbusiness = cbusiness;
var cBusiness = b.cB + p.cusiness;
exports.cBusiness = cBusiness;
var crule = b.cr + p.cule;
exports.crule = crule;
var cRule = b.cR + p.cule;
exports.cRule = cRule;
var cfresh = b.cfr + p.cesh;
exports.cfresh = cfresh;
var crefresh = b.cre + cfresh;
exports.crefresh = crefresh;
var cRefresh = b.cRe + cfresh;
exports.cRefresh = cRefresh;
var ceval = b.ce + p.cval;
exports.ceval = ceval;
var cEval = b.cE + p.cval;
exports.cEval = cEval;
var creload = b.cre + cload;
exports.creload = creload;
var cReload = b.cRe + cload;
exports.cReload = cReload;
var cdemo = b.cd + p.cemo;
exports.cdemo = cdemo;
var cDemo = b.cD + p.cemo;
exports.cDemo = cDemo;
var ccommon = b.cc + p.common;
exports.ccommon = ccommon;
var cCommon = b.cC + p.common;
exports.cCommon = cCommon;
var cfunction = b.cf + b.cun + p.cction;
exports.cfunction = cfunction;
var cFunction = b.cF + b.cun + p.cction;
exports.cFunction = cFunction;
var cfunctions = cfunction + b.cs;
exports.cfunctions = cfunctions;
var cFunctions = cFunction + b.cs;
exports.cFunctions = cFunctions;
var cmultiple = p.cmulti + p.cple;
exports.cmultiple = cmultiple;
var cMultiple = p.cMulti + p.cple;
exports.cMultiple = cMultiple;
var cJournal = b.cJo + b.cur + p.cnal;
exports.cJournal = cJournal;
var cExecution = p.cExe + b.ccu + p.ction;
exports.cExecution = cExecution;
var cpercent = p.cper + p.ccent;
exports.cpercent = cpercent;
var cPercent = p.cPer + p.ccent;
exports.cPercent = cPercent;
var cbasic = b.cb + p.casic;
exports.cbasic = cbasic;
var cBasic = b.cB + p.casic;
exports.cBasic = cBasic;
var codd = b.cod + b.cd;
exports.codd = codd;
var cOdd = b.cOd + b.cd;
exports.cOdd = cOdd;
var ceven = b.ce + p.cven;
exports.ceven = ceven;
var cEven = b.cE + p.cven;
exports.cEven = cEven;
var cevent = b.ce + p.cvent;
exports.cevent = cevent;
var cEvent = b.cE + p.cvent;
exports.cEvent = cEvent;
var cevents = cevent + b.cs;
exports.cevents = cevents;
var cEvents = cEvent + b.cs;
exports.cEvents = cEvents;
var cface = b.cfa + b.cce;
exports.cface = cface;
var cFace = b.cFa + b.cce;
exports.cFace = cFace;
var cargument = p.carg + b.cu + p.cment;
exports.cargument = cargument;
var cArgument = p.cArg + b.cu + p.cment;
exports.cArgument = cArgument;
var cdrive = b.cd + p.crive;
exports.cdrive = cdrive;
var cDrive = b.cD + p.crive;
exports.cDrive = cDrive;
var cdriven = cdrive + b.cn;
exports.cdriven = cdriven;
var cDriven = cDrive + b.cn;
exports.cDriven = cDriven;
var cinterface = p.cinter + cface;
exports.cinterface = cinterface;
var cInterface = p.cInter + cface;
exports.cInterface = cInterface;
var cfig = b.cf + b.cig;
exports.cfig = cfig;
var cFig = b.cF + b.cig;
exports.cFig = cFig;
var cfiglet = cfig + clet;
exports.cfiglet = cfiglet;
var cFiglet = cFig + clet;
exports.cFiglet = cFiglet;
var cfont = b.cf + p.cont;
exports.cfont = cfont;
var cFont = b.cF + p.cont;
exports.cFont = cFont;
var cmodule = p.cmod + p.cule;
exports.cmodule = cmodule;
var cModule = p.cMod + p.cule;
exports.cModule = cModule;
var ccolor = p.ccol + b.cor;
exports.ccolor = ccolor;
var cColor = p.cCol + b.cor;
exports.cColor = cColor;
var ccolors = ccolor + b.cs;
exports.ccolors = ccolors;
var cColors = cColor + b.cs;
exports.cColors = cColors;
var cold = b.col + b.cd;
exports.cold = cold;
var cOld = b.cOl + b.cd;
exports.cOld = cOld;
var cbold = b.cb + cold;
exports.cbold = cbold;
var cBold = b.cB + cold;
exports.cBold = cBold;
var cmost = b.cm + p.cost;
exports.cmost = cmost;
var cMost = b.cM + p.cost;
exports.cMost = cMost;
var cpop = b.cpo + b.cp;
exports.cpop = cpop;
var cPop = b.cPo + b.cp;
exports.cPop = cPop;
var cpopular = cpop + p.cular;
exports.cpopular = cpopular;
var cPopular = cPop + p.cular;
exports.cPopular = cPopular;
var calmost = b.cal + cmost;
exports.calmost = calmost;
var cAlmost = b.cAl + cmost;
exports.cAlmost = cAlmost;
var cpal = b.cpa + b.cl;
exports.cpal = cpal;
var cPal = b.cPa + b.cl;
exports.cPal = cPal;
var cpalindrom = cpal + b.cin + p.cdrom;
exports.cpalindrom = cpalindrom;
var cPalindrom = cPal + b.cin + p.cdrom;
exports.cPalindrom = cPalindrom;
var caverage = p.cave + p.crage;
exports.caverage = caverage;
var cAverage = p.cAve + p.crage;
exports.cAverage = cAverage;
var cclient = p.ccli + p.cent;
exports.cclient = cclient;
var cClient = p.cCli + p.cent;
exports.cClient = cClient;
var crules = b.cr + p.cules;
exports.crules = crules;
var cRules = b.cR + p.cules;
exports.cRules = cRules;
var ccustom = p.ccust + b.com;
exports.ccustom = ccustom;
var cCustom = p.cCust + b.com;
exports.cCustom = cCustom;
var ccommand = p.ccom + p.cmand;
exports.ccommand = ccommand;
var cCommand = p.cCom + p.cmand;
exports.cCommand = cCommand;
var ccommands = ccommand + b.cs;
exports.ccommands = ccommands;
var cCommands = cCommand + b.cs;
exports.cCommands = cCommands;
var cqueue = b.cqu + b.ceu + b.ce;
exports.cqueue = cqueue;
var cQueue = b.cQu + b.ceu + b.ce;
exports.cQueue = cQueue;
var cblob = b.cb + p.clob;
exports.cblob = cblob;
var cBlob = b.cB + p.clob;
exports.cBlob = cBlob;
var cframe = b.cf + p.crame;
exports.cframe = cframe;
var cFrame = b.cF + p.crame;
exports.cFrame = cFrame;
var calias = b.cal + p.cias;
exports.calias = calias;
var cAlias = b.cAl + p.cias;
exports.cAlias = cAlias;
var caliases = calias + b.ces;
exports.caliases = caliases;
var cAliases = cAlias + b.ces;
exports.cAliases = cAliases;
var csequencer = p.cseq + b.cue + p.cncer;
exports.csequencer = csequencer;
var cSequencer = p.cSeq + b.cue + p.cncer;
exports.cSequencer = cSequencer;
var cprimary = p.cpri + p.cmary;
exports.cprimary = cprimary;
var cPrimary = p.cPri + p.cmary;
exports.cPrimary = cPrimary;
var csecondary = u.csecond + p.cary;
exports.csecondary = csecondary;
var cSecondary = u.cSecond + p.cary;
exports.cSecondary = cSecondary;
var ctertiary = p.ctert + p.ciary;
exports.ctertiary = ctertiary;
var cTertiary = p.cTert + p.ciary;
exports.cTertiary = cTertiary;
var cdelimiter = b.cde + climit + b.cer;
exports.cdelimiter = cdelimiter;
var cDelimiter = b.cDe + climit + b.cer;
exports.cDelimiter = cDelimiter;
var chelp = b.che + b.clp;
exports.chelp = chelp;
var cHelp = b.cHe + b.clp;
exports.cHelp = cHelp;
var cprint = b.cp + p.crint;
exports.cprint = cprint;
var cPrint = b.cP + p.crint;
exports.cPrint = cPrint;
var chive = b.ch + p.cive;
exports.chive = chive;
var cHive = b.cH + p.cive;
exports.cHive = cHive;
var cgenerator = p.cgen + b.cer + p.cator;
exports.cgenerator = cgenerator;
var cGenerator = p.cGen + b.cer + p.cator;
exports.cGenerator = cGenerator;
var cindex = b.cin + p.cdex;
exports.cindex = cindex;
var cIndex = b.cIn + p.cdex;
exports.cIndex = cIndex;
var cabout = b.ca + p.cbout;
exports.cabout = cabout;
var cAbout = b.cA + p.cbout;
exports.cAbout = cAbout;
var cstart = b.cs + p.ctart;
exports.cstart = cstart;
var cStart = b.cS + p.ctart;
exports.cStart = cStart;
var cstartup = cstart + b.cup;
exports.cstartup = cstartup;
var coutput = cout + cput;
exports.coutput = coutput;
var cOutput = cOut + cput;
exports.cOutput = cOutput;
var cmetric = p.cmet + p.cric;
exports.cmetric = cmetric;
var cMetric = p.cMet + p.cric;
exports.cMetric = cMetric;
var cmetrics = cmetric + b.cs;
exports.cmetrics = cmetrics;
var cMetrics = cMetric + b.cs;
exports.cMetrics = cMetrics;
var crack = b.cr + p.cack;
exports.crack = crack;
var cRack = b.cR + p.cack;
exports.cRack = cRack;
var ctrack = b.ct + crack;
exports.ctrack = ctrack;
var cTrack = b.cT + crack;
exports.cTrack = cTrack;
var ctracking = ctrack + p.cing;
exports.ctracking = ctracking;
var cTracking = cTrack + p.cing;
exports.cTracking = cTracking;
var cstack = b.cst + p.cack;
exports.cstack = cstack;
var cStack = b.cSt + p.cack;
exports.cStack = cStack;
var cstandard = b.cst + cand + p.card;
exports.cstandard = cstandard;
var cStandard = b.cSt + cand + p.card;
exports.cStandard = cStandard;
var cdeviation = p.cdev + b.cia + p.ction;
exports.cdeviation = cdeviation;
var cDeviation = p.cDev + b.cia + p.ction;
exports.cDeviation = cDeviation;
var canalysis = p.cana + b.cly + p.csis;
exports.canalysis = canalysis;
var cAnalysis = p.cAna + b.cly + p.csis;
exports.cAnalysis = cAnalysis;
var cclear = b.ccl + p.cear;
exports.cclear = cclear;
var cClear = b.cCl + p.cear;
exports.cClear = cClear;
var cversion = p.cver + p.csion;
exports.cversion = cversion;
var cVersion = p.cVer + p.csion; // b.cVe + b.crs + b.cio + b.cn; // 'Version';

exports.cVersion = cVersion;
var cControl = b.cCo + b.cnt + b.cro + b.cl; // 'Control';

exports.cControl = cControl;
var cPerformance = b.cPe + b.crf + b.cor + b.cma + b.cnc + b.ce; // 'Performance';

exports.cPerformance = cPerformance;
var cconversion = p.ccon + cversion;
exports.cconversion = cconversion;
var cConversion = p.cCon + cversion;
exports.cConversion = cConversion;
var cpass = b.cp + p.cass;
exports.cpass = cpass;
var cPass = b.cP = p.cass;
exports.cPass = cPass;
var cSimplified = b.cSi + b.cmp + b.cli + b.cfi + b.ced; // 'Simplifi' + b.ced;

exports.cSimplified = cSimplified;
var cTraditional = b.cTr + b.cad + b.ci + p.ction + b.cal; // 'Traditional';

exports.cTraditional = cTraditional;
var cground = b.cgr + p.cound;
exports.cground = cground;
var cGround = b.cGr + p.cound;
exports.cGround = cGround;
var cyell = b.cye + b.cll;
exports.cyell = cyell;
var cYell = b.cYe + b.cll;
exports.cYell = cYell;
var clack = b.cla + b.cck;
exports.clack = clack;
var cLack = b.cLa + b.cck;
exports.cLack = cLack;
var clane = b.cl + p.cane;
exports.clane = clane;
var cLane = b.cL + p.cane;
exports.cLane = cLane;
var csection = p.csec + p.ction;
exports.csection = csection;
var cSection = p.cSec + p.ction;
exports.cSection = cSection;
var csections = csection + b.cs;
exports.csections = csections;
var cSections = cSection + b.cs;
exports.cSections = cSections;
var cunit = p.cuni + b.ct;
exports.cunit = cunit;
var cUnit = p.cUni + b.ct;
exports.cUnit = cUnit;