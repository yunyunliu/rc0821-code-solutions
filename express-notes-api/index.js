const data = require('./data.json');
const express = require('express');
const app = express();

const port = 3000;
const notes = data.notes;

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const id in notes) {
    arr.push(notes[id]);
  }
  res.json(arr); // res.json sends response body as json; res.send, sends response as js objecct
});


app.listen(port, () => {
  console.log(`server @ port ${port}`);
});
