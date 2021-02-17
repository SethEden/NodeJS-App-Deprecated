"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cTestRunTime = exports.cScriptRunTime = exports.cVersionControl = exports.cConfigurationElements = exports.cConfigurationElement = exports.cConfigurationName = exports.cFileNumber = exports.cAccessLevel = exports.cShareEmail = exports.cTestDataFileName = exports.cProjectDescription = exports.cProjectName = exports.cPassword = exports.cUsername = exports.cRowNumber = exports.cIngestionCompleteDwellTime = exports.cProcessingTimeout = exports.cTestData = exports.cInnerHTML = exports.cinnerHTML = exports.cInnerText = exports.cinnerText = exports.cOperatingSystem = exports.cVisibilityCheck = exports.cvisibilityCheck = exports.cDeltaT = exports.cFileCounter = exports.cIncludeDateTimeStampInLogFiles = exports.cLogFileEnabled = exports.cTestDataPath = exports.cResultsLogFilePathAndName = exports.cExecutionJournalFilePathAndName = exports.cDataLogFilePathAndName = exports.cLogFilePathAndName = exports.cDwellTime = exports.cTimeoutOverride = exports.cSpecialCharacters = exports.cAllowableCharacters = exports.cParallelMultiUnified = exports.cSynchSingular = exports.cAsynchSingular = exports.cPreValidateFileName = exports.cFileNames = exports.cFilenames = exports.cfilenames = exports.cFileName = exports.cFilename = exports.cfilename = exports.cFileTypes = exports.cfilesLists = exports.cTestRunID = exports.cHostName = exports.cBrowserName = exports.cRunTime = exports.cRuntime = exports.cEndKeywordTimeStamp = exports.cBeginKeywordTimeStamp = exports.cEndPageScriptTimeStamp = exports.cBeginPageScriptTimeStamp = exports.cEndTestTimeStamp = exports.cBeginTestTimeStamp = exports.cEndScriptTimeStamp = exports.cBeginScriptTimeStamp = exports.cScriptDateTimeStamp = exports.cTestTimeStamp = exports.cKeywordTimeStamp = exports.cScriptTimeStamp = exports.cScriptDateStamp = exports.cDateTimeStamp = exports.cPageScriptTimeStamp = exports.cTimeStamp = exports.cIntermediatePath = exports.cPageScript = exports.cEnvironmentRowNumber = exports.cEnvironmentRow = exports.cMasterRowNumber = exports.cNumberOfRows = exports.cTestAutomation = exports.cDebugFiles = exports.cDebugFunctions = exports.cDebugSelectors = exports.cDebugBrowserActions = exports.cJournalBrowserActions = exports.cLogBrowserActions = exports.cDebugKeywords = exports.cDebugPageData = exports.cDebugPageScripts = exports.cDebugTestData = exports.cDebugTestExhaustive = exports.cDebugPage = exports.cDebugTest = exports.cWithText = exports.cwithText = exports.cUnderline = exports.cunderline = exports.cSTYLE = exports.cITERATION = exports.cENVIRONMENT = exports.cLOG = exports.cENV = void 0;
exports.ccurrentMasterStringArrayElement = exports.candSpaceDomainSpaceName = exports.cdomainSpaceName = exports.candSuffix = exports.candPrefix = exports.cprogramLoop = exports.cGenerateA = exports.cwasCompleted = exports.cWithoutThe = exports.cfailureMode = exports.cspecifiedSuffixAndDomain = exports.callowableSpecialCharacters = exports.cgenerateSpecialCharacters = exports.cnumberOfCharactersToGenerate = exports.cbigInteger = exports.cSource2 = exports.cSource1 = exports.cDataStorage = exports.cExportConst = exports.cexportconst = exports.cHexValue = exports.cStandardDeviation = exports.cCommandWorkflows = exports.cCommandsAliases = exports.cFramework = exports.cframework = exports.crulesLibrary = exports.cBusinessRules = exports.cbusinessRules = exports.cBusinessRule = exports.cbusinessRule = exports.cColorName = exports.cColorData = exports.cConfiguration_Colors = exports.cBackground = exports.cbackground = exports.creleaseApplication = exports.cdeployMetaData = exports.cdeployApplication = exports.cSpaceIsColonSpace = exports.cBrowserRefresh = exports.cNavigateTo = exports.cnavigateTo = exports.cPage_Keywords = exports.cBackSlash = exports.cForwardSlash = exports.cVideoLogs = exports.cDashboardLogs = exports.cCarriageReturn = exports.cAlphabeticCharacter = exports.cBooleanValue = exports.cNumberInRange = exports.cNumericCharacter = exports.cWithSpecificSuffixAndDomainName = exports.cSuffixAndDomain = exports.cAlphaNumericCharacter = exports.cLetterOrNumberOrSpecialCharacter = exports.cLetterOrSpecialCharacter = exports.cLetterOr = exports.cRandomInvalidEmail = exports.cRandomValidEmail = exports.cgenerateInvalidEmail = exports.cgenerateValidEmail = exports.cInvalidEmail = exports.cValidEmail = exports.cvalidEmail = exports.cSpecialCharacterCodeByLength = exports.cAlphaNumericCodeWithSpecialCharactersByLength = exports.cAlphaNumericCodeWithSpecialCharacters = exports.cNumericCodeByLength = exports.cNumericCode = exports.cAlphaNumericCodeByLength = exports.cAlphaNumericCode = exports.cAlphaNumeric = exports.cTextWithSpecialCharactersByLength = exports.cTextWithSpecialCharacters = exports.cTextByLength = exports.cWithSpecialCharacters = exports.cSpecialCharacter = exports.cByLength = exports.cLowerCase = exports.cUpperCase = exports.cMixedCase = exports.crandomlyGenerate = exports.cgenerateRandom = exports.caddFilter = exports.caddSibling = exports.caddNth = exports.caddFindValue = exports.caddParent = exports.caddTimeout = exports.caddWithText = exports.cTestBureau = exports.cUnderscore = exports.cchildElementCount = exports.cselectorTimeout = exports.cAbreviatedSelectorsInLogs = exports.cAbreviatedSelectors = exports.cTypeText = exports.ctypeText = void 0;
exports.cFilenamesMatch = exports.cstringDeltaValueIs = exports.cunderscoreCountIs = exports.cdashCountIs = exports.cperiodCountIs = exports.cspacesCountIs = exports.ccontainsAcronymIs = exports.ccamelCaseWordCountIs = exports.csubstitutionCostIs = exports.cinsertionCostIs = exports.cdeletionCostIs = exports.cjValueIs = exports.ciValueIs = exports.cvariation1ValueIs = exports.cvariation0ValueIs = exports.cstring2Is = exports.cstring1Is = exports.cparsedStringSpaceTerm = exports.cisResolvingAs = exports.cIndexOfTheSpace = exports.cWithoutThePrefixSuffixAndDot = exports.cWithoutThePrefixSuffixAndAtSymbol = exports.cWithoutTheDotPrefixSuffixAndDomainName = exports.cWithoutTheAtSymbolPrefixSuffixAndDomainName = exports.cWithoutTheDotSuffixAndDomainName = exports.cWithoutTheAtSymbolSuffixAndDomainName = exports.cWithoutTheDotPrefixAndDomainName = exports.cWithoutTheAtSymbolPrefixAndDomainName = exports.cWithoutThePrefixSuffixAndDomainName = exports.cWithoutThePrefixAndSuffix = exports.cWithoutTheSuffixAndDomainName = exports.cWithoutThePrefixAndDomainName = exports.cWithoutTheAtSymbolDotPrefixAndSuffix = exports.cWithoutTheAtSymbolDotAndSuffix = exports.cWithoutTheAtSymbolDotAndPrefix = exports.cWithoutTheDotAndSuffix = exports.cWithoutTheAtSymbolAndSuffix = exports.cWithoutTheDotAndPrefix = exports.cWithoutTheAtSymbolDotAndDomainName = exports.cWithoutTheDotAndDomainName = exports.cWithoutTheAtSymbolAndDomainName = exports.cWithoutTheDomainName = exports.cWithoutTheAtAndDotSymbols = exports.cWithoutTheDotSymbol = exports.cnumberOfSuffixCharactersIs = exports.cnumberOfPrefixCharactersIs = exports.cdomainNameIs = exports.cDEFAULTWithoutTheAtSymbolAndPrefix = exports.cWithoutTheAtSymbolAndPrefix = exports.cWithoutTheSuffix = exports.cWithoutThePrefix = exports.cWithoutTheAtSymbol = exports.csuffixIs = exports.cprefixIs = exports.cfailureModeIs = exports.cspecifiedSuffixAndDomainIs = exports.callowableSpecialCharactersIs = exports.cgenerateSpecialCharactersIs = exports.cnumberOfCharactersToGenerateIs = exports.cMathOperationsMessage1 = exports.cCharacterGenerationMessage5 = exports.cCharacterGenerationMessage4 = exports.cCharacterGenerationMessage3 = exports.cCharacterGenerationMessage2 = exports.cCharacterGenerationMessage1 = exports.cBuildMessage2 = exports.cBuildMessage1 = exports.cApplicationExitMessage2 = exports.cApplicationExitMessage1 = exports.cApplicationMessage5 = exports.cApplicationMessage4 = exports.cApplicationMessage3 = exports.cApplicationMessage2 = exports.cApplicationWarningMessage1b = exports.cApplicationWarningMessage1a = exports.cDataFontBackgroundColor = exports.cMessageFontBackgroundColor = exports.cFunctionFontBackgroundColor = exports.cModuleFontBackgroundColor = exports.cDataFontColor = exports.cMessageFontColor = exports.cFunctionFontColor = exports.cModuleFontColor = exports.cDataFontStyle = exports.cMessageFontStyle = exports.cFunctionFontStyle = exports.cModuleFontStyle = exports.cLogWarnings = exports.cLogBasicSystemEvents = exports.creturnDataIs = exports.cinputMetaDataIs = exports.cinputDataIs = exports.cInputMetaData = exports.cinputMetaData = exports.cInputData = exports.cinputData = exports.cEND_Function = exports.cBEGIN_Function = exports.creturnData = exports.cLehmerCodeArray = void 0;
exports.cBusinessRuleEndTimeIs = exports.cBusinessRuleStartTimeIs = exports.cruleInputMetaData = exports.cruleInputDataIs = exports.crulesIs = exports.ccurrentRuleIs = exports.cBEGIN_ithIterationOfInputDataArray = exports.ccontentsOfDare = exports.ccontentsAre = exports.cpathAndFilenameIs = exports.cmetaDataPathAndFilenameIs = exports.cmetaDataParametersLengthIs = exports.cmetaDataParametersIs = exports.caggregateCommandStringIs = exports.cinputDataIis = exports.cDeploymentWasCompleted = exports.cRELEASE_APPLICATION = exports.cDEPLOY_APPLICATION = exports.creplacementIs = exports.cindexIs = exports.coriginalStringIs = exports.cTheValueWasNotFoundInTheArray = exports.cTheValueWasFoundInTheArray = exports.carrayInputObjectIsNotAnArray = exports.cmyFunctionIs = exports.cvalueIs = exports.carrayIs = exports.cattributeArray0Is = exports.cattributeArrayIs = exports.cLoadedDataIs = exports.cAttemptingToLoadJsonData = exports.cAttemptingToLoadCsvData = exports.cAttemptingToLoadXmlData = exports.ccurrentPathElementIs = exports.cpathArrayIs = exports.creturnDataSoFarIs = exports.ccaseElse = exports.ccasePathElementEqual = exports.ccaseIEqual0 = exports.cpathElementIs = exports.cKeywordNameShouldBe = exports.cDataCatagoryDetailNameShouldBe = exports.cDataCatagoryShouldBe = exports.clookupValueIs = exports.clookupIndexIs = exports.cmasterTempReturnDataAfterRecursiveCallIs = exports.cpushingTempReturnData1Kvalue = exports.ctempReturnData1DotLengthIs = exports.ctempReturnData1Is = exports.cmasterTempReturnDataBeforeRecursiveCallIs = exports.creturnDataAfterPopIs = exports.creturnDataBeforePopIs = exports.creturnDataDotLengthIs = exports.carrayToBeExpandedDotLengthIs = exports.creturnDataAfterLevel1Is = exports.creturnDataAfterPushIs = exports.cpushingLehmerCodeArray1ToReturnDataValue = exports.climitOfExpansionIs = exports.carrayToBeExpandedIs = exports.cindexOfExpansionIs = exports.cexpandedLehmerCodeArrayIs = exports.cCommandAliasesAre = exports.cmasterArrayIndexIs = exports.cmasterCommandWordAlisesArrayIs = exports.ccommandWordAliasesAfterChangeIs = exports.ccommandWordAliasesBeforeChangeIs = exports.cduplicateCommandAliasIs = exports.cduplicateAliasCountIs = exports.ccurrentAliasIs = exports.caliasListIs = exports.ccurrentCommandIs = exports.cEND_kthIteration = exports.cEND_jthLoop = exports.cEND_ithIteration = exports.cEND_ithLoop = exports.cBEGIN_kthIteration = exports.cBEGIN_jthLoop = exports.cBEGIN_ithIteration = exports.cBEGIN_ithLoop = exports.cConstantDoesExist = exports.cConstantDoesNotExist = exports.ccurrentMasterStringArrayElementIs = exports.cminStringLengthIs = exports.cmaxStringLengthIs = exports.crecursiveSubStringIs = exports.cdeltaLengthIs = exports.cconstantValueIs = exports.cconstantNameIs = exports.cconstantActualValueIs = exports.cconstantKeyIs = exports.cconstantsKeysIs = exports.cconstantTypeValuesIs = exports.cconstantTypeKeyIs = exports.cconstantsTypesKeysIs = exports.cErrorUnknownConstantFile = exports.cSuggestedLineOfCodeIs = exports.clineArray2Is = exports.cArrayElementsDoNotMatch = exports.cArrayElementsMatch = exports.cFilenamesDoNotMatch = void 0;
exports.callSystemConfigurationsIs = exports.ccontextNameIs = exports.ccommandToExecuteIs = exports.ccommandIs = exports.ccommandAliasesFilePathConfigurationNameIs = exports.cCommandRunTimeIs = exports.cCommandEndTimeIs = exports.cCommandStartTimeIs = exports.cDoingStraightSplitCommandString = exports.cpreSplitCommandStringElementIs = exports.cpostSplitCommandStringIs = exports.cpreSplitCommandStringIs = exports.ccommandStringAfterTaggingAnEvenStringDelimiter = exports.ccommandStringAfterTaggingAnOddStringDelimiter = exports.cevenIndex = exports.coddIndex = exports.cAdditionalIndexIs = exports.ccommandStringAfterTaggingTheFirstStringDelimiter = exports.cFirstIndexIs = exports.cnumberOfSingleQuotesIsEven = exports.ccommandStringContainsSingleQuote = exports.ccommandStringContainsEitherSingleQuoteOrBackTickQuote = exports.cdoesNotExistPleaseTryAgain = exports.cWarningTheSpecifiedCommand = exports.ccommandToExecuteAfterTheAliasIs = exports.ccommandToExecuteBeforeTheAliasIs = exports.ccommandDelimiterIs = exports.ccommandStringIs = exports.cWordConstantsPhase2Validation = exports.cUnitsConstantsPhase2Validation = exports.cSystemConstantsPhase2Validation = exports.cShapeConstantsPhase2Validation = exports.cPhonicsConstantsPhase2Validation = exports.cNumericalConstantsPhase2Validation = exports.cIsotopeConstantsPhase2Validation = exports.cGenericConstantsPhase2Validation = exports.cElementConstantsPhase2Validation = exports.cColorConstantsPhase2Validation = exports.cBasicConstantsPhase2Validation = exports.cWordConstantsPhase1Validation = exports.cUnitsConstantsPhase1Validation = exports.cSystemConstantsPhase1Validation = exports.cShapeConstantsPhase1Validation = exports.cPhonicsConstantsPhase1Validation = exports.cNumericalConstantsPhase1Validation = exports.cIsotopeConstantsPhase1Validation = exports.cGenericConstantsPhase1Validation = exports.cElementConstantsPhase1Validation = exports.cColorConstantsPhase1Validation = exports.cBasicConstantsPhase1Validation = exports.cresolvedConstantsPath_WordsIs = exports.cresolvedConstantsPath_UnitsIs = exports.cresolvedConstantsPath_SystemIs = exports.cresolvedConstantsPath_ShapeIs = exports.cresolvedConstantsPath_PhonicsIs = exports.cresolvedConstantsPath_NumericIs = exports.cresolvedConstantsPath_IsotopeIs = exports.cresolvedConstantsPath_GenericIs = exports.cresolvedConstantsPath_ElementIs = exports.cresolvedConstantsPath_ColorIs = exports.cresolvedConstantsPath_BasicIs = exports.cconstantsPathIs = exports.cEndPhase2ConstantsValidation = exports.cBeginPhase2ConstantsValidation = exports.cEndPhase1ConstantsValidation = exports.cBeginPhase1ConstantsValidation = exports.cruleOutputIs = exports.ccurrentColorHexValueIs = exports.ccurrentColorObjectIs = exports.ccurrentColorNameIs = exports.ccolorKeysIs = exports.cDoneCommandPerformanceStdSumIs = exports.ccommandPerformanceStdSumIs = exports.cDoneCommandPerformanceSumIs = exports.ccommandPerformanceSumIs = exports.ccommandCounterIs = exports.cstandardDevIs = exports.cDoneBusinessRulePerformanceStdSumIs = exports.cbusinessRulePerformanceStdSumIs = exports.caverageIs = exports.cDoneBusinessRulePerformanceSumIs = exports.cbusinessRulePerformanceSumIs = exports.cbusinessRuleCounterIs = exports.ccommonPatternsArrayIs = exports.cuserDefinedConstantsListDoesNotContainComas = exports.cuserDefinedConstantsListArrayIs = exports.cuserDefinedConstantListContainsComas = exports.cuserDefinedConstantListIs = exports.cOptimizedConstantDefinitionForWord = exports.cwordsArrayIs = exports.cwordCountIs = exports.cuserDefinedConstantIs = exports.ccommandAliasDataStructureIs = exports.cPARSER_ERROR = exports.ccurrentCommandWordIs = exports.ccamelCaseCommandNameArrayIs = exports.cRuleOutputIs = exports.creplaceCharacterWithCharacterRuleIs = exports.ccommandStringBeforeAttemptedDelimiterSwapIs = exports.cBusinessRuleRunTimeIs = void 0;
exports.cErrorCouldNotCopyFolderContents = exports.csuccessfullCopyIs = exports.cErrorCouldNotCreateFolder = exports.cErrorCouldNotCopyFile = exports.ctargetIs = exports.cSourceIs = exports.cRootPathAfterProcessingIs = exports.cRootPathBeforeProcessingIs = exports.cpackageSuccessIs = exports.ccurrentVersionAlreadyReleased = exports.cSetTheReturnPackageSuccessFlagToTrue = exports.cDoneWritingTheZipFile = exports.creleaseFileNameIs = exports.creleaseDateTimeStampIs = exports.creleaseFilesListIs = exports.cfileNameIs = exports.cfileIs = exports.creleasedArchiveFilesListIs = exports.ccurrentVersionIs = exports.ccopySuccessIs = exports.cdestinationFolderIs = exports.csourceFolderIs = exports.cdirectoryPathIs = exports.cdirectorIs = exports.cfilesFoundAre = exports.cPathThatShouldBeScannedIs = exports.cDataWasWrittenToTheFile = exports.cdataToWriteIs = exports.cfileAndPathToWriteDataToIs = exports.cDoneLoadingDataFrom = exports.cfileAndPathToLoadFromIs = exports.cERROR_Colon = exports.celementCountIs = exports.celementNamePatternIs = exports.cdataObjectIs = exports.celementNameIs = exports.cdataObjectValueIs = exports.ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs = exports.ckeyIs = exports.cinsideTheForLoop = exports.cCaughtTheSpecialCaseThatWeAreMergingFlatList = exports.cpageNameIsAnEmptyString = exports.cMergedDataIs = exports.cafterAttemptToMergeResultsAre = exports.ctargetDataContentIs = exports.cdataCatagoryIsAnEmptyString = exports.cdataCatagoryIsNotAnEmptyString = exports.cCheckIfTheDataCatagoryIsAnEmptyStringOrNot = exports.cpageNameIsNotAnEmptyString = exports.ccheckIfThePageNameIsNotAnEmptyString = exports.cdataToMergeElementCountIs1 = exports.cdataToMergeElementCountIs = exports.cdataToMergeIs = exports.cpageNameIs = exports.ctargetDataIs = exports.ctempDataIs = exports.cdataCatagoryDetailsNameIs = exports.cdataToStoreIs = exports.cdataStorageContextNameIs = exports.cD_finalMergeIs = exports.cfullyParsedDataIs = exports.cdataCatagoryIs = exports.cparsedDataFileContentsAre = exports.cMERGED_dataIs = exports.cDONE_PROCESSING_ADDITIONAL_DATA = exports.cBEGIN_PROCESSING_ADDITIONAL_DATA = exports.cparsedDataFileIs = exports.cloadedFileDataIs = exports.cfileExtensionIs = exports.cFileToLoadIs = exports.cfilesFoundIs = exports.cdataPathAfterBusinessRulesProcessingIs = exports.cexecuteBusinessRulesColon = exports.cappAttributeValueIs = exports.cappAttributeNameIs = exports.cattributeJsonStringIs = exports.creturnConfiguraitonValueIs = exports.cconfigurationValueIs = exports.cconfigurationNameIs = exports.cruleMetaDataIs = exports.cruleInputIs = exports.cbusinessRuleIs = exports.cresolvedClientWorkflowsPathIs = exports.cresolvedSystemWorkflowsPathIs = exports.cclientWorkflowPathIs = exports.csystemWorkflowPathIs = exports.cresolvedClientCommandsAliasesPathIs = exports.cresolvedSystemCommandsAliasesPathIs = exports.cclientCommandsAliasesPathIs = exports.csystemCommandsAliasesPathIs = exports.cclientCommandsAre = exports.cclientBusinessRulesAre = exports.crootPathIs = exports.ccontentsOfDataStructreIs = exports.ccommandWorkflowFilePathConfigurationNameIs = exports.cloadedAndMergedDataAllFilesContentsAre = exports.cloadedAndMergedDataAllFilesIs = exports.cfilesToLoadIs = exports.cdataPathIs = exports.cdataPathConfigurationNameIs = void 0;
exports.ccommandAliasGeneratorMessage5 = exports.ccommandAliasGeneratorMessage4 = exports.ccommandAliasGeneratorMessage3 = exports.ccommandAliasGeneratorMessage2 = exports.ccommandAliasGeneratorMessage1 = exports.ccommandGeneratorMessage6 = exports.ccommandGeneratorMessage5 = exports.ccommandGeneratorMessage4 = exports.ccommandGeneratorMessage3 = exports.ccommandGeneratorMessage2 = exports.ccommandGeneratorMessage1 = exports.cworkflowMessage3 = exports.cworkflowMessage2 = exports.cworkflowMessage1 = exports.ccommandSequencerMessage2 = exports.ccommandSequencerMessage1 = exports.cdeployApplicationMessage1b = exports.cdeployApplicationMessage2a = exports.cdeployApplicationMessage1a = exports.cloadDataFileMessage3 = exports.cloadDataFileMessage2 = exports.cLoadDataFileMessage1 = exports.cSearchForPatternsInStringArrayMessage4 = exports.cSearchForPatternsInStringArrayMessage3 = exports.cSearchForPatternsInStringArrayMessage2 = exports.cSearchForPatternsInStringArrayMessage1 = exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6 = exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 = exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 = exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 = exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 = exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 = exports.cConstantsListPatternSearchPrompt3 = exports.cConstantsListPatternSearchPrompt2 = exports.cConstantsListPatternSearchPrompt1 = exports.cConstantsListPrompt3 = exports.cConstantsListPrompt2 = exports.cConstantsListPrompt1 = exports.cConstantPrompt3 = exports.cConstantPrompt2 = exports.cConstantPrompt1 = exports.cCommandWordAliasPrompt3 = exports.cCommandWordAliasPrompt2 = exports.cCommandWordAliasPrompt1 = exports.cCommandNamePrompt5 = exports.cCommandNamePrompt4 = exports.cCommandNamePrompt3 = exports.cCommandNamePrompt2 = exports.cCommandNamePrompt1 = exports.cGetWordsArrayFromStringMessage3 = exports.cGetWordsArrayFromStringMessage2 = exports.cGetWordsArrayFromStringMessage1 = exports.cGetWordCountInStringMessage3 = exports.cGetWordCountInStringMessage2 = exports.cGetWordCountInStringMessage1 = exports.cDetermineWordDelimiterMessage4 = exports.cDetermineWordDelimiterMessage3 = exports.cDetermineWordDelimiterMessage2 = exports.cDetermineWordDelimiterMessage1 = exports.centityIs = exports.ckey2Is = exports.cattributeValueIs = exports.centryIs = exports.ccontentsOfLeafDataHiveElementIs = exports.cdataHivePathArrayIs = exports.cworkflowValueIs = exports.ccurrentWorkflowIs = exports.cworkflowNameIs = exports.csleepTimeIs = exports.creturnDeltaTimeIs = exports.cformatIs = exports.cdeltaTimeIs = exports.cdeltaTimeResultIs = exports.cendTimeIs = exports.cstartTimeIs = exports.cformattingIs = exports.cargumentArrayIs = exports.csecondaryCommandArgsDelimiterIs = exports.cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs = exports.cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs = exports.cargumentValueContainsTheDelimiterLetsSplitIt = exports.cregExFlagsIs = exports.cregularExpressionFlagsAre = exports.cregExValueIs = exports.cregularExpressionIs = exports.cNoSecondaryCommandArgumentDelimiters = exports.cBracketsAreFound = exports.cNoRegExpFound = exports.cRegularExpressionWasFound = exports.cCheckIfThereIsRegularExpressionOrNot = exports.cBracketsWereFound = exports.cCheckIfThereAreBracketsOrNoBrackets = exports.cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse = exports.cReturnArgumentValueSameAsItWasPassedIn = exports.cargumentValueLengthGreaterThanZero = exports.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue = exports.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse = exports.cPushingArgumentValueToReturnDataAsArrayElement = exports.cconsolidatedArgumentModeIs = exports.cargumentValueIs = void 0;
exports.cbasic_constants_js = exports.cBinaryReleasePath = exports.cBinaryRootPath = exports.cDestinationResourcesPath = exports.cSourceResourcesPath = exports.cWordConstantsValidation = exports.cUnitsConstantsValidation = exports.cSystemConstantsValidation = exports.cShapeConstantsValidation = exports.cPhonicsConstantsValidation = exports.cNumericConstantsValidation = exports.cIsotopeConstantsValidation = exports.cGenericConstantsValidation = exports.cElementConstantsValidation = exports.cColorConstantsValidation = exports.cBasicConstantsValidation = exports.cConstantsValidationData = exports.cCommandQueue = exports.cclientRulesLibrary = exports.cConstantsPathActual = exports.cConstantsPath = exports.cLocatorsDataPath = exports.cKeywordsDataPath = exports.cWorkflowDataPath = exports.cPageDataPath = exports.cCtempPath = exports.cDataPath = exports.cApplicationDescription = exports.cApplicationVersionNumber = exports.cConfigurationPath = exports.cApplicationCleanedRootPath = exports.cApplicationRootPath = exports.cApplicationName = exports.cctrl_z = exports.cctrl_y = exports.cctrl_x = exports.cctrl_w = exports.cctrl_v = exports.cctrl_u = exports.cctrl_t = exports.cctrl_s = exports.cctrl_r = exports.cctrl_q = exports.cctrl_p = exports.cctrl_o = exports.cctrl_n = exports.cctrl_m = exports.cctrl_l = exports.cctrl_k = exports.cctrl_j = exports.cctrl_i = exports.cctrl_h = exports.cctrl_g = exports.cctrl_f = exports.cctrl_e = exports.cctrl_d = exports.cctrl_c = exports.cctrl_b = exports.cctrl_a = exports.cPREPROD = exports.cPreProd = exports.cPRE = exports.cPre = exports.cPROD = exports.cProd = exports.cDEV = exports.cQA = exports.cButton = exports.cVRML = exports.cVrml = exports.cvrml = exports.cSolidWorks = exports.cSolidEdge = exports.cRhino = exports.cProE = exports.cParasolid = exports.cNX = exports.cNeutral = exports.cInventor = exports.cImages = exports.cImage = exports.cHOOPS = exports.cHoops = exports.cDWG = exports.cDraft = exports.cDocuments = exports.cDocument = exports.cCatia = exports.cprintDataHiveAttributesMessage3 = exports.cprintDataHiveAttributesMessage2 = exports.cprintDataHiveAttributesMessage1 = exports.cparseBusinessRuleArgumentMessage2 = exports.cparseBusinessRuleArgumentMessage1 = exports.cexecuteCommandMessage1 = exports.cgetCommandArgsMessage2 = exports.cgetCommandArgsMessage1 = exports.cvalidateCommandAliasesMessage1 = exports.cconstantsGeneratorListMessage1 = exports.cconstantsGeneratorMessage2 = exports.cconstantsGeneratorMessage1 = void 0;
exports.cisConstantValid = exports.cisValidCommandNameString = exports.cvalidateConstantsDataValues = exports.cconstantsFulfillmentSystem = exports.cconstantsOptimizedFulfillmentSystem = exports.cconvertConstantTypeToConstantPrefix = exports.cisConstantTypeValid = exports.cfindConstantName = exports.cgetConstantName = exports.cgetConstantActualValue = exports.cgetConstantType = exports.cdoesConstantExist = exports.cvalidateConstantsDataValidationLineItemName = exports.cdetermineSuggestedConstantsValidationLineOfCode = exports.cdetermineConstantsContextQualifiedPrefix = exports.cvalidateConstantsDataValidation = exports.cascertainMatchingFilenames = exports.ccompareSimplifiedAndConsolidatedStrings = exports.csimplifyAndConsolidateString = exports.cmapWordToCamelCaseWord = exports.cisStringCamelCase = exports.cisStringList = exports.cisFirstCharacterUpperCase = exports.cisFirstCharacterLowerCase = exports.cdoesStringContainLowerCaseCharacter = exports.cdoesStringContainUpperCaseCharacter = exports.cgetWordCountInString = exports.cdetermineWordDelimiter = exports.ccountDelimiterInString = exports.cdoesStringContainAcronym = exports.ccountCamelCaseWords = exports.caggregateNumericalDifferenceBetweenTwoStrings = exports.cgetValueFromAssignmentOperationString = exports.cremoveFileExtensionFromFileName = exports.cremoveDotFromFileExtension = exports.cgetFileExtension = exports.cgetFileNameFromPath = exports.cconvertStringToUpperCase = exports.cconvertStringToLowerCase = exports.ccleanCarriageReturnFromString = exports.creplaceColonWithUnderscore = exports.creplaceSpacesWithPlus = exports.cgetUserNameFromEmail = exports.cswapDoubleBackSlashToSingleBackSlash = exports.cswapDoubleForwardSlashToSingleForwardSlash = exports.cswapBackSlashToForwardSlash = exports.cswapForwardSlashToBackSlash = exports.csingleQuoteSwapAfterEquals = exports.cisString = exports.cisFloat = exports.cisInteger = exports.cisBoolean = exports.cdetermineObjectDataType = exports.cstringToDataType = exports.cstringToBoolean = exports.cEcho = exports.cecho = exports.cClearCommandPerformanceDataAfterAnalysis = exports.cCommandsPerformanceAnalysisStack = exports.cCommandNamesPerformanceTrackingStack = exports.cCommandPerformanceTrackingStack = exports.cClearBusinessRulesPerformanceDataAfterAnalysis = exports.cBusinessRulesPerformanceAnalysisStack = exports.cBusinessRuleNamesPerformanceTrackingStack = exports.cBusinessRulePerformanceTrackingStack = exports.cEndTimeStampVariableName = exports.cBeginTimeStampVariableName = exports.cTimeStampVariableName = exports.cItemsIndividuallySynch = exports.cEndDateTimeStamp = exports.cBeginDateTimeStamp = exports.creleaseCompleted = exports.cdeploymentCompleted = exports.cPassedAllCommandAliasesDuplicateChecks = exports.cPassAllConstantsValidations = exports.cDisplaySummaryConstantsValidationFailMessages = exports.cDisplaySummaryConstantsValidationPassMessages = exports.cDisplayIndividualConstantsValidationFailMessages = exports.cDisplayIndividualConstantsValidationPassMessages = exports.cEnableConstantsPatternGeneration = exports.cEnableConstantsValidation = exports.cEnableCommandPerformanceMetrics = exports.cEnableBusinessRulePerformanceMetrics = exports.cEnableBusinessRuleOutput = exports.cTertiaryCommandDelimiter = exports.cSecondaryCommandDelimiter = exports.cPrimaryCommandDelimiter = exports.cFigletFont = exports.cArgumentDrivenInterface = exports.cmetaDataDotJson = exports.cword_constants_js = exports.cunits_constants_js = exports.csystem_constants_js = exports.cshape_constants_js = exports.cphonics_constants_js = exports.cnumeric_constants_js = exports.cisotope_constants_js = exports.cgeneric_constants_js = exports.celement_constants_js = exports.ccolor_constants_js = void 0;
exports.crandomlyGenerateMixedCaseAlphaNumericCharacter2 = exports.crandomlyGenerateMixedCaseAlphaNumericCharacter1 = exports.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = exports.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = exports.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = exports.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = exports.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = exports.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = exports.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = exports.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = exports.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = exports.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = exports.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = exports.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = exports.cgenerateRandomInvalidEmail2 = exports.cgenerateRandomInvalidEmail1 = exports.cgenerateInvalidEmailWithSpecificSuffixAndDomainName2 = exports.cgenerateInvalidEmailWithSpecificSuffixAndDomainName1 = exports.cgenerateRandomValidEmail2 = exports.cgenerateRandomValidEmail1 = exports.cgenerateValidEmailWithSpecificSuffixAndDomainName2 = exports.cgenerateValidEmailWithSpecificSuffixAndDomainName1 = exports.cgenerateInvalidEmail2 = exports.cgenerateInvalidEmail1 = exports.cgenerateValidEmail2 = exports.cgenerateValidEmail1 = exports.cgenerateRandomSpecialCharacterCodeByLength2 = exports.cgenerateRandomSpecialCharacterCodeByLength1 = exports.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.cgenerateRandomNumericCodeByLength2 = exports.cgenerateRandomNumericCodeByLength1 = exports.cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = exports.cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = exports.cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = exports.cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = exports.cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = exports.cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = exports.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = exports.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = exports.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = exports.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = exports.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = exports.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = exports.cgenerateRandomLowerCaseTextByLength2 = exports.cgenerateRandomLowerCaseTextByLength1 = exports.cgenerateRandomUpperCaseTextByLength2 = exports.cgenerateRandomUpperCaseTextByLength1 = exports.cgenerateRandomMixedCaseTextByLength2 = exports.cgenerateRandomMixedCaseTextByLength1 = exports.cdoesArrayContainValue = exports.caggregateCommandArguments = exports.cgenerateCommandAliases = exports.creplaceCharacterAtIndex = exports.carrayDeepClone = exports.cisNonZeroLengthArray = exports.cisArrayOrObject = exports.cisArray = exports.cisObject = exports.cisArrayEmpty = exports.cisObjectEmpty = exports.cgetStoredData = exports.cstoreData = exports.carraysAreEqual = exports.cgetLehmerCodeValue = exports.crecursiveArrayExpansion = exports.csolveLehmerCode = exports.cvalidatePatternsThatNeedImplementation = exports.csearchForPatternsInStringArray = exports.cgetLengthOfLongestStringInArray = exports.cdoesArrayContainFilename = exports.cascertainMatchingElements = exports.cremoveCharacterFromArray = exports.cdoesArrayContainCharacter = exports.cdoesArrayContainLowerCaseConsolidatedString = exports.cconvertArrayToCamelCaseString = exports.crecombineStringArrayWithSpaces = exports.cgetWordsArrayFromString = exports.cconvertCamelCaseStringToArray = exports.creplaceCharacterWithCharacter = exports.creplaceCharacterAtIndexOfString = exports.ccleanCommandInput = exports.cisEven = exports.cisOdd = exports.cgetAttributeValue = exports.cgetAttributeName = exports.csupportedFileFormatsAre = exports.cloadDataFile = exports.cgetFirstTopLevelFolderFromPath = exports.cremoveXnumberOfFoldersFromEndOfPath = exports.creplaceDoublePercentWithMessage = exports.cparseSystemRootPath = exports.cgetKeywordNameFromDataContextName = exports.cgetDataCatagoryDetailNameFromDataContextName = exports.cgetDataCatagoryFromDataContextName = exports.ccountDuplicateCommandAliases = void 0;
exports.cReleaseWorkflow = exports.cBuildWorkflow = exports.cStartupWorkflow = exports.cvalidateCommandAliases = exports.cvalidateConstants = exports.cconvertColors = exports.ccommandMetrics = exports.cbusinessRulesMetrics = exports.cconstantsPatternRecognizer = exports.cconstantsGeneratorList = exports.cconstantsGenerator = exports.ccommandAliasGenerator = exports.ccommandGenerator = exports.cclearDataStorage = exports.cprintDataHiveAttributes = exports.cprintDataHive = exports.ccommandSequencer = exports.cworkflowHelp = exports.cclearScreen = exports.cEchoCommand = exports.cechoCommand = exports.cClientWorkflowsPath = exports.cSystemWorkflowsPath = exports.cClientCommandsAliasesPath = exports.cSystemCommandsAliasesPath = exports.cProdSystemWorkflowsActualPath = exports.cProdSystemCommandsAliasesActualPath = exports.cDevSystemWorkflowsActualPath = exports.cDevSystemCommandsAliasesActualPath = exports.cSystemWorkflowsActualPath = exports.cSystemCommandsAliasesActualPath = exports.chex2rgbConversion = exports.cconvertNumberToLowerCaseLetter = exports.cconvertNumberToUpperCaseLetter = exports.crandomlyGenerateUpperCaseLetter2 = exports.crandomlyGenerateUpperCaseLetter1 = exports.crandomlyGenerateLowerCaseLetter2 = exports.crandomlyGenerateLowerCaseLetter1 = exports.crandomlyGenerateMixedCaseAlphabeticCharacter2 = exports.crandomlyGenerateMixedCaseAlphabeticCharacter1 = exports.crandomlyGenerateBooleanValue2 = exports.crandomlyGenerateBooleanValue1 = exports.crandomlyGenerateNumberInRange2 = exports.crandomlyGenerateNumberInRange1 = exports.crandomlyGenerateSpecialCharacter2 = exports.crandomlyGenerateSpecialCharacter1 = exports.crandomlyGenerateNumericCharacter2 = exports.crandomlyGenerateNumericCharacter1 = exports.crandomlyGenerateLowerCaseAlphaNumericCharacter2 = exports.crandomlyGenerateLowerCaseAlphaNumericCharacter1 = exports.crandomlyGenerateUpperCaseAlphaNumericCharacter2 = exports.crandomlyGenerateUpperCaseAlphaNumericCharacter1 = void 0;

var b = _interopRequireWildcard(require("./basic.constants"));

var p = _interopRequireWildcard(require("./phonics.constants"));

var g = _interopRequireWildcard(require("./generic.constants"));

var n = _interopRequireWildcard(require("./numeric.constants"));

var u = _interopRequireWildcard(require("./units.constants"));

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
 * @requires module:units-constants
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
var cIncludeDateTimeStampInLogFiles = w.cInclude + w.cDate + w.cTime + w.cStamp + b.cIn + g.cLog + w.cFiles; // IncludeDateTimeStampInLogFiles

exports.cIncludeDateTimeStampInLogFiles = cIncludeDateTimeStampInLogFiles;
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
var cIngestionCompleteDwellTime = w.cIngestion + w.cComplete + cDwellTime; // IngestionCompleteDwellTime

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
var cScriptRunTime = w.cScript + cRunTime; // ScriptRunTime

exports.cScriptRunTime = cScriptRunTime;
var cTestRunTime = w.cTest + cRunTime; // TestRunTime

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
var cgenerateValidEmail = w.cgenerate + cValidEmail; // generateValidEmail

exports.cgenerateValidEmail = cgenerateValidEmail;
var cgenerateInvalidEmail = w.cgenerate + cInvalidEmail; // generateInvalidEmail

exports.cgenerateInvalidEmail = cgenerateInvalidEmail;
var cRandomValidEmail = w.cRandom + cValidEmail; // RandomValidEmail

exports.cRandomValidEmail = cRandomValidEmail;
var cRandomInvalidEmail = w.cRandom + cInvalidEmail; // RandomInvalidEmail

exports.cRandomInvalidEmail = cRandomInvalidEmail;
var cLetterOr = w.cLetter + b.cOr; // LetterOr

exports.cLetterOr = cLetterOr;
var cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter; // LetterOrSpecialCharacter

exports.cLetterOrSpecialCharacter = cLetterOrSpecialCharacter;
var cLetterOrNumberOrSpecialCharacter = cLetterOr + w.cNumber + w.cOr + cSpecialCharacter; // LetterOrNumberOrSpecialCharacter

exports.cLetterOrNumberOrSpecialCharacter = cLetterOrNumberOrSpecialCharacter;
var cAlphaNumericCharacter = cAlphaNumeric + w.cCharacter; // AlphaNumericCharacter

exports.cAlphaNumericCharacter = cAlphaNumericCharacter;
var cSuffixAndDomain = w.cSuffix + w.cAnd + w.cDomain; // SuffixAndDomain

exports.cSuffixAndDomain = cSuffixAndDomain;
var cWithSpecificSuffixAndDomainName = w.cWith + w.cSpecific + w.cSuffix + w.cAnd + w.cDomain + w.cName; // WithSpecificSuffixAndDomainName

exports.cWithSpecificSuffixAndDomainName = cWithSpecificSuffixAndDomainName;
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
var cSpaceIsColonSpace = b.cSpace + b.cis + b.cColon + b.cSpace; // is:

exports.cSpaceIsColonSpace = cSpaceIsColonSpace;
var cdeployApplication = w.cdeploy + w.cApplication; // deployApplication

exports.cdeployApplication = cdeployApplication;
var cdeployMetaData = w.cdeploy + w.cMetaData; // deployMetaData

exports.cdeployMetaData = cdeployMetaData;
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
var cHexValue = p.cHex + w.cValue; // HexValue

exports.cHexValue = cHexValue;
var cexportconst = w.cexport + b.cSpace + g.cconst; // export-const // With a space not a dash, but the validation code is looking for that exact string.

exports.cexportconst = cexportconst;
var cExportConst = w.cExport + b.cSpace + g.cConst; // smuggle something

exports.cExportConst = cExportConst;
var cDataStorage = w.cData + w.cStorage; // DataStorage

exports.cDataStorage = cDataStorage;
var cSource1 = w.cSource + n.c1; // Source1

exports.cSource1 = cSource1;
var cSource2 = w.cSource + n.c2; // Source2

exports.cSource2 = cSource2;
var cbigInteger = w.cbig + w.cInteger; // bigInteger

exports.cbigInteger = cbigInteger;
var cnumberOfCharactersToGenerate = w.cnumber + b.cOf + w.cCharacters + b.cTo + w.cGenerate; // numberOfCharactersToGenerate

exports.cnumberOfCharactersToGenerate = cnumberOfCharactersToGenerate;
var cgenerateSpecialCharacters = w.cgenerate + cSpecialCharacters; // generateSpecialCharacters

exports.cgenerateSpecialCharacters = cgenerateSpecialCharacters;
var callowableSpecialCharacters = w.callowable + cSpecialCharacters; // allowableSpecialCharacters

exports.callowableSpecialCharacters = callowableSpecialCharacters;
var cspecifiedSuffixAndDomain = w.cspecified + cSuffixAndDomain; // specifiedSuffixAndDomain

exports.cspecifiedSuffixAndDomain = cspecifiedSuffixAndDomain;
var cfailureMode = w.cfailure + w.cMode; // failureMode

exports.cfailureMode = cfailureMode;
var cWithoutThe = w.cWithout + b.cSpace + w.cthe; // Without the

exports.cWithoutThe = cWithoutThe;
var cwasCompleted = w.cwas + b.cSpace + w.ccompleted; // was completed

exports.cwasCompleted = cwasCompleted;
var cGenerateA = w.cGenerate + b.cSpace + b.ca; // Generate a

exports.cGenerateA = cGenerateA;
var cprogramLoop = w.cprogram + b.cSpace + w.cloop; // program loop

exports.cprogramLoop = cprogramLoop;
var candPrefix = w.cand + b.cSpace + w.cprefix; // and prefix

exports.candPrefix = candPrefix;
var candSuffix = w.cand + b.cSpace + w.csuffix; // and suffix

exports.candSuffix = candSuffix;
var cdomainSpaceName = w.cdomain + b.cSpace + w.cname; // domain name

exports.cdomainSpaceName = cdomainSpaceName;
var candSpaceDomainSpaceName = w.cand + b.cSpace + cdomainSpaceName; // and domain name

exports.candSpaceDomainSpaceName = candSpaceDomainSpaceName;
var ccurrentMasterStringArrayElement = w.ccurrent + w.cMaster + w.cString + w.cArray + w.cElement; // currentMasterStringArrayElement

exports.ccurrentMasterStringArrayElement = ccurrentMasterStringArrayElement;
var cLehmerCodeArray = w.cLehmer + w.cCode + w.cArray; // LehmerCodeArray

exports.cLehmerCodeArray = cLehmerCodeArray;
var creturnData = w.creturn + w.cData; // returnData
// Logging Constants

exports.creturnData = creturnData;
var cBEGIN_Function = w.cBEGIN + b.cSpace + b.cPercent + b.cPercent + b.cSpace + w.cFunction; // BEGIN %% Function

exports.cBEGIN_Function = cBEGIN_Function;
var cEND_Function = w.cEND + b.cSpace + b.cPercent + b.cPercent + b.cSpace + w.cFunction; // END %% Function

exports.cEND_Function = cEND_Function;
var cinputData = w.cinput + w.cData; // inputData

exports.cinputData = cinputData;
var cInputData = w.cInput + w.cData; // InputData

exports.cInputData = cInputData;
var cinputMetaData = w.cinput + w.cMetaData; // inputMetaData

exports.cinputMetaData = cinputMetaData;
var cInputMetaData = w.cInput + w.cMetaData; // InputMetaData

exports.cInputMetaData = cInputMetaData;
var cinputDataIs = cinputData + cSpaceIsColonSpace; // input Data is:

exports.cinputDataIs = cinputDataIs;
var cinputMetaDataIs = w.cinput + w.cMetaData + cSpaceIsColonSpace; // input MetaData is:

exports.cinputMetaDataIs = cinputMetaDataIs;
var creturnDataIs = creturnData + cSpaceIsColonSpace; // return Data is:

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
// System Messages
// WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!

exports.cDataFontBackgroundColor = cDataFontBackgroundColor;
var cApplicationWarningMessage1a = w.cWARNING + b.cColon + b.cSpace + b.cNo + b.cSpace + g.cDotEnv + b.cSpace + w.cFile + b.cSpace + b.cfound + b.cExclamation + b.cSpace; // WARNING: No .End File found!

exports.cApplicationWarningMessage1a = cApplicationWarningMessage1a;
var cApplicationWarningMessage1b = w.cGoing + b.cSpace + b.cto + b.cSpace + w.cdefault + b.cSpace + b.cto + b.cSpace + w.cthe + b.cSpace + w.cDEVELOPMENT + b.cSpace + cENVIRONMENT + b.cExclamation; // Going to default to the DEVELOPMENT ENVIRONMENT!

exports.cApplicationWarningMessage1b = cApplicationWarningMessage1b;
var cApplicationMessage2 = w.cBEGIN + b.cSpace + w.cmain + b.cSpace + cprogramLoop; // BEGIN main program loop

exports.cApplicationMessage2 = cApplicationMessage2;
var cApplicationMessage3 = w.cBEGIN + b.cSpace + w.ccommand + b.cSpace + w.cparser; // BEGIN command parser

exports.cApplicationMessage3 = cApplicationMessage3;
var cApplicationMessage4 = w.cEND + b.cSpace + w.ccommand + b.cSpace + w.cparser; // END command parser

exports.cApplicationMessage4 = cApplicationMessage4;
var cApplicationMessage5 = w.cEND + b.cSpace + w.cmain + b.cSpace + cprogramLoop; // END main program loop

exports.cApplicationMessage5 = cApplicationMessage5;
var cApplicationExitMessage1 = w.cExiting + b.cComa + b.cSpace + w.cGood + b.cSpace + w.cbye + b.cComa + b.cSpace + w.cHave + b.cSpace + b.ca + b.cSpace + w.cnice + b.cSpace; // Exiting, Good bye, Have a nice

exports.cApplicationExitMessage1 = cApplicationExitMessage1;
var cApplicationExitMessage2 = w.cday + b.cSpace + b.cAndPersand + b.cSpace + w.cstay + b.cSpace + w.csafe + b.cExclamation; // day & stay safe!

exports.cApplicationExitMessage2 = cApplicationExitMessage2;
var cBuildMessage1 = w.cDeployment + b.cSpace + cwasCompleted + b.cColon + b.cSpace; // Deployment was completed:

exports.cBuildMessage1 = cBuildMessage1;
var cBuildMessage2 = w.cRelease + b.cSpace + cwasCompleted + b.cColon + b.cSpace; // Release was completed:

exports.cBuildMessage2 = cBuildMessage2;
var cCharacterGenerationMessage1 = w.ctype + b.cTo + w.cGenerate + cSpaceIsColonSpace; // typeToGenerate is:

exports.cCharacterGenerationMessage1 = cCharacterGenerationMessage1;
var cCharacterGenerationMessage2 = cGenerateA + b.cSpace + w.cnumber + b.cDot; // Generate a number.

exports.cCharacterGenerationMessage2 = cCharacterGenerationMessage2;
var cCharacterGenerationMessage3 = cGenerateA + b.cSpace + w.crandom + b.cSpace + w.cupper + b.cSpace + w.ccase + b.cSpace + b.cor + b.cSpace + w.clower + b.cSpace + w.ccase + b.cSpace + w.cletter + b.cDot; // Generate a random upper case or lower case letter.

exports.cCharacterGenerationMessage3 = cCharacterGenerationMessage3;
var cCharacterGenerationMessage4 = cGenerateA + b.cSpace + w.cspecial + b.cSpace + w.ccharacter + b.cDot; // Generate a special character.

exports.cCharacterGenerationMessage4 = cCharacterGenerationMessage4;
var cCharacterGenerationMessage5 = w.cDEFAULT + b.cColon + b.cSpace + cGenerateA + b.cSpace + w.crandom + b.cSpace + w.cupper + b.cSpace + w.ccase + b.cSpace + b.cor + b.cSpace + w.clower + b.cSpace + w.ccase + b.cSpace + w.cletter + b.cDot; // DEFAULT: Generate a random upper case or lower case letter.

exports.cCharacterGenerationMessage5 = cCharacterGenerationMessage5;
var cMathOperationsMessage1 = cbigInteger + cSpaceIsColonSpace; // bigInteger is:

exports.cMathOperationsMessage1 = cMathOperationsMessage1;
var cnumberOfCharactersToGenerateIs = cnumberOfCharactersToGenerate + cSpaceIsColonSpace; // numberOfCharactersToGenerate is:

exports.cnumberOfCharactersToGenerateIs = cnumberOfCharactersToGenerateIs;
var cgenerateSpecialCharactersIs = cgenerateSpecialCharacters + cSpaceIsColonSpace; // generateSpecialCharacters is:

exports.cgenerateSpecialCharactersIs = cgenerateSpecialCharactersIs;
var callowableSpecialCharactersIs = callowableSpecialCharacters + cSpaceIsColonSpace; // allowableSpecialCharacters is:

exports.callowableSpecialCharactersIs = callowableSpecialCharactersIs;
var cspecifiedSuffixAndDomainIs = cspecifiedSuffixAndDomain + cSpaceIsColonSpace; // specifiedSuffixAndDomain is:

exports.cspecifiedSuffixAndDomainIs = cspecifiedSuffixAndDomainIs;
var cfailureModeIs = cfailureMode + cSpaceIsColonSpace; // failureMode is:

exports.cfailureModeIs = cfailureModeIs;
var cprefixIs = w.cprefix + cSpaceIsColonSpace; // prefix is:

exports.cprefixIs = cprefixIs;
var csuffixIs = w.csuffix + cSpaceIsColonSpace; // suffix is:

exports.csuffixIs = csuffixIs;
var cWithoutTheAtSymbol = cWithoutThe + b.cSpace + b.cAt + b.cSpace + w.csymbol + b.cDot; // Without the @ symbol.

exports.cWithoutTheAtSymbol = cWithoutTheAtSymbol;
var cWithoutThePrefix = cWithoutThe + b.cSpace + w.cprefix + b.cDot; // Without the prefix.

exports.cWithoutThePrefix = cWithoutThePrefix;
var cWithoutTheSuffix = cWithoutThe + b.cSpace + w.csuffix + b.cDot; // Without the suffix.

exports.cWithoutTheSuffix = cWithoutTheSuffix;
var cWithoutTheAtSymbolAndPrefix = cWithoutThe + b.cSpace + b.cAt + b.cSpace + candPrefix + b.cDot; // Without the @ and prefix.

exports.cWithoutTheAtSymbolAndPrefix = cWithoutTheAtSymbolAndPrefix;
var cDEFAULTWithoutTheAtSymbolAndPrefix = w.cDEFAULT + b.cColon + b.cSpace + cWithoutTheAtSymbolAndPrefix; // DEFAULT: Without the @ and prefix.

exports.cDEFAULTWithoutTheAtSymbolAndPrefix = cDEFAULTWithoutTheAtSymbolAndPrefix;
var cdomainNameIs = w.cdomain + w.cName + cSpaceIsColonSpace; // domainName is:

exports.cdomainNameIs = cdomainNameIs;
var cnumberOfPrefixCharactersIs = w.cnumber + b.cOf + w.cPrefix + w.cCharacters + cSpaceIsColonSpace; // numberOfPrefixCharacters is:

exports.cnumberOfPrefixCharactersIs = cnumberOfPrefixCharactersIs;
var cnumberOfSuffixCharactersIs = w.cnumber + b.cOf + w.cSuffix + w.cCharacters + cSpaceIsColonSpace; // numberOfSuffixCharacters is:

exports.cnumberOfSuffixCharactersIs = cnumberOfSuffixCharactersIs;
var cWithoutTheDotSymbol = cWithoutThe + b.cSpace + b.cDot + b.cSpace + w.csymbol + b.cDot; // Without the . symbol.

exports.cWithoutTheDotSymbol = cWithoutTheDotSymbol;
var cWithoutTheAtAndDotSymbols = cWithoutThe + b.cSpace + b.cAt + b.cSpace + w.cand + b.cSpace + b.cDot + b.cSpace + w.csymbols + b.cDot; // Without the @ and . symbols.

exports.cWithoutTheAtAndDotSymbols = cWithoutTheAtAndDotSymbols;
var cWithoutTheDomainName = cWithoutThe + b.cSpace + cdomainSpaceName + b.cDot; // Without the domain name.

exports.cWithoutTheDomainName = cWithoutTheDomainName;
var cWithoutTheAtSymbolAndDomainName = cWithoutThe + b.cSpace + b.cAt + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the @ and domain name.

exports.cWithoutTheAtSymbolAndDomainName = cWithoutTheAtSymbolAndDomainName;
var cWithoutTheDotAndDomainName = cWithoutThe + b.cSpace + b.cDot + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the . and domain name.

exports.cWithoutTheDotAndDomainName = cWithoutTheDotAndDomainName;
var cWithoutTheAtSymbolDotAndDomainName = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + b.cDot + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the @, . and domain name.

exports.cWithoutTheAtSymbolDotAndDomainName = cWithoutTheAtSymbolDotAndDomainName;
var cWithoutTheDotAndPrefix = cWithoutThe + b.cSpace + b.cDot + b.cSpace + candPrefix + b.cDot; // Without the . and prefix.

exports.cWithoutTheDotAndPrefix = cWithoutTheDotAndPrefix;
var cWithoutTheAtSymbolAndSuffix = cWithoutThe + b.cSpace + b.cAt + b.cSpace + candSuffix + b.cDot; // Without the @ and suffix.

exports.cWithoutTheAtSymbolAndSuffix = cWithoutTheAtSymbolAndSuffix;
var cWithoutTheDotAndSuffix = cWithoutThe + b.cSpace + b.cDot + b.cSpace + candSuffix + b.cDot; // Without the . and suffix.

exports.cWithoutTheDotAndSuffix = cWithoutTheDotAndSuffix;
var cWithoutTheAtSymbolDotAndPrefix = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + b.cDot + b.cSpace + candPrefix + b.cDot; // Without the @, . and prefix.

exports.cWithoutTheAtSymbolDotAndPrefix = cWithoutTheAtSymbolDotAndPrefix;
var cWithoutTheAtSymbolDotAndSuffix = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + b.cDot + b.cSpace + candSuffix + b.cDot; // Without the @, . and suffix.

exports.cWithoutTheAtSymbolDotAndSuffix = cWithoutTheAtSymbolDotAndSuffix;
var cWithoutTheAtSymbolDotPrefixAndSuffix = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + b.cDot + b.cComa + b.cSpace + w.cprefix + b.cSpace + candSuffix + b.cDot; // Without the @, ., prefix and suffix.

exports.cWithoutTheAtSymbolDotPrefixAndSuffix = cWithoutTheAtSymbolDotPrefixAndSuffix;
var cWithoutThePrefixAndDomainName = cWithoutThe + b.cSpace + w.cprefix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the prefix and domain name.

exports.cWithoutThePrefixAndDomainName = cWithoutThePrefixAndDomainName;
var cWithoutTheSuffixAndDomainName = cWithoutThe + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the suffix and domain name.

exports.cWithoutTheSuffixAndDomainName = cWithoutTheSuffixAndDomainName;
var cWithoutThePrefixAndSuffix = cWithoutThe + b.cSpace + w.cprefix + b.cSpace + candSuffix + b.cDot; // Without the prefix and suffix.

exports.cWithoutThePrefixAndSuffix = cWithoutThePrefixAndSuffix;
var cWithoutThePrefixSuffixAndDomainName = cWithoutThe + b.cSpace + w.cprefix + b.cComa + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the prefix, suffix and domain name.

exports.cWithoutThePrefixSuffixAndDomainName = cWithoutThePrefixSuffixAndDomainName;
var cWithoutTheAtSymbolPrefixAndDomainName = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + w.cprefix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the @, prefix and domain name.

exports.cWithoutTheAtSymbolPrefixAndDomainName = cWithoutTheAtSymbolPrefixAndDomainName;
var cWithoutTheDotPrefixAndDomainName = cWithoutThe + b.cSpace + b.cDot + b.cComa + b.cSpace + w.cprefix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the ., prefix and domain name.

exports.cWithoutTheDotPrefixAndDomainName = cWithoutTheDotPrefixAndDomainName;
var cWithoutTheAtSymbolSuffixAndDomainName = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the @, suffix and domain name.

exports.cWithoutTheAtSymbolSuffixAndDomainName = cWithoutTheAtSymbolSuffixAndDomainName;
var cWithoutTheDotSuffixAndDomainName = cWithoutThe + b.cSpace + b.cDot + b.cComa + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the ., suffix and domain name.

exports.cWithoutTheDotSuffixAndDomainName = cWithoutTheDotSuffixAndDomainName;
var cWithoutTheAtSymbolPrefixSuffixAndDomainName = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + w.cprefix + b.cComa + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the @, prefix, suffix and domain name.

exports.cWithoutTheAtSymbolPrefixSuffixAndDomainName = cWithoutTheAtSymbolPrefixSuffixAndDomainName;
var cWithoutTheDotPrefixSuffixAndDomainName = cWithoutThe + b.cSpace + b.cDot + b.cComa + b.cSpace + w.cprefix + b.cComa + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the ., prefix, suffix and domain name.

exports.cWithoutTheDotPrefixSuffixAndDomainName = cWithoutTheDotPrefixSuffixAndDomainName;
var cWithoutThePrefixSuffixAndAtSymbol = cWithoutThe + b.cSpace + w.cprefix + b.cComa + b.cSpace + w.csuffix + b.cSpace + w.cname + b.cAt + b.cDot; // Without the prefix, suffix and @.

exports.cWithoutThePrefixSuffixAndAtSymbol = cWithoutThePrefixSuffixAndAtSymbol;
var cWithoutThePrefixSuffixAndDot = cWithoutThe + b.cSpace + w.cprefix + b.cComa + b.cSpace + w.csuffix + b.cSpace + w.cand + b.cSpace + b.cDot + b.cDot; // Without the prefix, suffix and ..

exports.cWithoutThePrefixSuffixAndDot = cWithoutThePrefixSuffixAndDot;
var cIndexOfTheSpace = w.cIndex + b.cSpace + b.cof + b.cSpace + w.cthe + b.cSpace; // Index of the

exports.cIndexOfTheSpace = cIndexOfTheSpace;
var cisResolvingAs = b.cis + b.cSpace + w.cresolving + b.cSpace + b.cas + b.cColon + b.cSpace; // is resolving as:

exports.cisResolvingAs = cisResolvingAs;
var cparsedStringSpaceTerm = w.cparsed + w.cString + b.cSpace + w.cterm; // parsedString term

exports.cparsedStringSpaceTerm = cparsedStringSpaceTerm;
var cstring1Is = w.cstring + n.c1 + cSpaceIsColonSpace; // string1 is:

exports.cstring1Is = cstring1Is;
var cstring2Is = w.cstring + n.c2 + cSpaceIsColonSpace; // string2 is:

exports.cstring2Is = cstring2Is;
var cvariation0ValueIs = w.cvariation + n.c0 + b.cSpace + w.cvalue + cSpaceIsColonSpace; // variation0 value is:

exports.cvariation0ValueIs = cvariation0ValueIs;
var cvariation1ValueIs = w.cvariation + n.c1 + b.cSpace + w.cvalue + cSpaceIsColonSpace; // variation1 value is:

exports.cvariation1ValueIs = cvariation1ValueIs;
var ciValueIs = b.ci + b.cSpace + w.cvalue + cSpaceIsColonSpace; // i value is:

exports.ciValueIs = ciValueIs;
var cjValueIs = b.cj + b.cSpace + w.cvalue + cSpaceIsColonSpace; // j value is:

exports.cjValueIs = cjValueIs;
var cdeletionCostIs = w.cdeletion + w.cCost + cSpaceIsColonSpace; // deletionCost is:

exports.cdeletionCostIs = cdeletionCostIs;
var cinsertionCostIs = w.cinsertion + w.cCost + cSpaceIsColonSpace; // insertionCost is:

exports.cinsertionCostIs = cinsertionCostIs;
var csubstitutionCostIs = w.csubstitution + w.cCost + cSpaceIsColonSpace; // substitutionCost is:

exports.csubstitutionCostIs = csubstitutionCostIs;
var ccamelCaseWordCountIs = w.ccamel + w.cCase + w.cWord + w.cCount + cSpaceIsColonSpace; // camelCaseWordCount is:

exports.ccamelCaseWordCountIs = ccamelCaseWordCountIs;
var ccontainsAcronymIs = w.ccontains + w.cAcronym + cSpaceIsColonSpace; // containsAcronym is:

exports.ccontainsAcronymIs = ccontainsAcronymIs;
var cspacesCountIs = w.cspaces + w.cCount + cSpaceIsColonSpace; // spacesCount is:

exports.cspacesCountIs = cspacesCountIs;
var cperiodCountIs = w.cperiod + w.cCount + cSpaceIsColonSpace; // periodCount is:

exports.cperiodCountIs = cperiodCountIs;
var cdashCountIs = w.cdash + w.cCount + cSpaceIsColonSpace; // dashCount is:

exports.cdashCountIs = cdashCountIs;
var cunderscoreCountIs = w.cunderscore + w.cCount + cSpaceIsColonSpace; // underscoreCount is:

exports.cunderscoreCountIs = cunderscoreCountIs;
var cstringDeltaValueIs = w.cstring + g.cDelta + b.cSpace + w.cvalue + cSpaceIsColonSpace; // stringDelta value is:

exports.cstringDeltaValueIs = cstringDeltaValueIs;
var cFilenamesMatch = w.cFilenames + b.cSpace + w.cmatch; // Filenames match

exports.cFilenamesMatch = cFilenamesMatch;
var cFilenamesDoNotMatch = w.cFilenames + b.cSpace + b.cdo + b.cSpace + g.cnot + b.cSpace + w.cmatch; // Filenames do not match

exports.cFilenamesDoNotMatch = cFilenamesDoNotMatch;
var cArrayElementsMatch = w.cArray + b.cSpace + w.celements + b.cSpace + w.cmatch; // Array elements match

exports.cArrayElementsMatch = cArrayElementsMatch;
var cArrayElementsDoNotMatch = w.cArray + b.cSpace + w.celements + b.cSpace + b.cdo + b.cSpace + g.cnot + b.cSpace + w.cmatch; // Array elements do not match

exports.cArrayElementsDoNotMatch = cArrayElementsDoNotMatch;
var clineArray2Is = w.cline + w.cArray + b.cOpenBracket + n.c2 + b.cCloseBracket + cSpaceIsColonSpace; // lineArray[2] is:

exports.clineArray2Is = clineArray2Is;
var cSuggestedLineOfCodeIs = w.cSuggested + b.cSpace + w.cline + b.cSpace + b.cof + b.cSpace + w.ccode + cSpaceIsColonSpace; // Suggested line of code is:

exports.cSuggestedLineOfCodeIs = cSuggestedLineOfCodeIs;
var cErrorUnknownConstantFile = w.cERROR + b.cColon + b.cSpace + w.cUnknown + b.cSpace + w.cconstant + b.cSpace + w.cfile + b.cDot; // ERROR: Unknown constant file.

exports.cErrorUnknownConstantFile = cErrorUnknownConstantFile;
var cconstantsTypesKeysIs = w.cconstants + w.cTypes + w.cKeys + cSpaceIsColonSpace; // constantsTypesKeys is:

exports.cconstantsTypesKeysIs = cconstantsTypesKeysIs;
var cconstantTypeKeyIs = w.cconstant + w.cType + w.cKey + cSpaceIsColonSpace; // constantTypeKey is:

exports.cconstantTypeKeyIs = cconstantTypeKeyIs;
var cconstantTypeValuesIs = w.cconstant + w.cType + w.cValues + cSpaceIsColonSpace; // constantTypeValues is:

exports.cconstantTypeValuesIs = cconstantTypeValuesIs;
var cconstantsKeysIs = w.cconstants + w.cKeys + cSpaceIsColonSpace; // constantsKeys is:

exports.cconstantsKeysIs = cconstantsKeysIs;
var cconstantKeyIs = w.cconstant + w.cKey + cSpaceIsColonSpace; // constantKey is:

exports.cconstantKeyIs = cconstantKeyIs;
var cconstantActualValueIs = w.cconstant + w.cActual + w.cValue + cSpaceIsColonSpace; // constantActualValue is:

exports.cconstantActualValueIs = cconstantActualValueIs;
var cconstantNameIs = w.cconstant + w.cName + cSpaceIsColonSpace; // constantName is:

exports.cconstantNameIs = cconstantNameIs;
var cconstantValueIs = w.cconstant + w.cValue + cSpaceIsColonSpace; // constantValue is:

exports.cconstantValueIs = cconstantValueIs;
var cdeltaLengthIs = w.cdelta + w.cLength + cSpaceIsColonSpace; // deltaLength is:

exports.cdeltaLengthIs = cdeltaLengthIs;
var crecursiveSubStringIs = w.crecursive + w.cSubString + cSpaceIsColonSpace; // recursiveSubString is:

exports.crecursiveSubStringIs = crecursiveSubStringIs;
var cmaxStringLengthIs = g.cmax + w.cString + w.cLength + cSpaceIsColonSpace; // maxStringLength is:

exports.cmaxStringLengthIs = cmaxStringLengthIs;
var cminStringLengthIs = g.cmin + w.cString + w.cLength + cSpaceIsColonSpace; // minStringLength is:

exports.cminStringLengthIs = cminStringLengthIs;
var ccurrentMasterStringArrayElementIs = ccurrentMasterStringArrayElement + cSpaceIsColonSpace; // currentMasterStringArrayElement is:

exports.ccurrentMasterStringArrayElementIs = ccurrentMasterStringArrayElementIs;
var cConstantDoesNotExist = w.cConstant + b.cSpace + w.cdoes + b.cSpace + g.cNOT + b.cSpace + w.cexist + b.cColon + b.cSpace; // Constant does NOT exist:

exports.cConstantDoesNotExist = cConstantDoesNotExist;
var cConstantDoesExist = w.cConstant + b.cSpace + w.cdoes + b.cSpace + w.cexist + b.cColon + b.cSpace; // Constant does exist:

exports.cConstantDoesExist = cConstantDoesExist;
var cBEGIN_ithLoop = w.cBEGIN + b.cSpace + b.ci + b.cDash + b.cth + b.cSpace + w.cloop + b.cColon + b.cSpace; // BEGIN i-th loop:

exports.cBEGIN_ithLoop = cBEGIN_ithLoop;
var cBEGIN_ithIteration = w.cBEGIN + b.cSpace + b.ci + b.cDash + b.cth + b.cSpace + w.citeration + b.cColon + b.cSpace; // BEGIN i-th iteration:

exports.cBEGIN_ithIteration = cBEGIN_ithIteration;
var cBEGIN_jthLoop = w.cBEGIN + b.cSpace + b.cj + b.cDash + b.cth + b.cSpace + w.cloop + b.cColon + b.cSpace; // BEGIN j-th loop:

exports.cBEGIN_jthLoop = cBEGIN_jthLoop;
var cBEGIN_kthIteration = w.cBEGIN + b.cSpace + b.ck + b.cDash + b.cth + b.cSpace + w.citeration + b.cColon + b.cSpace; // BEGIN k-th iteration:

exports.cBEGIN_kthIteration = cBEGIN_kthIteration;
var cEND_ithLoop = w.cEND + b.cSpace + b.ci + b.cDash + b.cth + b.cSpace + w.cloop + b.cColon + b.cSpace; // END i-th loop:

exports.cEND_ithLoop = cEND_ithLoop;
var cEND_ithIteration = w.cEND + b.cSpace + b.ci + b.cDash + b.cth + b.cSpace + w.cIteration + b.cColon + b.cSpace; // END i-th iteration:

exports.cEND_ithIteration = cEND_ithIteration;
var cEND_jthLoop = w.cEND + b.cSpace + b.cj + b.cDash + b.cth + b.cSpace + w.cloop + b.cColon + b.cSpace; // END j-th loop:

exports.cEND_jthLoop = cEND_jthLoop;
var cEND_kthIteration = w.cEND + b.cSpace + b.ck + b.cDash + b.cth + b.cSpace + w.citeration + b.cColon + b.cSpace; // END k-th iteration:

exports.cEND_kthIteration = cEND_kthIteration;
var ccurrentCommandIs = w.ccurrent + w.cCommand + cSpaceIsColonSpace; // currentCommand is:

exports.ccurrentCommandIs = ccurrentCommandIs;
var caliasListIs = w.calias + w.cList + cSpaceIsColonSpace; // aliasList is:

exports.caliasListIs = caliasListIs;
var ccurrentAliasIs = w.ccurrent + w.cAlias + cSpaceIsColonSpace; // currentAlias is:

exports.ccurrentAliasIs = ccurrentAliasIs;
var cduplicateAliasCountIs = w.cduplicate + w.cAlias + w.cCount + cSpaceIsColonSpace; // duplicateAliasCount is:

exports.cduplicateAliasCountIs = cduplicateAliasCountIs;
var cduplicateCommandAliasIs = w.cduplicate + b.cSpace + w.cCommand + b.cSpace + w.cAlias + cSpaceIsColonSpace; // duplicate command alias is:

exports.cduplicateCommandAliasIs = cduplicateCommandAliasIs;
var ccommandWordAliasesBeforeChangeIs = w.ccommand + w.cWord + w.cAliases + b.cSpace + w.cBEFORE + b.cSpace + w.cCHANGE + cSpaceIsColonSpace; // commandWordAliases BEFORE CHANGE is:

exports.ccommandWordAliasesBeforeChangeIs = ccommandWordAliasesBeforeChangeIs;
var ccommandWordAliasesAfterChangeIs = w.ccommand + w.cWord + w.cAliases + w.cArray + b.cSpace + w.cAFTER + b.cSpace + w.cCHANGE + cSpaceIsColonSpace; // commandWordAliasesArray AFTER CHANGE is:

exports.ccommandWordAliasesAfterChangeIs = ccommandWordAliasesAfterChangeIs;
var cmasterCommandWordAlisesArrayIs = w.cmaster + w.cCommand + w.cWord + w.cAliases + w.cArray + cSpaceIsColonSpace; // masterCommandWordAliasesArray is:

exports.cmasterCommandWordAlisesArrayIs = cmasterCommandWordAlisesArrayIs;
var cmasterArrayIndexIs = w.cmaster + w.cArray + w.cIndex + cSpaceIsColonSpace; // masterArrayIndex is:

exports.cmasterArrayIndexIs = cmasterArrayIndexIs;
var cCommandAliasesAre = w.cCommand + b.cSpace + w.cAliases + b.cSpace + w.care + b.cColon + b.cSpace; // Command Aliases are:

exports.cCommandAliasesAre = cCommandAliasesAre;
var cexpandedLehmerCodeArrayIs = w.cexpanded + cLehmerCodeArray + cSpaceIsColonSpace; // expandedLehmerCodeArray is:

exports.cexpandedLehmerCodeArrayIs = cexpandedLehmerCodeArrayIs;
var cindexOfExpansionIs = w.cindex + b.cOf + w.cExpansion + cSpaceIsColonSpace; // indexOfExpansion is:

exports.cindexOfExpansionIs = cindexOfExpansionIs;
var carrayToBeExpandedIs = w.carray + b.cTo + b.cBe + w.cExpanded + cSpaceIsColonSpace; // arrayToBeExpanded is:

exports.carrayToBeExpandedIs = carrayToBeExpandedIs;
var climitOfExpansionIs = w.climit + b.cOf + w.cExpansion + cSpaceIsColonSpace; // limitOfExpansion is:

exports.climitOfExpansionIs = climitOfExpansionIs;
var cpushingLehmerCodeArray1ToReturnDataValue = w.cpushing + b.cSpace + cLehmerCodeArray + n.c1 + b.cSpace + b.cto + b.cSpace + creturnData + b.cSpace + w.cvalue + b.cColon + b.cSpace; // pushing lehmerCodeArray1 to returnData value:

exports.cpushingLehmerCodeArray1ToReturnDataValue = cpushingLehmerCodeArray1ToReturnDataValue;
var creturnDataAfterPushIs = creturnData + b.cSpace + w.cafter + b.cSpace + w.cpush + cSpaceIsColonSpace; // returnData after push is:

exports.creturnDataAfterPushIs = creturnDataAfterPushIs;
var creturnDataAfterLevel1Is = creturnData + b.cSpace + w.cafter + b.cSpace + w.clevel + b.cSpace + n.c1 + cSpaceIsColonSpace; // returnData after Level 1 is:

exports.creturnDataAfterLevel1Is = creturnDataAfterLevel1Is;
var carrayToBeExpandedDotLengthIs = w.carray + b.cTo + b.cBe + w.cExpanded + b.cDot + w.clength + cSpaceIsColonSpace; // arrayToBeExpanded.length is:

exports.carrayToBeExpandedDotLengthIs = carrayToBeExpandedDotLengthIs;
var creturnDataDotLengthIs = creturnData + b.cDot + w.cLength + cSpaceIsColonSpace; // returnData.length is:

exports.creturnDataDotLengthIs = creturnDataDotLengthIs;
var creturnDataBeforePopIs = creturnData + b.cSpace + w.cBEFORE + b.cSpace + w.cPOP + cSpaceIsColonSpace; // returnData BEFORE POP is:

exports.creturnDataBeforePopIs = creturnDataBeforePopIs;
var creturnDataAfterPopIs = creturnData + b.cSpace + w.cAFTER + b.cSpace + w.cPOP + cSpaceIsColonSpace; // returnData AFTER POP is:

exports.creturnDataAfterPopIs = creturnDataAfterPopIs;
var cmasterTempReturnDataBeforeRecursiveCallIs = w.cmaster + w.cTemp + w.cReturn + w.cData + b.cSpace + w.cBEFORE + b.cSpace + w.crecursive + b.cSpace + w.ccall + cSpaceIsColonSpace; // masterTempReturnData BEFORE recursive call is:

exports.cmasterTempReturnDataBeforeRecursiveCallIs = cmasterTempReturnDataBeforeRecursiveCallIs;
var ctempReturnData1Is = w.ctemp + w.cReturn + w.cData + n.c1 + cSpaceIsColonSpace; // tempReturnData1 is:

exports.ctempReturnData1Is = ctempReturnData1Is;
var ctempReturnData1DotLengthIs = w.ctemp + w.cReturn + w.cData + n.c1 + w.clength + cSpaceIsColonSpace; // tempReturnData1.length is:

exports.ctempReturnData1DotLengthIs = ctempReturnData1DotLengthIs;
var cpushingTempReturnData1Kvalue = w.cpushing + b.cSpace + w.ctemp + w.cReturn + w.cData + n.c1 + b.cOpenBracket + b.ck + b.cCloseBracket + b.cSpace + w.cvalue + b.cColon + b.cSpace; // pushing tempReturnData1[k] value:

exports.cpushingTempReturnData1Kvalue = cpushingTempReturnData1Kvalue;
var cmasterTempReturnDataAfterRecursiveCallIs = w.cmaster + w.cTemp + w.cReturn + w.cData + b.cSpace + w.cAFTER + b.cSpace + w.crecursive + b.cSpace + w.ccall + cSpaceIsColonSpace; // masterTempReturnData AFTER recursive call is:

exports.cmasterTempReturnDataAfterRecursiveCallIs = cmasterTempReturnDataAfterRecursiveCallIs;
var clookupIndexIs = w.clookup + w.cIndex + cSpaceIsColonSpace; // lookupIndex is:

exports.clookupIndexIs = clookupIndexIs;
var clookupValueIs = w.clookup + w.cValue + cSpaceIsColonSpace; // lookupValue is:

exports.clookupValueIs = clookupValueIs;
var cDataCatagoryShouldBe = w.cData + b.cSpace + w.cCatagory + b.cSpace + w.cshould + b.cSpace + b.cbe + b.cColon + b.cSpace; // Data Catagory should be:

exports.cDataCatagoryShouldBe = cDataCatagoryShouldBe;
var cDataCatagoryDetailNameShouldBe = w.cData + b.cSpace + w.cCatagory + b.cSpace + w.cDetail + b.cSpace + w.cName + b.cSpace + w.cshould + b.cSpace + b.cbe + b.cColon + b.cSpace; // Data Catagory Detail Name should be:

exports.cDataCatagoryDetailNameShouldBe = cDataCatagoryDetailNameShouldBe;
var cKeywordNameShouldBe = w.cKeyword + b.cSpace + w.cName + b.cSpace + w.cshould + b.cSpace + b.cbe + b.cColon + b.cSpace; // Keyword Name should be:

exports.cKeywordNameShouldBe = cKeywordNameShouldBe;
var cpathElementIs = w.cpath + w.cElement + cSpaceIsColonSpace; // pathElement is:

exports.cpathElementIs = cpathElementIs;
var ccaseIEqual0 = w.ccase + b.cColon + b.cSpace + b.ci + b.cSpace + b.cEqual + b.cSpace + n.c0; // case: i = 0

exports.ccaseIEqual0 = ccaseIEqual0;
var ccasePathElementEqual = w.ccase + b.cColon + b.cSpace + w.cpath + w.cElement + b.cSpace + b.cEqual + b.cSpace; // case: pathElement =

exports.ccasePathElementEqual = ccasePathElementEqual;
var ccaseElse = w.ccase + b.cSpace + w.celse; // case else

exports.ccaseElse = ccaseElse;
var creturnDataSoFarIs = creturnData + b.cSpace + b.cso + b.cSpace + w.cfar + cSpaceIsColonSpace; // returnData so far is:

exports.creturnDataSoFarIs = creturnDataSoFarIs;
var cpathArrayIs = w.cpath + w.cArray + cSpaceIsColonSpace; // pathArray is:

exports.cpathArrayIs = cpathArrayIs;
var ccurrentPathElementIs = w.ccurrent + b.cSpace + w.cpath + b.cSpace + w.celement + cSpaceIsColonSpace; // current path element is:

exports.ccurrentPathElementIs = ccurrentPathElementIs;
var cAttemptingToLoadXmlData = w.cAttempting + b.cSpace + b.cto + b.cSpace + w.cload + b.cSpace + g.cXML + b.cSpace + w.cdata + b.cExclamation; // Attempting to load XML data!

exports.cAttemptingToLoadXmlData = cAttemptingToLoadXmlData;
var cAttemptingToLoadCsvData = w.cAttempting + b.cSpace + b.cto + b.cSpace + w.cload + b.cSpace + g.cCSV + b.cSpace + w.cdata + b.cExclamation; // Attempting to load CSV data!

exports.cAttemptingToLoadCsvData = cAttemptingToLoadCsvData;
var cAttemptingToLoadJsonData = w.cAttempting + b.cSpace + b.cto + b.cSpace + w.cload + b.cSpace + g.cJSON + b.cSpace + w.cdata + b.cExclamation; // Attempting to load JSON data!

exports.cAttemptingToLoadJsonData = cAttemptingToLoadJsonData;
var cLoadedDataIs = w.cLoaded + b.cSpace + w.cdata + cSpaceIsColonSpace; // Loaded data is:

exports.cLoadedDataIs = cLoadedDataIs;
var cattributeArrayIs = w.cattribute + w.cArray + cSpaceIsColonSpace; // attributeArray is:

exports.cattributeArrayIs = cattributeArrayIs;
var cattributeArray0Is = w.cattribute + w.cArray + b.cOpenBracket + n.c0 + b.cCloseBracket + cSpaceIsColonSpace; // attributeArray[0] is:

exports.cattributeArray0Is = cattributeArray0Is;
var carrayIs = w.carray + cSpaceIsColonSpace; // array is:

exports.carrayIs = carrayIs;
var cvalueIs = w.cvalue + cSpaceIsColonSpace; // value is:

exports.cvalueIs = cvalueIs;
var cmyFunctionIs = b.cmy + w.cFunction + cSpaceIsColonSpace; // myFunction is:

exports.cmyFunctionIs = cmyFunctionIs;
var carrayInputObjectIsNotAnArray = w.carray + b.cSpace + w.cinput + b.cSpace + w.cobject + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + b.can + b.cSpace + w.carray + b.cDot; // array input object is not an array.

exports.carrayInputObjectIsNotAnArray = carrayInputObjectIsNotAnArray;
var cTheValueWasFoundInTheArray = w.cThe + b.cSpace + w.cvalue + b.cSpace + w.cwas + b.cSpace + w.cfound + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.carray + b.cDot; // The value was found in the array.

exports.cTheValueWasFoundInTheArray = cTheValueWasFoundInTheArray;
var cTheValueWasNotFoundInTheArray = w.cThe + b.cSpace + w.cvalue + b.cSpace + w.cwas + b.cSpace + g.cNOT + b.cSpace + w.cfound + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.carray + b.cDot; // The value was NOT found in the array.

exports.cTheValueWasNotFoundInTheArray = cTheValueWasNotFoundInTheArray;
var coriginalStringIs = w.coriginal + w.cString + cSpaceIsColonSpace; // originalString is:

exports.coriginalStringIs = coriginalStringIs;
var cindexIs = w.cindex + b.cSpace + cSpaceIsColonSpace; // index is:

exports.cindexIs = cindexIs;
var creplacementIs = w.creplacement + cSpaceIsColonSpace; // replacement is:

exports.creplacementIs = creplacementIs;
var cDEPLOY_APPLICATION = w.cDEPLOY + b.cUnderscore + w.cAPPLICATION; // DEPLOY APPLICATION

exports.cDEPLOY_APPLICATION = cDEPLOY_APPLICATION;
var cRELEASE_APPLICATION = w.cRELEASE + b.cUnderscore + w.cAPPLICATION; // RELEASE APPLICATION

exports.cRELEASE_APPLICATION = cRELEASE_APPLICATION;
var cDeploymentWasCompleted = w.cDeployment + b.cSpace + w.cwas + b.cSpace + w.ccompleted + b.cColon + b.cSpace; // Deployment was completed:

exports.cDeploymentWasCompleted = cDeploymentWasCompleted;
var cinputDataIis = cinputData + b.cOpenBracket + b.ci + b.cCloseBracket + cSpaceIsColonSpace; // inputData[i] is:

exports.cinputDataIis = cinputDataIis;
var caggregateCommandStringIs = w.caggregate + w.cCommand + w.cString + cSpaceIsColonSpace; // aggregateCommandString is:

exports.caggregateCommandStringIs = caggregateCommandStringIs;
var cmetaDataParametersIs = w.cmetaData + w.cParameters + cSpaceIsColonSpace; // metaDataParameters is:

exports.cmetaDataParametersIs = cmetaDataParametersIs;
var cmetaDataParametersLengthIs = w.cmetaData + w.cParameters + b.cSpace + w.cLength + cSpaceIsColonSpace; // metaDataParameters length is:

exports.cmetaDataParametersLengthIs = cmetaDataParametersLengthIs;
var cmetaDataPathAndFilenameIs = w.cmetaData + w.cPath + w.cAnd + w.cFilename + cSpaceIsColonSpace; // metaDataPathAndFilename is:

exports.cmetaDataPathAndFilenameIs = cmetaDataPathAndFilenameIs;
var cpathAndFilenameIs = w.cpath + w.cAnd + w.cFilename + cSpaceIsColonSpace; // pathAndFilename is:

exports.cpathAndFilenameIs = cpathAndFilenameIs;
var ccontentsAre = w.ccontents + b.cSpace + w.care + b.cColon + b.cSpace; // contents are:

exports.ccontentsAre = ccontentsAre;
var ccontentsOfDare = w.ccontents + b.cSpace + b.cof + b.cSpace + b.cD + b.cSpace + w.care + b.cColon + b.cSpace; // contents of D are:

exports.ccontentsOfDare = ccontentsOfDare;
var cBEGIN_ithIterationOfInputDataArray = cBEGIN_ithIteration + b.cof + b.cSpace + w.cthe + b.cSpace + cinputData + b.cSpace + w.carray + b.cDot + b.cSpace + b.ci + cSpaceIsColonSpace; // Begin the i-th iteration of the inputData array. i is:

exports.cBEGIN_ithIterationOfInputDataArray = cBEGIN_ithIterationOfInputDataArray;
var ccurrentRuleIs = w.ccurrent + w.cRule + cSpaceIsColonSpace; // currentRule is:

exports.ccurrentRuleIs = ccurrentRuleIs;
var crulesIs = w.crules + cSpaceIsColonSpace; // rules is:

exports.crulesIs = crulesIs;
var cruleInputDataIs = w.crule + cInputData + cSpaceIsColonSpace; // ruleInputData is:

exports.cruleInputDataIs = cruleInputDataIs;
var cruleInputMetaData = w.crule + w.cInput + w.cMetaData + cSpaceIsColonSpace; // ruleInputMetaData is:

exports.cruleInputMetaData = cruleInputMetaData;
var cBusinessRuleStartTimeIs = w.cBusiness + b.cSpace + w.cRule + b.cSpace + w.cStart + b.cSpace + w.ctime + cSpaceIsColonSpace; // Business Rule Start time is:

exports.cBusinessRuleStartTimeIs = cBusinessRuleStartTimeIs;
var cBusinessRuleEndTimeIs = w.cBusiness + b.cSpace + w.cRule + b.cSpace + w.cEnd + b.cSpace + w.ctime + cSpaceIsColonSpace; // Business Rule End time is:

exports.cBusinessRuleEndTimeIs = cBusinessRuleEndTimeIs;
var cBusinessRuleRunTimeIs = w.cBusiness + w.cRule + b.cSpace + w.crun + b.cDash + w.ctime + cSpaceIsColonSpace; // BusinessRule run-time is:

exports.cBusinessRuleRunTimeIs = cBusinessRuleRunTimeIs;
var ccommandStringBeforeAttemptedDelimiterSwapIs = w.ccommand + w.cString + b.cSpace + w.cbefore + b.cSpace + w.cattempted + b.cSpace + w.cswap + cSpaceIsColonSpace; // commandString before attempted delimiter swap is:

exports.ccommandStringBeforeAttemptedDelimiterSwapIs = ccommandStringBeforeAttemptedDelimiterSwapIs;
var creplaceCharacterWithCharacterRuleIs = w.creplace + w.cCharacter + w.cWith + w.cCharacter + w.cRule + cSpaceIsColonSpace; // replaceCharacterWithCharacterRule is:

exports.creplaceCharacterWithCharacterRuleIs = creplaceCharacterWithCharacterRuleIs;
var cRuleOutputIs = w.cRule + b.cSpace + w.coutput + cSpaceIsColonSpace; // Rule output is:

exports.cRuleOutputIs = cRuleOutputIs;
var ccamelCaseCommandNameArrayIs = w.ccamel + w.cCase + w.cCommand + w.cName + w.cArray + cSpaceIsColonSpace; // camelCaseCommandNameArray is:

exports.ccamelCaseCommandNameArrayIs = ccamelCaseCommandNameArrayIs;
var ccurrentCommandWordIs = w.ccurrent + w.cCommand + w.cWord + cSpaceIsColonSpace; // current commandWord is:

exports.ccurrentCommandWordIs = ccurrentCommandWordIs;
var cPARSER_ERROR = w.cPARSER + b.cUnderscore + w.cERROR + b.cColon + b.cSpace; // PARSER ERROR:

exports.cPARSER_ERROR = cPARSER_ERROR;
var ccommandAliasDataStructureIs = w.ccommand + w.cAlias + w.cData + w.cStructure + cSpaceIsColonSpace; // commandAliasDataStructure is:

exports.ccommandAliasDataStructureIs = ccommandAliasDataStructureIs;
var cuserDefinedConstantIs = w.cuser + w.cDefined + w.cConstant + cSpaceIsColonSpace; // userDefinedConstant is:

exports.cuserDefinedConstantIs = cuserDefinedConstantIs;
var cwordCountIs = w.cword + w.cCount + cSpaceIsColonSpace; // wordCount is:

exports.cwordCountIs = cwordCountIs;
var cwordsArrayIs = w.cwords + w.cArray + cSpaceIsColonSpace; // wordsArray is:

exports.cwordsArrayIs = cwordsArrayIs;
var cOptimizedConstantDefinitionForWord = w.cOptimized + b.cSpace + w.cconstant + b.cSpace + w.cdefinition + b.cSpace + w.cfor + b.cSpace + w.cword + b.cColon + b.cSpace; // Optimized constant definition for word:

exports.cOptimizedConstantDefinitionForWord = cOptimizedConstantDefinitionForWord;
var cuserDefinedConstantListIs = w.cuser + w.cDefined + w.cConstants + w.cList + cSpaceIsColonSpace; // userDefinedConstantList is:

exports.cuserDefinedConstantListIs = cuserDefinedConstantListIs;
var cuserDefinedConstantListContainsComas = w.cuser + w.cDefined + w.cConstants + w.cList + b.cSpace + w.ccontains + b.cSpace + w.ccomas; // userDefinedConstantList contains comas

exports.cuserDefinedConstantListContainsComas = cuserDefinedConstantListContainsComas;
var cuserDefinedConstantsListArrayIs = w.cuser + w.cDefined + w.cConstants + w.cList + w.cArray + cSpaceIsColonSpace; // userDefinedConstantsListArray is:

exports.cuserDefinedConstantsListArrayIs = cuserDefinedConstantsListArrayIs;
var cuserDefinedConstantsListDoesNotContainComas = w.cuser + w.cDefined + w.cConstant + w.cList + b.cSpace + w.cDOES + b.cSpace + g.cNOT + b.cSpace + w.ccontain + b.cSpace + w.ccomas; // userDefinedConstantList DOES NOT contain comas

exports.cuserDefinedConstantsListDoesNotContainComas = cuserDefinedConstantsListDoesNotContainComas;
var ccommonPatternsArrayIs = w.ccommon + w.cPatterns + w.cArray + cSpaceIsColonSpace; // commonPatternsArray is:

exports.ccommonPatternsArrayIs = ccommonPatternsArrayIs;
var cbusinessRuleCounterIs = w.cbusiness + w.cRule + w.cCounter + cSpaceIsColonSpace; // businessRuleCounter is:

exports.cbusinessRuleCounterIs = cbusinessRuleCounterIs;
var cbusinessRulePerformanceSumIs = w.cbusiness + w.cRule + w.cPerformance + w.cSum + cSpaceIsColonSpace; // businessRulePerformanceSum is:

exports.cbusinessRulePerformanceSumIs = cbusinessRulePerformanceSumIs;
var cDoneBusinessRulePerformanceSumIs = w.cDONE + b.cExclamation + b.cSpace + cbusinessRulePerformanceSumIs; // DONE! businessRulePerformanceSum is:

exports.cDoneBusinessRulePerformanceSumIs = cDoneBusinessRulePerformanceSumIs;
var caverageIs = w.caverage + cSpaceIsColonSpace; // average is:

exports.caverageIs = caverageIs;
var cbusinessRulePerformanceStdSumIs = w.cbusiness + w.cRule + w.cPerformance + p.cStd + w.cSum + cSpaceIsColonSpace; // businessRulePerformanceStdSum is:

exports.cbusinessRulePerformanceStdSumIs = cbusinessRulePerformanceStdSumIs;
var cDoneBusinessRulePerformanceStdSumIs = w.cDONE + b.cExclamation + b.cSpace + cbusinessRulePerformanceStdSumIs; // DONE! businessRulePerformanceStdSum is:

exports.cDoneBusinessRulePerformanceStdSumIs = cDoneBusinessRulePerformanceStdSumIs;
var cstandardDevIs = w.cstandard + p.cDev + cSpaceIsColonSpace; // standardDev is:

exports.cstandardDevIs = cstandardDevIs;
var ccommandCounterIs = w.ccommand + w.cCounter + cSpaceIsColonSpace; // commandCounter is:

exports.ccommandCounterIs = ccommandCounterIs;
var ccommandPerformanceSumIs = w.ccommand + w.cPerformance + w.cSum + cSpaceIsColonSpace; // commandPerformanceSum is:

exports.ccommandPerformanceSumIs = ccommandPerformanceSumIs;
var cDoneCommandPerformanceSumIs = w.cDONE + b.cExclamation + b.cSpace + ccommandPerformanceSumIs; // DONE! commandPerformanceSum is:

exports.cDoneCommandPerformanceSumIs = cDoneCommandPerformanceSumIs;
var ccommandPerformanceStdSumIs = w.ccommand + w.cPerformance + p.cStd + w.cSum + cSpaceIsColonSpace; // commandPerformanceStdSum is:

exports.ccommandPerformanceStdSumIs = ccommandPerformanceStdSumIs;
var cDoneCommandPerformanceStdSumIs = w.cDONE + b.cExclamation + b.cSpace + ccommandPerformanceStdSumIs; // DONE! commandPerformanceStdSum is:

exports.cDoneCommandPerformanceStdSumIs = cDoneCommandPerformanceStdSumIs;
var ccolorKeysIs = w.ccolor + w.cKeys + cSpaceIsColonSpace; // colorKeys is:

exports.ccolorKeysIs = ccolorKeysIs;
var ccurrentColorNameIs = w.ccurrent + w.cColor + w.cName + cSpaceIsColonSpace; // currentColorName is:

exports.ccurrentColorNameIs = ccurrentColorNameIs;
var ccurrentColorObjectIs = w.ccurrent + w.cColor + w.cObject + cSpaceIsColonSpace; // currentColorObject is:

exports.ccurrentColorObjectIs = ccurrentColorObjectIs;
var ccurrentColorHexValueIs = w.ccurrent + w.cColor + p.cHex + w.cValue + cSpaceIsColonSpace; // currentColorHexValue is:

exports.ccurrentColorHexValueIs = ccurrentColorHexValueIs;
var cruleOutputIs = w.crule + w.cOutput + cSpaceIsColonSpace; // ruleOutput is:

exports.cruleOutputIs = cruleOutputIs;
var cBeginPhase1ConstantsValidation = w.cBEGIN + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cConstants + b.cSpace + w.cValidation; // BEGIN Phase 1 Constants Validation

exports.cBeginPhase1ConstantsValidation = cBeginPhase1ConstantsValidation;
var cEndPhase1ConstantsValidation = w.cEND + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cConstants + b.cSpace + w.cValidation; // END Phase 1 Constants Validation

exports.cEndPhase1ConstantsValidation = cEndPhase1ConstantsValidation;
var cBeginPhase2ConstantsValidation = w.cBEGIN + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cConstants + b.cSpace + w.cValidation; // BEGIN Phase 2 Constants Validation

exports.cBeginPhase2ConstantsValidation = cBeginPhase2ConstantsValidation;
var cEndPhase2ConstantsValidation = w.cEND + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cConstants + b.cSpace + w.cValidation; // END Phase 2 Constants Validation

exports.cEndPhase2ConstantsValidation = cEndPhase2ConstantsValidation;
var cconstantsPathIs = w.cconstants + w.cPath + cSpaceIsColonSpace; // constantsPath is:

exports.cconstantsPathIs = cconstantsPathIs;
var cresolvedConstantsPath_BasicIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cBasic + cSpaceIsColonSpace; // resolvedConstantsPath_Basic is:

exports.cresolvedConstantsPath_BasicIs = cresolvedConstantsPath_BasicIs;
var cresolvedConstantsPath_ColorIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cColor + cSpaceIsColonSpace; // resolvedConstantsPath_Color is:

exports.cresolvedConstantsPath_ColorIs = cresolvedConstantsPath_ColorIs;
var cresolvedConstantsPath_ElementIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cElement + cSpaceIsColonSpace; // resolvedConstantsPath_Element is:

exports.cresolvedConstantsPath_ElementIs = cresolvedConstantsPath_ElementIs;
var cresolvedConstantsPath_GenericIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cGeneric + cSpaceIsColonSpace; // resolvedConstantsPath_Generic is:

exports.cresolvedConstantsPath_GenericIs = cresolvedConstantsPath_GenericIs;
var cresolvedConstantsPath_IsotopeIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cIsotope + cSpaceIsColonSpace; // resolvedConstantsPath_Isotope is:

exports.cresolvedConstantsPath_IsotopeIs = cresolvedConstantsPath_IsotopeIs;
var cresolvedConstantsPath_NumericIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cNumeric + cSpaceIsColonSpace; // resolvedConstantsPath_Numeric is:

exports.cresolvedConstantsPath_NumericIs = cresolvedConstantsPath_NumericIs;
var cresolvedConstantsPath_PhonicsIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cPhonics + cSpaceIsColonSpace; // resolvedConstantsPath_Phonics is:

exports.cresolvedConstantsPath_PhonicsIs = cresolvedConstantsPath_PhonicsIs;
var cresolvedConstantsPath_ShapeIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cShape + cSpaceIsColonSpace; // resolvedConstantsPath_Shape is:

exports.cresolvedConstantsPath_ShapeIs = cresolvedConstantsPath_ShapeIs;
var cresolvedConstantsPath_SystemIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cSystem + cSpaceIsColonSpace; // resolvedConstantsPath_System is:

exports.cresolvedConstantsPath_SystemIs = cresolvedConstantsPath_SystemIs;
var cresolvedConstantsPath_UnitsIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cUnits + cSpaceIsColonSpace; // resolvedConstantsPath_Units is:

exports.cresolvedConstantsPath_UnitsIs = cresolvedConstantsPath_UnitsIs;
var cresolvedConstantsPath_WordsIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cWords + cSpaceIsColonSpace; // resolvedConstantsPath_Words is:

exports.cresolvedConstantsPath_WordsIs = cresolvedConstantsPath_WordsIs;
var cBasicConstantsPhase1Validation = w.cBasic + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Basic Constants Phase 1 Validation

exports.cBasicConstantsPhase1Validation = cBasicConstantsPhase1Validation;
var cColorConstantsPhase1Validation = w.cColor + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Color Constants Phase 1 Validation

exports.cColorConstantsPhase1Validation = cColorConstantsPhase1Validation;
var cElementConstantsPhase1Validation = w.cElement + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Element Constants Phase 1 Validation

exports.cElementConstantsPhase1Validation = cElementConstantsPhase1Validation;
var cGenericConstantsPhase1Validation = w.cGeneric + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Generic Constants Phase 1 Validation

exports.cGenericConstantsPhase1Validation = cGenericConstantsPhase1Validation;
var cIsotopeConstantsPhase1Validation = w.cIsotope + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Isotope Constants Phase 1 Validation

exports.cIsotopeConstantsPhase1Validation = cIsotopeConstantsPhase1Validation;
var cNumericalConstantsPhase1Validation = w.cNumerical + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Numerical Constants Phase 1 Validation

exports.cNumericalConstantsPhase1Validation = cNumericalConstantsPhase1Validation;
var cPhonicsConstantsPhase1Validation = w.cPhonics + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Phonics Constants Phase 1 Validation

exports.cPhonicsConstantsPhase1Validation = cPhonicsConstantsPhase1Validation;
var cShapeConstantsPhase1Validation = w.cShape + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Shape Constants Phase 1 Validation

exports.cShapeConstantsPhase1Validation = cShapeConstantsPhase1Validation;
var cSystemConstantsPhase1Validation = w.cSystem + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // System Constants Phase 1 Validation

exports.cSystemConstantsPhase1Validation = cSystemConstantsPhase1Validation;
var cUnitsConstantsPhase1Validation = w.cUnits + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Units Constants Phase 1 Validation

exports.cUnitsConstantsPhase1Validation = cUnitsConstantsPhase1Validation;
var cWordConstantsPhase1Validation = w.cWord + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Word Constants Phase 1 Validation

exports.cWordConstantsPhase1Validation = cWordConstantsPhase1Validation;
var cBasicConstantsPhase2Validation = w.cBasic + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Basic Constants Phase 2 Validation

exports.cBasicConstantsPhase2Validation = cBasicConstantsPhase2Validation;
var cColorConstantsPhase2Validation = w.cColor + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Color Constants Phase 2 Validation

exports.cColorConstantsPhase2Validation = cColorConstantsPhase2Validation;
var cElementConstantsPhase2Validation = w.cElement + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Element Constants Phase 2 Validation

exports.cElementConstantsPhase2Validation = cElementConstantsPhase2Validation;
var cGenericConstantsPhase2Validation = w.cGeneric + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Generic Constants Phase 2 Validation

exports.cGenericConstantsPhase2Validation = cGenericConstantsPhase2Validation;
var cIsotopeConstantsPhase2Validation = w.cIsotope + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Isotope Constants Phase 2 Validation

exports.cIsotopeConstantsPhase2Validation = cIsotopeConstantsPhase2Validation;
var cNumericalConstantsPhase2Validation = w.cNumerical + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Numerical Constants Phase 2 Validation

exports.cNumericalConstantsPhase2Validation = cNumericalConstantsPhase2Validation;
var cPhonicsConstantsPhase2Validation = w.cPhonics + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Phonics Constants Phase 2 Validation

exports.cPhonicsConstantsPhase2Validation = cPhonicsConstantsPhase2Validation;
var cShapeConstantsPhase2Validation = w.cShape + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Shape Constants Phase 2 Validation

exports.cShapeConstantsPhase2Validation = cShapeConstantsPhase2Validation;
var cSystemConstantsPhase2Validation = w.cSystem + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // System Constants Phase 2 Validation

exports.cSystemConstantsPhase2Validation = cSystemConstantsPhase2Validation;
var cUnitsConstantsPhase2Validation = w.cUnits + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Units Constants Phase 2 Validation

exports.cUnitsConstantsPhase2Validation = cUnitsConstantsPhase2Validation;
var cWordConstantsPhase2Validation = w.cWord + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Word Constants Phase 2 Validation

exports.cWordConstantsPhase2Validation = cWordConstantsPhase2Validation;
var ccommandStringIs = w.ccommand + w.cString + cSpaceIsColonSpace; // commandString is:

exports.ccommandStringIs = ccommandStringIs;
var ccommandDelimiterIs = w.ccommand + w.cDelimiter + cSpaceIsColonSpace; // commandDelimiter is:

exports.ccommandDelimiterIs = ccommandDelimiterIs;
var ccommandToExecuteBeforeTheAliasIs = w.ccommand + b.cTo + w.cExecute + b.cSpace + w.cbefore + b.cSpace + w.cthe + b.cSpace + w.cAlias + cSpaceIsColonSpace; // commandToExecute before the Alias is:

exports.ccommandToExecuteBeforeTheAliasIs = ccommandToExecuteBeforeTheAliasIs;
var ccommandToExecuteAfterTheAliasIs = w.ccommand + b.cTo + w.cExecute + b.cSpace + w.cafter + b.cSpace + w.cthe + b.cSpace + w.cAlias + cSpaceIsColonSpace; // commandToExecute after the Alias is:

exports.ccommandToExecuteAfterTheAliasIs = ccommandToExecuteAfterTheAliasIs;
var cWarningTheSpecifiedCommand = w.cWARNING + b.cColon + b.cSpace + w.cThe + b.cSpace + w.cspecified + b.cSpace + w.ccommand + b.cColon + b.cSpace; // WARNING: The specified command:

exports.cWarningTheSpecifiedCommand = cWarningTheSpecifiedCommand;
var cdoesNotExistPleaseTryAgain = b.cSpace + w.cdoes + b.cSpace + g.cnot + b.cSpace + w.cexist + b.cComa + b.cSpace + w.cplease + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cExclamation; // does not exist, please try again!

exports.cdoesNotExistPleaseTryAgain = cdoesNotExistPleaseTryAgain;
var ccommandStringContainsEitherSingleQuoteOrBackTickQuote = w.ccommand + w.cString + b.cSpace + w.ccontains + b.cSpace + w.ceither + b.cSpace + b.ca + b.cSpace + w.csingle + w.cQuote + b.cSpace + b.cor + b.cSpace + b.ca + b.cSpace + w.cback + w.cTick + w.cQuote; // commandString contains either a singleQuote or a backTickQuote

exports.ccommandStringContainsEitherSingleQuoteOrBackTickQuote = ccommandStringContainsEitherSingleQuoteOrBackTickQuote;
var ccommandStringContainsSingleQuote = w.ccommand + w.cString + b.cSpace + w.ccontains + b.cSpace + b.ca + b.cSpace + w.csingle + w.cQuote + b.cExclamation; // commandString contains a singleQuote!

exports.ccommandStringContainsSingleQuote = ccommandStringContainsSingleQuote;
var cnumberOfSingleQuotesIsEven = w.cnumber + b.cOf + w.cSingle + w.cQuotes + b.cSpace + b.cis + b.cSpace + b.cGreaterThan + b.cEqual + b.cSpace + n.c2 + b.cSpace + b.cAndPersand + b.cSpace + w.cthe + b.cSpace + w.cnumber + b.cOf + w.cSingle + w.cQuotes + b.cSpace + b.cis + b.cSpace + w.cEVEN + b.cExclamation + b.cSpace + w.cYAY + b.cExclamation; // numberOfSingleQuotes is >= 2 & the numberOfSingleQuotes is EVEN! YAY!

exports.cnumberOfSingleQuotesIsEven = cnumberOfSingleQuotesIsEven;
var cFirstIndexIs = n.cFirst + b.cSpace + w.cindex + cSpaceIsColonSpace; // First index is:

exports.cFirstIndexIs = cFirstIndexIs;
var ccommandStringAfterTaggingTheFirstStringDelimiter = w.ccommand + w.cString + b.cSpace + w.cafter + b.cSpace + w.ctagging + b.cSpace + w.cthe + b.cSpace + n.cfirst + b.cSpace + w.cstring + b.cSpace + w.cdelimiter + b.cColon + b.cSpace; // commandString after tagging the first string delimiter:

exports.ccommandStringAfterTaggingTheFirstStringDelimiter = ccommandStringAfterTaggingTheFirstStringDelimiter;
var cAdditionalIndexIs = w.cAdditional + b.cSpace + w.cindex + cSpaceIsColonSpace; // Additional index is:

exports.cAdditionalIndexIs = cAdditionalIndexIs;
var coddIndex = w.codd + b.cSpace + w.cindex; // odd index

exports.coddIndex = coddIndex;
var cevenIndex = w.ceven + b.cSpace + w.cindex; // even index

exports.cevenIndex = cevenIndex;
var ccommandStringAfterTaggingAnOddStringDelimiter = w.ccommand + w.cString + b.cSpace + w.cafter + b.cSpace + w.ctagging + b.cSpace + b.can + b.cSpace + w.codd + b.cSpace + w.cstring + b.cSpace + w.cdelimiter + b.cColon + b.cSpace; // commandString after tagging an odd string delimiter:

exports.ccommandStringAfterTaggingAnOddStringDelimiter = ccommandStringAfterTaggingAnOddStringDelimiter;
var ccommandStringAfterTaggingAnEvenStringDelimiter = w.ccommand + w.cString + b.cSpace + w.cafter + b.cSpace + w.ctagging + b.cSpace + b.can + b.cSpace + w.ceven + b.cSpace + w.cstring + b.cSpace + w.cdelimiter + b.cColon + b.cSpace; // commandString after tagging an even string delimiter:

exports.ccommandStringAfterTaggingAnEvenStringDelimiter = ccommandStringAfterTaggingAnEvenStringDelimiter;
var cpreSplitCommandStringIs = p.cpre + w.cSplit + w.cCommand + w.cString + cSpaceIsColonSpace; // preSplitCommandString is:

exports.cpreSplitCommandStringIs = cpreSplitCommandStringIs;
var cpostSplitCommandStringIs = w.cpost + w.cSplit + w.cCommand + w.cString + b.cOpenBracket + b.ck + b.cCloseBracket + cSpaceIsColonSpace; // postSplitCommandString[k] is:

exports.cpostSplitCommandStringIs = cpostSplitCommandStringIs;
var cpreSplitCommandStringElementIs = p.cpre + w.cSplit + w.cCommand + w.cString + w.cElement + cSpaceIsColonSpace; // preSplitCommandStringElement is:

exports.cpreSplitCommandStringElementIs = cpreSplitCommandStringElementIs;
var cDoingStraightSplitCommandString = w.cDoing + b.cSpace + b.ca + b.cSpace + w.cstraight + b.cSpace + w.csplit + b.cSpace + b.cof + b.cSpace + w.cthe + b.cSpace + w.ccommand + w.cString + b.cColon + b.cSpace; // Doing a straight split of the commandString:

exports.cDoingStraightSplitCommandString = cDoingStraightSplitCommandString;
var cCommandStartTimeIs = w.cCommand + b.cSpace + w.cStart + b.cSpace + w.ctime + cSpaceIsColonSpace; // Command Start time is:

exports.cCommandStartTimeIs = cCommandStartTimeIs;
var cCommandEndTimeIs = w.cCommand + b.cSpace + w.cEnd + b.cSpace + w.ctime + cSpaceIsColonSpace; // Command End time is:

exports.cCommandEndTimeIs = cCommandEndTimeIs;
var cCommandRunTimeIs = w.cCommand + b.cSpace + w.crun + b.cDash + w.ctime + cSpaceIsColonSpace; // Command run-time is:

exports.cCommandRunTimeIs = cCommandRunTimeIs;
var ccommandAliasesFilePathConfigurationNameIs = w.ccommand + w.cAliases + w.cFile + w.cPath + w.cConfiguration + w.cName + cSpaceIsColonSpace; // commandAliasesFilePathConfigurationName is:

exports.ccommandAliasesFilePathConfigurationNameIs = ccommandAliasesFilePathConfigurationNameIs;
var ccommandIs = w.ccommand + cSpaceIsColonSpace; // command is:

exports.ccommandIs = ccommandIs;
var ccommandToExecuteIs = w.ccommand + b.cTo + w.cExecute + cSpaceIsColonSpace; // commandToExecute is:

exports.ccommandToExecuteIs = ccommandToExecuteIs;
var ccontextNameIs = w.ccontext + w.cName + cSpaceIsColonSpace; // contextName is:

exports.ccontextNameIs = ccontextNameIs;
var callSystemConfigurationsIs = w.call + w.cSystem + w.cConfigurations + cSpaceIsColonSpace; // allSystemConfigurations is:

exports.callSystemConfigurationsIs = callSystemConfigurationsIs;
var cdataPathConfigurationNameIs = w.cdata + w.cPath + w.cConfiguration + w.cName + cSpaceIsColonSpace; // dataPathConfigurationName is:

exports.cdataPathConfigurationNameIs = cdataPathConfigurationNameIs;
var cdataPathIs = w.cdata + w.cPath + cSpaceIsColonSpace; // dataPath is:

exports.cdataPathIs = cdataPathIs;
var cfilesToLoadIs = w.cfiles + b.cTo + w.cLoad + cSpaceIsColonSpace; // filesToLoad is:

exports.cfilesToLoadIs = cfilesToLoadIs;
var cloadedAndMergedDataAllFilesIs = w.cloaded + w.cAnd + w.cMerged + w.cData + w.cAll + w.cFiles + cSpaceIsColonSpace; // loadedAndMergedDataAllFiles is:

exports.cloadedAndMergedDataAllFilesIs = cloadedAndMergedDataAllFilesIs;
var cloadedAndMergedDataAllFilesContentsAre = w.cloaded + w.cAnd + w.cMerged + w.cData + w.cAll + w.cFiles + b.cSpace + w.ccontents + b.cSpace + w.care + b.cColon + b.cSpace; // loadedAndMergedDataAllFiles contents are:

exports.cloadedAndMergedDataAllFilesContentsAre = cloadedAndMergedDataAllFilesContentsAre;
var ccommandWorkflowFilePathConfigurationNameIs = w.ccommand + w.cWorkflow + w.cFile + w.cPath + w.cConfiguration + w.cName + cSpaceIsColonSpace; // commandWorkflowFilePathConfigurationName is:

exports.ccommandWorkflowFilePathConfigurationNameIs = ccommandWorkflowFilePathConfigurationNameIs;
var ccontentsOfDataStructreIs = w.ccontents + b.cSpace + b.cof + b.cSpace + b.cD + b.cDash + w.cdata + b.cSpace + w.cstructure + cSpaceIsColonSpace; // contents of D-data structure is:

exports.ccontentsOfDataStructreIs = ccontentsOfDataStructreIs;
var crootPathIs = w.croot + w.cPath + cSpaceIsColonSpace; // rootPath is:

exports.crootPathIs = crootPathIs;
var cclientBusinessRulesAre = w.cclient + w.cBusiness + w.cRules + b.cSpace + w.care + b.cColon + b.cSpace; // clientBusinessRules are:

exports.cclientBusinessRulesAre = cclientBusinessRulesAre;
var cclientCommandsAre = w.cclient + w.cCommands + b.cSpace + w.care + b.cColon + b.cSpace; // clientCommands are:

exports.cclientCommandsAre = cclientCommandsAre;
var csystemCommandsAliasesPathIs = w.csystem + w.cCommands + w.cAliases + w.cPath + cSpaceIsColonSpace; // systemCommandsAliasesPath is:

exports.csystemCommandsAliasesPathIs = csystemCommandsAliasesPathIs;
var cclientCommandsAliasesPathIs = w.cclient + w.cCommands + w.cAliases + w.cPath + cSpaceIsColonSpace; // clientCommandsAliasesPath is:

exports.cclientCommandsAliasesPathIs = cclientCommandsAliasesPathIs;
var cresolvedSystemCommandsAliasesPathIs = w.cresolved + w.cSystem + w.cCommands + w.cAliases + w.cPath + cSpaceIsColonSpace; // resolvedSystemCommandsAliasesPath is:

exports.cresolvedSystemCommandsAliasesPathIs = cresolvedSystemCommandsAliasesPathIs;
var cresolvedClientCommandsAliasesPathIs = w.cresolved + w.cClient + w.cCommands + w.cAliases + w.cPath + cSpaceIsColonSpace; // resolvedClientCommandsAliasesPath is:

exports.cresolvedClientCommandsAliasesPathIs = cresolvedClientCommandsAliasesPathIs;
var csystemWorkflowPathIs = w.csystem + w.cWorkflow + w.cPath + cSpaceIsColonSpace; // systemWorkflowPath is:

exports.csystemWorkflowPathIs = csystemWorkflowPathIs;
var cclientWorkflowPathIs = w.cclient + w.cWorkflow + w.cPath + cSpaceIsColonSpace; // clientWorkflowPath is:

exports.cclientWorkflowPathIs = cclientWorkflowPathIs;
var cresolvedSystemWorkflowsPathIs = w.cresolved + w.cSystem + w.cWorkflows + w.cPath + cSpaceIsColonSpace; // resolvedSystemWorkflowsPath is:

exports.cresolvedSystemWorkflowsPathIs = cresolvedSystemWorkflowsPathIs;
var cresolvedClientWorkflowsPathIs = w.cresolved + w.cClient + w.cWorkflows + w.cPath + cSpaceIsColonSpace; // resolvedClientWorkflowsPath is:

exports.cresolvedClientWorkflowsPathIs = cresolvedClientWorkflowsPathIs;
var cbusinessRuleIs = w.cbusiness + w.cRule + cSpaceIsColonSpace; // businessRule is:

exports.cbusinessRuleIs = cbusinessRuleIs;
var cruleInputIs = w.crule + w.cInput + cSpaceIsColonSpace; // ruleInput is:

exports.cruleInputIs = cruleInputIs;
var cruleMetaDataIs = w.crule + w.cMetaData + cSpaceIsColonSpace; // ruleMetaData is:

exports.cruleMetaDataIs = cruleMetaDataIs;
var cconfigurationNameIs = w.cconfiguration + w.cName + cSpaceIsColonSpace; // configurationName is:

exports.cconfigurationNameIs = cconfigurationNameIs;
var cconfigurationValueIs = w.cconfiguration + w.cValue + cSpaceIsColonSpace; // configurationValue is:

exports.cconfigurationValueIs = cconfigurationValueIs;
var creturnConfiguraitonValueIs = w.creturn + w.cConfiguration + w.cValue + cSpaceIsColonSpace; // returnConfigurationValue is:

exports.creturnConfiguraitonValueIs = creturnConfiguraitonValueIs;
var cattributeJsonStringIs = w.cattribute + g.cJson + w.cString + cSpaceIsColonSpace; // attributeJsonString is:

exports.cattributeJsonStringIs = cattributeJsonStringIs;
var cappAttributeNameIs = g.capp + w.cAttribute + w.cName + cSpaceIsColonSpace; // appAttributeName is:

exports.cappAttributeNameIs = cappAttributeNameIs;
var cappAttributeValueIs = g.capp + w.cAttribute + w.cValue + cSpaceIsColonSpace; // appAttributeValue is:

exports.cappAttributeValueIs = cappAttributeValueIs;
var cexecuteBusinessRulesColon = w.cexecute + b.cSpace + w.cbusiness + b.cSpace + w.crules + b.cColon + b.cSpace; // execute business rules:

exports.cexecuteBusinessRulesColon = cexecuteBusinessRulesColon;
var cdataPathAfterBusinessRulesProcessingIs = w.cdata + w.cPath + b.cSpace + w.cafter + b.cSpace + w.cbusiness + b.cSpace + w.crules + b.cSpace + w.cprocessing + cSpaceIsColonSpace; // dataPath after business rules processing is:

exports.cdataPathAfterBusinessRulesProcessingIs = cdataPathAfterBusinessRulesProcessingIs;
var cfilesFoundIs = w.cfiles + w.cFound + cSpaceIsColonSpace; // filesFound is:

exports.cfilesFoundIs = cfilesFoundIs;
var cFileToLoadIs = w.cFile + b.cSpace + b.cto + b.cSpace + w.cload + cSpaceIsColonSpace; // File to load is:

exports.cFileToLoadIs = cFileToLoadIs;
var cfileExtensionIs = w.cfile + w.cExtension + cSpaceIsColonSpace; // fileExtension is:

exports.cfileExtensionIs = cfileExtensionIs;
var cloadedFileDataIs = w.cloaded + b.cSpace + w.cfile + b.cSpace + w.cdata + cSpaceIsColonSpace; // loaded file data is:

exports.cloadedFileDataIs = cloadedFileDataIs;
var cparsedDataFileIs = w.cparsed + w.cData + w.cFile + cSpaceIsColonSpace; // parsedDataFile is:

exports.cparsedDataFileIs = cparsedDataFileIs;
var cBEGIN_PROCESSING_ADDITIONAL_DATA = w.cBEGIN + b.cSpace + w.cPROCESSING + b.cSpace + w.cADDITIONAL + b.cSpace + w.cDATA; // BEGIN PROCESSING ADDITIONAL DATA

exports.cBEGIN_PROCESSING_ADDITIONAL_DATA = cBEGIN_PROCESSING_ADDITIONAL_DATA;
var cDONE_PROCESSING_ADDITIONAL_DATA = w.cDONE + b.cSpace + w.cPROCESSING + b.cSpace + w.cADDITIONAL + b.cSpace + w.cDATA; // DONE PROCESSING ADDITIONAL DATA

exports.cDONE_PROCESSING_ADDITIONAL_DATA = cDONE_PROCESSING_ADDITIONAL_DATA;
var cMERGED_dataIs = w.cMERGED + b.cSpace + w.cdata + cSpaceIsColonSpace; // MERGED data is:

exports.cMERGED_dataIs = cMERGED_dataIs;
var cparsedDataFileContentsAre = w.cparsed + w.cData + w.cFile + b.cSpace + w.ccontents + b.cSpace + w.care + b.cColon + b.cSpace; // parsedDataFile contents are:

exports.cparsedDataFileContentsAre = cparsedDataFileContentsAre;
var cdataCatagoryIs = w.cdata + w.cCatagory + cSpaceIsColonSpace; // dataCatagory is:

exports.cdataCatagoryIs = cdataCatagoryIs;
var cfullyParsedDataIs = w.cfully + b.cSpace + w.cparsed + b.cSpace + w.cdata + cSpaceIsColonSpace; // fully parsed data is:

exports.cfullyParsedDataIs = cfullyParsedDataIs;
var cD_finalMergeIs = b.cD + b.cSpace + w.cfinal + b.cSpace + w.cmerge + cSpaceIsColonSpace; // D final merge is:

exports.cD_finalMergeIs = cD_finalMergeIs;
var cdataStorageContextNameIs = w.cdata + w.cStorage + w.cContext + w.cName + cSpaceIsColonSpace; // dataStorageContextName is:

exports.cdataStorageContextNameIs = cdataStorageContextNameIs;
var cdataToStoreIs = w.cdata + b.cTo + w.cStore + cSpaceIsColonSpace; // dataToStore is:

exports.cdataToStoreIs = cdataToStoreIs;
var cdataCatagoryDetailsNameIs = w.cdata + w.cCatagory + w.cDetails + w.cName + cSpaceIsColonSpace; // dataCatagoryDetailsName is:

exports.cdataCatagoryDetailsNameIs = cdataCatagoryDetailsNameIs;
var ctempDataIs = w.ctemp + w.cData + cSpaceIsColonSpace; // tempData is:

exports.ctempDataIs = ctempDataIs;
var ctargetDataIs = w.ctarget + w.cData + cSpaceIsColonSpace; // targetData is:

exports.ctargetDataIs = ctargetDataIs;
var cpageNameIs = w.cpage + w.cName + cSpaceIsColonSpace; // pageName is:

exports.cpageNameIs = cpageNameIs;
var cdataToMergeIs = w.cdata + b.cSpace + b.cto + b.cSpace + w.cMerge + cSpaceIsColonSpace; // data to Merge is:

exports.cdataToMergeIs = cdataToMergeIs;
var cdataToMergeElementCountIs = w.cdata + b.cTo + w.cMerge + w.cElement + w.cCount + cSpaceIsColonSpace; // dataToMergeElementCount is:

exports.cdataToMergeElementCountIs = cdataToMergeElementCountIs;
var cdataToMergeElementCountIs1 = w.cdata + b.cTo + w.cMerge + w.cElement + w.cCount + cSpaceIsColonSpace + n.c1; // dataToMergeElementCount is 1

exports.cdataToMergeElementCountIs1 = cdataToMergeElementCountIs1;
var ccheckIfThePageNameIsNotAnEmptyString = w.ccheck + b.cSpace + b.cif + b.cSpace + w.cthe + b.cSpace + w.cpage + w.cName + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring; // check if the pageName is not an empty string

exports.ccheckIfThePageNameIsNotAnEmptyString = ccheckIfThePageNameIsNotAnEmptyString;
var cpageNameIsNotAnEmptyString = w.cpage + w.cName + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring; // pageName is not an empty string

exports.cpageNameIsNotAnEmptyString = cpageNameIsNotAnEmptyString;
var cCheckIfTheDataCatagoryIsAnEmptyStringOrNot = w.cCheck + b.cSpace + b.cif + b.cSpace + w.cthe + b.cSpace + w.cdata + w.cCatagory + b.cSpace + b.cis + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring + b.cSpace + b.cor + b.cSpace + g.cnot; // Check if the dataCatagory is an empty string or not

exports.cCheckIfTheDataCatagoryIsAnEmptyStringOrNot = cCheckIfTheDataCatagoryIsAnEmptyStringOrNot;
var cdataCatagoryIsNotAnEmptyString = w.cdata + w.cCatagory + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring + b.cExclamation; // dataCatagory is not an empty string!

exports.cdataCatagoryIsNotAnEmptyString = cdataCatagoryIsNotAnEmptyString;
var cdataCatagoryIsAnEmptyString = w.cdata + w.cCatagory + b.cSpace + b.cIS + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring + b.cExclamation; // dataCatagory IS an empty string!

exports.cdataCatagoryIsAnEmptyString = cdataCatagoryIsAnEmptyString;
var ctargetDataContentIs = w.ctarget + w.cData + b.cSpace + w.ccontent + cSpaceIsColonSpace; // targetData content is:

exports.ctargetDataContentIs = ctargetDataContentIs;
var cafterAttemptToMergeResultsAre = w.cafter + b.cSpace + w.cattempt + b.cSpace + b.cto + b.cSpace + w.cmerge + b.cComa + b.cSpace + w.cresults + b.cSpace + w.care + b.cColon + b.cSpace; // after attempt to merge, results are:

exports.cafterAttemptToMergeResultsAre = cafterAttemptToMergeResultsAre;
var cMergedDataIs = w.cMerged + b.cSpace + w.cdata + cSpaceIsColonSpace; // Merged data is:

exports.cMergedDataIs = cMergedDataIs;
var cpageNameIsAnEmptyString = w.cpage + w.cName + b.cSpace + b.cis + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring; // pageName is an empty string

exports.cpageNameIsAnEmptyString = cpageNameIsAnEmptyString;
var cCaughtTheSpecialCaseThatWeAreMergingFlatList = w.cCaught + b.cSpace + w.cthe + b.cSpace + w.cspecial + b.cSpace + w.ccase + b.cSpace + w.cthat + b.cSpace + b.cwe + b.cSpace + w.care + b.cSpace + w.cmerging + b.cSpace + b.ca + b.cSpace + w.cflat + b.cSpace + w.clist + b.cDot; // Caught the special case that we are merging a flat list.

exports.cCaughtTheSpecialCaseThatWeAreMergingFlatList = cCaughtTheSpecialCaseThatWeAreMergingFlatList;
var cinsideTheForLoop = w.cinside + b.cSpace + w.cthe + b.cSpace + w.cfor + b.cDash + w.cloop; // inside the for-loop

exports.cinsideTheForLoop = cinsideTheForLoop;
var ckeyIs = w.ckey + cSpaceIsColonSpace; // key is:

exports.ckeyIs = ckeyIs;
var ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs = w.ctarget + w.cData + b.cSpace + b.cis + b.cSpace + w.cmodified + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.cinput + b.cSpace + w.cpass + b.cDash + b.cby + b.cDash + w.creference + b.cSpace + w.cvariable + b.cSpace + w.ccontent + cSpaceIsColonSpace; // targetData is modified in the input pass-by-reference variable content is:

exports.ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs = ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs;
var cdataObjectValueIs = w.cdata + w.cObject + b.cSpace + w.cvalue + cSpaceIsColonSpace; // dataObject value is:

exports.cdataObjectValueIs = cdataObjectValueIs;
var celementNameIs = w.celement + w.cName + cSpaceIsColonSpace; // elementName is:

exports.celementNameIs = celementNameIs;
var cdataObjectIs = w.cdata + w.cObject + cSpaceIsColonSpace; // dataObject is:

exports.cdataObjectIs = cdataObjectIs;
var celementNamePatternIs = w.celement + w.cName + w.cPattern + cSpaceIsColonSpace; // elementNamePattern is:

exports.celementNamePatternIs = celementNamePatternIs;
var celementCountIs = w.celement + w.cCount + cSpaceIsColonSpace; // elementCount is:

exports.celementCountIs = celementCountIs;
var cERROR_Colon = w.cERROR + b.cColon + b.cSpace; // ERROR:

exports.cERROR_Colon = cERROR_Colon;
var cfileAndPathToLoadFromIs = w.cfile + b.cSpace + w.cand + b.cSpace + w.cpath + b.cSpace + b.cto + b.cSpace + w.cload + b.cSpace + w.cfrom + cSpaceIsColonSpace; // file and path to load from is:

exports.cfileAndPathToLoadFromIs = cfileAndPathToLoadFromIs;
var cDoneLoadingDataFrom = w.cDONE + b.cSpace + w.cloading + b.cSpace + w.cdata + b.cSpace + w.cfrom + b.cColon + b.cSpace; // DONE loading data from:

exports.cDoneLoadingDataFrom = cDoneLoadingDataFrom;
var cfileAndPathToWriteDataToIs = w.cfile + b.cSpace + w.cand + b.cSpace + w.cpath + b.cSpace + b.cto + b.cSpace + w.cwrite + b.cSpace + w.cdata + b.cSpace + b.cto + b.cSpace + b.cis + b.cColon + b.cSpace; // file and path to write data to is:

exports.cfileAndPathToWriteDataToIs = cfileAndPathToWriteDataToIs;
var cdataToWriteIs = w.cdata + b.cSpace + b.cto + b.cSpace + w.cwrite + cSpaceIsColonSpace; // data to write is:

exports.cdataToWriteIs = cdataToWriteIs;
var cDataWasWrittenToTheFile = w.cData + b.cSpace + w.cwas + b.cSpace + w.cwritten + b.cSpace + b.cto + b.cSpace + w.cthe + b.cSpace + w.cfile + b.cColon + b.cSpace; // Data was written to the file:

exports.cDataWasWrittenToTheFile = cDataWasWrittenToTheFile;
var cPathThatShouldBeScannedIs = w.cPath + b.cSpace + w.cthat + b.cSpace + w.cshould + b.cSpace + b.cbe + b.cSpace + w.cscanned + cSpaceIsColonSpace; // Path that should be scanned is:

exports.cPathThatShouldBeScannedIs = cPathThatShouldBeScannedIs;
var cfilesFoundAre = w.cfiles + b.cSpace + w.cfound + b.cSpace + w.care + b.cColon + b.cSpace; // files found are:

exports.cfilesFoundAre = cfilesFoundAre;
var cdirectorIs = w.cdirectory + cSpaceIsColonSpace; // directory is:

exports.cdirectorIs = cdirectorIs;
var cdirectoryPathIs = w.cdirectory + w.cPath + cSpaceIsColonSpace; // directoryPath is:

exports.cdirectoryPathIs = cdirectoryPathIs;
var csourceFolderIs = w.csource + w.cFolder + cSpaceIsColonSpace; // sourceFolder is:

exports.csourceFolderIs = csourceFolderIs;
var cdestinationFolderIs = w.cdestination + w.cFolder + cSpaceIsColonSpace; // destinationFolder is:

exports.cdestinationFolderIs = cdestinationFolderIs;
var ccopySuccessIs = w.ccopy + w.cSuccess + cSpaceIsColonSpace; // copySuccess is:

exports.ccopySuccessIs = ccopySuccessIs;
var ccurrentVersionIs = w.ccurrent + b.cSpace + w.cversion + cSpaceIsColonSpace; // current version is:

exports.ccurrentVersionIs = ccurrentVersionIs;
var creleasedArchiveFilesListIs = w.creleased + b.cSpace + w.carchive + b.cSpace + w.cfiles + b.cSpace + w.clist + cSpaceIsColonSpace; // released archive files list is:

exports.creleasedArchiveFilesListIs = creleasedArchiveFilesListIs;
var cfileIs = w.cfile + cSpaceIsColonSpace; // file is:

exports.cfileIs = cfileIs;
var cfileNameIs = w.cfile + w.cName + cSpaceIsColonSpace; // fileName is:

exports.cfileNameIs = cfileNameIs;
var creleaseFilesListIs = w.crelease + b.cSpace + w.cfiles + b.cSpace + w.clist + cSpaceIsColonSpace; // release files list is:

exports.creleaseFilesListIs = creleaseFilesListIs;
var creleaseDateTimeStampIs = w.crelease + b.cSpace + w.cdate + b.cDash + w.ctime + b.cSpace + w.cstamp + cSpaceIsColonSpace; // release date-time stamp is:

exports.creleaseDateTimeStampIs = creleaseDateTimeStampIs;
var creleaseFileNameIs = w.crelease + b.cSpace + w.cfile + w.cName + cSpaceIsColonSpace; // release fileName is:

exports.creleaseFileNameIs = creleaseFileNameIs;
var cDoneWritingTheZipFile = w.cDone + b.cSpace + w.cwriting + b.cSpace + w.cthe + b.cSpace + g.czip + b.cSpace + w.cfile + b.cColon + b.cSpace; // Done writing the zip file:

exports.cDoneWritingTheZipFile = cDoneWritingTheZipFile;
var cSetTheReturnPackageSuccessFlagToTrue = w.cSet + b.cSpace + w.cthe + b.cSpace + w.creturn + b.cSpace + w.cpackage + w.cSuccess + b.cSpace + w.cflag + b.cSpace + b.cto + b.cSpace + g.cTRUE; // Set the return packageSuccess flag to TRUE

exports.cSetTheReturnPackageSuccessFlagToTrue = cSetTheReturnPackageSuccessFlagToTrue;
var ccurrentVersionAlreadyReleased = w.ccurrent + b.cSpace + w.cversion + b.cSpace + w.calready + b.cSpace + w.creleased; // current version already released

exports.ccurrentVersionAlreadyReleased = ccurrentVersionAlreadyReleased;
var cpackageSuccessIs = w.cpackage + w.cSuccess + cSpaceIsColonSpace; // packageSuccess is:

exports.cpackageSuccessIs = cpackageSuccessIs;
var cRootPathBeforeProcessingIs = w.cRoot + w.cPath + b.cSpace + w.cbefore + b.cSpace + w.cprocessing + cSpaceIsColonSpace; // RootPath before processing is:

exports.cRootPathBeforeProcessingIs = cRootPathBeforeProcessingIs;
var cRootPathAfterProcessingIs = w.cRoot + w.cPath + b.cSpace + w.cafter + b.cSpace + w.cprocessing + cSpaceIsColonSpace; // RootPath after processing is:

exports.cRootPathAfterProcessingIs = cRootPathAfterProcessingIs;
var cSourceIs = w.csource + cSpaceIsColonSpace; // source is:

exports.cSourceIs = cSourceIs;
var ctargetIs = w.ctarget + cSpaceIsColonSpace; // target is:

exports.ctargetIs = ctargetIs;
var cErrorCouldNotCopyFile = w.cERROR + b.cColon + b.cSpace + w.cCould + b.cSpace + g.cnot + b.cSpace + w.ccopy + b.cSpace + w.cfile + b.cColon + b.cSpace; // ERROR: Could not copy file:

exports.cErrorCouldNotCopyFile = cErrorCouldNotCopyFile;
var cErrorCouldNotCreateFolder = w.cERROR + b.cColon + b.cSpace + w.cCould + b.cSpace + g.cnot + b.cSpace + w.ccreate + b.cSpace + w.cfolder + b.cColon + b.cSpace; // ERROR: Could not create folder:

exports.cErrorCouldNotCreateFolder = cErrorCouldNotCreateFolder;
var csuccessfullCopyIs = w.csuccessful + w.cCopy + cSpaceIsColonSpace; // successfullCopy is:

exports.csuccessfullCopyIs = csuccessfullCopyIs;
var cErrorCouldNotCopyFolderContents = w.cERROR + b.cColon + b.cSpace + w.cCould + b.cSpace + g.cnot + b.cSpace + w.ccopy + b.cSpace + w.cfolder + b.cSpace + w.ccontents + b.cColon + b.cSpace; // ERROR: Could not copy folder contents:

exports.cErrorCouldNotCopyFolderContents = cErrorCouldNotCopyFolderContents;
var cargumentValueIs = w.cargument + w.cValue + cSpaceIsColonSpace; // argumentValue is:

exports.cargumentValueIs = cargumentValueIs;
var cconsolidatedArgumentModeIs = w.cconsolidated + w.cArgument + w.cMode + cSpaceIsColonSpace; // consolidatedArgumentMode is:

exports.cconsolidatedArgumentModeIs = cconsolidatedArgumentModeIs;
var cPushingArgumentValueToReturnDataAsArrayElement = w.cPushing + b.cSpace + w.cthe + b.cSpace + w.cargument + w.cValue + b.cSpace + b.cto + b.cSpace + w.cthe + b.cSpace + w.creturn + w.cData + b.cSpace + b.cas + b.cSpace + b.can + b.cSpace + w.carray + b.cSpace + w.celement; // Pushing the argumentValue to the returnData as an array element

exports.cPushingArgumentValueToReturnDataAsArrayElement = cPushingArgumentValueToReturnDataAsArrayElement;
var cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse = w.cCalling + b.cSpace + w.canalyze + w.cArgument + b.cSpace + w.cfor + b.cSpace + w.cindex + b.cSpace + w.cEqual + b.cSpace + n.c2 + b.cComa + b.cSpace + w.cconsolidated + w.cArgument + w.cMode + b.cSpace + b.cEqual + b.cSpace + g.cfalse; // Calling analyzeArgument for index = 2, consolidatedArgumentMode = false

exports.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse = cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse;
var cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue = w.cCalling + b.cSpace + w.canalyze + w.cArgument + b.cSpace + w.cfor + b.cSpace + w.cindex + b.cSpace + b.cEqual + b.cSpace + n.c2 + b.cComa + b.cSpace + w.cconsolidated + w.cArgument + w.cMode + b.cSpace + b.cEqual + b.cSpace + g.ctrue; // Calling analyzeArgument for index = 2, consolidatedArgumentMode = true

exports.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue = cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue;
var cargumentValueLengthGreaterThanZero = w.cargument + w.cValue + b.cDot + w.cLength + b.cSpace + b.cGreaterThan + b.cSpace + n.c0; // argumentValue.length > 0

exports.cargumentValueLengthGreaterThanZero = cargumentValueLengthGreaterThanZero;
var cReturnArgumentValueSameAsItWasPassedIn = w.cReturn + b.cSpace + w.cthe + b.cSpace + w.cargument + w.cValue + b.cSpace + w.cthe + b.cSpace + w.csame + b.cSpace + b.cas + b.cSpace + b.cit + b.cSpace + w.cwas + b.cSpace + w.cpassed + b.cSpace + b.cin + b.cDot; // Return the argumentValue the same as it was passed in.

exports.cReturnArgumentValueSameAsItWasPassedIn = cReturnArgumentValueSameAsItWasPassedIn;
var cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse = w.cCalling + b.cSpace + w.canalyze + w.cArgument + b.cSpace + w.cfor + b.cSpace + w.cindex + b.cSpace + b.cEqual + b.cSpace + n.c3 + b.cComa + b.cSpace + w.cconsolidated + w.cArgument + w.cMode + b.cSpace + b.cEqual + b.cSpace + g.cfalse; // Calling analyzeArgument for index = 3, consolidatedArgumentMode = false

exports.cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse = cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse;
var cCheckIfThereAreBracketsOrNoBrackets = w.cCheck + b.cSpace + b.cif + b.cSpace + w.cthere + b.cSpace + w.care + b.cSpace + w.cbrackets + b.cSpace + b.cor + b.cSpace + b.cno + b.cSpace + w.cbrackets + b.cDot; // Check if there are brackets or no brackets.

exports.cCheckIfThereAreBracketsOrNoBrackets = cCheckIfThereAreBracketsOrNoBrackets;
var cBracketsWereFound = w.cBrackets + b.cSpace + w.cwere + b.cSpace + w.cfound; // Brackets were found

exports.cBracketsWereFound = cBracketsWereFound;
var cCheckIfThereIsRegularExpressionOrNot = w.cCheck + b.cSpace + b.cif + b.cSpace + w.cthere + b.cSpace + b.cis + b.cSpace + b.ca + b.cSpace + w.cRegular + b.cSpace + w.cExpression + b.cSpace + b.cor + b.cSpace + g.cnot + b.cDot; // Check if there is a Regular Expression or not.

exports.cCheckIfThereIsRegularExpressionOrNot = cCheckIfThereIsRegularExpressionOrNot;
var cRegularExpressionWasFound = b.cA + b.cSpace + w.cregular + b.cSpace + w.cexpression + b.cSpace + w.cwas + b.cSpace + w.cfound + b.cExclamation; // A regular expression was found!

exports.cRegularExpressionWasFound = cRegularExpressionWasFound;
var cNoRegExpFound = b.cNO + b.cSpace + g.cRegExp + b.cSpace + w.cfound + b.cExclamation; // NO RegExp found!

exports.cNoRegExpFound = cNoRegExpFound;
var cBracketsAreFound = w.cBrackets + b.cSpace + w.cARE + b.cSpace + w.cfound + b.cExclamation; // Brackets ARE found!

exports.cBracketsAreFound = cBracketsAreFound;
var cNoSecondaryCommandArgumentDelimiters = b.cNO + b.cSpace + w.csecondary + b.cSpace + w.ccommand + b.cSpace + w.cargument + b.cSpace + w.cdelimiters + b.cDot; // NO secondary command argument delimiters.

exports.cNoSecondaryCommandArgumentDelimiters = cNoSecondaryCommandArgumentDelimiters;
var cregularExpressionIs = w.cregular + b.cSpace + w.cexpression + cSpaceIsColonSpace; // regular expression is:

exports.cregularExpressionIs = cregularExpressionIs;
var cregExValueIs = g.cregEx + w.cValue + cSpaceIsColonSpace; // regExValue is:

exports.cregExValueIs = cregExValueIs;
var cregularExpressionFlagsAre = w.cregular + b.cSpace + w.cexpression + b.cSpace + w.cflags + b.cSpace + w.care + b.cColon + b.cSpace; // regular expression flags are:

exports.cregularExpressionFlagsAre = cregularExpressionFlagsAre;
var cregExFlagsIs = g.cregEx + w.cFlags + cSpaceIsColonSpace; // regExFlags is:

exports.cregExFlagsIs = cregExFlagsIs;
var cargumentValueContainsTheDelimiterLetsSplitIt = w.cargument + w.cValue + b.cSpace + w.ccontains + b.cSpace + w.cthe + b.cSpace + w.cdelimiter + b.cColon + b.cSpace + w.cLets + b.cSpace + w.csplit + b.cSpace + b.cit + b.cExclamation; // argumentValue contains the delimiter, lets split it!

exports.cargumentValueContainsTheDelimiterLetsSplitIt = cargumentValueContainsTheDelimiterLetsSplitIt;
var cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs = w.cargument + w.cValue + b.cSpace + w.cafter + b.cSpace + w.cattempting + b.cSpace + b.cto + b.cSpace + w.cremove + b.cSpace + b.ca + b.cSpace + w.copen + b.cSpace + w.cbracket + b.cSpace + w.cfrom + b.cSpace + w.call + b.cSpace + w.carray + b.cSpace + w.celements + cSpaceIsColonSpace; // argumentValue after attempting to remove a open bracket from all array elements is:

exports.cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs = cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs;
var cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs = w.cargument + w.cValue + b.cSpace + w.cafter + b.cSpace + w.cattempting + b.cSpace + b.cto + b.cSpace + w.cremove + b.cSpace + b.ca + b.cSpace + w.cclose + b.cSpace + w.cbracket + b.cSpace + w.cfrom + b.cSpace + w.call + b.cSpace + w.carray + b.cSpace + w.celements + cSpaceIsColonSpace; // argumentValue after attempting to remove a close bracket from all array elements is:

exports.cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs = cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs;
var csecondaryCommandArgsDelimiterIs = w.csecondary + w.cCommand + g.cArgs + w.cDelimiter + cSpaceIsColonSpace; // secondaryCommandArgsDelimiter is:

exports.csecondaryCommandArgsDelimiterIs = csecondaryCommandArgsDelimiterIs;
var cargumentArrayIs = w.cargument + w.cArray + cSpaceIsColonSpace; // argumentArray is:

exports.cargumentArrayIs = cargumentArrayIs;
var cformattingIs = w.cformatting + cSpaceIsColonSpace; // formatting is:

exports.cformattingIs = cformattingIs;
var cstartTimeIs = w.cstart + w.cTime + cSpaceIsColonSpace; // startTime is:

exports.cstartTimeIs = cstartTimeIs;
var cendTimeIs = w.cend + w.cTime + cSpaceIsColonSpace; // endTime is:

exports.cendTimeIs = cendTimeIs;
var cdeltaTimeResultIs = w.cdelta + w.cTime + w.cResult + cSpaceIsColonSpace; // deltaTimeResult is:

exports.cdeltaTimeResultIs = cdeltaTimeResultIs;
var cdeltaTimeIs = w.cdelta + w.cTime + cSpaceIsColonSpace; // deltaTime is:

exports.cdeltaTimeIs = cdeltaTimeIs;
var cformatIs = w.cformat + cSpaceIsColonSpace; // format is:

exports.cformatIs = cformatIs;
var creturnDeltaTimeIs = w.creturn + w.cDelta + w.cTime + cSpaceIsColonSpace; // returnDeltaTime is:

exports.creturnDeltaTimeIs = creturnDeltaTimeIs;
var csleepTimeIs = w.csleep + w.cTime + cSpaceIsColonSpace; // sleepTime is:

exports.csleepTimeIs = csleepTimeIs;
var cworkflowNameIs = w.cworkflow + w.cName + cSpaceIsColonSpace; // workflowName is:

exports.cworkflowNameIs = cworkflowNameIs;
var ccurrentWorkflowIs = w.ccurrent + w.cWorkflow + cSpaceIsColonSpace; // currentWorkflow is:

exports.ccurrentWorkflowIs = ccurrentWorkflowIs;
var cworkflowValueIs = w.cworkflow + w.cValue + cSpaceIsColonSpace; // workflowValue is:

exports.cworkflowValueIs = cworkflowValueIs;
var cdataHivePathArrayIs = w.cdata + w.cHive + w.cPath + w.cArray + cSpaceIsColonSpace; // dataHivePathArray is:

exports.cdataHivePathArrayIs = cdataHivePathArrayIs;
var ccontentsOfLeafDataHiveElementIs = w.ccontents + b.cSpace + b.cof + b.cSpace + w.cleaf + w.cData + w.cHive + w.cElement + cSpaceIsColonSpace; // contents of leafDataHiveElement is:

exports.ccontentsOfLeafDataHiveElementIs = ccontentsOfLeafDataHiveElementIs;
var centryIs = w.centry + cSpaceIsColonSpace; // entry is:

exports.centryIs = centryIs;
var cattributeValueIs = w.cattribute + w.cValue + cSpaceIsColonSpace; // attributeValue is:

exports.cattributeValueIs = cattributeValueIs;
var ckey2Is = w.ckey + n.c2 + cSpaceIsColonSpace; // key2 is:

exports.ckey2Is = ckey2Is;
var centityIs = w.centity + cSpaceIsColonSpace; // entity is:
// WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.

exports.centityIs = centityIs;
var cDetermineWordDelimiterMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cMixed + b.cSpace + w.cstring + b.cDot + b.cSpace; // WARNING: Mixed string.

exports.cDetermineWordDelimiterMessage1 = cDetermineWordDelimiterMessage1;
var cDetermineWordDelimiterMessage2 = w.cCannot + b.cSpace + w.cdetermine + b.cSpace + w.cwhat + b.cSpace + w.cdelimiter + b.cSpace + w.cshould + b.cSpace; // Cannot determine what delimiter should

exports.cDetermineWordDelimiterMessage2 = cDetermineWordDelimiterMessage2;
var cDetermineWordDelimiterMessage3 = b.cbe + b.cSpace + w.cused + b.cSpace + b.cto + b.cSpace + w.cbreak + b.cSpace + b.cup + b.cSpace + w.cthe + b.cSpace; // be used to break up the

exports.cDetermineWordDelimiterMessage3 = cDetermineWordDelimiterMessage3;
var cDetermineWordDelimiterMessage4 = w.cstring + b.cSpace + w.cinto + b.cSpace + w.cwords + b.cDot; // string into words.
// WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.

exports.cDetermineWordDelimiterMessage4 = cDetermineWordDelimiterMessage4;
var cGetWordCountInStringMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cMixed + b.cSpace + w.cstring + b.cDot + b.cSpace; // WARNING: Mixed string.

exports.cGetWordCountInStringMessage1 = cGetWordCountInStringMessage1;
var cGetWordCountInStringMessage2 = w.cCannot + b.cSpace + w.cdetermine + b.cSpace + w.chow + b.cSpace + w.cwords + b.cSpace + w.care + b.cSpace + w.cdelimited + b.cSpace; // Cannot determine how words are delimited

exports.cGetWordCountInStringMessage2 = cGetWordCountInStringMessage2;
var cGetWordCountInStringMessage3 = b.cin + b.cSpace + w.cthe + b.cSpace + w.cstring + b.cDot + b.cSpace + w.cUnable + b.cSpace + b.cto + b.cSpace + w.ccount + b.cSpace + w.cwords + b.cDot; // in the string. Unable to count words.
// WARNING: Mixed string. Cannot get words from the string. Unable to determine words.

exports.cGetWordCountInStringMessage3 = cGetWordCountInStringMessage3;
var cGetWordsArrayFromStringMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cMixed + b.cSpace + w.cString + b.cDot + b.cSpace; // WARNING: Mixed string.

exports.cGetWordsArrayFromStringMessage1 = cGetWordsArrayFromStringMessage1;
var cGetWordsArrayFromStringMessage2 = w.cCannot + b.cSpace + w.cget + b.cSpace + w.cwords + b.cSpace + w.cfrom + b.cSpace + w.cthe + b.cSpace + w.cstring + b.cDot + b.cSpace; // Cannot get words from the string.

exports.cGetWordsArrayFromStringMessage2 = cGetWordsArrayFromStringMessage2;
var cGetWordsArrayFromStringMessage3 = w.cUnable + b.cSpace + b.cto + b.cSpace + w.cdetermine + b.cSpace + w.cwords + b.cDot; // Unable to determine words.
// Please enter a named command where the first word starts with a lower case letter and all other words in the named command start with an upper case letter:

exports.cGetWordsArrayFromStringMessage3 = cGetWordsArrayFromStringMessage3;
var cCommandNamePrompt1 = w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cnamed + b.cSpace + w.ccommand + b.cSpace + w.cwhere + b.cSpace; // Please enter a named command where

exports.cCommandNamePrompt1 = cCommandNamePrompt1;
var cCommandNamePrompt2 = w.cthe + b.cSpace + n.cfirst + b.cSpace + w.cword + b.cSpace + w.cstarts + b.cSpace + w.cwith + b.cSpace + b.ca + b.cSpace; // the first word starts with a

exports.cCommandNamePrompt2 = cCommandNamePrompt2;
var cCommandNamePrompt3 = w.clower + b.cSpace + w.ccase + b.cSpace + w.cletter + b.cSpace + w.cand + b.cSpace + w.call + b.cSpace + w.cother + b.cSpace; // lower case letter and all other

exports.cCommandNamePrompt3 = cCommandNamePrompt3;
var cCommandNamePrompt4 = w.cwords + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.cnamed + b.cSpace + w.ccommand + b.cSpace + w.cstart + b.cSpace; // words in the named command start

exports.cCommandNamePrompt4 = cCommandNamePrompt4;
var cCommandNamePrompt5 = w.cwith + b.cSpace + b.can + b.cSpace + w.cupper + b.cSpace + w.ccase + b.cSpace + w.cletter + b.cColon; // with an upper case letter:
// Please enter a list of command word abreviations/acronyms/aliases for the command word:

exports.cCommandNamePrompt5 = cCommandNamePrompt5;
var cCommandWordAliasPrompt1 = w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.clist + b.cSpace + b.cof + b.cSpace + w.ccommand + b.cSpace;
exports.cCommandWordAliasPrompt1 = cCommandWordAliasPrompt1;
var cCommandWordAliasPrompt2 = w.cword + b.cSpace + w.cabreviations + b.cForwardSlash + w.cacronyms + b.cForwardSlash + w.caliases + b.cSpace;
exports.cCommandWordAliasPrompt2 = cCommandWordAliasPrompt2;
var cCommandWordAliasPrompt3 = w.cfor + b.cSpace + w.cthe + b.cSpace + w.ccommand + b.cSpace + w.cword + b.cColon; // Please enter a string you would like to define as a constant in the constants system:

exports.cCommandWordAliasPrompt3 = cCommandWordAliasPrompt3;
var cConstantPrompt1 = w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cstring + b.cSpace + w.cyou + b.cSpace + w.cwould + b.cSpace; // Please enter a string you would

exports.cConstantPrompt1 = cConstantPrompt1;
var cConstantPrompt2 = w.clike + b.cSpace + b.cto + b.cSpace + w.cdefine + b.cSpace + b.cas + b.cSpace + b.ca + b.cSpace + w.cconstant + b.cSpace; // like to define as a constant

exports.cConstantPrompt2 = cConstantPrompt2;
var cConstantPrompt3 = b.cin + b.cSpace + w.cthe + b.cSpace + w.cconstants + b.cSpace + w.csystem + b.cColon; // in the constants system:
// Please enter a coma separated list of strings you would like to define in the constants system:

exports.cConstantPrompt3 = cConstantPrompt3;
var cConstantsListPrompt1 = w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.ccoma + b.cSpace + w.cseparated + b.cSpace + w.clist + b.cSpace + b.cof + b.cSpace;
exports.cConstantsListPrompt1 = cConstantsListPrompt1;
var cConstantsListPrompt2 = w.cstrings + b.cSpace + w.cyou + b.cSpace + w.cwould + b.cSpace + w.clike + b.cSpace + b.cto + b.cSpace + w.cdefine + b.cSpace + b.cin + b.cSpace;
exports.cConstantsListPrompt2 = cConstantsListPrompt2;
var cConstantsListPrompt3 = w.cthe + b.cSpace + w.cconstants + b.cSpace + w.csystem + b.cColon; // Please enter a coma separated list of strings you would like to search for common patterns:

exports.cConstantsListPrompt3 = cConstantsListPrompt3;
var cConstantsListPatternSearchPrompt1 = w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.ccoma + b.cSpace + w.cseparated + b.cSpace + w.clist + b.cSpace + b.cof + b.cSpace; // Please enter a coma separated list of

exports.cConstantsListPatternSearchPrompt1 = cConstantsListPatternSearchPrompt1;
var cConstantsListPatternSearchPrompt2 = w.cstrings + b.cSpace + w.cyou + b.cSpace + w.cwould + b.cSpace + w.clike + b.cSpace + b.cto + b.cSpace + w.csearch + b.cSpace + w.cfor + b.cSpace; // strings you would like to search for

exports.cConstantsListPatternSearchPrompt2 = cConstantsListPatternSearchPrompt2;
var cConstantsListPatternSearchPrompt3 = w.ccommon + b.cSpace + w.cpatterns + b.cColon; // common patterns:
// ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
// 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
// 'Please reformat the constant correctly so a line of code can be generated for you.

exports.cConstantsListPatternSearchPrompt3 = cConstantsListPatternSearchPrompt3;
var cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 = w.cERROR + b.cColon + b.cSpace + w.cAttempted + b.cSpace + b.cto + b.cSpace + w.cgenerate + b.cSpace + b.ca + b.cSpace + w.csuggested + b.cSpace; // ERROR: Attempted to generate a suggested

exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 = cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1;
var cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 = w.cline + b.cSpace + b.cof + b.cSpace + w.ccode + b.cSpace + b.cto + b.cSpace + w.cvalidate + b.cSpace + w.cthe + b.cSpace + w.cconstant + b.cComa + b.cSpace; // line of code to validate the constant,

exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 = cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2;
var cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 = w.cbut + b.cSpace + w.cthe + b.cSpace + w.cconstant + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + w.cformatted + b.cSpace + w.ccorrectly + b.cComa + b.cSpace; // but the constant is not formatted correctly,

exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 = cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3;
var cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 = b.cit + b.cSpace + w.cshould + b.cSpace + w.cbegin + b.cSpace + w.cwith + b.cSpace + b.ca + b.cSpace + w.clower + b.cSpace + w.ccase + b.cSpace + b.cDoubleQuote + b.cc + b.cDoubleQuote + b.cDot + b.cSpace; // it should begin with a lower case "c".

exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 = cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4;
var cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 = w.cPlease + b.cSpace + w.creformat + b.cSpace + w.cthe + b.cSpace + w.cconstant + b.cSpace + w.ccorrectly + b.cSpace + b.cso + b.cSpace + b.ca + b.cSpace; // Please reformat the constant correctly so a

exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 = cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5;
var cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6 = w.cline + b.cSpace + b.cof + b.cSpace + w.ccode + b.cSpace + w.ccan + b.cSpace + b.cbe + b.cSpace + w.cgenerated + b.cSpace + w.cfor + b.cSpace + w.cyou + b.cDot; // line of code can be generated for you.

exports.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6 = cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6;
var cSearchForPatternsInStringArrayMessage1 = ccurrentMasterStringArrayElement + b.cSpace + w.cdoes + b.cSpace + g.cnot + b.cSpace + w.ccontain + b.cSpace + b.ca + b.cSpace + w.cspace + b.cSpace + w.ccharacter; // currentMasterStringArrayElement does not contain a space character
// WARNING: The current string being searched contains a space character, we are going to skip comparison.

exports.cSearchForPatternsInStringArrayMessage1 = cSearchForPatternsInStringArrayMessage1;
var cSearchForPatternsInStringArrayMessage2 = w.cWARNING + b.cColon + b.cSpace + w.cThe + b.cSpace + w.ccurrent + b.cSpace + w.cstring + b.cSpace + w.cbeing + b.cSpace + w.csearched + b.cSpace + w.ccontains + b.cSpace + b.ca + b.cSpace + w.cspace + b.cSpace + w.ccharacter + b.cComa + b.cSpace; // WARNING: The current string being search contains a space character,

exports.cSearchForPatternsInStringArrayMessage2 = cSearchForPatternsInStringArrayMessage2;
var cSearchForPatternsInStringArrayMessage3 = b.cwe + b.cSpace + w.care + b.cSpace + w.cgoing + b.cSpace + b.cto + b.cSpace + w.cskip + b.cSpace + w.ccomparison + b.cDot; // we are going to skip comparison.
// WARNING: InputData was not an array or had an empty array.

exports.cSearchForPatternsInStringArrayMessage3 = cSearchForPatternsInStringArrayMessage3;
var cSearchForPatternsInStringArrayMessage4 = w.cWARNING + b.cColon + b.cSpace + cInputData + b.cSpace + w.cwas + b.cSpace + g.cnot + b.cSpace + b.can + b.cSpace + w.carray + b.cSpace + b.cor + b.cSpace + w.chad + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.carray + b.cDot; // WARNING: InputData was not an array or had an empty array.
// WARNING: No data to load, please specify a valid path & filename!

exports.cSearchForPatternsInStringArrayMessage4 = cSearchForPatternsInStringArrayMessage4;
var cLoadDataFileMessage1 = w.cWARNING + b.cColon + b.cSpace + b.cNo + b.cSpace + w.cdata + b.cSpace + b.cto + b.cSpace + w.cload + b.cComa + b.cSpace; // WARNING: No data to load,

exports.cLoadDataFileMessage1 = cLoadDataFileMessage1;
var cloadDataFileMessage2 = w.cplease + b.cSpace + w.cspecify + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.cpath + b.cSpace + b.cAndPersand + b.cSpace + w.cfilename + b.cExclamation; // please specify a valid path & filename!

exports.cloadDataFileMessage2 = cloadDataFileMessage2;
var cloadDataFileMessage3 = w.cWARNING + b.cColon + b.cSpace + w.cInvalid + b.cSpace + w.cfile + b.cSpace + w.cformat + b.cComa + b.cSpace + w.cfile + b.cSpace + w.cformats + b.cSpace + w.csupported + b.cSpace + w.care + b.cColon + b.cSpace; // WARNING: Invalid file format, file formats supported are:
// ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.

exports.cloadDataFileMessage3 = cloadDataFileMessage3;
var cdeployApplicationMessage1a = w.cERROR + b.cColon + b.cSpace + w.cRelease + b.cSpace + w.cfailed + b.cSpace + w.cbecause + b.cSpace + b.cof + b.cSpace + b.ca + b.cSpace + w.cfailure + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.cconstants + b.cSpace + w.cvalidation + b.cSpace + w.csystem + b.cDot + b.cSpace; // ERROR: Release failed because of a failure in the constants validation system.

exports.cdeployApplicationMessage1a = cdeployApplicationMessage1a;
var cdeployApplicationMessage2a = w.cPlease + b.cSpace + w.cfix + b.cSpace + g.cASAP + b.cSpace + w.cbefore + b.cSpace + w.cattempting + b.cSpace + w.canother + b.cSpace + w.crelease + b.cDot; // Please fix ASAP before attempting another release.
// ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.

exports.cdeployApplicationMessage2a = cdeployApplicationMessage2a;
var cdeployApplicationMessage1b = w.cERROR + b.cColon + b.cSpace + w.cRelease + b.cSpace + w.cfailed + b.cSpace + w.cbecause + b.cSpace + b.cof + b.cSpace + b.ca + b.cSpace + w.cfailure + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.ccommands + b.cSpace + w.calias + b.cSpace + w.cvalidation + b.cSpace + w.csystem + b.cDot + b.cSpace; //ERROR: Release failed because of a failure in the commands alias validation system.

exports.cdeployApplicationMessage1b = cdeployApplicationMessage1b;
var ccommandSequencerMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cnominal + b.cDot + w.ccommand + w.cSequencer + b.cColon + b.cSpace + w.cThe + b.cSpace + w.cspecified + b.cSpace + w.ccommand + b.cSpace + w.cwas + b.cSpace + g.cnot + b.cSpace + w.cfound + b.cComa + b.cSpace; // WARNING: nominal.commandSequencer: The specified command was not found,

exports.ccommandSequencerMessage1 = ccommandSequencerMessage1;
var ccommandSequencerMessage2 = w.cplease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.ccommand + b.cSpace + w.cand + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cDot; // Please enter a valid command and try again.

exports.ccommandSequencerMessage2 = ccommandSequencerMessage2;
var cworkflowMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cnominal + b.cDot + w.cworkflow + b.cColon + b.cSpace + w.cThe + b.cSpace + w.cspecified + b.cSpace + w.cworkflow + b.cColon + b.cSpace; // WARNING: nominal.workflow: The specified workflow:

exports.cworkflowMessage1 = cworkflowMessage1;
var cworkflowMessage2 = b.cSpace + w.cwas + b.cSpace + g.cnot + b.cSpace + w.cfound + b.cSpace + b.cin + b.cSpace + w.ceither + b.cSpace + w.cthe + b.cSpace + w.csystem + b.cSpace + w.cdefined + b.cSpace + w.cworkflows + b.cComa + b.cSpace + b.cor + b.cSpace + w.cclient + b.cSpace + w.cdefined + b.cSpace + w.cworkflows + b.cDot; // was not found in either the system defined workflows, or client defined workflows.

exports.cworkflowMessage2 = cworkflowMessage2;
var cworkflowMessage3 = b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.cworkflow + b.cSpace + w.cname + b.cSpace + w.cand + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cDot; // Please enter a valid workflow name and try again.
// After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:

exports.cworkflowMessage3 = cworkflowMessage3;
var ccommandGeneratorMessage1 = w.cAfter + b.cSpace + w.cattempting + b.cSpace + b.cto + b.cSpace + w.creplace + b.cSpace + w.cthe + b.cSpace + w.csecondary + w.cCommand + g.cArgs + w.cDelimiter + b.cSpace + w.cwith + b.cSpace + w.cthe + b.cSpace + w.cprimary + w.cCommand + w.cDelimiter + b.cSpace + w.ccommand + w.cString + cSpaceIsColonSpace; // After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:

exports.ccommandGeneratorMessage1 = ccommandGeneratorMessage1;
var ccommandGeneratorMessage2 = w.cAfter + b.cSpace + w.cattempting + b.cSpace + b.cto + b.cSpace + w.creplace + b.cSpace + w.cthe + b.cSpace + w.ctertiary + w.cCommand + w.cDelimiter + b.cSpace + w.cwith + b.cSpace + w.cthe + b.cSpace + w.csecondary + w.cCommand + g.cArs + w.cDelimiter + b.cSpace + w.ccommand + w.cString + cSpaceIsColonSpace; // WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered:

exports.ccommandGeneratorMessage2 = ccommandGeneratorMessage2;
var ccommandGeneratorMessage3 = w.cWARNING + b.cColon + b.cSpace + w.cnominal + b.cDot + w.ccommand + w.cGenerator + b.cColon + b.cSpace + w.cMust + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cnumber + b.cSpace + w.cgreater + b.cSpace + w.cthan + b.cSpace + n.c0 + b.cComa + b.cSpace + w.cnumber + b.cSpace + w.centered + b.cColon + b.cSpace; // WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number:

exports.ccommandGeneratorMessage3 = ccommandGeneratorMessage3;
var ccommandGeneratorMessage4 = w.cWARNING + b.cColon + b.cSpace + w.cnominal + b.cDot + w.ccommand + w.cGenerator + b.cColon + b.cSpace + w.cNumber + b.cSpace + w.centered + b.cSpace + w.cfor + b.cSpace + w.cthe + b.cSpace + w.cnumber + b.cSpace + b.cof + b.cSpace + w.ccommands + b.cSpace + b.cto + b.cSpace + w.cgenerate + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + b.ca + b.cSpace + w.cnumber + b.cColon + b.cSpace; // WARNING: nominal.commandGenerator: The specified command:

exports.ccommandGeneratorMessage4 = ccommandGeneratorMessage4;
var ccommandGeneratorMessage5 = w.cWarning + b.cColon + b.cSpace + w.cnominal + b.cDot + w.ccommand + w.cGenerator + b.cColon + b.cSpace + w.cThe + b.cSpace + w.cspecified + b.cSpace + w.ccommand + b.cColon + b.cSpace; // was not found, please enter a valid command and try again.

exports.ccommandGeneratorMessage5 = ccommandGeneratorMessage5;
var ccommandGeneratorMessage6 = b.cSpace + w.cwas + b.cSpace + g.cnot + b.cSpace + w.cfound + b.cComa + b.cSpace + w.cplease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.ccommand + b.cSpace + w.cand + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cDot; // Command can be called by passing parameters and bypass the prompt system.

exports.ccommandGeneratorMessage6 = ccommandGeneratorMessage6;
var ccommandAliasGeneratorMessage1 = w.cCommand + b.cSpace + w.ccan + b.cSpace + b.cbe + b.cSpace + w.ccalled + b.cSpace + b.cby + b.cSpace + w.cpassing + b.cSpace + w.cparameters + b.cSpace + w.cand + b.cSpace + w.cbypass + b.cSpace + w.cthe + b.cSpace + w.cprompt + b.cSpace + w.csystem + b.cDot; // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}

exports.ccommandAliasGeneratorMessage1 = ccommandAliasGeneratorMessage1;
var ccommandAliasGeneratorMessage2 = w.cEXAMPLE + b.cColon + b.cSpace + b.cOpenCurlyBrace + b.cDoubleQuote + w.cconstants + b.cDoubleQuote + b.cColon + b.cDoubleQuote + b.cc + b.cComa + g.cconst + b.cDoubleQuote + b.cComa + b.cDoubleQuote + w.cGenerator + b.cDoubleQuote + b.cColon + b.cDoubleQuote + b.cg + b.cComa + p.cgen + b.cComa + p.cgen + b.crt + b.cr + b.cDoubleQuote + b.cComa + b.cDoubleQuote + w.cList + b.cDoubleQuote + b.cColon + b.cDoubleQuote + b.cl + b.cComa + b.cls + b.ct + b.cDoubleQuote + b.cCloseCurlyBrace; // INVALID INPUT: Please enter a valid camel-case command name.

exports.ccommandAliasGeneratorMessage2 = ccommandAliasGeneratorMessage2;
var ccommandAliasGeneratorMessage3 = w.cINVALID + b.cSpace + w.cINPUT + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.ccamel + b.cDash + w.ccase + b.cSpace + w.ccommand + b.cSpace + w.cname + b.cDot; // INVALID INPUT: Please enter a valid command word alias list.

exports.ccommandAliasGeneratorMessage3 = ccommandAliasGeneratorMessage3;
var ccommandAliasGeneratorMessage4 = w.cINVALID + b.cSpace + w.cINPUT + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.ccommand + b.cSpace + w.cword + b.cSpace + w.calias + b.cSpace + w.clist + b.cDot; // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.

exports.ccommandAliasGeneratorMessage4 = ccommandAliasGeneratorMessage4;
var ccommandAliasGeneratorMessage5 = w.cINVALID + b.cSpace + w.cCOMMAND + b.cSpace + w.cINPUT + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + w.cvalid + b.cSpace + w.ccommand + b.cSpace + w.cdata + b.cSpace + w.cwhen + b.cSpace + w.ctrying + b.cSpace + b.cto + b.cSpace + w.ccall + b.cSpace + w.cwith + b.cSpace + w.cparameters + b.cDot; // INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.

exports.ccommandAliasGeneratorMessage5 = ccommandAliasGeneratorMessage5;
var cconstantsGeneratorMessage1 = w.cINVALID + b.cSpace + w.cINPUT + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.cconstant + b.cSpace + w.cvalue + b.cSpace + w.cthat + b.cSpace + w.ccontains + b.cSpace + w.cmore + b.cSpace + w.cthan + b.cSpace + n.c4 + b.cSpace + w.ccharacters + b.cDot; // WARNING: The constant has already been defined in the following library(ies):

exports.cconstantsGeneratorMessage1 = cconstantsGeneratorMessage1;
var cconstantsGeneratorMessage2 = w.cWARNING + b.cColon + b.cSpace + w.cThe + b.cSpace + w.cconstant + b.cSpace + w.chas + b.cSpace + w.calready + b.cSpace + w.cbeen + b.cSpace + w.cdefined + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.cfollowing + b.cSpace + w.clibrary + b.cOpenParenthesis + p.cies + b.cCloseParenthesis + b.cColon + b.cSpace; // INVALID INPUT: Please enter a valid constant list.

exports.cconstantsGeneratorMessage2 = cconstantsGeneratorMessage2;
var cconstantsGeneratorListMessage1 = w.cINVALID + b.cSpace + w.cINPUT + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.cconstant + b.cSpace + w.cList + b.cDot; // PASSED: All duplicate command aliases validation tests!

exports.cconstantsGeneratorListMessage1 = cconstantsGeneratorListMessage1;
var cvalidateCommandAliasesMessage1 = w.cPASSED + b.cColon + b.cSpace + w.cAll + b.cSpace + w.cduplicate + b.cSpace + w.ccommand + b.cSpace + w.cAliases + b.cSpace + w.cvalidation + b.cSpace + w.ctests + b.cExclamation; // About to call the rule broker to process on the number of single quotes

exports.cvalidateCommandAliasesMessage1 = cvalidateCommandAliasesMessage1;
var cgetCommandArgsMessage1 = w.cAbout + b.cSpace + b.cto + b.cSpace + w.ccall + b.cSpace + w.cthe + b.cSpace + w.crule + b.cSpace + w.cbroker + b.cSpace + b.cto + b.cSpace + w.cprocess + b.cSpace + b.con + b.cSpace + w.cthe + b.cSpace + w.cnumber + b.cSpace + b.cof + b.cSpace + w.csingle + b.cSpace + w.cquotes + b.cSpace; // About to call the rule broker to process on the number of single quotes
// and determine if it-be even or odd

exports.cgetCommandArgsMessage1 = cgetCommandArgsMessage1;
var cgetCommandArgsMessage2 = w.cand + b.cSpace + w.cdetermine + b.cSpace + b.cif + b.cSpace + b.cit + b.cDash + b.cbe + b.cSpace + w.ceven + b.cSpace + b.cor + b.cSpace + w.codd; // WARNING: Command does not exist, please enter a valid command and try again!

exports.cgetCommandArgsMessage2 = cgetCommandArgsMessage2;
var cexecuteCommandMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cCommand + b.cSpace + w.cdoes + b.cSpace + g.cnot + b.cSpace + w.cexist + b.cComa + b.cSpace + w.cplease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.ccommand + b.cSpace + w.cand + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cExclamation; // WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function!

exports.cexecuteCommandMessage1 = cexecuteCommandMessage1;
var cparseBusinessRuleArgumentMessage1 = w.cWARNING + b.cColon + b.cSpace + w.clexical + b.cDot + w.cparse + w.cBusiness + w.cRule + w.cArgument + b.cColon + b.cSpace + w.cInvalid + b.cSpace + w.ccombination + b.cSpace + b.cof + b.cSpace + w.cinputs + b.cSpace + b.cto + b.cSpace + w.cthe + b.cSpace + w.clexical + b.cDot + w.cparse + w.cBusiness + w.cRule + w.cArgument + b.cSpace + w.cfunction + b.cExclamation + b.cSpace;
exports.cparseBusinessRuleArgumentMessage1 = cparseBusinessRuleArgumentMessage1;
var cparseBusinessRuleArgumentMessage2 = w.cPlease + b.cSpace + w.cadjust + b.cSpace + w.cinputs + b.cSpace + w.cand + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cDot; //Please adjust inputs and try again.
// Caught the case that the user may have only specified a single data hive, such as the configuration data hive.

exports.cparseBusinessRuleArgumentMessage2 = cparseBusinessRuleArgumentMessage2;
var cprintDataHiveAttributesMessage1 = w.cCaught + b.cSpace + w.cthe + b.cSpace + w.ccase + b.cSpace + w.cthe + b.cSpace + w.cuser + b.cSpace + w.cmay + b.cSpace + w.chave + b.cSpace + w.conly + b.cSpace + w.cspecified + b.cSpace + b.ca + b.cSpace + w.csingle + b.cSpace + w.cdata + b.cSpace + w.chive + b.cComa + b.cSpace;
exports.cprintDataHiveAttributesMessage1 = cprintDataHiveAttributesMessage1;
var cprintDataHiveAttributesMessage2 = w.csuch + b.cSpace + b.cas + b.cSpace + w.cthe + b.cSpace + w.cconfiguration + b.cSpace + w.cdata + b.cSpace + w.chive + b.cDot; // ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.

exports.cprintDataHiveAttributesMessage2 = cprintDataHiveAttributesMessage2;
var cprintDataHiveAttributesMessage3 = w.cERROR + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.cname + b.cDot + w.cspace + b.cDot + w.cattribute + w.cName + b.cSpace + w.cfor + b.cSpace + w.cthe + b.cSpace + w.csystem + b.cSpace + b.cto + b.cSpace + w.cprint + b.cSpace + w.cout + b.cSpace + w.cattribute + b.cSpace + w.cdata + b.cSpace + w.cfrom + b.cDot; // File Types

exports.cprintDataHiveAttributesMessage3 = cprintDataHiveAttributesMessage3;
var cCatia = b.cCa + b.cti + b.ca; // Catia

exports.cCatia = cCatia;
var cDocument = w.cDocument; // Document

exports.cDocument = cDocument;
var cDocuments = cDocument + b.cs; // Documents

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
var cImages = cImage + b.cs; // Images

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
// UI Element Types

exports.cVRML = cVRML;
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
var cPreProd = p.cPre + cProd; // PreProd

exports.cPreProd = cPreProd;
var cPREPROD = p.cPRE + cPROD; // PREPROD
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
var cPageDataPath = w.cPage + cDataPath; // PageDataPath

exports.cPageDataPath = cPageDataPath;
var cWorkflowDataPath = w.cWorkflow + cDataPath; // WorkflowDataPath

exports.cWorkflowDataPath = cWorkflowDataPath;
var cKeywordsDataPath = w.cKeywords + cDataPath; // KeywordsDataPath

exports.cKeywordsDataPath = cKeywordsDataPath;
var cLocatorsDataPath = w.cLocators + cDataPath; // LocatorsDataPath

exports.cLocatorsDataPath = cLocatorsDataPath;
var cConstantsPath = w.cConstants + w.cPath;
exports.cConstantsPath = cConstantsPath;
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

exports.cWordConstantsValidation = cWordConstantsValidation;
var cSourceResourcesPath = w.cSource + w.cResources + w.cPath; // SourceResourcesPath

exports.cSourceResourcesPath = cSourceResourcesPath;
var cDestinationResourcesPath = w.cDestination + w.cResources + w.cPath; // BinaryResourcesPath

exports.cDestinationResourcesPath = cDestinationResourcesPath;
var cBinaryRootPath = w.cBinary + w.cRoot + w.cPath; // BinaryRootPath

exports.cBinaryRootPath = cBinaryRootPath;
var cBinaryReleasePath = w.cBinary + w.cRelease + w.cPath; // BinaryReleasePath
// Constants Filenames

exports.cBinaryReleasePath = cBinaryReleasePath;
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
var cmetaDataDotJson = w.cmetaData + b.cDot + g.cjson; // metaData.json

exports.cmetaDataDotJson = cmetaDataDotJson;
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

exports.cEnableConstantsValidation = cEnableConstantsValidation;
var cEnableConstantsPatternGeneration = w.cEnable + w.cConstants + w.cPattern + w.cGeneration; // EnableConstantsPatternGeneration

exports.cEnableConstantsPatternGeneration = cEnableConstantsPatternGeneration;
var cDisplayIndividualConstantsValidationPassMessages = w.cDisplay + w.cIndividual + w.cConstants + w.cValidation + w.cPass + w.cMessages; // DisplayIndividualConstantsValidationPassMessages

exports.cDisplayIndividualConstantsValidationPassMessages = cDisplayIndividualConstantsValidationPassMessages;
var cDisplayIndividualConstantsValidationFailMessages = w.cDisplay + w.cIndividual + w.cConstants + w.cValidation + w.cFail + w.cMessages; // DisplayIndividualConstantsValidationFailMessages

exports.cDisplayIndividualConstantsValidationFailMessages = cDisplayIndividualConstantsValidationFailMessages;
var cDisplaySummaryConstantsValidationPassMessages = w.cDisplay + w.cSummary + w.cConstants + w.cValidation + w.cPass + w.cMessages; // DisplaySummaryConstantsValidationPassMessages

exports.cDisplaySummaryConstantsValidationPassMessages = cDisplaySummaryConstantsValidationPassMessages;
var cDisplaySummaryConstantsValidationFailMessages = w.cDisplay + w.cSummary + w.cConstants + w.cValidation + w.cFail + w.cMessages; // DisplaySummaryConstantsValidationFailMessages

exports.cDisplaySummaryConstantsValidationFailMessages = cDisplaySummaryConstantsValidationFailMessages;
var cPassAllConstantsValidations = w.cPass + w.cAll + w.cConstants + w.cValidations; // PassAllConstantsValidations

exports.cPassAllConstantsValidations = cPassAllConstantsValidations;
var cPassedAllCommandAliasesDuplicateChecks = w.cPassed + w.cAll + w.cCommand + w.cAliases + w.cDuplicate + w.cChecks;
exports.cPassedAllCommandAliasesDuplicateChecks = cPassedAllCommandAliasesDuplicateChecks;
var cdeploymentCompleted = w.cdeployment + w.cCompleted; // deploymentCompleted

exports.cdeploymentCompleted = cdeploymentCompleted;
var creleaseCompleted = w.crelease + w.cCompleted; // releaseCompleted
// Test Time Tracking

exports.creleaseCompleted = creleaseCompleted;
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
var ccleanCarriageReturnFromString = w.cclean + cCarriageReturn + w.cFrom + w.cString; // cleanCarriageReturnFromString

exports.ccleanCarriageReturnFromString = ccleanCarriageReturnFromString;
var cconvertStringToLowerCase = w.cconvert + w.cString + w.cTo + cLowerCase; // convertStringToLowerCase

exports.cconvertStringToLowerCase = cconvertStringToLowerCase;
var cconvertStringToUpperCase = w.cconvert + w.cString + w.cTo + cUpperCase; // convertStringToUpperCase

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
var ccountCamelCaseWords = w.ccount + w.cCamel + w.cCase + w.cWords; // countCamelCaseWords

exports.ccountCamelCaseWords = ccountCamelCaseWords;
var cdoesStringContainAcronym = w.cdoes + w.cString + w.cContain + w.cAcronym; // doesStringContainAcronym

exports.cdoesStringContainAcronym = cdoesStringContainAcronym;
var ccountDelimiterInString = w.ccount + w.cDelimiter + b.cIn + w.cString; // countDelimiterInString

exports.ccountDelimiterInString = ccountDelimiterInString;
var cdetermineWordDelimiter = w.cdetermine + w.cWord + w.cDelimiter; // determineWordDelimiter

exports.cdetermineWordDelimiter = cdetermineWordDelimiter;
var cgetWordCountInString = w.cget + w.cWord + w.cCount + b.cIn + w.cString; // getWordCountInString

exports.cgetWordCountInString = cgetWordCountInString;
var cdoesStringContainUpperCaseCharacter = w.cdoes + w.cString + w.cContain + cUpperCase + w.cCharacter; // doesStringContainUpperCaseCharacter

exports.cdoesStringContainUpperCaseCharacter = cdoesStringContainUpperCaseCharacter;
var cdoesStringContainLowerCaseCharacter = w.cdoes + w.cString + w.cContain + cLowerCase + w.cCharacter; // doesStringContainLowerCaseCharacter

exports.cdoesStringContainLowerCaseCharacter = cdoesStringContainLowerCaseCharacter;
var cisFirstCharacterLowerCase = b.cis + n.cFirst + w.cCharacter + cLowerCase; // isFirstCharacterLowerCase

exports.cisFirstCharacterLowerCase = cisFirstCharacterLowerCase;
var cisFirstCharacterUpperCase = b.cis + n.cFirst + w.cCharacter + cUpperCase; // isFirstCharacterUpperCase

exports.cisFirstCharacterUpperCase = cisFirstCharacterUpperCase;
var cisStringList = b.cis + w.cString + w.cList; // isStringList

exports.cisStringList = cisStringList;
var cisStringCamelCase = b.cis + w.cString + w.cCamel + w.cCase; // isStringCamelCase

exports.cisStringCamelCase = cisStringCamelCase;
var cmapWordToCamelCaseWord = p.cmap + w.cWord + b.cTo + w.cCamel + w.cCase + w.cWord; // mapWordToCamelCaseWord

exports.cmapWordToCamelCaseWord = cmapWordToCamelCaseWord;
var csimplifyAndConsolidateString = w.csimplify + w.cAnd + w.cConsolidate + w.cString; // simplifyAndConsolidateString

exports.csimplifyAndConsolidateString = csimplifyAndConsolidateString;
var ccompareSimplifiedAndConsolidatedStrings = w.ccompare + w.cSimplified + w.cAnd + w.cConsolidated + w.cStrings; // compareSimplifiedAndConsolidatedStrings

exports.ccompareSimplifiedAndConsolidatedStrings = ccompareSimplifiedAndConsolidatedStrings;
var cascertainMatchingFilenames = w.cascertain + w.cMatching + cFilenames; // ascertainMatchingFilenames

exports.cascertainMatchingFilenames = cascertainMatchingFilenames;
var cvalidateConstantsDataValidation = w.cvalidate + w.cConstants + w.cData + w.cValidation; // validateConstantsDataValidation

exports.cvalidateConstantsDataValidation = cvalidateConstantsDataValidation;
var cdetermineConstantsContextQualifiedPrefix = w.cdetermine + w.cConstants + w.cContext + w.cQualified + w.cPrefix; // determineConstantsContextQualifiedPrefix

exports.cdetermineConstantsContextQualifiedPrefix = cdetermineConstantsContextQualifiedPrefix;
var cdetermineSuggestedConstantsValidationLineOfCode = w.cdetermine + w.cSuggested + w.cConstants + w.cValidation + w.cLine + b.cOf + w.cCode; // determineSuggestedConstantsValidationLineOfCode

exports.cdetermineSuggestedConstantsValidationLineOfCode = cdetermineSuggestedConstantsValidationLineOfCode;
var cvalidateConstantsDataValidationLineItemName = cvalidateConstantsDataValidation + w.cLine + w.cItem + w.cName; // validateConstantsDataValidationLineItemName

exports.cvalidateConstantsDataValidationLineItemName = cvalidateConstantsDataValidationLineItemName;
var cdoesConstantExist = w.cdoes + w.cConstant + w.cExist; // doesConstantExist

exports.cdoesConstantExist = cdoesConstantExist;
var cgetConstantType = w.cget + w.cConstant + w.cType; // getConstantType

exports.cgetConstantType = cgetConstantType;
var cgetConstantActualValue = w.cget + w.cConstant + w.cActual + w.cValue; // getConstantActualValue

exports.cgetConstantActualValue = cgetConstantActualValue;
var cgetConstantName = w.cget + w.cConstant + w.cName; // getConstantName

exports.cgetConstantName = cgetConstantName;
var cfindConstantName = w.cfind + w.cConstant + w.cName; // findConstantName

exports.cfindConstantName = cfindConstantName;
var cisConstantTypeValid = b.cis + w.cConstant + w.cType + w.cValid; // isConstantTypeValid

exports.cisConstantTypeValid = cisConstantTypeValid;
var cconvertConstantTypeToConstantPrefix = w.cconvert + w.cConstant + w.cType + b.cTo + w.cConstant + w.cPrefix; // convertConstantTypeToConstantPrefix

exports.cconvertConstantTypeToConstantPrefix = cconvertConstantTypeToConstantPrefix;
var cconstantsOptimizedFulfillmentSystem = w.cconstants + w.cOptimized + w.cFulfillment + w.cSystem; // constantsOptimizedFulfillmentSystem

exports.cconstantsOptimizedFulfillmentSystem = cconstantsOptimizedFulfillmentSystem;
var cconstantsFulfillmentSystem = w.cconstants + w.cFulfillment + w.cSystem; // constantsFulfillmentSystem

exports.cconstantsFulfillmentSystem = cconstantsFulfillmentSystem;
var cvalidateConstantsDataValues = w.cvalidate + w.cConstants + w.cData + w.cValues; // validateConstantsDataValues

exports.cvalidateConstantsDataValues = cvalidateConstantsDataValues;
var cisValidCommandNameString = b.cis + w.cValid + w.cCommand + w.cName + w.cString; // isValidCommandNameString

exports.cisValidCommandNameString = cisValidCommandNameString;
var cisConstantValid = b.cis + w.cConstant + w.cValid; // isConstantValid

exports.cisConstantValid = cisConstantValid;
var ccountDuplicateCommandAliases = w.ccount + w.cDuplicate + w.cCommand + w.cAliases; // countDuplicateCommandAliases

exports.ccountDuplicateCommandAliases = ccountDuplicateCommandAliases;
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
var cloadDataFile = w.cload + w.cData + w.cFile; // loadDataFile

exports.cloadDataFile = cloadDataFile;
var csupportedFileFormatsAre = w.csupported + w.cFile + w.cFormats + w.cAre; // supportedFileFormatsAre

exports.csupportedFileFormatsAre = csupportedFileFormatsAre;
var cgetAttributeName = w.cget + w.cAttribute + w.cName; // getAttributeName

exports.cgetAttributeName = cgetAttributeName;
var cgetAttributeValue = w.cget + w.cAttribute + w.cValue; // getAttributeValue

exports.cgetAttributeValue = cgetAttributeValue;
var cisOdd = b.cis + w.cOdd; // isOdd

exports.cisOdd = cisOdd;
var cisEven = b.cis + w.cEven; // isEven

exports.cisEven = cisEven;
var ccleanCommandInput = w.cclean + w.cCommand + w.cInput; // cleanCommandInput

exports.ccleanCommandInput = ccleanCommandInput;
var creplaceCharacterAtIndexOfString = w.creplace + w.cCharacter + b.cA + b.ct + w.cIndex + b.cOf + w.cString; // replaceCharacterAtIndexOfString
// *********************************
// ArrayParsing rules in order
// *********************************

exports.creplaceCharacterAtIndexOfString = creplaceCharacterAtIndexOfString;
var creplaceCharacterWithCharacter = w.creplace + w.cCharacter + w.cWith + w.cCharacter; // replaceCharacterWithCharacter

exports.creplaceCharacterWithCharacter = creplaceCharacterWithCharacter;
var cconvertCamelCaseStringToArray = w.cconvert + w.cCamel + w.cCase + w.cString + b.cTo + w.cArray; // convertCamelCaseStringToArray

exports.cconvertCamelCaseStringToArray = cconvertCamelCaseStringToArray;
var cgetWordsArrayFromString = w.cget + w.cWords + w.cArray + w.cFrom + w.cString; // getWordsArrayFromString

exports.cgetWordsArrayFromString = cgetWordsArrayFromString;
var crecombineStringArrayWithSpaces = w.crecombine + w.cString + w.cArray + w.cWith + w.cSpaces; // recombineStringArrayWithSpaces

exports.crecombineStringArrayWithSpaces = crecombineStringArrayWithSpaces;
var cconvertArrayToCamelCaseString = w.cconvert + w.cArray + b.cTo + w.cCamel + w.cCase + w.cString; // convertArrayToCamelCaseString

exports.cconvertArrayToCamelCaseString = cconvertArrayToCamelCaseString;
var cdoesArrayContainLowerCaseConsolidatedString = w.cdoes + w.cArray + w.cContain + w.cLower + w.cCase + w.cConsolidated + w.cString; // doesArrayContainLowerCaseConsolidatedString

exports.cdoesArrayContainLowerCaseConsolidatedString = cdoesArrayContainLowerCaseConsolidatedString;
var cdoesArrayContainCharacter = w.cdoes + w.cArray + w.cContain + w.cCharacter; // doesArrayContainCharacter

exports.cdoesArrayContainCharacter = cdoesArrayContainCharacter;
var cremoveCharacterFromArray = w.cremove + w.cCharacter + w.cFrom + w.cArray; // removeCharacterFromArray

exports.cremoveCharacterFromArray = cremoveCharacterFromArray;
var cascertainMatchingElements = w.cascertain + w.cMatching + w.cElements; // acertainMatchingElements

exports.cascertainMatchingElements = cascertainMatchingElements;
var cdoesArrayContainFilename = w.cdoes + w.cArray + w.cContain + cFilename; // doesArrayContainFilename

exports.cdoesArrayContainFilename = cdoesArrayContainFilename;
var cgetLengthOfLongestStringInArray = w.cget + w.cLength + b.cOf + w.cLongest + w.cString + b.cIn + w.cArray; // getLengthOfLongestStringInArray

exports.cgetLengthOfLongestStringInArray = cgetLengthOfLongestStringInArray;
var csearchForPatternsInStringArray = w.csearch + w.cFor + w.cPatterns + b.cIn + w.cString + w.cArray; // searchForPatternsInStringArray

exports.csearchForPatternsInStringArray = csearchForPatternsInStringArray;
var cvalidatePatternsThatNeedImplementation = w.cvalidate + w.cPatterns + w.cThat + w.cNeed + w.cImplementation; // validatePatternsThatNeedImplementation

exports.cvalidatePatternsThatNeedImplementation = cvalidatePatternsThatNeedImplementation;
var csolveLehmerCode = w.csolve + w.cLehmer + w.cCode; // solveLehmerCode

exports.csolveLehmerCode = csolveLehmerCode;
var crecursiveArrayExpansion = w.crecursive + w.cArray + w.cExpansion; // recursiveArrayExpansion

exports.crecursiveArrayExpansion = crecursiveArrayExpansion;
var cgetLehmerCodeValue = w.cget + w.cLehmer + w.cCode + w.cValue; // getLehmerCodeValue

exports.cgetLehmerCodeValue = cgetLehmerCodeValue;
var carraysAreEqual = w.carrays + w.cAre + w.cEqual; // arraysAreEqual

exports.carraysAreEqual = carraysAreEqual;
var cstoreData = w.cstore + w.cData; // storeData

exports.cstoreData = cstoreData;
var cgetStoredData = w.cget + w.cStored + w.cData; // getStoredData

exports.cgetStoredData = cgetStoredData;
var cisObjectEmpty = b.cis + w.cObject + w.cEmpty; // isObjectEmpty

exports.cisObjectEmpty = cisObjectEmpty;
var cisArrayEmpty = b.cis + w.cArray + w.cEmpty; // isArrayEmpty

exports.cisArrayEmpty = cisArrayEmpty;
var cisObject = b.cis + w.cObject; // isObject

exports.cisObject = cisObject;
var cisArray = b.cis + w.cArray; // isArray

exports.cisArray = cisArray;
var cisArrayOrObject = b.cis + w.cArray + b.cOr + w.cObject; // isArrayOrObject

exports.cisArrayOrObject = cisArrayOrObject;
var cisNonZeroLengthArray = b.cis + p.cNon + n.cZero + w.cLength + w.cArray; // isNonZeroLengthArray

exports.cisNonZeroLengthArray = cisNonZeroLengthArray;
var carrayDeepClone = w.carray + w.cDeep + w.cClone; // arrayDeepClone

exports.carrayDeepClone = carrayDeepClone;
var creplaceCharacterAtIndex = w.creplace + w.cCharacter + w.cAt + w.cIndex; // replaceCharacterAtIndex

exports.creplaceCharacterAtIndex = creplaceCharacterAtIndex;
var cgenerateCommandAliases = w.cgenerate + w.cCommand + w.cAliases; // generateCommandAliases

exports.cgenerateCommandAliases = cgenerateCommandAliases;
var caggregateCommandArguments = w.caggregate + w.cCommand + w.cArguments; // aggregateCommandArguments

exports.caggregateCommandArguments = caggregateCommandArguments;
var cdoesArrayContainValue = w.cdoes + w.cArray + w.cContain + w.cValue; // doesArrayContainValue
// *********************************
// StringGeneration rules in order
// *********************************

exports.cdoesArrayContainValue = cdoesArrayContainValue;
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
var cgenerateValidEmail1 = cgenerateValidEmail + n.c1; // generateValidEmail1

exports.cgenerateValidEmail1 = cgenerateValidEmail1;
var cgenerateValidEmail2 = cgenerateValidEmail + n.c2; // generateValidEmail2

exports.cgenerateValidEmail2 = cgenerateValidEmail2;
var cgenerateInvalidEmail1 = cgenerateInvalidEmail + n.c1; // generateInvalidEmail1

exports.cgenerateInvalidEmail1 = cgenerateInvalidEmail1;
var cgenerateInvalidEmail2 = cgenerateInvalidEmail + n.c2; // generateInvalidEmail2

exports.cgenerateInvalidEmail2 = cgenerateInvalidEmail2;
var cgenerateValidEmailWithSpecificSuffixAndDomainName1 = cgenerateValidEmail + cWithSpecificSuffixAndDomainName + n.c1; // generateValidEmailWithSpecificSuffixAndDomainName1

exports.cgenerateValidEmailWithSpecificSuffixAndDomainName1 = cgenerateValidEmailWithSpecificSuffixAndDomainName1;
var cgenerateValidEmailWithSpecificSuffixAndDomainName2 = cgenerateValidEmail + cWithSpecificSuffixAndDomainName + n.c2; // generateValidEmailWithSpecificSuffixAndDomainName2

exports.cgenerateValidEmailWithSpecificSuffixAndDomainName2 = cgenerateValidEmailWithSpecificSuffixAndDomainName2;
var cgenerateRandomValidEmail1 = w.cgenerate + cRandomValidEmail + n.c1; // generateRandomValidEmail1

exports.cgenerateRandomValidEmail1 = cgenerateRandomValidEmail1;
var cgenerateRandomValidEmail2 = w.cgenerate + cRandomValidEmail + n.c2; // generateRandomValidEmail2

exports.cgenerateRandomValidEmail2 = cgenerateRandomValidEmail2;
var cgenerateInvalidEmailWithSpecificSuffixAndDomainName1 = cgenerateInvalidEmail + cWithSpecificSuffixAndDomainName + n.c1; // generateInvalidEmailWithSpecificSuffixAndDomainName1

exports.cgenerateInvalidEmailWithSpecificSuffixAndDomainName1 = cgenerateInvalidEmailWithSpecificSuffixAndDomainName1;
var cgenerateInvalidEmailWithSpecificSuffixAndDomainName2 = cgenerateInvalidEmail + cWithSpecificSuffixAndDomainName + n.c2; // generateInvalidEmailWithSpecificSuffixAndDomainName2

exports.cgenerateInvalidEmailWithSpecificSuffixAndDomainName2 = cgenerateInvalidEmailWithSpecificSuffixAndDomainName2;
var cgenerateRandomInvalidEmail1 = w.cgenerate + cRandomInvalidEmail + n.c1; // generateRandomInvalidEmail1

exports.cgenerateRandomInvalidEmail1 = cgenerateRandomInvalidEmail1;
var cgenerateRandomInvalidEmail2 = w.cgenerate + cRandomInvalidEmail + n.c2; // generateRandomInvalidEmail2
// *********************************
// CharacterGeneration rules in order
// *********************************

exports.cgenerateRandomInvalidEmail2 = cgenerateRandomInvalidEmail2;
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
var chex2rgbConversion = p.chex + n.c2 + p.crgb + w.cConversion; // hex2rgbConversion
// Commands

exports.chex2rgbConversion = chex2rgbConversion;
var cSystemCommandsAliasesActualPath = b.cForwardSlash + cFramework + b.cForwardSlash + w.cResources + b.cForwardSlash + w.cCommands + b.cForwardSlash; // SystemCommandsAliasesActualPath

exports.cSystemCommandsAliasesActualPath = cSystemCommandsAliasesActualPath;
var cSystemWorkflowsActualPath = b.cForwardSlash + cFramework + b.cForwardSlash + w.cResources + b.cForwardSlash + w.cWorkflows + b.cForwardSlash; // SystemWorkflowsActualPath

exports.cSystemWorkflowsActualPath = cSystemWorkflowsActualPath;
var cDevSystemCommandsAliasesActualPath = w.csrc + cSystemCommandsAliasesActualPath; // DevSystemCommandsAliasesActualPath

exports.cDevSystemCommandsAliasesActualPath = cDevSystemCommandsAliasesActualPath;
var cDevSystemWorkflowsActualPath = w.csrc + cSystemWorkflowsActualPath; // DevSystemWorkflowsActualPath

exports.cDevSystemWorkflowsActualPath = cDevSystemWorkflowsActualPath;
var cProdSystemCommandsAliasesActualPath = w.cbin + cSystemCommandsAliasesActualPath; // ProdSystemCommasAliasesActualPath

exports.cProdSystemCommandsAliasesActualPath = cProdSystemCommandsAliasesActualPath;
var cProdSystemWorkflowsActualPath = w.cbin + cSystemWorkflowsActualPath; // ProdSystemWorkflowsActualPath

exports.cProdSystemWorkflowsActualPath = cProdSystemWorkflowsActualPath;
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
var cechoCommand = cecho + w.cCommand; // echoCommand

exports.cechoCommand = cechoCommand;
var cEchoCommand = cEcho + w.cCommand; // EchoCommand

exports.cEchoCommand = cEchoCommand;
var cclearScreen = w.cclear + w.cScreen; // clearScreen

exports.cclearScreen = cclearScreen;
var cworkflowHelp = w.cworkflow + w.cHelp; // workflowHelp

exports.cworkflowHelp = cworkflowHelp;
var ccommandSequencer = w.ccommand + w.cSequencer; // commandSequencer

exports.ccommandSequencer = ccommandSequencer;
var cprintDataHive = w.cprint + w.cData + w.cHive; // printDataHive

exports.cprintDataHive = cprintDataHive;
var cprintDataHiveAttributes = w.cprint + w.cData + w.cHive + w.cAttributes; // printDataHiveAttributes

exports.cprintDataHiveAttributes = cprintDataHiveAttributes;
var cclearDataStorage = w.cclear + w.cData + w.cStorage; // clearDataStorage

exports.cclearDataStorage = cclearDataStorage;
var ccommandGenerator = w.ccommand + w.cGenerator; // commandGenerator

exports.ccommandGenerator = ccommandGenerator;
var ccommandAliasGenerator = w.ccommand + w.cAlias + w.cGenerator; // commandAliasGenerator

exports.ccommandAliasGenerator = ccommandAliasGenerator;
var cconstantsGenerator = w.cconstants + w.cGenerator; // constantsGenerator

exports.cconstantsGenerator = cconstantsGenerator;
var cconstantsGeneratorList = cconstantsGenerator + w.cList; // constantsGeneratorList

exports.cconstantsGeneratorList = cconstantsGeneratorList;
var cconstantsPatternRecognizer = w.cconstants + w.cPattern + w.cRecognizer; // constantsPatternRecognizer

exports.cconstantsPatternRecognizer = cconstantsPatternRecognizer;
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

exports.cvalidateConstants = cvalidateConstants;
var cvalidateCommandAliases = w.cvalidate + w.cCommand + w.cAliases; // validateCommandAliases
// ********************************
// System defined workflows
// ********************************

exports.cvalidateCommandAliases = cvalidateCommandAliases;
var cStartupWorkflow = w.cWorkflow + b.cSpace + w.cstartup; // Workflow startup

exports.cStartupWorkflow = cStartupWorkflow;
var cBuildWorkflow = w.cWorkflow + b.cSpace + w.cbuild; // Workflow build

exports.cBuildWorkflow = cBuildWorkflow;
var cReleaseWorkflow = w.cWorkflow + b.cSpace + w.crelease; // Workflow release

exports.cReleaseWorkflow = cReleaseWorkflow;