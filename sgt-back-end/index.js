const pg = require('pg');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// database connection
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(port, () => {
  console.log(`server @ port ${port}`);
});

app.get('/api/grades', (req, res) => {
  const sql = `
      SELECT *
          FROM "grades";
  `;
  db.query(sql)
    .then(data => {
      const grades = data.rows;
      res.json(grades);
    })
    .catch(err => {
      console.log('error:', err.message);
      res.status(500).json({ error: 'an unexpected error occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  const { course, name, score } = req.body;

  if (!name || !course || !score) {
    res.status(400)
      .json({ error: '"name", "course", and "score" required' });
    return;
  }
  if (Number(score) < 0 ||
      Number(score) > 100 ||
      !Number.isInteger(Number(score))) {
    res.status(400)
      .json({ error: '"score" must be an integer between 1 and 100' });
    return;
  }
  const sql = `
      INSERT INTO "grades"
        ("name", "course", "score")
        values
          ($1, $2, $3)
        RETURNING *;
  `;
  const params = [name, course, score];
  db.query(sql, params)
    .then(data => {
      // console.log('data:', data);
      const [grade] = data.rows;
      res.status(201).json(grade);
    })
    .catch(err => {
      console.log('error:', err.message);
      res.status(500).json({ error: 'unexpected error occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const { name, course, score } = req.body;
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400)
      .json({ error: '"gradeID" must be a positive integer' });
    return;
  }
  if (!name || !course || !score) {
    res.status(400)
      .json({ error: '"name", "course", and "score" required' });
    return;
  }
  const sql = `
    UPDATE "grades"
        SET "name" = $1,
            "course" = $2,
            "score" = $3
        WHERE "gradeId" = $4
        RETURNING *;
    `;
  const params = [name, course, score, gradeId];
  db.query(sql, params)
    .then(data => {
      console.log('data:', data);
      const [update] = data.rows;
      if (!update) {
        res.status(404)
          .json({ error: `grade with id ${gradeId} does not exist` });
      } else {
        res.json(update);
      }
    })
    .catch(err => {
      console.log('error:', err.message);
      res.status(500)
        .json({ error: 'unexpected error occurred' });
    });
});
