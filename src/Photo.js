import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { string } from 'prop-types';

import './Photo.css';

// Gets all of the image filenames in the /photos directory
const context = require.context(`./photos`, true, /\.(jpg|jpeg)$/);
const photoPaths = context.keys();

class Photo extends Component {
  state = {
    photo: ''
  };

  componentWillMount() {
    const photo = this.props.match.params.id;
    this.updatePhoto(photo);
  }

  componentWillReceiveProps() {}

  updatePhoto(fileName) {
    const photoPath = photoPaths.find(p => p.indexOf(fileName) > -1);
    this.setState({ photo: photoPath });
  }

  render() {
    return (
      <div className="photo-page">
        {this.state.photo ? <img src={context(this.state.photo)} /> : null}
      </div>
    );
  }
}

export default Photo;
