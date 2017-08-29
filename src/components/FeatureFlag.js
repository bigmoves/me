import { Component } from 'react';
import { string } from 'prop-types';
import storage from '../utils/local-storage';

export default class FeatureFlag extends Component {
  static propTypes = {
    name: string
  };

  render() {
    const name = this.props.name;
    const features = storage.getJSON('features');
    return features[name] ? this.props.children : null;
  }
}
