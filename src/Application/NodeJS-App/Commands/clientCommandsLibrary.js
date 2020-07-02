/**
 * @file clientCommandsLibrary.js
 * @module clientCommandsLibrary
 * @description Contains all of the client defined commands as a map between function names and function calls.
 * @requires module:application-constants
 * @author Seth Hollingsead
 * @date 2020/06/19
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as clientCommands from './ClientCommands/clientCommands';
import * as c from '../Constants/application.constants';

/**
 * @function initClientCommandsLibrary
 * @description Initializes an object map of client commands and client function calls and returns them.
 * @return {object} A JSON object that contains a list of business rule names and their associated function calls.
 * @author Seth Hollingsead
 * @date 2020/06/19
 */
export const initClientCommandsLibrary = function() {
  // console.log('BEGIN clientCommandsLibrary.initClientCommandsLibrary function');
  // console.log('END clientCommandsLibrary.initClientCommandsLibrary function');
  return {
    // Client Business Rules
    // ********************************
    // ClientStringParsing rules in order
    // ********************************
    [c.ccustomEchoCommand]: (inputData, inputMetaData) => clientCommands.customEchoCommand(inputData, inputMetaData),
  };
};

export default {
  initClientCommandsLibrary
};
