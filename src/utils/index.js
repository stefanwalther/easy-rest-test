const fs = require('fs');
const util = require('util');

async function readFile(filePath) {
  const readFile = util.promisify(fs.readFile);
  return readFile(filePath, 'utf-8');

}

module.exports = {
  readFile
};
