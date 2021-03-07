/**
* @file all-constants-validation.js
* @module all-constants-validation
* @description Contains validation for constants for all of the most basic characters and basic 2-character combinations.
* @requires module:basic-constants
* @requires module:system-constants
* @requires module:message-constants
* @requires module:basic-constants-validation
* @requires module:business-constants-validation
* @requires module:color-constants-validation
* @requires module:command-constants-validation
* @requires module:configuration-constants-validation
* @requires module:country-constants-validation
* @requires module:element-constants-validation
* @requires module:generic-constants-validation
* @requires module:isotope-constants-validation
* @requires module:knot-constants-validation
* @requires module:language-constants-validation
* @requires module:message-constants-validation
* @requires module:numeric-constants-validation
* @requires module:phonic-constants-validation
* @requires module:shape-constants-validation
* @requires module:system-constants-validation
* @requires module:unit-constants-validation
* @requires module:word-constants-validation
* @author Seth Hollingsead
* @date 2020/07/23
* @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
*/
import * as bas from '../Constants/basic.constants';
import * as sys from '../Constants/system.constants';
import * as msg from '../Constants/message.constants';
import * as bas_cv from './basic-constants-validation';
import * as biz_cv from './business-constants-validation';
import * as clr_cv from './color-constants-validation';
import * as cmd_cv from './command-constants-validation';
import * as cfg_cv from './configuration-constants-validation';
import * as ctr_cv from './country-constants-validation';
import * as elm_cv from './element-constants-validation';
import * as gen_cv from './generic-constants-validation';
import * as iso_cv from './isotope-constants-validation';
import * as kts_cv from './knot-constants-validation';
import * as lng_cv from './language-constants-validation';
import * as msg_cv from './message-constants-validation';
import * as num_cv from './numeric-constants-validation';
import * as phn_cv from './phonic-constants-validation';
import * as shp_cv from './shape-constants-validation';
import * as sys_cv from './system-constants-validation';
import * as unt_cv from './unit-constants-validation';
import * as wrd_cv from './word-constants-validation';

/**
 * @function initializeAllSystemConstantsValidationData
 * @description Initializes all of the system constants validation data so that it can be used to validate all of the constants.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/07/28
 */
function initializeAllSystemConstantsValidationData() {
  let functionName = initializeAllSystemConstantsValidationData.name;
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cBEGIN_Function);

  let allSystemConstantsValidationData = [];

  allSystemConstantsValidationData[sys.cConstantsValidationData] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBasicConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBusinessConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cColorConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCommandConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConfigurationConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCountryConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cElementConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cGenericConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cIsotopeConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cKnotConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cLanguageConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cMessageConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cNumericConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cPhonicConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cShapeConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cSystemConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cUnitConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cWordConstantsValidation] = [];

  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBasicConstantsValidation] = bas_cv.basicConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBusinessConstantsValidation] = biz_cv.businessConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cColorConstantsValidation] = clr_cv.colorConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCommandConstantsValidation] = cmd_cv.commandConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConfigurationConstantsValidation] = cfg_cv.configurationConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCountryConstantsValidation] = ctr_cv.countryConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cElementConstantsValidation] = elm_cv.elementConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cGenericConstantsValidation] = gen_cv.genericConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cIsotopeConstantsValidation] = iso_cv.isotopeConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cKnotConstantsValidation] = kts_cv.knotConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cLanguageConstantsValidation] = lng_cv.languageConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cMessageConstantsValidation] = msg_cv.messageConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cNumericConstantsValidation] = num_cv.numericConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cPhonicConstantsValidation] = phn_cv.phonicConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cShapeConstantsValidation] = shp_cv.shapeConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cSystemConstantsValidation] = sys_cv.systemConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cUnitConstantsValidation] = unt_cv.unitConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cWordConstantsValidation] = wrd_cv.wordConstantsValidation;
  // allSystemConstantsValidationData is:
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.callSystemConstantsValidationDataIs + JSON.stringify(allSystemConstantsValidationData));
  loggers.consoleLog(baseFileName + bas.cDot + functionName, msg.cEND_Function);
  return allSystemConstantsValidationData;
};

export default {
  initializeAllSystemConstantsValidationData
};
