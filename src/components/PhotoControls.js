import React, { Component } from 'react';
import { func } from 'prop-types';

import './PhotoControls.css';

export default class PhotoControls extends Component {
  static propTypes = {
    nextPhoto: func,
    prevPhoto: func,
    showThumbnails: func
  };

  componentDidMount() {
    window.addEventListener('keyup', this.keyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyUp);
  }

  keyUp = e => {
    if (e.key === 'Escape' || e.key === 'ArrowUp') {
      this.props.showThumbnails();
    } else if (e.key === 'ArrowRight') {
      this.props.nextPhoto();
    } else if (e.key === 'ArrowLeft') {
      this.props.prevPhoto();
    }
  };
  render() {
    return (
      <div className="photo-controls">
        <div className="click-area-left" onClick={this.props.prevPhoto} />
        <div className="click-area-center" onClick={this.props.showThumbnails} />
        <div className="click-area-right" onClick={this.props.nextPhoto} />
      </div>
    );
  }
}
