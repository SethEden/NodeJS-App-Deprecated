/**
 * @file chiefPlugin.js
 * @module chiefPlugin
 * @description Contains all the functions to manage the plugin system,
 * such as boot-strapping, setup, loading, unloading, calling, information / functionality query.
 * @requires module:chiefData
 * @requires module:configurator
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2021/07/07
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import chiefData from '../Controllers/chiefData';
import configurator from '../Executrix/configurator';
var path = require('path');
var D = require('../Structures/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
// Framework.Controllers.chiefCommander.
var namespacePrefix = sys.cFramework + bas.cDot + wrd.cControllers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function setupPlugins
 * @description Sets up all of the plugins, system plugins & client plugins.
 * @param {string} pathAndFilename The path and filename of the installed plugin manifest (system plugin manifest or client plugin manifest).
 * @return {void}
 * @author Seth Hollingsead
 * @date 07/07/2021
 */
function setupPlugins(pathAndFilename) {
  let functionName = setupPlugins.name; // 'setupPlugins';
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cpathAndFilenameIs + pathAndFilename);


};
