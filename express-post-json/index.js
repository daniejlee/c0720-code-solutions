/* eslint-disable no-console, no-unused-vars */
const express = require('express');
const app = express();

let nextId = 1;
const grades = [];

const parseJson = express.json();

app.use(parseJson, (req, res, next) => {
  next();
});

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades.push(req.body);
  nextId++;
  res.status(201);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
