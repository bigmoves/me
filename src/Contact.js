import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <form>
          <p>
            <input type="text" placeholder="first" />
          </p>
          <p>
            <input type="text" placeholder="last" />
          </p>
          <p>
            <input type="text" placeholder="email" />
          </p>
          <p>
            <input type="text" placeholder="subject" />
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
