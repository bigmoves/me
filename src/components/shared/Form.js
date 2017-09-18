import React, { Component } from 'react';
import { shape, func, object } from 'prop-types';

class Form extends Component {
  static childContextTypes = {
    form: shape({
      submit: func.isRequired,
      inputChange: func.isRequired,
      reset: func.isRequired,
      values: object.isRequired
    }).isRequired
  };

  static propTypes = {
    onSubmit: func.isRequired
  };

  state = {
    values: {}
  };

  getChildContext() {
    const reset = () => this.setState({ values: {} });

    return {
      form: {
        values: this.state.values,
        reset,
        submit: () => this.props.onSubmit(this.state.values, reset),
        inputChange: (key, value) => {
          this.setState({
            values: {
              ...this.state.values,
              [key]: value
            }
          });
        }
      }
    };
  }

  render() {
    return <div className="form">{this.props.children}</div>;
  }
}

export default Form;
