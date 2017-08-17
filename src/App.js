import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  matchPath
} from 'react-router-dom';
import './App.css';

// Components
import Fade from './Fade';
import Collection from './Collection';
import Photo from './Photo';
import About from './About';
import Contact from './Contact';
import Prints from './Prints';
import Print from './Print';
import CartToast from './CartToast';
import Cart from './Cart';

// Svgs
import instagram from './icons/instagram.svg';
import github from './icons/github.svg';
import paperplane from './icons/paperplane.svg';

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
        <Route
          render={({ location }) =>
            <div className="app">
              <div className="sidebar">
                <h1 className="logo">
                  <Link to="/">Chad Miller</Link>
                </h1>
                <nav>
                  <ul>
                    <li>
                      <NavLink to="/totally-rad">Adventures with friends</NavLink>
                    </li>
                    <li>
                      <NavLink to="/outside">Explore Outside</NavLink>
                    </li>
                    <li>
                      <NavLink to="/climbing">Climbing</NavLink>
                    </li>
                  </ul>
                </nav>

                <div className="links">
                  <a href="https://www.instagram.com/chadtmiller" target="_blank">
                    <img src={instagram} />
                  </a>
                  <a href="https://github.com/bigmoves" target="_blank">
                    <img src={github} />
                  </a>
                  <a href="mailto:chadtmiller15@gmail.com">
                    <img src={paperplane} width="24" height="28" />
                  </a>
                </div>
              </div>
              <Fade className="page">
                <Switch key={location.key} location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => <Collection folder="explore" />}
                  />
                  <Route
                    path="/totally-rad"
                    render={() => <Collection folder="totally-rad" />}
                  />
                  <Route
                    path="/outside"
                    render={() => <Collection folder="explore" />}
                  />
                  <Route
                    path="/climbing"
                    render={() => <Collection folder="climbing" />}
                  />
                  <Route path="/photos/:id" component={Photo} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/print/:id" component={Print} />
                  <Route path="/prints" component={Prints} />
                  <Route path="/cart" component={Cart} />
                  <Route render={() => <div>Not found.</div>} />
                </Switch>
              </Fade>
            </div>}
        />
      </Router>
    );
  }
}

export default App;
