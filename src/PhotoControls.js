import React, { Component } from 'react';

import './PhotoControls.css';

export default class PhotoControls extends Component {
  render() {
    return (
      <div className="photo-controls">
        <div className="click-area-left" onClick={this.props.clickedLeft} />
        <div className="click-area-center" onClick={this.props.clickedCenter} />
        <div className="click-area-right" onClick={this.props.clickedRight} />
      </div>
    );
  }
}
