function initCommandParser(dataInput) {
  console.log('BEGIN initCommandParser');
  console.log('dataInput is: ' + dataInput);
  var returnData;
  if (dataInput.toUpperCase() === 'EXIT') {
    returnData = false;
  } else {
    console.log(dataInput);
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
