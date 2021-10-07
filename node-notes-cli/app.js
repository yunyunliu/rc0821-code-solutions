const data = require('./data.json');

const command = process.argv[2];
const notes = data.notes;

if (command === 'read') {
  for (const num in notes) {
    console.log(`${num}: ${notes[num]}`);
  }
}
