import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './DesktopNav.css';

export default class DesktopNav extends Component {
  render() {
    return (
      <nav className="desktop-nav">
        <ul>
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
      </nav>
    );
  }
}
