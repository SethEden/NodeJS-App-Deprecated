/**
 * @file application-command-constants-validation.js
 * @module application-command-constants-validation
 * @description Contains validations for named application command constants.
 * @requires module:application-command-constants
 * @author Seth Hollingsead
 * @date 2021/03/08
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as app_cmd from '../../Constants/application.command.constants';

 /**
 * @function applicationCommandConstantsValidation
 * @description Initializes the application command constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/03/08
 */
export const applicationCommandConstantsValidation = [
  {Name: 'ccustomEchoCommand', Actual: app_cmd.ccustomEchoCommand, Expected: 'customEchoCommand'},
  {Name: 'cbossPanic', Actual: app_cmd.cbossPanic, Expected: 'bossPanic'}
];
