import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collection from '../components/Collection';
import { setActiveCollection, setActivePhoto } from '../dux/app';
import { goToPhoto } from '../dux/navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    photos: state.photos.photosByFolder[ownProps.folder]
  };
};

class CollectionContainer extends Component {
  componentWillMount() {
    this.props.setActivePhoto('');
    this.props.setActiveCollection(this.props.folder);
  }

  render() {
    return <Collection {...this.props} />;
  }
}

export default connect(mapStateToProps, {
  setActiveCollection,
  setActivePhoto,
  selectPhoto: goToPhoto
})(CollectionContainer);
