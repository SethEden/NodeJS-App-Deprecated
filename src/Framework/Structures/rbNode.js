/**
 * @file rbNode.js
 * @module rbNode
 * @description Implements the basic structure of a red-black binary search tree node.
 * @requires module:ruleBroker
 * @requires module:loggers
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
 import * as b from '../Constants/basic.constants';
 import * as s from '../Constants/system.constants';
 var path = require('path');
 var D = require('./data');
 var baseFileName = path.basename(module.filename, path.extname(module.filename));
 var namespacePrefix = wrd.cFramework + bas.cDot + wrd.cStructures + bas.cDot; // Framework.Structures.

/**
 * @function rbNodeConstructor
 * @description The Red-Black Node object.
 * @param {integer} color The color of this node (Red or Black)
 * @param {string} key The key or unique name/ID for this node.
 * @param {string|integer|boolean|array|object} value The value or data-object stored with this node.
 * @param {object} left Referance to the left child from this node.
 * @param {object} right Referance to the right child from this node.
 * @param {integer} count The count of nodes under this node.
 * @returns {object} The node object that is created as a JSON object.
 * @author Seth Hollingsead
 * @date 2021/01/05
 */
 function rbNodeConstructor(color, key, value, left, right, count) {
   let functionName = rbNodeConstructor.name;
   loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, s.cBEGIN_Function);
   loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'color is: ' + color);
   loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'key is: ' + key);
   loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'value is: ' + value);
   loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'left is: ' + left);
   loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'right is: ' + right);
   loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'count is: ' + count);
   let returnData = {nodeColor: color, nodeKey: key, nodeValue: value, nodeLeft: left, nodeRight: right, nodeCount: count};
   loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'returnData is: ' + JSON.stringify(returnData));
   loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, s.cEND_Function);
   return returnData;
 };

 export default {
   rbNodeConstructor
 };
