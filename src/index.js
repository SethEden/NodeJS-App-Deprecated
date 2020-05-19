import commandParser from './commandParser';
const prompt = require('prompt-sync')();
// var gs = require('global-singleton');
// var D = gs('D');
// var gs = require('global-singleton');
// var heartbeat = gs('heartbeat', function() { return new heartbeatManager('my-service'); });

// Almost Works
// import { obj } from './data.js';
// let D = obj();

// Works
var D = require('./data');

var programRunning = false;

console.log('BEGIN main program loop');
programRunning = true;

application();

async function application() {
  console.log('BEGIN command parser');
  // heartbeat['ctx'] = {};
  // console.log('contents of D are: ' + JSON.stringify(D));

  // var data = d;

  // Almost works
  D['data'] = {};
  D['data']['ctx'] = {};

  //Works
  // D['data']['ctx'] = {};

  console.log('contents of D are: ' + JSON.stringify(D));
  while(programRunning === true) {
    var result = prompt('>');
    result = await commandParser.initCommandParser(result);
    if (result === false) {
      console.log('END command parser');
      programRunning = false;
      console.log('END main program loop');
      break;
    } else {
      console.log('contents of D are: ' + JSON.stringify(D));
      console.log(result);
    }
  }
  console.log('Exiting, Good bye, Have a nice day & stay safe!');
};
