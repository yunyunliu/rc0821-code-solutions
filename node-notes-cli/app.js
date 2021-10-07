const fs = require('fs');
const data = require('./data.json');

const command = process.argv[2];
const notes = data.notes;
let note;

function writeChanges() {
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', newData, (err, data) => {
    if (err) {
      console.error(err.message);
      process.exit(1);
    }
  });
}

switch (command) {
  case 'read':
    for (const num in notes) {
      console.log(`${num}: ${notes[num]}`);
    }
    break;
  case 'create':
    note = process.argv[3];
    notes[data.nextId] = note;
    data.nextId++;
    writeChanges();
    break;
  case 'delete': {
    const id = process.argv[3];
    delete notes[id];
    writeChanges();
  }
}
