import {PythonShell} from 'python-shell';
//var D = require('D');
const D = require('./data');

function initCommandParser(dataInput) {
  console.log('BEGIN commandParser.initCommandParser');
  console.log('dataInput is: ' + dataInput);
  var returnData;
  if (dataInput.toUpperCase() === 'EXIT') {
    returnData = false;
  } else {
    if (dataInput.includes('.py') === true) {
      // Here we will need to execute a python script.
      console.log('begin PythonShell run');
      let pyshell = new PythonShell('./src/hello.py');
      console.log('End PythonShell run');

      pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
      });

      // end the input stream and allow the process to exit
      pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The python exit code was: ' + code);
        console.log('The python exit signal was: ' + signal);
        console.log('python finished');
      });
    } else if (dataInput.includes('data') === true) {
      D['ctx']['testData'] = 'testData';
    }
     else {
      console.log(dataInput);
    }
    returnData = true;
  }
  console.log('returnData is: ' + returnData);
  console.log('END commandParser.initCommandParser');
  return returnData;
};

function start() {
  console.log('BEGIN commandParser.start function');
  console.log('END commandParser.start function');
};

export default {
  initCommandParser,
  start
};
