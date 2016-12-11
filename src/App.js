import React, { Component } from 'react';
import './App.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

/**
 * Main app component
 * @class App
 * @constructor
 * @extends React.Component
 */
class App extends Component {

  // State
  //----------------------------------------------------------------------------

  state = {
    activePhoto: 0
  };

  // Methods
  //----------------------------------------------------------------------------

  /**
   * Gets the next photo index
   * @method getNextPhoto
   * @return {number}
   */
  getNextPhoto() {
    if (this.state.activePhoto + 1 !== photos.length) {
      return this.state.activePhoto + 1;
    } else {
      return 0;
    }
  }
  /**
   * Gets the previous photo index
   * @method getPrevPhoto
   * @return {number}
   */
  getPrevPhoto() {
    if (this.state.activePhoto - 1 < 0) {
      return photos.length - 1;
    } else {
      return this.state.activePhoto - 1;
    }
  }

  // Events
  //----------------------------------------------------------------------------

  /**
   * Sets the next photo to display
   * @event nextPhoto
   * @return {undefined}
   */
  nextPhoto = () => {
    this.setState({activePhoto: this.getNextPhoto()});
  }
  /**
   * Sets the previous photo to display
   * @event prevPhoto
   * @return {undefined}
   */
  prevPhoto = () => {
    this.setState({activePhoto: this.getPrevPhoto()});
  }

  // Render
  //----------------------------------------------------------------------------

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
          <ReactCSSTransitionGroup
            component="div"
            className="photo"
            transitionName="carosel"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            <img src={require(filePath(photos[this.state.activePhoto]))} key={photos[this.state.activePhoto]} alt="photo"/>
          </ReactCSSTransitionGroup>
          <div className="next-photo" onClick={this.nextPhoto}>
            <img src={require(filePath(photos[this.getNextPhoto()]))} alt="photo"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
