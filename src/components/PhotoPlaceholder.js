import React, { Component } from 'react';
import { number } from 'prop-types';

import { component } from './PhotoPlaceholder.css';

class PhotoPlaceholder extends Component {
  static propTypes = {
    ratio: number
  };

  state = {
    style: {},
    render: false
  };

  componentDidMount() {
    const height = this.el.offsetWidth / this.props.ratio;
    this.setState(
      {
        style: { height: height + 10 }
      },
      () => {
        const top = this.el.getBoundingClientRect().top;
        if (top < window.outerHeight) {
          // this.setState({ render: true });
        }
      }
    );
  }

  render() {
    return (
      <div ref={el => (this.el = el)} className={component}>
        <img style={this.state.style} />
      </div>
    );
  }
}

export default PhotoPlaceholder;
