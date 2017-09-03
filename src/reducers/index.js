import { combineReducers } from 'redux';
import uniq from 'lodash/uniq';
import * as ActionTypes from '../actions';
import { routerReducer } from 'react-router-redux';

// Gets all of the image filenames in the /photos directory
const context = require.context('../photos', true, /\.(jpg|jpeg)$/);
const photoPaths = context.keys();

const folders = uniq(photoPaths.map(path => path.split('/')[1]));

const app = (state = { activeCollection: '' }, action) => {
  if (action.type === ActionTypes.SET_ACTIVE_COLLECTION) {
    state.activeCollection = action.collection;
  } else if (action.type === ActionTypes.SET_ACTIVE_PHOTO) {
    const photoPath = photoPaths.find(p => p.indexOf(action.photo) > -1);
    state.activePhoto = photoPath;
  }

  return state;
};

const photos = (state = photoPaths, action) => {
  return state;
};

const photosByFolder = (state = [], action) => {
  return folders.reduce((obj, folder) => {
    obj[folder] = photoPaths.filter(p => p.indexOf(folder) > -1);
    return obj;
  }, {});
};

const cart = (state = { items: [], total: 0 }, action) => {
  const { item } = action;

  if (action.type === 'ADD_TO_CART') {
    // don't add duplicates
    // if (state.items.find(i => (i.img === cartitem.img) && ())) {
    //   return state;
    // }

    state.items = [...state.items, action.item];
    state.items.forEach(i => (state.total += +i.price * i.quantity));
  } else if (action.type === 'REMOVE_FROM_CART') {
    const index = state.items.findIndex(i => i.img === action.item.img);
    state.items = [...state.items.slice(0, index), ...state.items.slice(index + 1)];
    state.total = 0;
    state.items.forEach(i => (state.total += +i.price * i.quantity));
  }

  return {
    ...state
  };
};

const rootReducer = combineReducers({
  app,
  cart,
  photos,
  photosByFolder,
  router: routerReducer
});

export default rootReducer;
