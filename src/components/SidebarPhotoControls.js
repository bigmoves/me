import React, { Component } from 'react';
import { func } from 'prop-types';

import './SidebarPhotoControls.css';

export default class SidebarPhotoControls extends Component {
  static propTypes = {
    nextPhoto: func,
    prevPhoto: func,
    showThumbnails: func
  };

  render() {
    return (
      <div className="sidebar-photo-controls">
        <div>
          <button className="btn-link" onClick={this.props.prevPhoto}>
            Prev
          </button>/
          <button className="btn-link" onClick={this.props.nextPhoto}>
            Next
          </button>
        </div>
        <div>
          <button className="btn-link" onClick={this.props.showThumbnails}>
            Show thumbnails
          </button>
        </div>
      </div>
    );
  }
}
