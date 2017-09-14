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
    return {
      form: {
        values: this.state.values,
        reset: () => this.setState({ values: {} }),
        submit: () => this.props.onSubmit(this.state.values),
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
