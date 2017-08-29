import React, { Component } from 'react';
import { string } from 'prop-types';

import './Photo.css';

import PhotoControls from '../containers/PhotoControls';

const context = require.context('../photos', true, /\.(jpg|jpeg)$/);

class Photo extends Component {
  render() {
    if (!this.props.photo) {
      return null;
    }

    return (
      <div className="photo-page">
        <PhotoControls />
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundImage: `url(${context(this.props.photo)}`
          }}
        />
      </div>
    );
  }
}

export default Photo;
