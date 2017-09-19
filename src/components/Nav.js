import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FeatureFlag } from '@crystal-ball/feature-flag';

export default class Nav extends Component {
  render() {
    return (
      <nav {...this.props}>
        <ul>
          <li>
            <NavLink to="/outside">Out there</NavLink>
          </li>
          <li>
            <NavLink to="/totally-rad">Adventuring with friends</NavLink>
          </li>
          <li>
            <NavLink to="/climbing">Shredding gnar</NavLink>
          </li>
          <FeatureFlag path="prints">
            <li>
              <NavLink to="/prints">Prints</NavLink>
            </li>
          </FeatureFlag>
          <FeatureFlag path="about">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </FeatureFlag>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
