/**
 * @file rbTree.js
 * @module rbTree
 * @description Implements the various functions of a Red-Black Binary Searc Tree data structure,
 * using the specified name-space on the D-data structure.
 * @requires module:ruleBroker
 * @requires module:loggers
 * @requires module:rbNode
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead, mikolalysenko Mikola Lysenko, mourner Vladimir Agafonkin, Lambdac0re
 * @date 2021/01/05
 * @copyright {@link https://github.com/mikolalysenko/functional-red-black-tree}
 */
 "use strict"
 import ruleBroker from '../BusinessRules/ruleBroker';
 import loggers from '../Executrix/loggers';
 import rbNode from './rbNode';
 import * as b from '../Constants/basic.constants';
 import * as s from '../Constants/system.constants';
 var path = require('path');
 var D = require('./data');
 var baseFileName = path.basename(module.filename, path.extname(module.filename));

 var RED = 0;
 var BLACK = 1;

/**
 * @function cloneNode
 * @description clones a given node and returns the object.
 * @param {object} node The tree node object that should be cloned.
 * @return {object} The newly cloned node object.
 * @author Seth Hollingsead
 * @date 2020/01/05
 */
 function cloneNode(node) {
   let functionName = rbNode.name;
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
   loggers.consoleLog(baseFileName + b.cDot + functionName, 'node is: ' + JSON.stringify(node));
   let returnData = false;
   if (node != undefined && node != null && node != '' && typeof node === 'object') {
     returnData = rbNode.rbNode(node.nodeColor, node.nodeKey, node.nodeValue, node.nodeLeft, node.nodeRight, node.nodeCount);
   }
   loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData is: ' + JSON.stringify(returnData));
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
   return returnData;
 };

 export default {
   cloneNode
 };
