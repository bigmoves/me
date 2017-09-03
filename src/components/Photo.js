import React, { Component } from 'react';
import { string } from 'prop-types';

import { component } from './Photo.css';

const context = require.context('../photos', true, /\.(jpg|jpeg)$/);

class Photo extends Component {
  static propTypes = {
    photoId: string
  };

  render() {
    if (!this.props.photoId) {
      return null;
    }
    return (
      <div
        className={component}
        style={{
          backgroundImage: `url(${context(this.props.photoId)}`
        }}
      />
    );
  }
}

export default Photo;
