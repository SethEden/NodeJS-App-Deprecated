# NodeJS-App
A basic NodeJS template App that can be easily re-used and forked to make many different kinds of apps written with ES6 syntax.

# Purpose
The purpose of this repository is to provide a command-line utility to do whatever it is that you need to automate.

# Run Locally
Pre-requisites:
Install NPM - Node Package Manager
Install GIT or Git-for-Windows

Open your favorite CLI/Powershell/BASH/CMD tool.
Navigate to your favorite projects folder.
Enter the command:
    git clone https://github.com/SethEden/NodeJS-App.git

Navigate into the nodeJS-App folder.
Enter the command:
    npm install

You can run the command by starting from the development environment by using NPM.
Enter the command:
    npm run start

This will start the application from the development environment.

# Deploy-Build-Release
If you want to run from a production binary EXE or Mac/Linux binary you should:
1. Open the .env file and change the NODE_ENV=production & save the file.
2. Enter the command:
    npm run deploy
3. Enter the command (yes again):
    npm run deploy
4. enter the command:
    npm run release
5. You will find binary files packaged in the root of the bin folder, and also delivered as part of the zip package in the Release folder.

Simply run this exe from the command prompt and the application will start.

There are two different modes the application can run. It is set to default to the interactive command prompt mode.
If you open the file: ./src/Application/nodeJS-App/Resources/Configuration/Configuration.xml and look for the setting: ArgumentDrivenInterface change the value="False" to value="True" then the application will run in an argument driven mode.
NOTE: You will need to run the Deploy-Build-Release workflow detailed above again if you wish to execute the binary file using the ArgumentDrivenInterface.

NOTE: When you fun the npm run deploy command step above, it will output a validation of the constants system:
```
BEGIN build.deployApplication Function
PASSED -- Basic Constants Phase 1 Validation -- PASSED
PASSED -- Color Constants Phase 1 Validation -- PASSED
PASSED -- Element Constants Phase 1 Validation -- PASSED
PASSED -- Generic Constants Phase 1 Validation -- PASSED
PASSED -- Isotope Constants Phase 1 Validation -- PASSED
PASSED -- Numerical Constants Phase 1 Validation -- PASSED
PASSED -- Phonics Constants Phase 1 Validation -- PASSED
PASSED -- Shape Constants Phase 1 Validation -- PASSED
PASSED -- System Constants Phase 1 Validation -- PASSED
PASSED -- Units Constants Phase 1 Validation -- PASSED
PASSED -- Word Constants Phase 1 Validation -- PASSED
PASSED -- Basic Constants Phase 2 Validation -- PASSED
PASSED -- Color Constants Phase 2 Validation -- PASSED
PASSED -- Element Constants Phase 2 Validation -- PASSED
PASSED -- Generic Constants Phase 2 Validation -- PASSED
PASSED -- Isotope Constants Phase 2 Validation -- PASSED
PASSED -- Numerical Constants Phase 2 Validation -- PASSED
PASSED -- Phonics Constants Phase 2 Validation -- PASSED
PASSED -- Shape Constants Phase 2 Validation -- PASSED
PASSED -- System Constants Phase 2 Validation -- PASSED
PASSED -- Units Constants Phase 2 Validation -- PASSED
PASSED -- Word Constants Phase 2 Validation -- PASSED
DEPLOY APPLICATION
Deployment was completed: true
END build.deployApplication Function
BEGIN build.releaseApplication Function
PASSED -- Basic Constants Phase 1 Validation -- PASSED
PASSED -- Color Constants Phase 1 Validation -- PASSED
PASSED -- Element Constants Phase 1 Validation -- PASSED
PASSED -- Generic Constants Phase 1 Validation -- PASSED
PASSED -- Isotope Constants Phase 1 Validation -- PASSED
PASSED -- Numerical Constants Phase 1 Validation -- PASSED
PASSED -- Phonics Constants Phase 1 Validation -- PASSED
PASSED -- Shape Constants Phase 1 Validation -- PASSED
PASSED -- System Constants Phase 1 Validation -- PASSED
PASSED -- Units Constants Phase 1 Validation -- PASSED
PASSED -- Word Constants Phase 1 Validation -- PASSED
PASSED -- Basic Constants Phase 2 Validation -- PASSED
PASSED -- Color Constants Phase 2 Validation -- PASSED
PASSED -- Element Constants Phase 2 Validation -- PASSED
PASSED -- Generic Constants Phase 2 Validation -- PASSED
PASSED -- Isotope Constants Phase 2 Validation -- PASSED
PASSED -- Numerical Constants Phase 2 Validation -- PASSED
PASSED -- Phonics Constants Phase 2 Validation -- PASSED
PASSED -- Shape Constants Phase 2 Validation -- PASSED
PASSED -- System Constants Phase 2 Validation -- PASSED
PASSED -- Units Constants Phase 2 Validation -- PASSED
PASSED -- Word Constants Phase 2 Validation -- PASSED
RELEASE APPLICATION
Release was completed: true
END build.releaseApplication Function
```

This is a static-code analysis tool that runs and validates the contents of the constants files in the code base of the application.
If you launch the application you can actually run this validation yourself manually:
    validateConstants

This does a 2-phase validation, first it will validate that all of the constants have matching constants validation entries (essentially are we going to validate everything), ancillary to that it will check to make sure all constants are formatted with a "c" prefix indicating that it is a constant.
Second it will validate each constant to confirm that the constant resolves to the value that it is expected to resolve to. (essentially is the constant equal to the value it should be equal to)

# Useful stuff you can do
I will assume you are still running in the ArgumentDrivenInterface value="False" mode for this tutorial.
Once you enter the command: npm run start
The application will display the application name, version number and application description:

```
BEGIN application.application Function
BEGIN main program loop
BEGIN command parser
.__   __.   ______    _______   _______        __       _______.          ___      .______   .______
|  \ |  |  /  __  \  |       \ |   ____|      |  |     /       |         /   \     |   _  \  |   _  \
|   \|  | |  |  |  | |  .--.  ||  |__         |  |    |   (----` ______ /  ^  \    |  |_)  | |  |_)  |
|  . `  | |  |  |  | |  |  |  ||   __|  .--.  |  |     \   \    |______/  /_\  \   |   ___/  |   ___/
|  |\   | |  `--'  | |  '--'  ||  |____ |  `--'  | .----)   |         /  _____  \  |  |      |  |
|__| \__|  \______/  |_______/ |_______| \______/  |_______/         /__/     \__\ | _|      | _|

1.4.0
A basic NodeJS template App that can be easily re-used and forked to make many different kinds of apps written with ES6 syntax.
>
```

The application is now running and awaiting input.
If you are not sure what you can do, you can type the command: ? and press enter.
You should see a table of commands:
```
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
� (index) �            Name            �                                                          Description                                                          �
+---------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------�
�    0    �       'echoCommand'        �                                        'Echos back whatever is input to the command.'                                         �
�    1    �           'exit'           �                                              'Exit the application completely.'                                               �
�    2    �         'version'          �                                      'Displays the current version of the application.'                                       �
�    3    �          'about'           �                                   'Displays the about message for the current application.'                                   �
�    4    �           'name'           �                                'Displays a message with the name of the current application.'                                 �
�    5    �    'deployApplication'     �                              'Deploy the application as part of the build-deploy-release cycle.'                              �
�    6    �    'releaseApplication'    �                             'Release the application as part of the build-deploy-release cycle.'                              �
�    7    �           'help'           �                                    'Displays all of the commands names and descriptions.'                                     �
�    8    �       'workflowHelp'       �                                        'Displays all the workflows, names and values.'                                        �
�    9    �     'commandSequencer'     �                         'Takes a sequence of commands/aliases and enqueues all to the command queue.'                         �
�   10    �         'workflow'         �                  'Loads the specified workflow, calls the command sequencer to get each commands enqueued.'                   �
�   11    �      'printDataHive'       � 'Prints the specified data hive (CommandWorkflows, CommandsAliases, Colors, Configuration, or root) in the D-data structure.' �
�   12    �     'clearDataStorage'     �                       'Clears a sub-data hive or the entire Data Storage hive in the D-data structure.'                       �
�   13    �       'businessRule'       �                               'Executes a user specified business rule and prints the results.'                               �
�   14    �     'commandGenerator'     �                           'Generates and enqueues any number of command calls based on user input.'                           �
�   15    �   'businessRulesMetrics'   �                     'Computes statistics on business rule performance metrics and displays the results.'                      �
�   16    �      'commandMetrics'      �                        'Computes statistics on command performance metrics and displays the results.'                         �
�   17    �      'convertColors'       �                         'Converts all the colors in the color library from hex values to RGB values.'                         �
�   18    �    'validateConstants'     �                                'Validates all constants with a 2-phase verification process.'                                 �
�   19    �    'customEchoCommand'     �                    'A client defined custom Echo command that echos back the input plus something extra.'                     �
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+

One thing you can do is type: workflow? and press enter.
This will display a list of all the workflows the application supports:
+----------------------------------------------------------------------------------+
� (index) �                                  Name                                  �
+---------+------------------------------------------------------------------------�
�    0    �                               'startup'                                �
�    1    �                                'build'                                 �
�    2    �                               'release'                                �
�    3    �                               'details'                                �
�    4    �                           'stringToBoolean'                            �
�    5    �                           'stringToDataType'                           �
�    6    �                       'determineObjectDataType'                        �
�    7    �                              'isBoolean'                               �
�    8    �                              'isInteger'                               �
�    9    �                               'isFloat'                                �
�   10    �                               'isString'                               �
�   11    �                      'singleQuoteSwapAfterEquals'                      �
�   12    �                     'swapForwardSlashToBackSlash'                      �
�   13    �                     'swapBackSlashToForwardSlash'                      �
�   14    �              'swapDoubleForwardSlashToSingleForwardSlash'              �
�   15    �                 'swapDoubleBackSlashToSingleBackSlash'                 �
�   16    �                         'getUserNameFromEmail'                         �
�   17    �                        'replaceSpacesWithPlus'                         �
�   18    �                      'replaceColonWithUnderscore'                      �
�   19    �                    'replaceCharacterWithCharacter'                     �
�   20    �                    'cleanCarriageReturnFromString'                     �
�   21    �                       'convertStringToLowerCase'                       �
�   22    �                       'convertStringToUpperCase'                       �
�   23    �                         'getFileNameFromPath'                          �
�   24    �                           'getFileExtension'                           �
�   25    �                      'removeDotFromFileExtension'                      �
�   26    �                   'removeFileExtensionFromFileName'                    �
�   27    �            'aggregateNumericalDifferenceBetweenTwoStrings'             �
�   28    �                    'convertCamelCaseStringToArray'                     �
�   29    �                    'convertArrayToCamelCaseString'                     �
�   30    �                        'mapWordToCamelCaseWord'                        �
�   31    �                     'simplifyAndConsolidateString'                     �
�   32    �               'compareSimplifiedAndConsolidatedStrings'                �
�   33    �             'doesArrayContainLowerCaseConsolidatedString'              �
�   34    �                      'doesArrayContainCharacter'                       �
�   35    �                       'removeCharacterFromArray'                       �
�   36    �                      'ascertainMatchingFilenames'                      �
�   37    �                       'doesArrayContainFilename'                       �
�   38    �                  'getDataCatagoryFromDataContextName'                  �
�   39    �             'getDataCatagoryDetailNameFromDataContextName'             �
�   40    �                  'getKeywordNameFromDataContextName'                   �
�   41    �                         'parseSystemRootPath'                          �
�   42    �                   'replaceDoublePercentWithMessage'                    �
�   43    �                 'removeXnumberOfFoldersFromEndOfPath'                  �
�   44    �                    'getFirstTopLevelFolderFromPath'                    �
�   45    �                                'isOdd'                                 �
�   46    �                                'isEven'                                �
�   47    �                       'replaceCharacterAtIndex'                        �
�   48    �                            'stringParsing'                             �
�   49    �          'randomlyGenerateMixedCaseLetterOrSpecialCharacter'           �
�   50    �          'randomlyGenerateUpperCaseLetterOrSpecialCharacter'           �
�   51    �          'randomlyGenerateLowerCaseLetterOrSpecialCharacter'           �
�   52    �   'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter'    �
�   53    �   'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter'    �
�   54    �   'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter'    �
�   55    �            'randomlyGenerateMixedCaseAlphaNumericCharacter'            �
�   56    �            'randomlyGenerateUpperCaseAlphaNumericCharacter'            �
�   57    �            'randomlyGenerateLowerCaseAlphaNumericCharacter'            �
�   58    �                   'randomlyGenerateNumericCharacter'                   �
�   59    �                   'randomlyGenerateSpecialCharacter'                   �
�   60    �                    'randomlyGenerateNumberInRange'                     �
�   61    �                     'randomlyGenerateBooleanValue'                     �
�   62    �             'randomlyGenerateMixedCaseAlphabeticCharacter'             �
�   63    �                   'randomlyGenerateLowerCaseLetter'                    �
�   64    �                   'randomlyGenerateUpperCaseLetter'                    �
�   65    �                    'convertNumberToUpperCaseLetter'                    �
�   66    �                    'convertNumberToLowerCaseLetter'                    �
�   67    �                         'characterGeneration'                          �
�   68    �                 'generateRandomMixedCaseTextByLength'                  �
�   69    �                 'generateRandomUpperCaseTextByLength'                  �
�   70    �                 'generateRandomLowerCaseTextByLength'                  �
�   71    �       'generateRandomMixedCaseTextWithSpecialCharactersByLength'       �
�   72    �       'generateRandomUpperCaseTextWithSpecialCharactersByLength'       �
�   73    �       'generateRandomLowerCaseTextWithSpecialCharactersByLength'       �
�   74    �           'generateRandomMixedCaseAlphaNumericCodeByLength'            �
�   75    �           'generateRandomUpperCaseAlphaNumericCodeByLength'            �
�   76    �           'generateRandomLowerCaseAlphaNumericCodeByLength'            �
�   77    �                  'generateRandomNumericCodeByLength'                   �
�   78    � 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength' �
�   79    � 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength' �
�   80    � 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength' �
�   81    �              'generateRandomSpecialCharacterCodeByLength'              �
�   82    �                         'generateValidEmail1'                          �
�   83    �                        'generateInvalidEmail1'                         �
�   84    �                         'generateValidEmail2'                          �
�   85    �                        'generateInvalidEmail2'                         �
�   86    �                           'stringGeneration'                           �
�   87    �              'stringParsingCharacterAndStringGeneration'               �
�   88    �                               'charGen'                                �
�   89    �                              'stringGen'                               �
�   90    �                              'generators'                              �
�   91    �                         'businessRulesMetrics'                         �
�   92    �                            'commandMetrics'                            �
�   93    �                          'hex2rgbConversion'                           �
�   94    �                              'workflow1'                               �
�   95    �                              'workflow2'                               �
+----------------------------------------------------------------------------------+
```

You can run any of these workflows simply by typing the command:
workflow <Workflow-Name> and press enter.
I recommend the following command:
    workflow stringParsingCharacterAndStringGeneration

This will run all of the business rules sequentially.
After this you can run the command:
    businessRulesMetrics

This will display a table of performance statistics from the workflow you just performed:
```
+------------------------------------------------------------------------------------------------------------------+
� (index) �                                  Name                                  � Average �  StandardDeviation  �
+---------+------------------------------------------------------------------------+---------+---------------------�
�    0    �                           'stringToBoolean'                            �    0    �          0          �
�    1    �                           'stringToDataType'                           �  0.25   � 0.4330127018922193  �
�    2    �                       'determineObjectDataType'                        �  0.25   � 0.4330127018922193  �
�    3    �                              'isBoolean'                               �    0    �          0          �
�    4    �                              'isInteger'                               �    0    �          0          �
�    5    �                               'isFloat'                                �    0    �          0          �
�    6    �                               'isString'                               �    0    �          0          �
�    7    �                      'singleQuoteSwapAfterEquals'                      �  0.25   � 0.4330127018922193  �
�    8    �                     'swapForwardSlashToBackSlash'                      �  0.25   � 0.4330127018922193  �
�    9    �                     'swapBackSlashToForwardSlash'                      �    0    �          0          �
�   10    �              'swapDoubleForwardSlashToSingleForwardSlash'              �    0    �          0          �
�   11    �                 'swapDoubleBackSlashToSingleBackSlash'                 �  0.25   � 0.4330127018922193  �
�   12    �                         'getUserNameFromEmail'                         �    0    �          0          �
�   13    �                        'replaceSpacesWithPlus'                         �  0.25   � 0.4330127018922193  �
�   14    �                      'replaceColonWithUnderscore'                      �    0    �          0          �
�   15    �                    'replaceCharacterWithCharacter'                     �  0.25   � 0.4330127018922193  �
�   16    �                    'cleanCarriageReturnFromString'                     �  0.25   � 0.4330127018922193  �
�   17    �                       'convertStringToLowerCase'                       �  0.25   � 0.4330127018922193  �
�   18    �                       'convertStringToUpperCase'                       �    0    �          0          �
�   19    �                         'getFileNameFromPath'                          �  0.25   � 0.4330127018922193  �
�   20    �                           'getFileExtension'                           �    0    �          0          �
�   21    �                      'removeDotFromFileExtension'                      �    0    �          0          �
�   22    �                   'removeFileExtensionFromFileName'                    �    0    �          0          �
�   23    �            'aggregateNumericalDifferenceBetweenTwoStrings'             �  1.75   � 0.4330127018922193  �
�   24    �                    'convertCamelCaseStringToArray'                     �    0    �          0          �
�   25    �                    'convertArrayToCamelCaseString'                     �    0    �          0          �
�   26    �                        'mapWordToCamelCaseWord'                        �    0    �          0          �
�   27    �                     'simplifyAndConsolidateString'                     �    0    �          0          �
�   28    �               'compareSimplifiedAndConsolidatedStrings'                �    0    �          0          �
�   29    �             'doesArrayContainLowerCaseConsolidatedString'              �  8.25   �  1.299038105676658  �
�   30    �                      'doesArrayContainCharacter'                       �  0.25   � 0.4330127018922193  �
�   31    �                       'removeCharacterFromArray'                       �    0    �          0          �
�   32    �                      'ascertainMatchingFilenames'                      �  0.25   � 0.4330127018922193  �
�   33    �                       'doesArrayContainFilename'                       �    0    �          0          �
�   34    �                  'getDataCatagoryFromDataContextName'                  �    0    �          0          �
�   35    �             'getDataCatagoryDetailNameFromDataContextName'             �    0    �          0          �
�   36    �                  'getKeywordNameFromDataContextName'                   �    0    �          0          �
�   37    �                         'parseSystemRootPath'                          �    0    �          0          �
�   38    �                 'removeXnumberOfFoldersFromEndOfPath'                  �    0    �          0          �
�   39    �                    'getFirstTopLevelFolderFromPath'                    �  0.25   � 0.4330127018922193  �
�   40    �                                'isOdd'                                 �  0.25   � 0.4330127018922193  �
�   41    �                                'isEven'                                �  0.25   � 0.4330127018922193  �
�   42    �                       'replaceCharacterAtIndex'                        �    0    �          0          �
�   43    �          'randomlyGenerateMixedCaseLetterOrSpecialCharacter'           �    0    �          0          �
�   44    �          'randomlyGenerateUpperCaseLetterOrSpecialCharacter'           �    0    �          0          �
�   45    �          'randomlyGenerateLowerCaseLetterOrSpecialCharacter'           �   0.1   � 0.30000000000000004 �
�   46    �   'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter'    �   0.5   �         0.5         �
�   47    �   'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter'    �   0.1   � 0.30000000000000004 �
�   48    �   'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter'    �   0.1   � 0.30000000000000004 �
�   49    �            'randomlyGenerateMixedCaseAlphaNumericCharacter'            �   0.1   � 0.30000000000000004 �
�   50    �            'randomlyGenerateUpperCaseAlphaNumericCharacter'            �   0.3   � 0.45825756949558405 �
�   51    �            'randomlyGenerateLowerCaseAlphaNumericCharacter'            �    0    �          0          �
�   52    �                   'randomlyGenerateNumericCharacter'                   �    0    �          0          �
�   53    �                   'randomlyGenerateSpecialCharacter'                   �    0    �          0          �
�   54    �                    'randomlyGenerateNumberInRange'                     �   0.1   � 0.30000000000000004 �
�   55    �                     'randomlyGenerateBooleanValue'                     �   0.1   � 0.30000000000000004 �
�   56    �             'randomlyGenerateMixedCaseAlphabeticCharacter'             �    0    �          0          �
�   57    �                    'convertNumberToUpperCaseLetter'                    �   0.1   � 0.30000000000000004 �
�   58    �                    'convertNumberToLowerCaseLetter'                    �   0.1   � 0.30000000000000004 �
�   59    �                 'generateRandomMixedCaseTextByLength'                  �   6.5   �         0.5         �
�   60    �                 'generateRandomUpperCaseTextByLength'                  �   6.4   �  0.66332495807108   �
�   61    �                 'generateRandomLowerCaseTextByLength'                  �   6.2   � 0.39999999999999997 �
�   62    �       'generateRandomMixedCaseTextWithSpecialCharactersByLength'       �   6.2   � 0.39999999999999997 �
�   63    �       'generateRandomUpperCaseTextWithSpecialCharactersByLength'       �   6.1   � 0.29999999999999993 �
�   64    �       'generateRandomLowerCaseTextWithSpecialCharactersByLength'       �   6.1   �         0.3         �
�   65    �           'generateRandomMixedCaseAlphaNumericCodeByLength'            �   6.3   � 0.45825756949558405 �
�   66    �           'generateRandomUpperCaseAlphaNumericCodeByLength'            �   5.8   � 0.39999999999999997 �
�   67    �           'generateRandomLowerCaseAlphaNumericCodeByLength'            �   6.4   � 0.9165151389911681  �
�   68    �                  'generateRandomNumericCodeByLength'                   �   6.1   � 0.5385164807134504  �
�   69    � 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength' �   6.3   � 0.45825756949558405 �
�   70    � 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength' �   6.4   �  0.66332495807108   �
�   71    � 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength' �   6.2   � 0.39999999999999997 �
�   72    �              'generateRandomSpecialCharacterCodeByLength'              �   4.7   � 0.45825756949558405 �
�   73    �                          'generateValidEmail'                          �   5.7   � 0.5567764362830021  �
�   74    �                         'generateInvalidEmail'                         �  3.25   �  3.031088913245535  �
+------------------------------------------------------------------------------------------------------------------+
```

# Exit / Quit
To exit the application simply type the command:
    x
or X, or exit or Exit or quit

You should see the following output on exit:
```
>x
END command parser
END main program loop
Exiting, Good bye, Have a nice day & stay safe!
END application.application Function
```

# Debugging
If you want to or need to debug any part of the application, or you are building on some business rules and adding functions that you want to debug.
Simply continue to follow the existing patterns in the code then add your functions to the Configuration.xml file with a color schema for your logs:
```
<ConfigurationElement Name="nominal.name" Type="Default" Value="False" Version="3"/>
<ConfigurationElement Name="nominal.name@ModuleFontStyle" Type="Default" Value="Default" Version="3"/>
<ConfigurationElement Name="nominal.name@FunctionFontStyle" Type="Default" Value="Default" Version="3"/>
<ConfigurationElement Name="nominal.name@MessageFontStyle" Type="Default" Value="Default" Version="3"/>
<ConfigurationElement Name="nominal.name@DataFontStyle" Type="Default" Value="Default" Version="3"/>
<ConfigurationElement Name="nominal.name@ModuleFontColor" Type="Default" Value="Blue" Version="3"/>
<ConfigurationElement Name="nominal.name@FunctionFontColor" Type="Default" Value="Blue" Version="3"/>
<ConfigurationElement Name="nominal.name@MessageFontColor" Type="Default" Value="Blue" Version="3"/>
<ConfigurationElement Name="nominal.name@DataFontColor" Type="Default" Value="Yellow" Version="3"/>
<ConfigurationElement Name="nominal.name@ModuleFontBackgroundColor" Type="Default" Value="Black" Version="3"/>
<ConfigurationElement Name="nominal.name@FunctionFontBackgroundColor" Type="Default" Value="Black" Version="3"/>
<ConfigurationElement Name="nominal.name@MessageFontBackgroundColor" Type="Default" Value="Black" Version="3"/>
<ConfigurationElement Name="nominal.name@DataFontBackgroundColor" Type="Default" Value="Black" Version="3"/>
```

If you want to debug any function in the entire framework you can find it listed here, just change the Value="False" to Value="True" like so:
From:
    <ConfigurationElement Name="nominal.name" Type="Default" Value="False" Version="3"/>
To:
    <ConfigurationElement Name="nominal.name" Type="Default" Value="True" Version="3"/>

Save the file, and if you are running from a binary file you will need to re-run the Deploy-Build-Release workflow detailed above.
In any event, when you run the application again you should see this function logged every time it is called. In this case the function is a command.
The output should look something like this on startup:
```
BEGIN application.application Function
BEGIN main program loop
BEGIN command parser
BEGIN nominal.name Function
inputData Is: ["name","true"]
inputMetaData Is:
.__   __.   ______    _______   _______        __       _______.          ___      .______   .______
|  \ |  |  /  __  \  |       \ |   ____|      |  |     /       |         /   \     |   _  \  |   _  \
|   \|  | |  |  |  | |  .--.  ||  |__         |  |    |   (----` ______ /  ^  \    |  |_)  | |  |_)  |
|  . `  | |  |  |  | |  |  |  ||   __|  .--.  |  |     \   \    |______/  /_\  \   |   ___/  |   ___/
|  |\   | |  `--'  | |  '--'  ||  |____ |  `--'  | .----)   |         /  _____  \  |  |      |  |
|__| \__|  \______/  |_______/ |_______| \______/  |_______/         /__/     \__\ | _|      | _|

returnData Is: true
END nominal.name Function
1.4.0
A basic NodeJS template App that can be easily re-used and forked to make many different kinds of apps written with ES6 syntax.
>
```

Notice this time we have the following output lines:
BEGIN nominal.name Function
    inputData Is: ["name","true"]
    inputMetaData Is:

and:
    returnData Is: true
    END nominal.name Function

These are the debugging lines included in this command function.
    BEGIN nominal.name Function - is logged from when the execution of the function begins.
    inputData Is: ["name","true"] - logs the first input to the function.
    inputMetaData Is: - logs the second input to the function, in this case it's an empty string because we don't use the second input.

    returnData Is: true - logs the return from the function. In the case of commands they should always return true to indicate that the application should continue to execute, provided it is in the interactive mode and the ArgumentDrivenInterface configuration setting is set to False. The only time a command function should return false is if it is going to exit, which is exactly what the Exit command does.
    END nominal.name Function - logs the end of the function 1 line of code before the actual return/end of the function.

You can also enable logging for an entire file/class of functions simply by changing the configuration setting for a particular file/class.
Here you can see the configuration setting for the warden.js which acts as a central control manager for execution of the entire application/framework:
```
<ConfigurationElement Name="warden" Type="Default" Value="False" Version="3"/>
<ConfigurationElement Name="warden@ModuleFontStyle" Type="Default" Value="Bold|Underline" Version="3"/>
<ConfigurationElement Name="warden@FunctionFontStyle" Type="Default" Value="Bold|Underline" Version="3"/>
<ConfigurationElement Name="warden@MessageFontStyle" Type="Default" Value="Underline" Version="3"/>
<ConfigurationElement Name="warden@DataFontStyle" Type="Default" Value="Bold" Version="3"/>
<ConfigurationElement Name="warden@ModuleFontColor" Type="Default" Value="Red" Version="3"/>
<ConfigurationElement Name="warden@FunctionFontColor" Type="Default" Value="Red" Version="3"/>
<ConfigurationElement Name="warden@MessageFontColor" Type="Default" Value="Red" Version="3"/>
<ConfigurationElement Name="warden@DataFontColor" Type="Default" Value="Yellow" Version="3"/>
<ConfigurationElement Name="warden@ModuleFontBackgroundColor" Type="Default" Value="Black" Version="3"/>
<ConfigurationElement Name="warden@FunctionFontBackgroundColor" Type="Default" Value="Black" Version="3"/>
<ConfigurationElement Name="warden@MessageFontBackgroundColor" Type="Default" Value="Black" Version="3"/>
<ConfigurationElement Name="warden@DataFontBackgroundColor" Type="Default" Value="Black" Version="3"/>
```

If I change the Value="False" to Value="True" such as: (NOTE: I have reverted the name debugging setting above for nominal.name, changed it back to "False")
From:
    <ConfigurationElement Name="warden" Type="Default" Value="False" Version="3"/>
To:
    <ConfigurationElement Name="warden" Type="Default" Value="True" Version="3"/>

Save the file and then re-run the application the startup should log something like this:
```
END warden.mergeClientCommands Function
BEGIN warden.loadCommandAliases Function
systemCommandsAliasesPath is: src/Framework/Resources/Commands/
clientCommandsAliasesPath is: /src/Application/nodeJS-App/Resources/Commands/
END warden.loadCommandAliases Function
BEGIN warden.loadCommandWorkflows Function
systemWorkflowPath is: src/Framework/Resources/Workflows/
clientWorkflowPath is: /src/Application/nodeJS-App/Resources/Workflows/
END warden.loadCommandWorkflows Function
BEGIN application.application Function
BEGIN main program loop
BEGIN command parser
BEGIN warden.getConfigurationSetting Function
configurationName is: ArgumentDrivenInterface
returnConfigurationValue is: false
END warden.getConfigurationSetting Function
BEGIN warden.enqueueCommand Function
command is: Workflow startup
END warden.enqueueCommand Function
BEGIN warden.isCommandQueueEmpty Function
returnValue is: false
END warden.isCommandQueueEmpty Function
BEGIN warden.processCommandQueue Function
returnValue is: true
END warden.processCommandQueue Function
BEGIN warden.isCommandQueueEmpty Function
returnValue is: false
END warden.isCommandQueueEmpty Function
BEGIN warden.processCommandQueue Function
returnValue is: true
END warden.processCommandQueue Function
BEGIN warden.isCommandQueueEmpty Function
returnValue is: false
END warden.isCommandQueueEmpty Function
BEGIN warden.processCommandQueue Function
.__   __.   ______    _______   _______        __       _______.          ___      .______   .______
|  \ |  |  /  __  \  |       \ |   ____|      |  |     /       |         /   \     |   _  \  |   _  \
|   \|  | |  |  |  | |  .--.  ||  |__         |  |    |   (----` ______ /  ^  \    |  |_)  | |  |_)  |
|  . `  | |  |  |  | |  |  |  ||   __|  .--.  |  |     \   \    |______/  /_\  \   |   ___/  |   ___/
|  |\   | |  `--'  | |  '--'  ||  |____ |  `--'  | .----)   |         /  _____  \  |  |      |  |
|__| \__|  \______/  |_______/ |_______| \______/  |_______/         /__/     \__\ | _|      | _|

returnValue is: true
END warden.processCommandQueue Function
BEGIN warden.isCommandQueueEmpty Function
returnValue is: false
END warden.isCommandQueueEmpty Function
BEGIN warden.processCommandQueue Function
1.4.0
returnValue is: true
END warden.processCommandQueue Function
BEGIN warden.isCommandQueueEmpty Function
returnValue is: false
END warden.isCommandQueueEmpty Function
BEGIN warden.processCommandQueue Function
A basic NodeJS template App that can be easily re-used and forked to make many different kinds of apps written with ES6 syntax.
returnValue is: true
END warden.processCommandQueue Function
BEGIN warden.isCommandQueueEmpty Function
returnValue is: true
END warden.isCommandQueueEmpty Function
>
```

Here you can see that a large number of functions have been called, as well as the inputs to some functions and also some of the variables that are being set and processed inside some functions. So if you want to see what is going on inside the application while it is running this is an excellent developers tool that allows you to control what is logged from where and when and even in what color/font-style.

# Plugins

This is where we will document the process of creating a new plugin so code from an external repo can be loaded at runtime and custom external commands and business rules can be called.
