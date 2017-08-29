import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './CartToast.css';

class CartToast extends Component {
  render() {
    return (
      <div className="cart-toast">
        <div className="cart-total">Total: $40</div>
        <button
          className="checkout-btn btn-link"
          onClick={() => this.props.history.push('/cart')}
        >
          Cart
        </button>
      </div>
    );
  }
}

export default withRouter(CartToast);
