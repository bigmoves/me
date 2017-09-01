import React, { Component } from 'react';
import { number, array } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';

import './Cart.css';

import Button from './Button';

class Cart extends Component {
  static propTypes = {
    cartTotal: number,
    items: array
  };

  render() {
    return (
      <div className="cart">
        <h1>Shopping Cart</h1>
        <table>
          <tbody>
            <tr className="header-row">
              <th className="item-header">Item</th>
              <th className="quantity-header">Qty</th>
              <th className="price-header">Price</th>
            </tr>
            {this.props.items.map((item, i) => {
              return (
                <tr className="item-row" key={i}>
                  <th>
                    <div className="item">
                      <div
                        className="remove-item"
                        onClick={() => this.props.removeFromCart(item)}
                      >
                        x
                      </div>
                      <div className="item-info">
                        <div className="item-image">
                          <img
                            width={100}
                            src={require(`../photos/prints/${item.img}.jpg`)}
                            alt={item.img}
                          />
                        </div>
                        <div className="item-description">
                          <Link to={`/print/${item.img}`}>Image Title</Link>
                          <span>{item.size}</span>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className="item-quantity">{item.quantity}</th>
                  <th className="item-price">
                    {new Intl.NumberFormat('en', {
                      style: 'currency',
                      currency: 'USD'
                    }).format(item.price)}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="subtotal">
          Subtotal:{' '}
          {new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD'
          }).format(this.props.cartTotal)}
        </div>
        <div className="checkout">
          <Button onClick={() => this.props.history.push('/checkout')}>
            Checkout
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cartTotal: state.cart.total,
    items: state.cart.items
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);
