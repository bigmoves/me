import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './_App.css';

// Components
import Main from './Main';
import About from './About';
import Contact from './Contact';
import Prints from './Prints';
import Print from './Print';
import CartToast from './CartToast';
import Cart from './Cart';

// Svgs
import instagram from './icons/instagram.svg';
import github from './icons/github.svg';

/**
 * Main app component
 * @class App
 * @constructor
 * @extends React.Component
 */
class App extends Component {
  // Render
  //----------------------------------------------------------------------------
  render() {
    return (
      <Router>
        <div className="app">
          <CartToast />
          <div className="sidebar">
            <h1>Chad Miller</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Collections</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/prints">Prints</Link>
                </li>
              </ul>
            </nav>

            <div className="links">
              <button className="btn-link">
                <img src={instagram} />
              </button>
              <button className="btn-link">
                <img src={github} />
              </button>
            </div>
          </div>
          <div className="page">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/print/:id" component={Print} />
              <Route path="/prints" component={Prints} />
              <Route path="/cart" component={Cart} />
              <Route render={() => <div>Not found.</div>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
