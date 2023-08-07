const { readFile, writeFile } = require('fs');
const { get } = require('lodash');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

//using asynch
const start = async () => {
  try {
    const first = await readFilePromise(
      './content/subfolder/first.txt',
      'utf-8'
    );
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};

start();

//using promises
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         console.log(err);
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText('./content/subfolder/first.txt')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
