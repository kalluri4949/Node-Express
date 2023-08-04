const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to home page');
    return;
  }
  if (req.url === '/about') {
    res.end('Here is about our home page');
    return;
  }
  res.end(
    `
    <h1>Oops!</h1>
    <p>No resources Found</p>
    `
  );
});

server.listen(5000);
