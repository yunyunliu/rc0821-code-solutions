const fs = require('fs');

const random = Math.floor(Math.random() * 1000);

fs.writeFile('random.txt', random + '', (err, data) => {
  if (err) {
    console.log(err.message);
    process.exit();
  }
});
