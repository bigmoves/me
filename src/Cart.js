import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Cart.css';

export default class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <h1>Shopping Cart</h1>

        <table>
          <tbody>
            <tr>
              <th className="item-header">Item</th>
              <th className="quantity-header">Qty</th>
              <th className="price-header">Price</th>
            </tr>
            <tr className="item-row">
              <th>
                <div className="item">
                  <div className="remove-item">x</div>
                  <img
                    src={require(`./photos/122e5e2a7d6d444e9191f823fbe50388.jpeg`)}
                  />
                  <div className="item-description">
                    <Link to={`/print/122e5e2a7d6d444e9191f823fbe50388`}>
                      Image Title
                    </Link>
                    18x40
                  </div>
                </div>
              </th>
              <th className="item-quantity">1</th>
              <th className="item-price">$40</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
