const fs = require('fs');

const note = process.argv[2];

fs.writeFile('note.txt', note, (err, data) => {
  if (err) {
    console.error(err.message);
    process.exit();
  }
});
