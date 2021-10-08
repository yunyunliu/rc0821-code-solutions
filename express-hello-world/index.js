const express = require('express');
const app = express();

function middleware(req, res) { // default for path param is '/'
  // so this function will respond to every request to server
  res.send('pong');
}

app.use(middleware);

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server @ port ${port}`);
});
