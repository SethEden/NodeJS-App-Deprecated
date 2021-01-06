# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
