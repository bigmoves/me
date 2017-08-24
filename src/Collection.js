import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { string } from 'prop-types';

import './Collection.css';

// Gets all of the image filenames in the /photos directory
const context = require.context(`./photos`, true, /\.(jpg|jpeg)$/);
const photoPaths = context.keys();

class Collection extends Component {
  static propTypes = {
    folder: string.isRequired
  };

  state = {
    photos: []
  };

  componentWillMount() {
    this.updatePhotos(this.props.folder);
  }

  componentDidMount() {
    const state = this.props.location.state || {};

    setTimeout(() => {
      if (state.previousImage) {
        location.href = `#` + state.previousImage;
      }
    }, 0);
  }

  componentWillReceiveProps({ folder }) {
    this.updatePhotos(folder);
  }

  updatePhotos(folder) {
    const photos = photoPaths.filter(photo => photo.indexOf(folder) > -1);
    this.setState({ photos });
  }

  goToPhoto = photo => {
    const { folder, history } = this.props;
    history.push(
      `/${folder}/${photo.replace(/^.*[\\\/]/, '').split('.').shift()}`
    );
  };

  render() {
    return (
      <div className="photos">
        {this.state.photos.map((photoPath, i) =>
          <div
            id={photoPath}
            key={i}
            className="photo"
            onClick={() => {
              // only allow click through to photo page on desktop
              if (window.matchMedia('(min-width: 800px)').matches) {
                this.goToPhoto(photoPath);
              }
            }}
          >
            <img src={context(photoPath)} alt="photo" />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Collection);
