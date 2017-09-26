import React, { Component } from 'react';
import Nav from '../components/Nav';
import { connect } from 'react-redux';
import { createCollection, fetchCollections } from '../dux/collections';

const mapStateToProps = (state, ownProps) => {
  return {
    collections: state.collections.items
  };
};

class NavContainer extends Component {
  componentWillMount() {
    this.props.fetchCollections();
  }

  render() {
    return (
      <Nav
        className={this.props.className}
        createCollection={this.props.createCollection}
        collections={this.props.collections}
      />
    );
  }
}

export default connect(mapStateToProps, { createCollection, fetchCollections })(
  NavContainer
);
