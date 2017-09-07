import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../dux/cart';

import '../components/Print.css';

import Button from '../components/shared/Button';
import Photo from '../components/Photo';
import FullscreenOverlay from '../components/FullscreenOverlay';

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
    quantity: 1,
    showFullscreen: false
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
          <div
            className="image"
            onClick={() =>
              this.setState({ showFullscreen: !this.state.showFullscreen })}
          >
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

        <FullscreenOverlay
          show={this.state.showFullscreen}
          onHide={() => this.setState({ showFullscreen: false })}
        >
          <Photo photoId={`./prints/${photo}.jpg`} />
        </FullscreenOverlay>
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
