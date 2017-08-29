import React, { Component } from 'react';
import { connect } from 'react-redux';
import Photo from '../components/Photo';
import { setActiveCollection, setActivePhoto } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.app.activePhoto
  };
};

class PhotoContainer extends Component {
  componentWillMount() {
    this.props.setActiveCollection(this.props.folder);
    this.props.setActivePhoto(this.props.photoId);
  }

  render() {
    return <Photo {...this.props} />;
  }
}

export default connect(mapStateToProps, { setActiveCollection, setActivePhoto })(
  PhotoContainer
);
