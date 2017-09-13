import uniq from 'lodash/uniq';

// Actions

import photoData from '../photos/data.json';
const folders = uniq(photoData.map(meta => meta.collection));
const photosByFolder = () => {
  return folders.reduce((obj, folder) => {
    obj[folder] = photoData.filter(photo => folder === photo.collection);
    return obj;
  }, {});
};

// Reducer
const defaultState = {
  photos: photoData,
  photosByFolder: photosByFolder()
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}

// Action creators
