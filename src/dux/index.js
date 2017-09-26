import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import app from './app';
import cart from './cart';
import navigation from './navigation';
import photoControls from './photo-controls';
import photos from './photos';
import collections from './collections';

const rootReducer = combineReducers({
  app,
  cart,
  collections,
  navigation,
  photos,
  photoControls,
  router: routerReducer
});

export default rootReducer;
