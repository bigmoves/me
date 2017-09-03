import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// Components
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import SidebarPhotoControls from '../containers/SidebarPhotoControls';

// Svgs
import instagram from '../icons/instagram.svg';
import github from '../icons/github.svg';
import paperplane from '../icons/paperplane.svg';

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
            <img src={instagram} />
          </a>
          <a href="https://github.com/bigmoves" target="_blank">
            <img src={github} />
          </a>
          <a href="mailto:chadtmiller15@gmail.com">
            <img src={paperplane} width="24" height="28" />
          </a>
        </div>
        <Route
          path="(/climbing/.*|/outside/.*|/totally-rad/.*)"
          render={() => <SidebarPhotoControls />}
        />
      </div>
    );
  }
}
