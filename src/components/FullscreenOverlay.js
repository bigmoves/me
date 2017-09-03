import React, { Component } from 'react';
import { bool } from 'prop-types';

import { component, closeButton } from './FullscreenOverlay.css';

class FullscreenOverlay extends Component {
  static propTypes = {
    show: bool.isRequired
  };

  componentDidMount() {
    window.addEventListener('keyup', this.keyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyUp);
  }

  keyUp = e => {
    if (e.key === 'Escape' || e.key === 'ArrowUp') {
      this.props.onHide();
    }
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return <div className={component}>{this.props.children}</div>;
  }
}

export default FullscreenOverlay;
