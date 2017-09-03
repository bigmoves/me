import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <form>
          <p>
            <input type="text" placeholder="name" />
          </p>
          <p>
            <input type="text" placeholder="email" />
          </p>
          <p>
            <textarea placeholder="message" />
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
