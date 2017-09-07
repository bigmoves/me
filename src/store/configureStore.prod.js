import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../dux';
import { routerMiddleware } from 'react-router-redux';

const configureStore = (history, preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, routerMiddleware(history))
  );
  return store;
};

export default configureStore;
