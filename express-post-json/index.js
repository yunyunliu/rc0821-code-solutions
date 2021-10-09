const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
let nextId = 1;

const grades = {};

function formatGrades(grades) {
  const arr = [];
  for (const grade in grades) {
    arr.push(grades[grade]);
  }
  return arr;
}

app.get('/api/grades', (req, res) => {
  res.json(formatGrades(grades));
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[nextId] = newGrade;
  nextId++;

  res.status(201);
  res.json(newGrade);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server @ port ${port}`);
});
