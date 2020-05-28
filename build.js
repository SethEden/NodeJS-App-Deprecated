const fse = require('fs-extra')

// Sync:
try {
  fse.copySync('/src/Application/NodeJS-App/Resources/*', '/bin/Application/NodeJS-App/Resources/*');
  console.log('success!');
} catch (err) {
  console.error(err);
}
