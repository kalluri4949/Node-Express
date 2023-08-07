const { readFile, writeFile } = require('fs');

readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile('./content/subfolder/second.txt', 'utf-8', (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          './content/subfolder/result-asynch.txt',
          `Here is the result: ${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log(result);
          }
        );
      }
    });
  }
});
