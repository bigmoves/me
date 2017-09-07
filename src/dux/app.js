// Actions
export const SET_ACTIVE_COLLECTION = 'SET_ACTIVE_COLLECTION';
export const SET_ACTIVE_PHOTO = 'SET_ACTIVE_PHOTO';

// Gets all of the image filenames in the /photos directory
const context = require.context('../photos', true, /\.(jpg|jpeg)$/);
const photoPaths = context.keys();

// Reducer
const defaultState = {
  activeCollection: '',
  activePhoto: ''
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case SET_ACTIVE_COLLECTION:
      return {
        ...state,
        activeCollection: action.collection
      };
    case SET_ACTIVE_PHOTO:
      const photoPath = photoPaths.find(p => p.indexOf(action.photo) > -1);
      return {
        ...state,
        activePhoto: photoPath
      };
    default:
      return state;
  }
}

// Action creators
export function setActiveCollection(collection) {
  return { type: SET_ACTIVE_COLLECTION, collection };
}

export function setActivePhoto(photo) {
  return { type: SET_ACTIVE_PHOTO, photo };
}
