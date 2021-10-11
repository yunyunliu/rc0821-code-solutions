const fs = require('fs');

function writeData(req, res, data, newNote) {
  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err, data) => {
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

module.exports = writeData;
