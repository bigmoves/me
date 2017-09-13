import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoPage from '../components/PhotoPage';
import { setActiveCollection, setActivePhoto } from '../dux/app';

const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.app.activePhoto,
    collection: state.app.activeCollection
  };
};

class PhotoContainer extends Component {
  componentWillMount() {
    this.props.setActiveCollection(this.props.folder);
    this.props.setActivePhoto(this.props.photoId);
  }

  render() {
    return <PhotoPage {...this.props} />;
  }
}

export default connect(mapStateToProps, {
  setActiveCollection,
  setActivePhoto
})(PhotoContainer);
