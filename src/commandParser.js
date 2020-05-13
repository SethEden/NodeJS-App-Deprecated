const pySpawn = require('child_process').spawn;

var pyProcess;

function initCommandParser(dataInput) {
  console.log('BEGIN initCommandParser');
  console.log('dataInput is: ' + dataInput);
  var returnData;
  if (dataInput.toUpperCase() === 'EXIT') {
    returnData = false;
  } else {
    console.log(dataInput);
    if (dataInput.includes('.py') === true) {
      // Here we will need to execute a python script.
      pyProcess = pySpawn('python', ['../src/hello.py']);

      process.stdout.on('data', data => {
        console.log(data.toString());
      });
    } else {

    }
    returnData = true;
  }
  console.log('returnData is: ' + returnData);
  console.log('END initCommandParser');
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
