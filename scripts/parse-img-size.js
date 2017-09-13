const path = require('path');
const sizeOf = require('image-size');
const recursive = require('recursive-readdir');
const fs = require('fs');

recursive('./src/photos', (err, files) => {
  const photosJson = [];

  files.forEach(file => {
    if (file.indexOf('.DS_Store') > -1 || file.indexOf('.json') > -1) {
      return;
    }
    const dimensions = sizeOf(file);

    photosJson.push({
      path: file,
      filename: path.basename(file),
      collection: file.split('/')[2],
      ...dimensions
    });
  });

  fs.writeFile(
    './src/photos/data.json',
    JSON.stringify(photosJson, null, 2),
    err => {
      if (err) {
        return console.log(err);
      }

      console.log('The file was saved!');
    }
  );
});
