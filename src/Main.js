import React, { Component } from 'react';

// Gets all of the image filenames in the /photos directory
const context = require.context('./photos', true, /\.(jpg|jpeg)$/);
const photos = context.keys();

// Re-formats the file path context returns in order to require the photo
const filePath = file => {
  return file.replace('./', './photos/');
};

export default class Main extends Component {
  render() {
    return (
      <div className="photos">
        {photos.map((photo, i) =>
          <img key={i} src={require(filePath(photo))} alt="photo" />
        )}
      </div>
    );
  }
}
