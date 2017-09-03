import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { string, func } from 'prop-types';

import './Collection.css';

// Gets all of the image filenames in the /photos directory
const context = require.context(`../photos`, true, /\.(jpg|jpeg)$/);

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

  render() {
    return (
      <div
        className="photos"
        style={{
          display:
            window.matchMedia('(min-width: 800px)').matches &&
            this.state.imgLoadCount === this.props.photos.length
              ? 'block'
              : 'none'
        }}
      >
        {this.props.photos.map((photoPath, i) => (
          <div
            id={photoPath}
            key={i}
            className="photo"
            onClick={() => {
              // only allow click through to photo page on desktop
              if (window.matchMedia('(min-width: 800px)').matches) {
                this.props.selectPhoto(this.props.folder, photoPath);
              }
            }}
          >
            <img
              src={context(photoPath)}
              alt="photo"
              onLoad={() =>
                this.setState({ imgLoadCount: this.state.imgLoadCount + 1 })}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Collection);
