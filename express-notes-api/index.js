const express = require('express');
const app = express();
const jsonData = require('./data.json');
const fs = require('fs');

const positiveIntError = { error: 'id must be a positive integer' };
const contentError = { error: 'content is a required field' };
const unexpectedError = { error: 'An unexpected error has occurred' };

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const key in jsonData.notes) {
    notesArr.push(jsonData.notes[key]);
  }
  res.status(200).send(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const noIdMatchError = { error: `cannot find note with id ${req.params.id}` };

  if ((Math.sign(req.params.id) === 1) && Number.isInteger(Number(req.params.id))) {
    if (req.params.id in jsonData.notes) {
      res.status(200).send(jsonData.notes[req.params.id]);
    } else {
      res.status(404).send(noIdMatchError);
    }
  } else {
    res.status(400).send(positiveIntError);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).send(contentError);
  } else {
    req.body.id = jsonData.nextId;
    jsonData.notes[jsonData.nextId] = req.body;
    jsonData.nextId++;
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send(unexpectedError);
      } else {
        res.status(201).send(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const noIdMatchError = { error: `cannot find note with id ${req.params.id}` };
  if ((Math.sign(req.params.id) === 1) && Number.isInteger(Number(req.params.id))) {
    if (req.params.id in jsonData.notes) {
      delete jsonData.notes[req.params.id];
      fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
        if (err) {
          console.error(err);
          res.status(500).send(unexpectedError);
        } else {
          res.sendStatus(204);
        }
      });
    } else {
      res.status(404).send(noIdMatchError);
    }
  } else {
    res.status(400).send(positiveIntError);
  }
});

app.put('/api/notes/:id', (req, res) => {
  const noIdMatchError = { error: `cannot find note with id ${req.params.id}` };

  if ((Math.sign(req.params.id) !== 1) || !Number.isInteger(Number(req.params.id))) {
    res.status(400).send(positiveIntError);
  } else if (!req.body.content) {
    res.status(400).send(contentError);
  } else {
    if (req.params.id in jsonData.notes) {
      jsonData.notes[req.params.id].content = req.body.content;
      fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
        if (err) {
          console.error(err);
          res.status(500).send(unexpectedError);
        } else {
          res.status(200).send(jsonData.notes[req.params.id]);
        }
      });
    } else {
      res.status(404).send(noIdMatchError);
    }
  }
});

app.listen(3000, () => {
/* eslint-disable-next-line no-console */
  console.log('Listening to 3000');
});
