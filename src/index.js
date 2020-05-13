import commandParser from './commandParser';
const prompt = require('prompt-sync')();

var programRunning = false;

console.log('BEGIN main program loop');
programRunning = true;

application();

async function application() {
  console.log('BEGIN command parser');
  while(programRunning === true) {
    var result = prompt('>');
    result = await commandParser.initCommandParser(result);
    if (result === false) {
      console.log('END command parser');
      programRunning = false;
      console.log('END main program loop');
      break;
    } else {
      console.log(result);
    }
  }
  console.log('Exiting, Good bye, Have a nice day & stay safe!');
};
