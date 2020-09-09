/* eslint-disable no-console, no-unused-vars */
const express = require('express');
const path = require('path');
const app = express();

const publicDir = path.join(__dirname, 'public');

const staticPath = express.static(publicDir);

app.use(staticPath, (req, res, next) => {
  console.log('Success!');
});

app.listen(3000, () => {
  console.log('Listening to 3000');
});
