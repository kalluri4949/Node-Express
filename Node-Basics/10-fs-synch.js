const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/subfolder/first.txt', 'utf-8');
const second = readFileSync('./content/subfolder/second.txt', 'utf-8');

writeFileSync(
  './content/subfolder/result.txt',
  `Here is the result: ${first}, ${second}`
);
