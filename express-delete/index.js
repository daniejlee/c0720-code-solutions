/* eslint-disable no-console, no-unused-vars */
const express = require('express');
const app = express();

const grades = [
  {
    id: 1,
    name: 'dan',
    course: 'nope',
    grade: '7'
  },
  {
    id: 7,
    name: 'rich',
    course: 'golf',
    grade: '6'
  }
];

app.get('/api/grades', (req, res) => {
  res.send(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  const arrIndex = grades.findIndex(key => key.id === Number(req.params.id));
  grades.splice(arrIndex, 1);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
