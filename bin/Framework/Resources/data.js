"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
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
var data = {};
exports.data = data;