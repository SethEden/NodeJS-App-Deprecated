/**
 * @file queue.js
 * @module queue
 * @description Implements the various functions of a queue data structure,
 * using the specified name-space on the D-data structure.
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/18
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import loggers from '../Executrix/loggers';
import * as b from '../Constants/basic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('./data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function initQueue
 * @description Initializes the queue with the provided namespace.
 * @param  {string} queueNameSpace The namespace the Queue array should be created under.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function initQueue(queueNameSpace) {
  let functionName = initQueue.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);
  D[queueNameSpace] = [];
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @function dequeue
 * @description Gets the entity at the front of the queue, removes it from the queue and returns that entity.
 * @param {string} queueNameSpace The namespace the queue array should be dequeued from.
 * @return {string} The item at the front of the queue and removes it from the queue.
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function dequeue(queueNameSpace) {
  let functionName = dequeue.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);
  let returnValue;
  returnValue = D[queueNameSpace].shift();
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnValue;
};

/**
 * @function enqueue
 * @description Adds the value to the specified namespace queue.
 * @param {string} queueNameSpace The namespace the queue array should have a value added to.
 * @param {string} value The value that should be added to the specified queue array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function enqueue(queueNameSpace, value) {
  let functionName = enqueue.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);
  D[queueNameSpace].push(value);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @function isEmpty
 * @description Determines if the queue is empty or not empty.
 * @param {string} queueNameSpace The namespace the queue array should have a value added to.
 * @return {Boolean} True or False to indicate if the queue is empty or not empty.
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function isEmpty(queueNameSpace) {
  let functionName = isEmpty.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);
  let returnValue;
  if (D[queueNameSpace] === undefined) {
    returnValue = true;
  } else {
    returnValue = (D[queueNameSpace].length === 0);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnValue;
};

/**
 * @function queueFront
 * @description Gets the entity at the front of the queue.
 * @param {string} queueNameSpace The namespace the queue array from which the front of the queue should be found.
 * @return {string} The entity at the front of the queue.
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function queueFront(queueNameSpace) {
  let functionName = queueFront.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);
  let returnValue;
  returnValue = D[queueNameSpace][0];
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnValue;
};

/**
 * @function queueSize
 * @description Gets the current size of the queue.
 * @param {string} queueNameSpace The namespace of the queue array from which we should get the current queue size.
 * @return {integer} A count for the number of entities in the specified queue.
 * @author Seth Hollingsead
 * @date 2020/06/18
 * {@link https://www.youtube.com/watch?v=bK7I79hcm08}
 */
function queueSize(queueNameSpace) {
  let functionName = queueSize.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'queueNameSpace is: ' + queueNameSpace);
  let returnValue;
  returnValue = D[queueNameSpace].length;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnValue;
};

export default {
  initQueue,
  dequeue,
  enqueue,
  isEmpty,
  queueFront,
  queueSize
};
