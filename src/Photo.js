import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { string } from 'prop-types';

import './Photo.css';

import PhotoControls from './PhotoControls';

// Gets all of the image filenames in the /photos directory
const context = require.context(`./photos`, true, /\.(jpg|jpeg)$/);
const photoPaths = context.keys();

const filteredPhotoPaths = folder => {
  return photoPaths.filter(p => p.indexOf(folder) > -1);
};

class Photo extends Component {
  state = {
    photo: ''
  };

  componentDidMount() {
    window.addEventListener('keyup', this.keyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyUp);
  }

  componentWillMount() {
    const photo = this.props.match.params.id;
    this.updatePhoto(photo);
  }

  keyUp = e => {
    if (e.key === 'Escape') {
      this.handleCenter();
    } else if (e.key === 'ArrowRight') {
      this.handleRight();
    } else if (e.key === 'ArrowLeft') {
      this.handleLeft();
    }
  };

  updatePhoto(fileName) {
    const photoPath = photoPaths.find(p => p.indexOf(fileName) > -1);
    this.setState({ photo: photoPath });
  }

  handleLeft = () => {
    const photos = filteredPhotoPaths(this.props.folder);
    const photoIndex = photos.findIndex(
      p => p.indexOf(this.props.match.params.id) > -1
    );

    if (photos[photoIndex - 1]) {
      this.props.history.push(
        `/${this.props.folder}/${photos[photoIndex - 1]
          .replace(/^.*[\\\/]/, '')
          .split('.')
          .shift()}`
      );
    }
  };

  handleRight = () => {
    const photos = filteredPhotoPaths(this.props.folder);
    const photoIndex = photos.findIndex(
      p => p.indexOf(this.props.match.params.id) > -1
    );

    if (photos[photoIndex + 1]) {
      this.props.history.push(
        `/${this.props.folder}/${photos[photoIndex + 1]
          .replace(/^.*[\\\/]/, '')
          .split('.')
          .shift()}`
      );
    }
  };

  handleCenter = () => {
    this.props.history.push(`/${this.props.folder}`);
  };

  render() {
    return (
      <div className="photo-page">
        <PhotoControls
          clickedLeft={this.handleLeft}
          clickedRight={this.handleRight}
          clickedCenter={this.handleCenter}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundImage: `url(${context(this.state.photo)})`
          }}
        />
      </div>
    );
  }
}

export default withRouter(Photo);
