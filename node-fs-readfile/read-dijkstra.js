/* eslint-disable no-console */
const fs = require('fs');
fs.readFile('dijkstra.txt', 'utf8', (error, text) => {
  if (error) throw error;
  console.log(text);
});
