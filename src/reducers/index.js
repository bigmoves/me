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

const rootReducer = combineReducers({
  app,
  photos,
  photosByFolder,
  router: routerReducer
});

export default rootReducer;
