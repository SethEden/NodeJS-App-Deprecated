/**
 * @file application.command.constants.js
 * @module application-command-constants
 * @description A file to hold all of the client application command constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2021/03/08
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
 import * as wrd from '../../../Framework/Constants/word.constants';

// ********************************
// Client Commands in order
// ********************************
export const ccustomEchoCommand = wrd.ccustom + wrd.cEcho + wrd.cCommand; // customEchoCommand
export const cbossPanic = wrd.cboss + wrd.cPanic; // bossPanic
