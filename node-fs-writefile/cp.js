const fs = require('fs');
const readPath = process.argv[2];
const copyPath = process.argv[3];

fs.readFile(readPath, 'utf8', (err, data) => {
  if (err) throw err;
  const copiedData = data;
  copyData(copiedData);
});

const copyData = data => {
  fs.writeFile(copyPath, data, err => {
    if (err) throw err;
  });
};
