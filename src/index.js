import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Redux stuff
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Router stuff
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route render={({ location }) => <App location={location} />} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
