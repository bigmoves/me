import React, { Component } from 'react';

import './SidebarPhotoControls.css';

export default class SidebarPhotoControls extends Component {
  render() {
    return (
      <div className="sidebar-photo-controls">
        <div>
          <button className="btn-link">Prev</button>/
          <button className="btn-link">Next</button>
        </div>
        <div>
          <button className="btn-link">Show thumbnails</button>
        </div>
      </div>
    );
  }
}
