const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
let nextId = 1;

const grades = {};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const grade in grades) {
    arr.push(grades[grade]);
  }
  res.json(arr);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[nextId] = newGrade;
  nextId++;
  res.sendStatus(201);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server @ port ${port}`);
});
