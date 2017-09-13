import React, { Component } from 'react';
import { string } from 'prop-types';

import { component } from './Photo.css';

const context = require.context('../photos', true, /\.(jpg|jpeg)$/);

class Photo extends Component {
  static propTypes = {
    photoId: string,
    collection: string
  };

  render() {
    if (!this.props.photoId || !this.props.collection) {
      return null;
    }
    return (
      <div
        className={component}
        style={{
          backgroundImage: `url(${require(`../photos/${this.props.collection}/${this
            .props.photoId}`)})`
        }}
      />
    );
  }
}

export default Photo;
