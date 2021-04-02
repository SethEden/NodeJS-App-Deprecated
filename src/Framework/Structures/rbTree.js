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
 // Framework.Structures.rbTree.
 var namespacePrefix = wrd.cFramework + bas.cDot + wrd.cStructures + bas.cDot + baseFileName + bas.cDot;

 var RED = 0;
 var BLACK = 1;
 var root = {};
 var rbTreeCompare;
 var protoTree = rbTree.prototype;

/**
 * @function cloneNode
 * @description Clones a given node and returns the object.
 * @param {object} node The tree node object that should be cloned.
 * @return {object} The newly cloned node object.
 * @author Seth Hollingsead
 * @date 2020/01/05
 */
 function cloneNode(node) {
   let functionName = cloneNode.name;
   loggers.consoleLog(namespacePrefix + functionName, s.cBEGIN_Function);
   loggers.consoleLog(namespacePrefix + functionName, 'node is: ' + JSON.stringify(node));
   let returnData = false;
   if (node != undefined && node != null && node != '' && typeof node === 'object') {
     returnData = rbNode.rbNodeConstructor(node.nodeColor, node.nodeKey, node.nodeValue, node.nodeLeft, node.nodeRight, node.nodeCount);
   }
   loggers.consoleLog(namespacePrefix + functionName, 'returnData is: ' + JSON.stringify(returnData));
   loggers.consoleLog(namespacePrefix + functionName, s.cEND_Function);
   return returnData;
 };

/**
 * @function repaint
 * @description Changes the color of a node.
 * @param {integer} color The color the node should be changed to.
 * @param {object} node The node that should have it's color changed.
 * @return {object} The new node with the color changed.
 * @author Seth Hollingsead
 * @date 2020/01/06
 */
 function repaint(color, node) {
   let functionName = repaint.name;
   loggers.consoleLog(namespacePrefix + functionName, s.cBEGIN_Function);
   loggers.consoleLog(namespacePrefix + functionName, 'color is: ' + color);
   loggers.consoleLog(namespacePrefix + functionName, 'node is: ' + JSON.stringify(node));
   let returnData = false;
   if (node != undefined && node != null && node != '' && typeof node === 'object') {
     returnData = rbNode.rbNodeConstructor(color, node.nodeKey, node.nodeValue, node.nodeLeft, node.nodeRight, node.nodeCount);
   }
   loggers.consoleLog(namespacePrefix + functionName, 'returnData is: ' + JSON.stringify(returnData));
   loggers.consoleLog(namespacePrefix + functionName, s.cEND_Function);
   return returnData;
};

/**
 * @function recount
 * @description Count all of the child nodes for a given node.
 * @param {object} node The node who's total child node count should be re-computed.
 * @return {integer} A count for all the nodes under the node that is passed in.
 * @author Seth Hollingsead
 * @date 2020/01/06
 */
function recount(node) {
  let functionName = recount.name;
  loggers.consoleLog(namespacePrefix + functionName, s.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, 'node is: ' + JSON.stringify(node));
  let returnData = false;
  if (node != undefined && node != null && node != '' && typeof node === 'object') {
    node.nodeCount = 1 + (node.nodeLeft ? node.nodeLeft.nodeCount : 0) + (node.nodeRight ? node.nodeRight.nodeCount : 0)
  }
  loggers.consoleLog(namespacePrefix + functionName, 'returnData is: ' + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function rbTree
 * @description Builds a Red-Black binary search tree (RB-BST) with an optional custom compare method for comparing nodes.
 * @param {function} compare The function that should be used to compare node values.
 * @param {object} root The root node of the new tree.
 * @return {void} Nothing to return.
 * @author Seth Hollingsead
 * @date 2020/01/06
 */
function rbTree(compare, rootNode) {
  let functionName = rbTree.name;
  loggers.consoleLog(namespacePrefix + functionName, s.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, 'node is: ' + JSON.stringify(node));
  let returnData = false;
  root = rootNode;
  rbTreeCompare = compare;
  loggers.consoleLog(namespacePrefix + functionName, s.cEND_Function);
};



 export default {
   cloneNode,
   repaint
 };
