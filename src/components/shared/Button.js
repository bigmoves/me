import React, { Component } from 'react';

import { component } from './Button.css';

class Button extends Component {
  render() {
    return (
      <button {...this.props} className={component}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
