# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.7.0](https://github.com/SethEden/NodeJS-App/compare/v1.0.6...v1.7.0) (2021-06-29)


### Features

* Add build & release workflows and connect those up to the actual build & deploy workflows establishing the constants validation as a gate-keeper to the build & release processes. ([10d74b1](https://github.com/SethEden/NodeJS-App/commit/10d74b155c84fd7cdb34e94b7a9eb45ae55b132a))
* Add full context path to each setting for full visibility, we will need to handle how each log is handled in each file, but that can be dealt with using the constants system. ([824a882](https://github.com/SethEden/NodeJS-App/commit/824a8826596a2dea238e8769442c5dddde39e2fc))
* Add full folder path to the namespace of each debug setting so the configuration system can save settings as well as it should be able to load them. ([3fa42d4](https://github.com/SethEden/NodeJS-App/commit/3fa42d4559b50bbb83351e9f7d87c71891d0d97c))
* Add the constants lists to the repo so I can work on a different computer temporarly. ([449804c](https://github.com/SethEden/NodeJS-App/commit/449804c4edb61e8e59f6956ad02ea1667dd7032b))
* Add the new command alias validation system with a pass message and start implementing the new command alias generation system. ([9412deb](https://github.com/SethEden/NodeJS-App/commit/9412deb0428b2227a8bd6c26dafe6c6d35533963))
* Adding new environment files to better manage DEV & PROD file paths. ([d6e0b51](https://github.com/SethEden/NodeJS-App/commit/d6e0b517429f563fa2bf034ff50ffa944831c695))
* Build an automated application meta-data deployment system and integrate it with the rest of the build-deploy cycle. ([098e7a7](https://github.com/SethEden/NodeJS-App/commit/098e7a72aa112853f368aaa988c8f7ade6aadd93))
* Clean up the code after a fully successfull build-deploy-release integration with the command engine. ([45108ed](https://github.com/SethEden/NodeJS-App/commit/45108edc2f1715a1b043a34712c2f3bc7859efca))
* Cleaned up the command alias system, stubbed out a command alias verification unit test and also moved the argument driven command process to the init of the application so even if the application is running in interactive mode, command arguments will still be processed first. ([7927c01](https://github.com/SethEden/NodeJS-App/commit/7927c011c1ddc301e716e74b80f87cad6ad00cc7))
* Continue trying to build out the command alias generator by solving the Lehmer Code algorthim. ([1cd5d22](https://github.com/SethEden/NodeJS-App/commit/1cd5d221a3181009c92661650c046409df875e2b))
* Define a bunch of new constants, still a mess. ([f7d0a68](https://github.com/SethEden/NodeJS-App/commit/f7d0a6822821804c7234dbce49d538535dbd834e))
* Final alignment of command aliases using the new command alias generator system. ([f3edd70](https://github.com/SethEden/NodeJS-App/commit/f3edd70c2175342a64c220db7270d540405b5b14))
* Finally build the new command alias verification system and integrate it with the build-deploy system. ([0f408a9](https://github.com/SethEden/NodeJS-App/commit/0f408a974f0ec27565246e7e246ff4c64e962c81))
* Finally finished refactoring all of the hard coded strings out of all of the code files. Phase 1 constants refactor complete. ([8705a21](https://github.com/SethEden/NodeJS-App/commit/8705a21dcb6790524ab55e981c36dbd72d1cfdd0))
* Finish building and debugging the constants verification system. ([9f44103](https://github.com/SethEden/NodeJS-App/commit/9f44103ceb022395d25bfef8ddd2b12eb173a972))
* Finish building out the feature set for the new bossPanic command and add bossPanic workflows, finally cleaned up a big mess of constants definitions and messages. Also rolling a new version. ([ddfbcea](https://github.com/SethEden/NodeJS-App/commit/ddfbcea3e1e3e572de9eeb5796532bf906ba6378))
* Finish fixing all the impacts from the constants validation refactor process. ([9e42466](https://github.com/SethEden/NodeJS-App/commit/9e4246689f6c8118a0d1498692ff5f6f746c5204))
* Finish implementing the basic generate constant functionality. ([56bc067](https://github.com/SethEden/NodeJS-App/commit/56bc0679067b450fa5db6e35ebca196bb48d4cab))
* Finish implementing the new command alias generator system and make sure it's working properly. ([1c9c3db](https://github.com/SethEden/NodeJS-App/commit/1c9c3db9eba5ddca493c978863513970b3543d1b))
* Finish implementing the new constants pattern recognition system. ([0c40eae](https://github.com/SethEden/NodeJS-App/commit/0c40eaed5c73d0e71d261b7ba285471aecbc97fc))
* Finish refactoring all of the constants colors to be dynamically defined. ([b8a1d0c](https://github.com/SethEden/NodeJS-App/commit/b8a1d0c799a41ee40cbb3e7aeec8af94da447c16))
* Finish refactoring constants for countries and elements of the perodic table. ([04754d1](https://github.com/SethEden/NodeJS-App/commit/04754d126282592591862fe3bf6742ea07d5d28c))
* Finish refactoring the constants for the stringGeneration business rules, and also some minor refactoring of login in the stringParsing business rules. ([160ed47](https://github.com/SethEden/NodeJS-App/commit/160ed471139755039426228cc1da32b86e010756))
* Finish refactoring the stringParsing functions that work with arrays into a new business rules file arrayParsing. ([a2dc437](https://github.com/SethEden/NodeJS-App/commit/a2dc437c2618230d4f6354760ff2d86f73b303fb))
* Finish standardizing the constants files and start fleshing out the constants validation object files. ([b494db6](https://github.com/SethEden/NodeJS-App/commit/b494db6cb857a8671ee6fc1178aa767966e633cf))
* Finished building the new argument driven interface. ([883a3c1](https://github.com/SethEden/NodeJS-App/commit/883a3c1d3f95434466c518ab104adc3e2dbb59ee))
* Fix up the mess by cleaning up the new constants definitions. ([289fe6a](https://github.com/SethEden/NodeJS-App/commit/289fe6a237623c1a294e5d459ad51dfdeb06813e))
* Forgot one small change to the shapes constants file. ([749557a](https://github.com/SethEden/NodeJS-App/commit/749557aa6d3a27877129c9e7cbd11519e96eb488))
* Generating new words from the auto-generated colors constants, cleaning up and refactoring for optimization. ([c858c93](https://github.com/SethEden/NodeJS-App/commit/c858c937e145a0653477a6058d9227151ac65cf4))
* Get the configuration data to be saved out to a json file so we can start to refactor the configuration data. ([275f604](https://github.com/SethEden/NodeJS-App/commit/275f604876e4727964ca9435966af4c48745506c))
* Implement a basic system to query the user for a new constant to define using the constants system. ([0e102eb](https://github.com/SethEden/NodeJS-App/commit/0e102ebbe9270423051ae94492f9ca9045b808d4))
* Implement a new system to print out attributes from the D-Data structure so we can automate the process of optimizing constants across the code base. ([524f919](https://github.com/SethEden/NodeJS-App/commit/524f9191c248071029d152f9046fa4893ba0d60d))
* Implement all the hard coded strings in the chiefCommander as constants. ([8130003](https://github.com/SethEden/NodeJS-App/commit/8130003e247f4d17d848cadb137cdee45475d6a0))
* Implement the new dynamically loaded constants validation system. Much better scalability across the whole application, and starting to future proof for the plugin system. ([e79fbe9](https://github.com/SethEden/NodeJS-App/commit/e79fbe99edd74bcf7bfd65b6cfb3b62d9545b19b))
* Implement the new feature flag for controlling if console logs are displayed with custom colors or not. ([6d827f2](https://github.com/SethEden/NodeJS-App/commit/6d827f25f5b56d26757a482dd7e4913eceb27c07))
* Implement the new screen clearning system. It is rudimentary right now, and a bit slow on the performance on account of the loop, but it does work, and it doesn't take forever. ([e09e50a](https://github.com/SethEden/NodeJS-App/commit/e09e50a955c7ce5074da3cc98eae28d0f5ac0f3c))
* Integrate the constants validation system into the build-deploy-release cycle. ([d4a19de](https://github.com/SethEden/NodeJS-App/commit/d4a19de2a17cd4d9b01013cc37471a408fd7d064))
* Make sure all the new system and client constants validation data is loaded at initialization into the D-data structure. ([5b98c35](https://github.com/SethEden/NodeJS-App/commit/5b98c357d9b4a15d4b5ed78468e4f2c7c838c028))
* Make sure we have everything in place to build a binary release, even if it's not fully integrated with the build-deploy system. ([fc6bcdb](https://github.com/SethEden/NodeJS-App/commit/fc6bcdb19f7d388e171f1489b1516f75f2354ba4))
* Migrate all the configuration settings into their respective JSON files so we can better manage the system settings and debug settings. ([2429860](https://github.com/SethEden/NodeJS-App/commit/2429860ce6719e20d392c5f35e5388e8a5734907))
* More constants refactoring. ([9e9a450](https://github.com/SethEden/NodeJS-App/commit/9e9a4507542dcd71b851328bd05971ebaaf8def8))
* Moving all data structures into a new Foundations folder for better project organization. ([27dee3a](https://github.com/SethEden/NodeJS-App/commit/27dee3acc5a8f74dd7b67c6948fd17b5a40204be))
* New binary build targets, but they are disabled because it was generating files to large for github, maybe I will enable it again if I can post them to my ftp site later. ([debc33d](https://github.com/SethEden/NodeJS-App/commit/debc33d97f412ebcaadb3c114360d2eaea19ef0b))
* Phase 1 - Refactor the logging code to include namespace Prefix. ([4176dd4](https://github.com/SethEden/NodeJS-App/commit/4176dd48eebe8bfbe4392b156a353d1f63b880fd))
* Phase 2 - Console log refactoring for all client code. ([a234474](https://github.com/SethEden/NodeJS-App/commit/a234474bc99d0d3bae787bba5765e5663d365fdd))
* Phase 3 - Final refactor of the loggers.consoleLog function callers to include full file + function namespace. ([a25e664](https://github.com/SethEden/NodeJS-App/commit/a25e6649e0d2c965ea1243bd1f4c97109f8af6f5))
* Pushed a new release and moved a few files around to keep things clean and also disabled the deployMetaData flag in the configuration file. ([53c395c](https://github.com/SethEden/NodeJS-App/commit/53c395cba7edab318ded57abac792c7f412369cf))
* Pushing code changes to start building out a new client constants validation system. ([579b9d9](https://github.com/SethEden/NodeJS-App/commit/579b9d97db198c7959d30d64f1c2b2ca0ac1e1c7))
* Re-enable the shape constants so we can generate a list from them using the new printDataHiveAttributes command. ([ec37724](https://github.com/SethEden/NodeJS-App/commit/ec377248494c56b79aedfa2c55d634a96422e74c))
* Refactor all hard coded strings in the chiefData file. ([5fc4467](https://github.com/SethEden/NodeJS-App/commit/5fc44679a98d78bd11cbecc50f23d7124b7b924f))
* Refactor all hard coded strings in the commandBroker file. ([62ec9f7](https://github.com/SethEden/NodeJS-App/commit/62ec9f766ea3a92a9fc3ff723d75d26ca4065f5a))
* Refactor all strings in the nominal commands file. ([55fdcf2](https://github.com/SethEden/NodeJS-App/commit/55fdcf2849bdf58c8ad84b920ee41cc9cb401b5a))
* Refactor all the hard coded strings to constants in the unitTests command file. ([ffc0108](https://github.com/SethEden/NodeJS-App/commit/ffc0108de68dd94011385cc1a66c294a6d182f18))
* Refactor hard coded strings in the chiefWorkflow file. ([8883fa3](https://github.com/SethEden/NodeJS-App/commit/8883fa38f63b01c5fc61c4a373de8a343a268ac0))
* Refactor the chiefConfiguration file to remove all hard coded strings. ([a113406](https://github.com/SethEden/NodeJS-App/commit/a11340627c1610380d354ddf31248c06de8aead5))
* Rename the constants files and handle all the impacts accross the code base and the constants validation processes as well. Pushing a new version. ([18c333a](https://github.com/SethEden/NodeJS-App/commit/18c333aaeb144f13a5ed620e3db0eaad3707c80b))
* Roll-back framework enhancements from commercial implementation. ([648a0ec](https://github.com/SethEden/NodeJS-App/commit/648a0ececa5e93ba32f42084232e14bc9a873ec4))
* Setup all of the initializations for doing constants validation phase 1 & phase 2. ([2e7d384](https://github.com/SethEden/NodeJS-App/commit/2e7d3841bac5de4c0ceedd0f33737878e434bc32))
* Stabilize the new constants generator commands and finish the constants generator list command. Also start on the new constants pattern recognition command. ([5f4adac](https://github.com/SethEden/NodeJS-App/commit/5f4adacad693e43af873b49f81723945df7e92e7))
* Start breaking up the constants files into smaller more specific purpose-built files by subject content. ([2256fbf](https://github.com/SethEden/NodeJS-App/commit/2256fbf7a2ee8e0fe5bac6c7cbb557701db2e464))
* Start defining the new command alias generator command. ([04f9b1a](https://github.com/SethEden/NodeJS-App/commit/04f9b1a2b2ca1768f09cb4aefdb757793bdea950))
* Start implementing a new meta-data deployment command. ([ceedf41](https://github.com/SethEden/NodeJS-App/commit/ceedf416b51d947e28186e0964e763134a5c7c76))
* Start implementing the new boss panic command. ([0240794](https://github.com/SethEden/NodeJS-App/commit/024079475e91832b084034bb746de42dd77b7fe1))
* Start implementing the new configuration flag to control the display of colorized fonts in the console logs. ([1222684](https://github.com/SethEden/NodeJS-App/commit/12226848aee08c3f99cd096b8794254fba4b0196))
* Start integrating the build-deploy-release processes with the command engine. ([81c1b52](https://github.com/SethEden/NodeJS-App/commit/81c1b5297e1de9573c3835e463c58cd9af92de9b))
* Start making progress on breaking up the constants files and establishing the new 3-character constants variable standard across the code base. ([3acb2ed](https://github.com/SethEden/NodeJS-App/commit/3acb2ede013cd0a4e20759b8bc5df0ed8c2fa541))
* Start refactoring phonics constants that we can use when redefining the colors constants. ([5ffa322](https://github.com/SethEden/NodeJS-App/commit/5ffa322a787a252713060fac409eefbf13f37b0b))
* Start refactoring the array and object related functions out of the stringParsing file and into a new file arrayParsing. Still more work to do. ([34d3fa9](https://github.com/SethEden/NodeJS-App/commit/34d3fa99f9470d9510456a37e26dcb7f813c26b1))
* Start refactoring the constants and also replacing much of the hard coded strings in the system. ([cd9905e](https://github.com/SethEden/NodeJS-App/commit/cd9905e755cff5ab46ea6a383e84bedccccd39b4))
* Start setting up the configuration save system. ([2e92b0a](https://github.com/SethEden/NodeJS-App/commit/2e92b0ae0987eddd3e1403560272a649558feb32))
* Start the implementation for the new constants generator system. ([5095c7b](https://github.com/SethEden/NodeJS-App/commit/5095c7be7de466edcd41407249a7b33b7b20049d))
* Start to enhance the constants system. ([5e4eba7](https://github.com/SethEden/NodeJS-App/commit/5e4eba7ab538acae9a81f803c0036ffe4c746733))
* Start to flesh out the new expanded constants validation data initialization sub-system. ([018511a](https://github.com/SethEden/NodeJS-App/commit/018511a6cd99c9139799747da29964ea642e2c73))
* Start to implement file based constants validation which is phase 1. ([b8427fa](https://github.com/SethEden/NodeJS-App/commit/b8427faae676179c6660fec48cffb7f038050656))
* Started on the constants refactoring for the shapes then decided to abandon the process, but left some notes and commented out unnecessary constants for future use. ([5c4e3a2](https://github.com/SethEden/NodeJS-App/commit/5c4e3a2301e27f334174464bd5b512cbd8e7a006))
* Tested and redeploy after validating both runtime modes work with binary compiled source into an exe. ([4f365d6](https://github.com/SethEden/NodeJS-App/commit/4f365d63517fff6b88331b230d8e3b5832b18561))
* Update the pattern recognition command to output auto-optimized constants for the string patterns that were found in the list. Also generate phonics constants and start generating constants using the automation system. ([2346d88](https://github.com/SethEden/NodeJS-App/commit/2346d88bda4930fe8e0c09a5006562b0d50649b2))

## 1.5.0 (2021-01-06)


### Features

* Add build & release workflows and connect those up to the actual build & deploy workflows establishing the constants validation as a gate-keeper to the build & release processes. ([10d74b1](https://github.com/SethEden/NodeJS-App/commit/10d74b155c84fd7cdb34e94b7a9eb45ae55b132a))
* Add the basic commands for the application, application name, version, about, description. ([fc12f3e](https://github.com/SethEden/NodeJS-App/commit/fc12f3e82dae5460d440536ddd12effcdc1191e3))
* Add the business rules metrics system. A few minor bugs, but it's working for the most part. ([3bfd4cd](https://github.com/SethEden/NodeJS-App/commit/3bfd4cdebcecce0fe7357da86ab66a0f0b9c236a))
* Add the capability to load command alias XML meta-data files into the D-data structure system, so we can use that data as part of the command execution architecture. ([d15a361](https://github.com/SethEden/NodeJS-App/commit/d15a3617294a83c7d2eee4bf94c6eca1e5b18a2c))
* Adding a babel transpiler with a bin build-step and version control, and testing a new version control system. ([b7dc4bd](https://github.com/SethEden/NodeJS-App/commit/b7dc4bd18f4028abef3b57a668ad80d175bfb9e6))
* Adding new environment files to better manage DEV & PROD file paths. ([d6e0b51](https://github.com/SethEden/NodeJS-App/commit/d6e0b517429f563fa2bf034ff50ffa944831c695))
* Adding warden function settings for debugging to the Configuration.xml file. ([e1a528c](https://github.com/SethEden/NodeJS-App/commit/e1a528c41deee598bdc20f97f4bba320ef92c621))
* Attempt to integrate standard-version into the build step. ([b053ca4](https://github.com/SethEden/NodeJS-App/commit/b053ca43b2687094c87a05da08439c1273d35620))
* Attempting to get the build step to automatically copy the XML configuration files. ([fbc9f1c](https://github.com/SethEden/NodeJS-App/commit/fbc9f1c58bd21c2e7555c9c3ba9f42353debd295))
* Clean up the code after a fully successfull build-deploy-release integration with the command engine. ([45108ed](https://github.com/SethEden/NodeJS-App/commit/45108edc2f1715a1b043a34712c2f3bc7859efca))
* Cleaning up some of the code and attempting again to bump the mid level version. ([edb9007](https://github.com/SethEden/NodeJS-App/commit/edb9007c522031f227b5d2c8743ec744650d0364))
* Finally got the release system up and working. Changing up the commit message to attempt to bump the mid-level version number, since this is a some-what more-or-less major update. ([166d461](https://github.com/SethEden/NodeJS-App/commit/166d46157fa1b02de391dd494c3f7a5d35153cbf))
* Finally got the release system up and working. Changing up the commit message to attempt to bump the mid-level version number, since this is a some-what more-or-less major update. Attempt 3. ([529f46b](https://github.com/SethEden/NodeJS-App/commit/529f46b6c85467e9e47e3d25d33c042b984fdb78))
* Finally got the workflow engine fully implemented and integrated with the command engine architecture and working. ([4c1befc](https://github.com/SethEden/NodeJS-App/commit/4c1befce76da3017e142f726221336af3da36bd2))
* Finish building and debugging the constants verification system. ([9f44103](https://github.com/SethEden/NodeJS-App/commit/9f44103ceb022395d25bfef8ddd2b12eb173a972))
* Finish building the help command, and the print data hive command to help with data debugging in the future. ([fd339f7](https://github.com/SethEden/NodeJS-App/commit/fd339f7ef6029791aa48dd765c7bedf09d3f7201))
* Finish standardizing the constants files and start fleshing out the constants validation object files. ([b494db6](https://github.com/SethEden/NodeJS-App/commit/b494db6cb857a8671ee6fc1178aa767966e633cf))
* Finish the color conversion from hexidecimal values to RGB values. Then copied and pasted those new values back into the color library. Using the platform to improve the platform. ([ca64a2d](https://github.com/SethEden/NodeJS-App/commit/ca64a2df9092a8ba07aaf3b8308afe1295600065))
* Finished building the new argument driven interface. ([883a3c1](https://github.com/SethEden/NodeJS-App/commit/883a3c1d3f95434466c518ab104adc3e2dbb59ee))
* Finishing adding and debugging all of the chalk colorizing systems for the console logs. ([b80de78](https://github.com/SethEden/NodeJS-App/commit/b80de78bd275b78fd16055d14480d4be988aaab8))
* Fully functional command alias system. ([62d6db3](https://github.com/SethEden/NodeJS-App/commit/62d6db36e6351c74b58f5a719100bb639c0482da))
* Implement the ascii art and colorized console logs for better visual usability of the application. ([67c80dc](https://github.com/SethEden/NodeJS-App/commit/67c80dc4ce6f78ef11e59741f3ff70cbfb1bb7ac))
* Implement the basics of the new command queue system and command execution engine, plus many debugging. ([30b1a80](https://github.com/SethEden/NodeJS-App/commit/30b1a80367add8aed17a4f090a6a01241c60498a))
* Implement the new command metrics system and some bug fixes for the business rule performance metrics system as well. ([fe4c4cb](https://github.com/SethEden/NodeJS-App/commit/fe4c4cba00359a4b51042dce9b4bb4862c5714a9))
* Implemented a new very basic lexical parser and refactored all of the business rule argument parsing code into functions in this new module. ([2418d25](https://github.com/SethEden/NodeJS-App/commit/2418d25da08aa4de8c1739fb0cdff1138b7158e1))
* Install standard-version to track our version control system. ([f5863f8](https://github.com/SethEden/NodeJS-App/commit/f5863f8cb804991fbadba8977ac446244d387644))
* Integrate the constants validation system into the build-deploy-release cycle. ([d4a19de](https://github.com/SethEden/NodeJS-App/commit/d4a19de2a17cd4d9b01013cc37471a408fd7d064))
* Move all the business rules to the D-data structure and also add the client business rules and implement a merge system to merge both client business rules and system defined business rules. ([1636abf](https://github.com/SethEden/NodeJS-App/commit/1636abfaebba5fcd5a337f7c1f90b8fc1e7ee3fd))
* New binary build targets, but they are disabled because it was generating files to large for github, maybe I will enable it again if I can post them to my ftp site later. ([debc33d](https://github.com/SethEden/NodeJS-App/commit/debc33d97f412ebcaadb3c114360d2eaea19ef0b))
* Roll-back framework enhancements from commercial implementation. ([648a0ec](https://github.com/SethEden/NodeJS-App/commit/648a0ececa5e93ba32f42084232e14bc9a873ec4))
* Setup all of the initializations for doing constants validation phase 1 & phase 2. ([2e7d384](https://github.com/SethEden/NodeJS-App/commit/2e7d3841bac5de4c0ceedd0f33737878e434bc32))
* Start integrating the build-deploy-release processes with the command engine. ([81c1b52](https://github.com/SethEden/NodeJS-App/commit/81c1b5297e1de9573c3835e463c58cd9af92de9b))
* Start to enhance the constants system. ([5e4eba7](https://github.com/SethEden/NodeJS-App/commit/5e4eba7ab538acae9a81f803c0036ffe4c746733))
* Start to implement file based constants validation which is phase 1. ([b8427fa](https://github.com/SethEden/NodeJS-App/commit/b8427faae676179c6660fec48cffb7f038050656))
* Start updating the auto-documentation system with JSDoc and fix some bugs with the deployment relating to deploying the documentation along with the configuration file. ([5b70804](https://github.com/SethEden/NodeJS-App/commit/5b70804f9206d670fde8b6d6ac003b7707cb671f))
* Tested and redeploy after validating both runtime modes work with binary compiled source into an exe. ([4f365d6](https://github.com/SethEden/NodeJS-App/commit/4f365d63517fff6b88331b230d8e3b5832b18561))
* Update the code with test performance results for the character generation & string generation business rules and also include test results in text files. ([081c69f](https://github.com/SethEden/NodeJS-App/commit/081c69f99d21b1b0d1824db0ad33b1374d9be68f))
* Update the constants system architecture to be much more scalable, and debug the whole system. ([0b13660](https://github.com/SethEden/NodeJS-App/commit/0b13660ce31a0fd811e943ec56cc72781cefec8b))
* Working on deploying the new colors logging system. ([5c5ae6f](https://github.com/SethEden/NodeJS-App/commit/5c5ae6f0976d1293b98ecfe02e59e4c19eadd09c))
* Write up additional workflows for the character generation version 1 and version 2 and also string generation version 1 and version 2 as a re-organization to make it easier to do version-to-version comparison performance testing later. ([516a870](https://github.com/SethEden/NodeJS-App/commit/516a870cd38923804276d20ae7d6b992a942d0fe))

## [1.1.0](https://github.com/SethEden/NodeJS-App/compare/v1.0.6...v1.1.0) (2020-07-22)


### Features

* Start to enhance the constants system. ([5e4eba7](https://github.com/SethEden/NodeJS-App/commit/5e4eba7ab538acae9a81f803c0036ffe4c746733))

### [1.0.6](https://github.com/SethEden/NodeJS-App/compare/v1.0.5...v1.0.6) (2020-07-17)

### [1.0.5](https://github.com/SethEden/NodeJS-App/compare/v1.0.4...v1.0.5) (2020-07-17)

### [1.0.4](https://github.com/SethEden/NodeJS-App/compare/v1.0.1...v1.0.4) (2020-07-17)


### Features

* Update the constants system architecture to be much more scalable, and debug the whole system. ([0b13660](https://github.com/SethEden/NodeJS-App/commit/0b13660ce31a0fd811e943ec56cc72781cefec8b))

## [1.1.0](https://github.com/SethEden/NodeJS-App/compare/v1.0.1...v1.1.0) (2020-07-17)


### Features

* Update the constants system architecture to be much more scalable, and debug the whole system. ([0b13660](https://github.com/SethEden/NodeJS-App/commit/0b13660ce31a0fd811e943ec56cc72781cefec8b))

## [1.1.0](https://github.com/SethEden/NodeJS-App/compare/v1.0.1...v1.1.0) (2020-07-17)


### Features

* Update the constants system architecture to be much more scalable, and debug the whole system. ([0b13660](https://github.com/SethEden/NodeJS-App/commit/0b13660ce31a0fd811e943ec56cc72781cefec8b))

## [1.1.0](https://github.com/SethEden/NodeJS-App/compare/v1.0.1...v1.1.0) (2020-07-17)


### Features

* Update the constants system architecture to be much more scalable, and debug the whole system. ([0b13660](https://github.com/SethEden/NodeJS-App/commit/0b13660ce31a0fd811e943ec56cc72781cefec8b))

## [1.2.0](https://github.com/SethEden/NodeJS-App/compare/v1.0.1...v1.2.0) (2020-07-17)


### Features

* Update the constants system architecture to be much more scalable, and debug the whole system. ([0b13660](https://github.com/SethEden/NodeJS-App/commit/0b13660ce31a0fd811e943ec56cc72781cefec8b))

## [1.1.0](https://github.com/SethEden/NodeJS-App/compare/v1.0.1...v1.1.0) (2020-07-17)


### Features

* Update the constants system architecture to be much more scalable, and debug the whole system. ([0b13660](https://github.com/SethEden/NodeJS-App/commit/0b13660ce31a0fd811e943ec56cc72781cefec8b))

## [1.1.0](https://github.com/SethEden/NodeJS-App/compare/v1.0.1...v1.1.0) (2020-07-17)


### Features

* Update the constants system architecture to be much more scalable, and debug the whole system. ([0b13660](https://github.com/SethEden/NodeJS-App/commit/0b13660ce31a0fd811e943ec56cc72781cefec8b))

### [1.0.1](https://github.com/SethEden/NodeJS-App/compare/v0.8.4...v1.0.1) (2020-07-02)

### [0.8.4](https://github.com/SethEden/NodeJS-App/compare/v0.8.3...v0.8.4) (2020-07-02)


### Features

* Update the code with test performance results for the character generation & string generation business rules and also include test results in text files. ([081c69f](https://github.com/SethEden/NodeJS-App/commit/081c69f99d21b1b0d1824db0ad33b1374d9be68f))

### [0.8.3](https://github.com/SethEden/NodeJS-App/compare/v0.8.2...v0.8.3) (2020-07-02)

### [0.8.2](https://github.com/SethEden/NodeJS-App/compare/v0.8.1...v0.8.2) (2020-07-01)


### Features

* Finish the color conversion from hexidecimal values to RGB values. Then copied and pasted those new values back into the color library. Using the platform to improve the platform. ([ca64a2d](https://github.com/SethEden/NodeJS-App/commit/ca64a2df9092a8ba07aaf3b8308afe1295600065))

### [0.8.1](https://github.com/SethEden/NodeJS-App/compare/v0.7.3...v0.8.1) (2020-07-01)


### Features

* Implement the new command metrics system and some bug fixes for the business rule performance metrics system as well. ([fe4c4cb](https://github.com/SethEden/NodeJS-App/commit/fe4c4cba00359a4b51042dce9b4bb4862c5714a9))

### [0.7.3](https://github.com/SethEden/NodeJS-App/compare/v0.7.2...v0.7.3) (2020-07-01)

### [0.7.2](https://github.com/SethEden/NodeJS-App/compare/v0.7.1...v0.7.2) (2020-07-01)


### Features

* Add the business rules metrics system. A few minor bugs, but it's working for the most part. ([3bfd4cd](https://github.com/SethEden/NodeJS-App/commit/3bfd4cdebcecce0fe7357da86ab66a0f0b9c236a))

### [0.7.1](https://github.com/SethEden/NodeJS-App/compare/v0.6.10...v0.7.1) (2020-06-30)


### Features

* Write up additional workflows for the character generation version 1 and version 2 and also string generation version 1 and version 2 as a re-organization to make it easier to do version-to-version comparison performance testing later. ([516a870](https://github.com/SethEden/NodeJS-App/commit/516a870cd38923804276d20ae7d6b992a942d0fe))

### [0.6.10](https://github.com/SethEden/NodeJS-App/compare/v0.6.9...v0.6.10) (2020-06-30)

### [0.6.9](https://github.com/SethEden/NodeJS-App/compare/v0.6.8...v0.6.9) (2020-06-29)

### [0.6.8](https://github.com/SethEden/NodeJS-App/compare/v0.6.7...v0.6.8) (2020-06-29)

### [0.6.7](https://github.com/SethEden/NodeJS-App/compare/v0.6.6...v0.6.7) (2020-06-27)

### [0.6.6](https://github.com/SethEden/NodeJS-App/compare/v0.6.5...v0.6.6) (2020-06-26)


### Features

* Implemented a new very basic lexical parser and refactored all of the business rule argument parsing code into functions in this new module. ([2418d25](https://github.com/SethEden/NodeJS-App/commit/2418d25da08aa4de8c1739fb0cdff1138b7158e1))

### [0.6.5](https://github.com/SethEden/NodeJS-App/compare/v0.6.4...v0.6.5) (2020-06-25)

### [0.6.4](https://github.com/SethEden/NodeJS-App/compare/v0.6.3...v0.6.4) (2020-06-24)

### [0.6.3](https://github.com/SethEden/NodeJS-App/compare/v0.6.2...v0.6.3) (2020-06-23)

### [0.6.2](https://github.com/SethEden/NodeJS-App/compare/v0.6.1...v0.6.2) (2020-06-23)


### Features

* Finish building the help command, and the print data hive command to help with data debugging in the future. ([fd339f7](https://github.com/SethEden/NodeJS-App/commit/fd339f7ef6029791aa48dd765c7bedf09d3f7201))

### [0.6.1](https://github.com/SethEden/NodeJS-App/compare/v0.5.11...v0.6.1) (2020-06-23)


### Features

* Finally got the workflow engine fully implemented and integrated with the command engine architecture and working. ([4c1befc](https://github.com/SethEden/NodeJS-App/commit/4c1befce76da3017e142f726221336af3da36bd2))

### [0.5.11](https://github.com/SethEden/NodeJS-App/compare/v0.5.10...v0.5.11) (2020-06-22)


### Features

* Add the basic commands for the application, application name, version, about, description. ([fc12f3e](https://github.com/SethEden/NodeJS-App/commit/fc12f3e82dae5460d440536ddd12effcdc1191e3))

### [0.5.10](https://github.com/SethEden/NodeJS-App/compare/v0.5.9...v0.5.10) (2020-06-22)


### Features

* Fully functional command alias system. ([62d6db3](https://github.com/SethEden/NodeJS-App/commit/62d6db36e6351c74b58f5a719100bb639c0482da))

### [0.5.9](https://github.com/SethEden/NodeJS-App/compare/v0.5.8...v0.5.9) (2020-06-21)

### [0.5.8](https://github.com/SethEden/NodeJS-App/compare/v0.5.7...v0.5.8) (2020-06-21)


### Features

* Add the capability to load command alias XML meta-data files into the D-data structure system, so we can use that data as part of the command execution architecture. ([d15a361](https://github.com/SethEden/NodeJS-App/commit/d15a3617294a83c7d2eee4bf94c6eca1e5b18a2c))

### [0.5.7](https://github.com/SethEden/NodeJS-App/compare/v0.5.6...v0.5.7) (2020-06-19)


### Features

* Implement the basics of the new command queue system and command execution engine, plus many debugging. ([30b1a80](https://github.com/SethEden/NodeJS-App/commit/30b1a80367add8aed17a4f090a6a01241c60498a))

### [0.5.6](https://github.com/SethEden/NodeJS-App/compare/v0.5.5...v0.5.6) (2020-06-18)

### [0.5.5](https://github.com/SethEden/NodeJS-App/compare/v0.5.4...v0.5.5) (2020-06-17)

### [0.5.4](https://github.com/SethEden/NodeJS-App/compare/v0.5.3...v0.5.4) (2020-06-15)


### Features

* Move all the business rules to the D-data structure and also add the client business rules and implement a merge system to merge both client business rules and system defined business rules. ([1636abf](https://github.com/SethEden/NodeJS-App/commit/1636abfaebba5fcd5a337f7c1f90b8fc1e7ee3fd))

### [0.5.3](https://github.com/SethEden/NodeJS-App/compare/v0.5.2...v0.5.3) (2020-06-10)


### Features

* Finishing adding and debugging all of the chalk colorizing systems for the console logs. ([b80de78](https://github.com/SethEden/NodeJS-App/commit/b80de78bd275b78fd16055d14480d4be988aaab8))
* Working on deploying the new colors logging system. ([5c5ae6f](https://github.com/SethEden/NodeJS-App/commit/5c5ae6f0976d1293b98ecfe02e59e4c19eadd09c))

### [0.5.2](https://github.com/SethEden/NodeJS-App/compare/v0.5.1...v0.5.2) (2020-06-05)

### [0.5.1](https://github.com/SethEden/NodeJS-App/compare/v0.4.4...v0.5.1) (2020-06-05)


### Features

* Implement the ascii art and colorized console logs for better visual usability of the application. ([67c80dc](https://github.com/SethEden/NodeJS-App/commit/67c80dc4ce6f78ef11e59741f3ff70cbfb1bb7ac))

### [0.4.4](https://github.com/SethEden/NodeJS-App/compare/v0.4.3...v0.4.4) (2020-06-04)

### [0.4.3](https://github.com/SethEden/NodeJS-App/compare/v0.4.2...v0.4.3) (2020-06-04)

### [0.4.2](https://github.com/SethEden/NodeJS-App/compare/v0.4.1...v0.4.2) (2020-06-04)

### [0.4.1](https://github.com/SethEden/NodeJS-App/compare/v0.3.3...v0.4.1) (2020-06-04)


### Features

* Start updating the auto-documentation system with JSDoc and fix some bugs with the deployment relating to deploying the documentation along with the configuration file. ([5b70804](https://github.com/SethEden/NodeJS-App/commit/5b70804f9206d670fde8b6d6ac003b7707cb671f))

### [0.3.3](https://github.com/SethEden/NodeJS-App/compare/v0.3.2...v0.3.3) (2020-06-03)

### [0.3.2](https://github.com/SethEden/NodeJS-App/compare/v0.3.1...v0.3.2) (2020-06-03)

### [0.3.1](https://github.com/SethEden/NodeJS-App/compare/v0.2.16...v0.3.1) (2020-06-03)

### [0.2.16](https://github.com/SethEden/NodeJS-App/compare/v0.2.15...v0.2.16) (2020-06-03)


### Features

* Cleaning up some of the code and attempting again to bump the mid level version. ([edb9007](https://github.com/SethEden/NodeJS-App/commit/edb9007c522031f227b5d2c8743ec744650d0364))

### [0.2.15](https://github.com/SethEden/NodeJS-App/compare/v0.2.14...v0.2.15) (2020-06-03)


### Features

* Finally got the release system up and working. Changing up the commit message to attempt to bump the mid-level version number, since this is a some-what more-or-less major update. Attempt 3. ([529f46b](https://github.com/SethEden/NodeJS-App/commit/529f46b6c85467e9e47e3d25d33c042b984fdb78))

### [0.2.14](https://github.com/SethEden/NodeJS-App/compare/v0.2.13...v0.2.14) (2020-06-03)


### Features

* Finally got the release system up and working. Changing up the commit message to attempt to bump the mid-level version number, since this is a some-what more-or-less major update. ([166d461](https://github.com/SethEden/NodeJS-App/commit/166d46157fa1b02de391dd494c3f7a5d35153cbf))

### [0.2.13](https://github.com/SethEden/NodeJS-App/compare/v0.2.12...v0.2.13) (2020-06-03)

### [0.2.12](https://github.com/SethEden/NodeJS-App/compare/v0.2.11...v0.2.12) (2020-06-03)

### [0.2.11](https://github.com/SethEden/NodeJS-App/compare/v0.2.10...v0.2.11) (2020-06-03)

### [0.2.10](https://github.com/SethEden/NodeJS-App/compare/v0.2.9...v0.2.10) (2020-06-03)

### [0.2.9](https://github.com/SethEden/NodeJS-App/compare/v0.2.8...v0.2.9) (2020-06-03)

### [0.2.8](https://github.com/SethEden/NodeJS-App/compare/v0.2.7...v0.2.8) (2020-06-03)

### [0.2.7](https://github.com/SethEden/NodeJS-App/compare/v0.2.6...v0.2.7) (2020-06-03)

### [0.2.6](https://github.com/SethEden/NodeJS-App/compare/v0.2.5...v0.2.6) (2020-06-02)

### [0.2.5](https://github.com/SethEden/NodeJS-App/compare/v0.2.4...v0.2.5) (2020-06-02)

### [0.2.4](https://github.com/SethEden/NodeJS-App/compare/v0.2.3...v0.2.4) (2020-06-02)

### [0.2.3](https://github.com/SethEden/NodeJS-App/compare/v1.2.2...v0.2.3) (2020-06-02)

### [1.2.2](https://github.com/SethEden/NodeJS-App/compare/v1.2.1...v1.2.2) (2020-06-02)

### [1.2.1](https://github.com/SethEden/NodeJS-App/compare/v1.2.0...v1.2.1) (2020-06-02)

## [1.2.0](https://github.com/SethEden/NodeJS-App/compare/v1.1.0...v1.2.0) (2020-06-02)


### Features

* Attempt to integrate standard-version into the build step. ([b053ca4](https://github.com/SethEden/NodeJS-App/commit/b053ca43b2687094c87a05da08439c1273d35620))

## 1.1.0 (2020-06-02)


### Features

* Adding a babel transpiler with a bin build-step and version control, and testing a new version control system. ([b7dc4bd](https://github.com/SethEden/NodeJS-App/commit/b7dc4bd18f4028abef3b57a668ad80d175bfb9e6))
* Adding warden function settings for debugging to the Configuration.xml file. ([e1a528c](https://github.com/SethEden/NodeJS-App/commit/e1a528c41deee598bdc20f97f4bba320ef92c621))
* Attempting to get the build step to automatically copy the XML configuration files. ([fbc9f1c](https://github.com/SethEden/NodeJS-App/commit/fbc9f1c58bd21c2e7555c9c3ba9f42353debd295))
* Install standard-version to track our version control system. ([f5863f8](https://github.com/SethEden/NodeJS-App/commit/f5863f8cb804991fbadba8977ac446244d387644))
