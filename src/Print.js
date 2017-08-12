import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './Print.css';

const sizes = ['8x10', '11x14', '16x20', '20x30', '24x36'];

class Print extends Component {
  render() {
    const photo = this.props.match.params.id;

    return (
      <div className="print">
        <Link to="/prints" className="back-btn">
          {`<-- Back to prints`}
        </Link>

        <div className="print-content">
          <div className="image">
            <img src={require(`./photos/${photo}.jpeg`)} />
          </div>
          <div className="print-info">
            <h1>Print Title</h1>
            <div className="price">$40</div>
            <select>
              {sizes.map(size =>
                <option value="size">
                  {size}
                </option>
              )}
            </select>
            <p>
              Quantity:
              <input type="number" />
            </p>

            <button>Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Print);
