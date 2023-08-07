const EventEmitter = require('events');
const http = require('http');
const server = http.createServer();

server.on('rewuest', (req, res) => {
  res.end('welcome');
});

// customEmitter.on('response', (data) => {
//   console.log(data);
// });
customEmitter.emit('response');
server.listen(5000);

const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (data) => {
  console.log(data);
});
customEmitter.emit('response');
