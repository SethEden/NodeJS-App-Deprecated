import dataBroker from './src/Framework/Executrix/dataBroker';
const fse = require('fs-extra');
var path = require('path');
var rootPath = '';
var copyResult = false;

// Sync:
try {
  rootPath = path.resolve(__dirname);
  console.log('rootPath is: ' + rootPath);
  // fse.copySync('/src/Application/NodeJS-App/Resources/*', '/bin/Application/NodeJS-App/Resources/*');
  copyResult = dataBroker.copyAllFilesAndFoldersFromFolderToFolder(
    rootPath + '/src/Application/NodeJS-App/Resources/',
    rootPath + '/bin/Application/NodeJS-App/Resources/');
  console.log(copyResult);
} catch (err) {
  console.error(err);
}
