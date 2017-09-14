import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { string, func } from 'prop-types';

import './Collection.css';

import PhotoPlaceholder from './PhotoPlaceholder';

class Collection extends Component {
  static propTypes = {
    folder: string.isRequired,
    selectPhoto: func
  };

  state = {
    imgLoadCount: 0
  };

  // componentDidMount() {
  //   const state = this.props.location.state || {};

  //   setTimeout(() => {
  //     if (state.previousImage) {
  //       location.href = `#` + state.previousImage;
  //     }
  //   }, 0);
  // }

  renderPhotos() {
    return this.props.photos.map((photo, i) => (
      <div
        id={photo.path}
        key={i}
        className="photo"
        onClick={() => {
          // only allow click through to photo page on desktop
          if (window.matchMedia('(min-width: 800px)').matches) {
            this.props.selectPhoto(this.props.folder, photo.path);
          }
        }}
      >
        <img
          src={require(`../photos/${photo.collection}/${photo.filename}`)}
          alt={photo.path}
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
    return this.props.photos.map((photo, i) => (
      <PhotoPlaceholder key={i} ratio={photo.width / photo.height} />
    ));
  }

  render() {
    const isLoading =
      window.matchMedia('(min-width: 800px)').matches &&
      this.state.imgLoadCount !== this.props.photos.length;

    return (
      <div className="container">
        {isLoading ? (
          <div className="placeholder-photos">
            <div className="photos">{this.renderPlaceholderPhotos()}</div>
          </div>
        ) : null}
        <div className="actual-photos">
          <div className="photos">{this.renderPhotos()}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Collection);
