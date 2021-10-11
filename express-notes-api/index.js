const express = require('express');
const fs = require('fs');

const data = require('./data.json');
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
  if (Number(id) < 1 || !Number(id)) {
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
  const content = req.body.content;
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
    // writeData(req, res, data, newNote);
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err, data) => {
      if (err) {
        console.error(err.message);
        res.status(500);
        res.json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201);
        res.json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id; // id is type string
  if (Number(id) < 1 || !Number(id)) {
    res.status(400);
    res.json({ error: 'id must be a positive integer' });
  } else if (!notes[id]) {
    res.status(404);
    res.json({ error: `cannot find note with id ${id}` });
  } else {
    delete notes[id];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err, data) => {
      if (err) {
        console.error(err.message);
        res.status(500);
        res.json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const content = req.body.content;
  if (Number(id) < 1 || !Number(id)) {
    res.status(400);
    res.json({ error: 'id must be a positive integer' });
  } else if (!content) {
    res.status(400);
    res.json({ error: 'content is a required field' });
  } else if (!notes[id]) {
    res.status(404);
    res.json({ error: `cannot find note with id ${id}` });
  } else {
    const updated = { id, content };
    notes[id] = updated;
    fs.writeFile('./herp/data.json', JSON.stringify(data, null, 2), (err, data) => {
      if (err) {
        res.status(500);
        res.json({ error: 'An unexpected error occurred.' });
      } else {
        res.json(updated);
      }
    });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server @ port ${port}`);
});
