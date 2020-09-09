/* eslint-disable */
const express = require('express');
const app = express();

app.use((req, res, next) => {
  const options = {
    root: __dirname
  };
  res.sendFile(req.originalUrl, options, err => {
    // eslint-disable-next-line no-console
    if (err) next(err);
    else console.log('File Sent!');
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
