const http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('/content/subfolder/big.txt', 'utf-8');
    // res.end(text);
    const stream = fs.createReadStream('/content/subfolder/big.txt', 'utf-8');
    stream.on('open', () => {
      stream.pipe(res);
    });
    stream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);
