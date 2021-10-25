const express = require('express');
const path = require('path');

const app = express();

const root = path.join(__dirname, 'public');
app.use(express.static(root));

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server @ port ${port}`);
});
