/* eslint-disable no-console, no-unused-vars */
const express = require('express');
const app = express();

const obj = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Small Yoshi',
    course: 'Screaming',
    grade: 7
  }
];

app.get('/api/grades', (req, res) => {
  res.json(obj);
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
