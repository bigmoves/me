import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';

// Components
import Fade from './components/Fade';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Sidebar from './components/Sidebar';
import Checkout from './components/Checkout';

import { FeatureFlag } from '@crystal-ball/feature-flag';

// Containers
import CartToast from './containers/CartToast';
import Collection from './containers/Collection';
import PhotoPage from './containers/PhotoPage';
import Prints from './containers/Prints';
import Print from './containers/Print';

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
    console.log(this.props);
    return (
      <div className="app">
        <FeatureFlag path="prints">
          {/* @TODO: Show the cart toast on every page but the /cart page. */}
          <CartToast />
        </FeatureFlag>
        <Sidebar />
        <Fade className="page">
          <Switch key={this.props.location.key} location={this.props.location}>
            <Route exact path="/" render={() => <Redirect to="/outside" />} />
            <Route
              path="/totally-rad/:id"
              render={({ match }) => (
                <PhotoPage folder="totally-rad" photoId={match.params.id} />
              )}
            />
            <Route
              path="/outside/:id"
              render={({ match }) => (
                <PhotoPage folder="outside" photoId={match.params.id} />
              )}
            />
            <Route
              path="/climbing/:id"
              render={({ match }) => (
                <PhotoPage folder="climbing" photoId={match.params.id} />
              )}
            />
            <Route
              path="/totally-rad"
              render={() => <Collection folder="totally-rad" />}
            />
            <Route
              path="/outside"
              render={() => <Collection folder="outside" />}
            />
            <Route
              path="/climbing"
              render={() => <Collection folder="climbing" />}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/print/:id" component={Print} />
            <Route path="/prints" render={() => <Prints folder="prints" />} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route render={() => <div>Not found.</div>} />
          </Switch>
        </Fade>
      </div>
    );
  }
}

export default withRouter(App);
