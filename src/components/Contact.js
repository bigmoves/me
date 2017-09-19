import React, { Component } from 'react';
import config from '../config';

// Components
import Form from './shared/Form';
import TextInput from './shared/TextInput';
import SubmitButton from './shared/SubmitButton';

const Input = new TextInput();

import { component } from './Contact.css';

export default class Contact extends Component {
  state = {
    submitSuccess: false
  };

  handleSubmit = (values, reset) => {
    fetch(`${config.API_HOST}/contact/sendEmail`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(() => this.setState({ submitSuccess: true }));
  };

  render() {
    return (
      <div className={component}>
        {this.state.submitSuccess ? (
          <div style={{ textAlign: 'center' }}>
            <p>{'Thanks for reaching out! '}</p>
            <div>👍</div>
          </div>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <Input name="firstName" placeholder="First name" />
            <Input name="lastName" placeholder="Last name" />
            <Input name="email" placeholder="Email" />
            <Input As="textarea" name="message" placeholder="Message" />
            <SubmitButton>Submit</SubmitButton>
          </Form>
        )}
      </div>
    );
  }
}
