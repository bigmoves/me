import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collection from '../components/Collection';
import { setActiveCollection, goToPrint } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    photos: state.photosByFolder[ownProps.folder]
  };
};

class CollectionContainer extends Component {
  componentWillMount() {
    this.props.setActiveCollection(this.props.folder);
  }

  render() {
    return <Collection {...this.props} />;
  }
}

export default connect(mapStateToProps, {
  setActiveCollection,
  selectPhoto: goToPrint
})(CollectionContainer);
