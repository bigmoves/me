import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { object, func } from 'prop-types';

import './Collection.css';

import PhotoPlaceholder from './PhotoPlaceholder';

class RemoteCollection extends Component {
  static propTypes = {
    collection: object.isRequired,
    selectPhoto: func,
    uploadFile: func
  };

  state = {
    imgLoadCount: 0,
    uploadingImage: false
  };

  handleFileUpload = evt => {
    const file = evt.target.files[0];
    // const reader = new FileReader();

    this.props.uploadFile(file, this.props.collection._id);
    // this.setState({ uploadingImage: true });

    // reader.onload = evt => {
    //   this.setState({ uploadingImage: false });
    //   this.props.uploadFile(file, reader.result, this.props.collection._id);
    // };

    // reader.readAsBinaryString(file);
  };

  renderPhotos() {
    return this.props.collection.photos.map((photo, i) => (
      <div
        id={photo._id}
        key={photo._id}
        className="photo"
        onClick={() => {
          // only allow click through to photo page on desktop
          if (window.matchMedia('(min-width: 800px)').matches) {
            this.props.selectPhoto(this.props.folder, photo.path);
          }
        }}
      >
        <img
          src={photo.location}
          alt={''}
          onLoad={() => {
            this.setState({
              imgLoadCount: this.state.imgLoadCount + 1
            });
          }}
        />
      </div>
    ));
  }

  renderPlaceholderPhotos() {
    return this.props.collection.photos.map((photo, i) => (
      <PhotoPlaceholder key={i} ratio={photo.width / photo.height} />
    ));
  }

  render() {
    const isLoading =
      window.matchMedia('(min-width: 800px)').matches &&
      this.state.imgLoadCount !== this.props.photos.length;

    return (
      <div className="container">
        <div className="actual-photos">
          <div className="photos">{this.renderPhotos()}</div>
        </div>
        <div className="add-photo">
          <input type="file" onChange={this.handleFileUpload} />
          {this.state.uploadingImage ? 'Uploading...' : ''}
        </div>
      </div>
    );
  }
}

export default withRouter(RemoteCollection);
