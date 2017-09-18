import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import Button from './Button';

class SubmitButton extends Component {
  static contextTypes = {
    form: shape({
      reset: func.isRequired
    }).isRequired
  };

  handleClick = () => {
    this.context.form.reset();
  };

  render() {
    return <Button onClick={this.handleClick}>{this.props.children}</Button>;
  }
}

export default SubmitButton;
