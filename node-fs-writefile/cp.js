const fs = require('fs');

const src = process.argv[2];
const target = process.argv[3];

fs.readFile(`./${src}`, 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile(`./${target}`, data, (err, data) => {
      if (err) {
        console.log(err.message);
      }
    });
  }
});
