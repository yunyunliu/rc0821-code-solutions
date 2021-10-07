const fs = require('fs');

function writeChanges(data) {
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', newData, (err, data) => {
    if (err) {
      console.error(err.message);
      process.exit(1);
    }
  });
}

module.exports = { writeChanges };
