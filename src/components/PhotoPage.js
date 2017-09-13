import React, { Component } from 'react';
import { string } from 'prop-types';

import './PhotoPage.css';

import PhotoControls from '../containers/PhotoControls';
import Photo from './Photo';

class PhotoPage extends Component {
  static propTypes = {
    photo: string,
    collection: string
  };

  render() {
    if (!this.props.photo || !this.props.collection) {
      return null;
    }

    return (
      <div className="photo-page">
        <PhotoControls />
        <Photo collection={this.props.collection} photoId={this.props.photo} />
      </div>
    );
  }
}

export default PhotoPage;
