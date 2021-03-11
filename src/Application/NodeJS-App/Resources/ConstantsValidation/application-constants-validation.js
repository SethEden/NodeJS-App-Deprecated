/**
 * @file application-constants-validation.js
 * @module application-constants-validation
 * @description Contains validations for named application constants.
 * @requires module:application-constants
 * @author Seth Hollingsead
 * @date 2021/02/24
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as apc from '../../Constants/application.constants';

 /**
 * @function applicationConstantsValidation
 * @description Initializes the application constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/02/24
 */
export const applicationConstantsValidation = [
  {Name: 'cConfigurationFilename', Actual: apc.cConfigurationFilename, Expected: 'Configuration'},
  {Name: 'cApplicationName', Actual: apc.cApplicationName, Expected: 'NodeJS-App'},

  {Name: 'cConfigurationDataLookupPrefixPath', Actual: apc.cConfigurationDataLookupPrefixPath, Expected: '/Resources/'},
  {Name: 'cResourcesCommonPath', Actual: apc.cResourcesCommonPath, Expected: 'Application/NodeJS-App/Resources/'},
  {Name: 'cDevelopResourcesPath', Actual: apc.cDevelopResourcesPath, Expected: '/src/Application/NodeJS-App/Resources/'},
  {Name: 'cProductionResourcesPath', Actual: apc.cProductionResourcesPath, Expected: '/bin/Application/NodeJS-App/'},
  {Name: 'cDevelopRootPath', Actual: apc.cDevelopRootPath, Expected: '/src/'},
  {Name: 'cProductionRootPath', Actual: apc.cProductionRootPath, Expected: '/bin/'},
  {Name: 'cReleasePath', Actual: apc.cReleasePath, Expected: '/Release/'},
  {Name: 'cApplicationDevelopRootPath', Actual: apc.cApplicationDevelopRootPath, Expected: '/src/Application/NodeJS-App/'},
  {Name: 'cApplicationProductionRootPath', Actual: apc.cApplicationProductionRootPath, Expected: '/bin/Application/NodeJS-App/'},
  {Name: 'cClientConstantsPathActual', Actual: apc.cClientConstantsPathActual, Expected: 'src/Application/NodeJS-App/Constants/'},
  {Name: 'cDevClientCommandAliasesActualPath', Actual: apc.cDevClientCommandAliasesActualPath, Expected: '/src/Application/NodeJS-App/Resources/Commands/'},
  {Name: 'cDevClientWorkflowsActualPath', Actual: apc.cDevClientWorkflowsActualPath, Expected: '/src/Application/NodeJS-App/Resources/Workflows/'},
  {Name: 'cProdClientCommandAliasesActualPath', Actual: apc.cProdClientCommandAliasesActualPath, Expected: '/bin/Application/NodeJS-App/Commands/'},
  {Name: 'cProdClientWorkflowsActualPath', Actual: apc.cProdClientWorkflowsActualPath, Expected: '/bin/Application/NodeJS-App/Workflows/'},

  {Name: 'capplicationBusinessConstantsValidation', Actual: apc.capplicationBusinessConstantsValidation, Expected: 'application-business-constants-validation'},
  {Name: 'capplicationCommandConstantsValidation', Actual: apc.capplicationCommandConstantsValidation, Expected: 'application-command-constants-validation'},
  {Name: 'capplicationConstantsValidation', Actual: apc.capplicationConstantsValidation, Expected: 'application-constants-validation'},
  {Name: 'capplicationMessageConstantsValidation', Actual: apc.capplicationMessageConstantsValidation, Expected: 'application-message-constants-validation'},

  {Name: 'capplication_business_constants_js', Actual: apc.capplication_business_constants_js, Expected: 'application.business.constants.js'},
  {Name: 'capplication_command_constants_js', Actual: apc.capplication_command_constants_js, Expected: 'application.command.constants.js'},
  {Name: 'capplication_constants_js', Actual: apc.capplication_constants_js, Expected: 'application.constants.js'},
  {Name: 'capplication_message_constants_js', Actual: apc.capplication_message_constants_js, Expected: 'application.message.constants.js'}
];
