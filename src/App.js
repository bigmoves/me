import React, { Component } from 'react';
import './App.css';

// Svgs
import instagram from './instagram.svg';
import github from './github.svg';

const photos = [
  './photos/20161113-_DSC1440.jpg',
  './photos/20161118-_DSC1476.jpg',
  './photos/20161118-_DSC1492.jpg',
  './photos/20161127-_DSC1515.jpg',
  './photos/20161203-_DSC1575.jpg',
  './photos/20161203-_DSC1581.jpg'
];

class App extends Component {

  state = {
    activePhoto: 0
  };

  nextPhoto = () => {
    if (this.state.activePhoto + 1 < photos.length) {
      this.setState({
        activePhoto: this.state.activePhoto + 1
      });
    } else {
      this.setState({
        activePhoto: 0
      });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <h1>Chad Miller</h1>
          <span>Software developer</span>
          <span>Adventurer</span>
          <div className="links">
            <a href="https://www.instagram.com/chadtmiller" target="_blank">
              <img src={instagram}/>
            </a>
            <a href="https://github.com/bigmoves" target="_blank">
              <img src={github}/>
            </a>
          </div>
          <div className="actions">
            <button>Prev</button>/<button>Next</button>
          </div>
        </div>
        <div className="content">
          <div className="photo">
            <img src={require(photos[this.state.activePhoto])} alt="photo"/>
          </div>
          <div className="next-photo" onClick={this.nextPhoto}>
            <img src={require(photos[this.state.activePhoto + 1])} alt="photo"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
