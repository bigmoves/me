import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { number } from 'prop-types';
import { emojify } from 'react-emojione';

import './CartToast.css';

class CartToast extends Component {
  static propTypes = {
    itemCount: number,
    total: number
  };

  render() {
    if (!this.props.total) {
      return null;
    }

    return (
      <div className="cart-toast">
        <Link to="/cart">
          {emojify(':shopping_cart:')}
          <div className="item-count">
            {this.props.itemCount} item{`${this.props.itemCount > 1
              ? 's'
              : ''}`}
          </div>
          <div className="total">
            {new Intl.NumberFormat('en', {
              style: 'currency',
              currency: 'USD'
            }).format(this.props.total)}
          </div>
        </Link>
      </div>
    );
  }
}

export default CartToast;
