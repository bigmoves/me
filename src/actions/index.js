import { push } from 'react-router-redux';

// Constants
export const NEXT_PHOTO = 'NEXT_PHOTO';
export const PREVIOUS_PHOTO = 'PREVIOUS_PHOTO';
export const SHOW_THUMBNAILS = 'SHOW_THUMBNAILS';
export const SET_ACTIVE_COLLECTION = 'SET_ACTIVE_COLLECTION';
export const SET_ACTIVE_PHOTO = 'SET_ACTIVE_PHOTO';

export function nextPhoto() {
  return (dispatch, getState) => {
    const { activeCollection, activePhoto } = getState().app;
    const photos = getState().photosByFolder[activeCollection];
    const photoIndex = photos.findIndex(p => p.indexOf(activePhoto) > -1);

    if (photos[photoIndex + 1]) {
      dispatch(
        push(
          `/${activeCollection}/${photos[photoIndex + 1]
            .replace(/^.*[\\\/]/, '')
            .split('.')
            .shift()}`
        )
      );
    }
  };
}

export function prevPhoto() {
  return (dispatch, getState) => {
    const { activeCollection, activePhoto } = getState().app;
    const photos = getState().photosByFolder[activeCollection];
    const photoIndex = photos.findIndex(p => p.indexOf(activePhoto) > -1);

    if (photos[photoIndex - 1]) {
      dispatch(
        push(
          `/${activeCollection}/${photos[photoIndex - 1]
            .replace(/^.*[\\\/]/, '')
            .split('.')
            .shift()}`
        )
      );
    }
  };
}

export function showThumbnails() {
  return (dispatch, getState) => {
    dispatch(push(`/${getState().app.activeCollection}`));
  };
}

export function goToPhoto(collection, photo) {
  return dispatch =>
    dispatch(
      push(`/${collection}/${photo.replace(/^.*[\\\/]/, '').split('.').shift()}`)
    );
}

export function setActiveCollection(collection) {
  return { type: SET_ACTIVE_COLLECTION, collection };
}

export function setActivePhoto(photo) {
  return { type: SET_ACTIVE_PHOTO, photo };
}
