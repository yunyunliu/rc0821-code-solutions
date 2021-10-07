
const data = require('./data.json');
const writeChanges = require('./helpers');

const command = process.argv[2];
const notes = data.notes;

switch (command) {
  case 'read':
    for (const num in notes) {
      console.log(`${num}: ${notes[num]}`);
    }
    break;
  case 'create': {
    const note = process.argv[3];
    if (!note) {
      console.log('nothing to add');
      process.exit();
    }
    notes[data.nextId] = note;
    data.nextId++;
    writeChanges();
  }
    break;
  case 'delete': {
    const id = process.argv[3];
    if (!id || !Number(id)) {
      console.log('add an id to delete');
      process.exit();
    }
    delete notes[id];
    writeChanges();
  }
    break;
  case 'update': {
    const { 3: id, 4: update } = process.argv;
    if (!id || !update) {
      console.log('include note id and updated note to make an update');
      process.exit();
    }
    if (!Number(id)) {
      console.log('not a valid id');
      process.exit();
    }
    notes[id] = update;
    writeChanges();
  }
    break;
  default:
    console.log('not a valid command');
}
