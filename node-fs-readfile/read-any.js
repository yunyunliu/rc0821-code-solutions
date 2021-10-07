const fs = require('fs');

const fileName = process.argv[2];

function print(name) {
  fs.readFile(`./${name}`, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);

    }
  });
}

print(fileName);
