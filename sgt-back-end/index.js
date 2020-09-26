const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/grades/', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const sql = `
    insert into "grades" ("name", "course", "grade")
      values ($1, $2, $3)
      returning *
  `;
  if (!req.body.name || !req.body.course || !req.body.grade) {
    res.status(400).json({
      error: 'Invalid Entry'
    });
  } else {
    const values = [req.body.name, req.body.course, req.body.grade];
    db.query(sql, values)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (gradeId <= 0 || !Number.isInteger(gradeId)) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }

  const sql = `
    update "grades"
       set "grade" = $1
     where "gradeId" = $2
    returning *
  `;
  if (!req.body.grade) {
    res.status(400).json({
      error: 'Invalid Entry'
    });
  } else {
    const values = [req.body.grade, gradeId];
    db.query(sql, values)
      .then(result => {
        if (result.rows[0]) {
          res.status(200).json(result.rows[0]);
        } else {
          res.status(404).json({
            error: `Cannot find note with id ${gradeId}`
          });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (gradeId <= 0 || !Number.isInteger(gradeId)) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;
  const value = [gradeId];

  db.query(sql, value)
    .then(result => {
      if (result.rows[0]) {
        res.status(204).json(result.rows[0]);
      } else {
        res.status(404).json({
          error: `Cannot find note with id ${gradeId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  /* eslint-disable-next-line no-console */
  console.log('Listening to 3000');
});
