/* eslint-disable no-console */
const fs = require('fs');
let i = 2;
let path = process.argv[i];

const read = (error, file) => {
  if (error) throw error;
  console.log(file);
  if (process.argv[i + 1]) {
    i++;
    path = process.argv[i];
    fs.readFile(path, 'utf8', read);
  }
};
fs.readFile(path, 'utf8', read);
