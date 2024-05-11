const fs = require('node:fs');

fs.readFile('./log.txt','utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFile('./newbitch.txt', data, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

})



