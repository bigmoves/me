import React, { Component } from 'react';
import App from '../App';
import { connect } from 'react-redux';
import { fetchCollections } from '../dux/collections';

const mapStateToProps = (state, ownProps) => {
  return {
    collections: state.collections.items
  };
};

class AppContainer extends Component {
  componentWillMount() {
    this.props.fetchCollections();
  }

  render() {
    return <App collections={this.props.collections} />;
  }
}

export default connect(mapStateToProps, { fetchCollections })(AppContainer);
