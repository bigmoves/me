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
          <div key={i} className="photo" onClick={() => this.goToPhoto(photoPath)}>
            <img src={context(photoPath)} alt="photo" />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Collection);
