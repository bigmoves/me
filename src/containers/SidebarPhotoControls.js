import SidebarPhotoControls from '../components/SidebarPhotoControls';
import { connect } from 'react-redux';
import { nextPhoto, prevPhoto, showThumbnails } from '../dux/photo-controls';

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { nextPhoto, prevPhoto, showThumbnails })(
  SidebarPhotoControls
);
