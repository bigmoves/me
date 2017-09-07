import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../dux';
import { routerMiddleware } from 'react-router-redux';

const configureStore = (history, preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, routerMiddleware(history), logger)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../dux', () => {
      const nextRootReducer = require('../dux').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
