import uniq from 'lodash/uniq';

// Actions

// Gets all of the image filenames in the /photos directory
const context = require.context('../photos', true, /\.(jpg|jpeg)$/);
const photoPaths = context.keys();
const folders = uniq(photoPaths.map(path => path.split('/')[1]));
const photosByFolder = () => {
  return folders.reduce((obj, folder) => {
    obj[folder] = photoPaths.filter(p => p.indexOf(folder) > -1);
    return obj;
  }, {});
};

// Reducer
const defaultState = {
  photos: photoPaths,
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
