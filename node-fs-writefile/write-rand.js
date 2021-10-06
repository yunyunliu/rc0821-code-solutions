const fs = require('fs');

const random = Math.floor(Math.random() * 1000);

fs.writeFile('random.txt', random + '', (err, data) => {
  if (err) {
    console.error(err.message);
    process.exit();
  }
});
