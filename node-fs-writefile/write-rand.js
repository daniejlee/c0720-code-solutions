const fs = require('fs');

fs.writeFile('random.txt', Math.floor(Math.random() * 100), err => {
  if (err) throw err;
});
