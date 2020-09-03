/* eslint-disable no-console */
const fs = require('fs');
const path = process.argv[2];
fs.readFile(path, 'utf8', (error, file) => {
  if (error) throw error;
  console.log(file);
});
