import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { string, func } from 'prop-types';

import './Collection.css';

import PhotoRenderer from './PhotoRenderer';

class Collection extends Component {
  constructor(props) {
    super(props);

    this.imgInViewCount = 0;
  }

  static propTypes = {
    folder: string.isRequired,
    selectPhoto: func
  };

  state = {
    imgLoadCount: 0,
    imgInViewCount: 0
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
    let style = {};

    // if (window.matchMedia('(min-width: 800px)').matches) {
    //   style.display =
    //     this.state.imgLoadCount === this.imgInViewCount ? 'block' : 'none';
    // }

    return (
      <div className="photos" style={style}>
        {this.props.photos.map((photo, i) => (
          <PhotoRenderer
            id={photo.path}
            key={i}
            className="photo"
            onClick={() => {
              // only allow click through to photo page on desktop
              if (window.matchMedia('(min-width: 800px)').matches) {
                this.props.selectPhoto(this.props.folder, photo.path);
              }
            }}
            ratio={photo.width / photo.height}
            didRender={() => (this.imgInViewCount += 1)}
            kRender={
              this.imgInViewCount !== 0 &&
              this.state.imgLoadCount === this.imgInViewCount
            }
          >
            {(inView, shouldRender) => {
              if (shouldRender) {
                return (
                  <img
                    src={require(`../photos/${photo.collection}/${photo.filename}`)}
                    alt={photo.path}
                    onLoad={() => {
                      if (inView) {
                        this.setState({
                          imgLoadCount: this.state.imgLoadCount + 1
                        });
                      }
                    }}
                  />
                );
              }
            }}
          </PhotoRenderer>
        ))}
      </div>
    );
  }
}

export default withRouter(Collection);
