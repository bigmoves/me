import React, { Component } from 'react';
import Nav from './Nav';

import './MobileNav.css';

export default class MobileNav extends Component {
  state = {
    showMenu: false
  };

  render() {
    return (
      <div className="mobile-nav">
        <div className="menu-toggle">
          <button
            className="btn-link"
            onClick={() => this.setState({ showMenu: !this.state.showMenu })}
          >
            {this.state.showMenu ? 'Close' : 'Menu'}
          </button>
        </div>
        {this.state.showMenu ? <Nav /> : null}
      </div>
    );
  }
}
