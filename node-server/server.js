const http = require('http');
const hazel = require('../');

const {
  INTERVAL: interval,
  ACCOUNT: account,
  REPOSITORY: repository,
  PRE: pre,
  TOKEN: token,
  URL: url,
} = process.env;

const server = http.createServer((req, res) => {
  hazel({
    interval,
    account,
    repository,
    pre,
    token,
    url
  })(req, res);
});

server.listen(8080, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
