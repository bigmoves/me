import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './MobileNav.css';

export default class MobileNav extends Component {
  state = {
    showMenu: false
  };

  render() {
    return (
      <nav className="mobile-nav">
        <ul style={{ display: this.state.showMenu ? 'block' : 'none' }}>
          <li>
            <NavLink to="/totally-rad">Adventures with friends</NavLink>
          </li>
          <li>
            <NavLink to="/outside">Exploring outside</NavLink>
          </li>
          <li>
            <NavLink to="/climbing">Climbing</NavLink>
          </li>
        </ul>
        <div className="menu-toggle">
          <button
            className="btn-link"
            onClick={() => this.setState({ showMenu: !this.state.showMenu })}
          >
            Menu
          </button>
        </div>
      </nav>
    );
  }
}
