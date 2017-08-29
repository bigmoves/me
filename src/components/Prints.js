import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Gets all of the image filenames in the /photos directory
const context = require.context('../prints', true, /\.(jpg|jpeg)$/);
const photos = context.keys();

// Re-formats the file path context returns in order to require the photo
const filePath = file => {
  return file.replace('./', './prints/');
};

import './Prints.css';

class Prints extends Component {
  handleClick = photo => {
    console.log(this.props.history.push(`/print/${photo}`));
  };

  render() {
    return (
      <div className="prints">
        {photos.map((photo, i) =>
          <div
            className="print"
            key={i}
            onClick={() => this.handleClick(photo.slice(2, -4))}
          >
            <img src={require(filePath(photo))} alt="photo" />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Prints);
