import React, { Component } from 'react';
import { Route, Link, NavLink, Switch, matchPath } from 'react-router-dom';
import './App.css';

// Components
import Fade from './components/Fade';
import About from './components/About';
import Contact from './components/Contact';
import Prints from './components/Prints';
import Print from './components/Print';
import CartToast from './components/CartToast';
import Cart from './components/Cart';
import Sidebar from './components/Sidebar';

// Containers
import Collection from './containers/Collection';
import Photo from './containers/Photo';

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
      <div className="app">
        <Sidebar />
        <Fade className="page">
          <Switch key={this.props.location.key} location={this.props.location}>
            <Route exact path="/" render={() => <Collection folder="outside" />} />
            <Route
              path="/totally-rad/:id"
              render={({ match }) =>
                <Photo folder="totally-rad" photoId={match.params.id} />}
            />
            <Route
              path="/outside/:id"
              render={({ match }) =>
                <Photo folder="outside" photoId={match.params.id} />}
            />
            <Route
              path="/climbing/:id"
              render={({ match }) =>
                <Photo folder="climbing" photoId={match.params.id} />}
            />
            <Route
              path="/totally-rad"
              render={() => <Collection folder="totally-rad" />}
            />
            <Route path="/outside" render={() => <Collection folder="outside" />} />
            <Route
              path="/climbing"
              render={() => <Collection folder="climbing" />}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/print/:id" component={Print} />
            <Route path="/prints" component={Prints} />
            <Route path="/cart" component={Cart} />
            <Route render={() => <div>Not found.</div>} />
          </Switch>
        </Fade>
      </div>
    );
  }
}

export default App;
