const data = require('./data.json');
const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;
const notes = data.notes;

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const id in notes) {
    arr.push(notes[id]);
  }
  res.json(arr); // res.json sends response body as json; res.send, sends response as js objecct
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (Number(id) < 1) {
    res.status(400);
    res.json({ error: 'id must be a positive integer' });
  } else if (notes[id]) {
    res.json(notes[id]);
  } else {
    res.status(404);
    res.json({ error: `cannot find note with id ${id}` });
  }
});

app.post('/api/notes', (req, res) => {
  // console.log('body:', req.body);
  const content = req.body.content;
  console.log('content:', req.body.content);
  if (!content) {
    res.status(400);
    res.json({ error: 'content is a required field' });
  } else {
    const newNote = {
      id: data.nextId,
      content
    };
    notes[data.nextId] = newNote;
    data.nextId++;
    res.json(newNote);
  }
});

app.listen(port, () => {
  console.log(`server @ port ${port}`);
});
