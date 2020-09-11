/* eslint-disable no-console, no-unused-vars */
const express = require('express');
const app = express();
const jsonData = require('./data.json');
const parseJson = express.json();

const fs = require('fs');

app.use(parseJson);

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const key in jsonData.notes) {
    notesArr.push(jsonData.notes[key]);
  }
  res.status(200).send(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const err400 = { error: 'id must be a positive integer' };
  const err404 = { error: `cannot find note with id ${req.params.id}` };
  if (Math.sign(req.params.id) !== 1) {
    res.status(400).send(err400);
  } else {
    if (req.params.id in jsonData.notes) {
      // if (jsonData.notes[key].id === Number(req.params.id)) {
      res.status(200).send(jsonData.notes[req.params.id]);
      // }
    } else {
      res.status(404).send(err404);
    }
  }
});

app.post('/api/notes', (req, res) => {
  const err400 = { error: 'content is a required field' };
  const err500 = { error: 'An unexpected error has occurred' };

  if (!req.body.content) {
    res.status(400).send(err400);
  } else {
    req.body.id = jsonData.nextId;
    jsonData.notes[jsonData.nextId] = req.body;
    jsonData.nextId++;
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        res.status(500).send(err500);
      } else {
        res.status(201).send(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const err400 = { error: 'id must be a positive integer' };
  const err404 = { error: `cannot find note with id ${req.params.id}` };
  const err500 = { error: 'An unexpected error has occurred' };
  if (Math.sign(req.params.id) !== 1) {
    res.status(400).send(err400);
  } else {
    //
    if (req.params.id in jsonData.notes) {
      delete jsonData.notes[req.params.id];
      fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
        if (err) {
          res.status(500).send(err500);
        } else {
          res.sendStatus(204);
        }
      });
    } else {
      res.status(404).send(err404);
    }
  }
});

app.listen(3000, () => {
  console.log('Listening to 3000');
});

/* ERROR HANDLING WORKING */

// const updateJson = data => {
//   fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
//     if (err) { console.log(err); }
//   });
// };

// app.post('/:api/:notes', (req, res) => {
//   const err400 = { error: 'content is a required field' };
//   const err500 = { error: 'An unexpected error has occurred' };

//   // if (req.originalUrl === '/api/notes' || req.originalUrl === '/api/notes/') {
//   if (req.params.api === 'api' && req.params.notes === 'notes') {
//     if (!req.body.content) {
//       res.status(400).send(err400);
//     } else {
//       req.body.id = jsonData.nextId;
//       jsonData.notes[jsonData.nextId] = req.body;
//       updateJson(jsonData);
//       res.status(201).send(req.body);
//     }
//   } else {
//     res.status(500).send(err500);
//   }
// });
