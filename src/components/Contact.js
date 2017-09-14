import React, { Component } from 'react';

// Components
import Form from './shared/Form';
import TextInput from './shared/TextInput';
import SubmitButton from './shared/SubmitButton';

const Input = new TextInput();

import { component } from './Contact.css';

export default class Contact extends Component {
  handleSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <div className={component}>
        <Form onSubmit={this.handleSubmit}>
          <Input name="firstName" placeholder="First name" />
          <Input name="lastName" placeholder="Last name" />
          <Input name="email" placeholder="Email" />
          <Input As="textarea" name="message" placeholder="Message" />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </div>
    );
  }
}
