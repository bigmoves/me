import CartToast from '../components/CartToast';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    total: state.cart.total,
    itemCount: state.cart.items.length
  };
};

export default connect(mapStateToProps, {})(CartToast);
