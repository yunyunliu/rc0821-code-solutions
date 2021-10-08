const express = require('express');
const app = express(); // an express application object

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
