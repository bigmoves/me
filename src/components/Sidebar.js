import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// Components
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import SidebarPhotoControls from '../containers/SidebarPhotoControls';

import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <MobileNav />
        <h1 className="logo">
          <Link to="/">Chad Miller</Link>
        </h1>
        <DesktopNav />
        <div className="links">
          <a href="https://www.instagram.com/chadtmiller" target="_blank">
            📷
          </a>
          <a href="https://github.com/bigmoves" target="_blank">
            🐙
          </a>
          <a href="mailto:chadtmiller15@gmail.com">📧</a>
        </div>
        <Route
          path="(/climbing/.*|/outside/.*|/totally-rad/.*)"
          render={() => <SidebarPhotoControls />}
        />
      </div>
    );
  }
}
