import React, { Component } from 'react';
import './App.css';

// Svgs
import instagram from './instagram.svg';
import github from './github.svg';

// Gets all of the image filenames in the /photos directory
const context = require.context('./photos', true, /\.jpg$/);
const photos = context.keys();

// Re-formats the file path context returns in order to require the photo
const filePath = (file) => {
  return file.replace('./', './photos/');
};

class App extends Component {

  state = {
    activePhoto: 0
  };

  getNextPhoto() {
    if (this.state.activePhoto + 1 !== photos.length) {
      return this.state.activePhoto + 1;
    } else {
      return 0;
    }
  }

  getPrevPhoto() {
    if (this.state.activePhoto - 1 < 0) {
      return photos.length - 1;
    } else {
      return this.state.activePhoto - 1;
    }
  }

  nextPhoto = () => {
    this.setState({activePhoto: this.getNextPhoto()});
  }

  prevPhoto = () => {
    this.setState({activePhoto: this.getPrevPhoto()});
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
            <button className="btn-link" onClick={this.prevPhoto}>Prev</button>/
            <button className="btn-link" onClick={this.nextPhoto}>Next</button>
          </div>
        </div>
        <div className="content">
          <div className="photo">
            <img src={require(filePath(photos[this.state.activePhoto]))} alt="photo"/>
          </div>
          <div className="next-photo" onClick={this.nextPhoto}>
            <img src={require(filePath(photos[this.getNextPhoto()]))} alt="photo"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
