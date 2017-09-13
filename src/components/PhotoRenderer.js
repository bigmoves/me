import React, { Component } from 'react';

class PhotoRenderer extends Component {
  state = {
    height: 0,
    shouldRender: false,
    inView: false,
    style: {}
  };

  componentDidMount() {
    const height = this.el.offsetWidth / this.props.ratio;
    this.setState(
      {
        style: { height: height + 10 }
      },
      () => {
        const top = this.el.getBoundingClientRect().top;
        if (top < window.outerHeight) {
          this.setState({ shouldRender: true, inView: true }, () => {
            this.props.didRender();
            this.setState({ style: { display: 'none' } });
          });
        }
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.shouldRender && nextProps.kRender) {
      this.setState({ shouldRender: true }, () => {
        setTimeout(() => {
          this.setState({ style: {} });
        }, 1000);
      });
    } else if (this.state.shouldRender && nextProps.kRender) {
      this.setState({ style: { display: 'block' } });
    }
  }

  render() {
    const { ratio, didRender, kRender, ...rest } = this.props;

    return (
      <div ref={el => (this.el = el)} {...rest} style={this.state.style}>
        {this.state.shouldRender &&
          this.props.children(this.state.inView, this.state.shouldRender)}
      </div>
    );
  }
}

export default PhotoRenderer;
