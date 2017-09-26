import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

// Feature flags
import { setupFlags } from '@crystal-ball/feature-flag';
setupFlags({
  prints: false,
  about: false
});

// Styles
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
