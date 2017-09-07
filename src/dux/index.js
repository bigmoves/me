import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import app from './app';
import cart from './cart';
import navigation from './navigation';
import photoControls from './photo-controls';
import photos from './photos';

const rootReducer = combineReducers({
  app,
  cart,
  photos,
  navigation,
  photoControls,
  router: routerReducer
});

export default rootReducer;
