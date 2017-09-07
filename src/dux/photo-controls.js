import { push } from 'react-router-redux';

// Actions
export const NEXT_PHOTO = 'NEXT_PHOTO';
export const PREVIOUS_PHOTO = 'PREVIOUS_PHOTO';
export const SHOW_THUMBNAILS = 'SHOW_THUMBNAILS';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}

// Action Creators
export function nextPhoto() {
  return (dispatch, getState) => {
    const { activeCollection, activePhoto } = getState().app;
    const photos = getState().photos.photosByFolder[activeCollection];
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
    const photos = getState().photos.photosByFolder[activeCollection];
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
