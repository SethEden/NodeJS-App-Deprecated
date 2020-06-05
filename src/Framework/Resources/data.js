/**
 * @file data.js
 * @module data
 * @description Contains the singleton data structure definition that allows the entire application,
 * to share data between various components of the framework and greater application.
 * There were many attempts to implement a proper singleton pattern but none of them really worked.
 * So a very simple implementation was used for the time being until a proper working solution can be implemented.
 * Right now there is no business need for anything beyond the basic system defined below.
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

// var mySingleton = (function() {
//   // instance stores a reference to the Singleton.
//   var instance;
//   function init() {
//     // Singleton
//     // Private methods & variables
//     function privateMethod(){
//       console.log('I am private');
//     }
//     var privateVariable = 'Im also private';
//     var privateRandomNumber = Math.random();
//     return {
//       // Public methods and variables
//       publicMethod: function() {
//         console.log('The public can see me!');
//       },
//       publicProperty: 'I am also public',
//       getRandomNumber: function() {
//         return privateRandomNumber;
//       }
//     };
//   };
//   return {
//     // Get the Singleton instance if one exists
//     // or create on if it doesn't
//     getInstance: function() {
//       if (!instance) {
//         instance = init();
//       }
//       return instance;
//     }
//   };
// })();

// module.exports = {obj = (function () {
//     let objInstance; // private variable
//     function create() {
//       return {};
//     };
//     return {
//       getInstance: function() {
//         if(objInstance) {
//           objInstance = create();
//         }
//         return objInstance;
//       }
//     };
//   })();
// }

// export default {
//   obj
// };

// var self = {
//   var objInstance;
//   var data;
//   create: function() {
//     data = {};
//   }
//   return {
//     getInstance: function() {
//       if (!objInstance) {
//         objInstance = create();
//       }
//       return objInstance;
//     }
//   }
// };
//
// module.exports = self;

//Almost works
// export let obj = function () {
//   let objInstance; //private variable
//   var data;
//   function create() {
//     //private function to create methods and properties
//     data = {};
//   }
//   return {
//     data: data,
//     getInstance: function() {
//       if (!objInstance) {
//         objInstance = create();
//       }
//       return objInstance;
//     }
//   };
// };

export var data = {};
