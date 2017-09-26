import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FeatureFlag } from '@crystal-ball/feature-flag';
import { func } from 'prop-types';

// Components
import Form from './shared/Form';
import TextInput from './shared/TextInput';
const Input = new TextInput();
import SubmitButton from './shared/SubmitButton';

export default class Nav extends Component {
  static propTypes = {
    createCollection: func
  };

  render() {
    return (
      <nav className={this.props.className}>
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
          {this.props.collections.map((collection, i) => (
            <li key={i}>
              <NavLink to={`/${collection.name}`}>{collection.name}</NavLink>
            </li>
          ))}
          <li>
            <Form onSubmit={this.props.createCollection}>
              <Input name="name" placeholder="Collection name" />
              <SubmitButton>Add collection</SubmitButton>
            </Form>
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
