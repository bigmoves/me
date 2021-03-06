// Actions
export const SET_ACTIVE_COLLECTION = 'SET_ACTIVE_COLLECTION';
export const SET_ACTIVE_PHOTO = 'SET_ACTIVE_PHOTO';

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
      return {
        ...state,
        activePhoto: action.photo
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
  console.log('photo', photo);
  return (dispatch, getState) => {
    const photos = getState().photos.photos;
    let filename = '';

    if (photo) {
      const photoMeta = photos.find(p => p.path.indexOf(photo) > -1);
      if (photoMeta) {
        filename = photoMeta.filename;
      }
    }

    dispatch({ type: SET_ACTIVE_PHOTO, photo: filename });
  };
}
