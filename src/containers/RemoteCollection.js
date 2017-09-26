import React, { Component } from 'react';
import { connect } from 'react-redux';
import RemoteCollection from '../components/RemoteCollection';
import { setActiveCollection, setActivePhoto } from '../dux/app';
import { goToPhoto } from '../dux/navigation';
import { uploadFile } from '../dux/collections';

const mapStateToProps = (state, ownProps) => {
  return {
    photos: []
  };
};

class RemoteCollectionContainer extends Component {
  componentWillMount() {
    this.props.setActivePhoto('');
    this.props.setActiveCollection(this.props.name);
  }

  render() {
    return <RemoteCollection {...this.props} />;
  }
}

export default connect(mapStateToProps, {
  setActiveCollection,
  setActivePhoto,
  selectPhoto: goToPhoto,
  uploadFile
})(RemoteCollectionContainer);
