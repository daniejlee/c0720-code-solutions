/* eslint-disable no-console, no-unused-vars */
const fs = require('fs');
const operation = process.argv[2];
const jsonData = require('./data.json');

const updateJSON = data => {
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
};

switch (operation) {
  case 'read':
    for (const key in jsonData.notes) {
      console.log(`${key}: ${jsonData.notes[key]}`);
    }
    break;
  case 'create':
    jsonData.notes[jsonData.nextId] = process.argv[3];
    jsonData.nextId++;
    updateJSON(jsonData);
    break;
  case 'delete':
    delete jsonData.notes[process.argv[3]];
    updateJSON(jsonData);
    break;
  case 'update':
    jsonData.notes[process.argv[3]] = process.argv[4];
    updateJSON(jsonData);
    break;
  default:
    console.log('invalid operation');
}
