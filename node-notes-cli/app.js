
const data = require('./data.json');
const writeChanges = require('./helpers');

const command = process.argv[2];
const notes = data.notes;
let note;

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
    break;
  case 'update': {
    const { 3: id, 4: update } = process.argv;
    notes[id] = update;
    writeChanges();
  }
    break;
}
