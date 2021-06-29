/**
 * @file application-business-constants-validation.js
 * @module application-business-constants-validation
 * @description Contains validations for named application business rule constants.
 * @requires module:application-business-constants
 * @author Seth Hollingsead
 * @date 2021/03/08
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as app_biz from '../../Constants/application.business.constants';

 /**
 * @function applicationBusinessConstantsValidation
 * @description Initializes the application business rules constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/03/08
 */
export const applicationBusinessConstantsValidation = [
  {Name: 'cclientEcho', Actual: app_biz.cclientEcho, Expected: 'clientEcho'},
  {Name: 'ccustomEcho', Actual: app_biz.ccustomEcho, Expected: 'customEcho'},
  {Name: 'cmostPopularNumber', Actual: app_biz.cmostPopularNumber, Expected: 'mostPopularNumber'},
  {Name: 'cisAlmostPalindrome', Actual: app_biz.cisAlmostPalindrome, Expected: 'isAlmostPalindrome'},
  {Name: 'cthreePointAverage', Actual: app_biz.cthreePointAverage, Expected: 'threePointAverage'},
  {Name: 'carrayCounter', Actual: app_biz.carrayCounter, Expected: 'arrayCounter'}
];
