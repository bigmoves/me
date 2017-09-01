import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

import '../components/Print.css';

import Button from '../components/Button';

const options = {
  '8x10': 40,
  '11x14': 60,
  '16x20': 80,
  '20x30': 100,
  '24x36': 120
};

class Print extends Component {
  state = {
    size: Object.keys(options)[0],
    quantity: 1
  };

  addToCart = () => {
    this.props.addToCart({
      label: '',
      img: this.props.match.params.id,
      quantity: this.state.quantity,
      size: this.state.size,
      price: options[this.state.size]
    });
  };

  render() {
    const photo = this.props.match.params.id;

    return (
      <div className="print">
        <Link to="/prints" className="back-btn">
          {`<-- Back to prints`}
        </Link>

        <div className="print-content">
          <div className="image">
            <img src={require(`../photos/prints/${photo}.jpg`)} alt={photo} />
          </div>
          <div className="print-info">
            <h1>Print Title</h1>
            <div className="price">{options[this.state.size]}</div>
            <select onChange={e => this.setState({ size: e.target.value })}>
              {Object.keys(options).map((size, i) => (
                <option key={i} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <p>
              Quantity:
              <input
                type="number"
                defaultValue={this.state.quantity}
                onChange={e => this.setState({ quantity: e.target.value })}
              />
            </p>

            <Button onClick={this.addToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, {
  addToCart
})(Print);
