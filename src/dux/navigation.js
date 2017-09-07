import { push } from 'react-router-redux';

// Actions

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}

// Action creators
export function goToPhoto(collection, photo) {
  return dispatch =>
    dispatch(
      push(
        `/${collection}/${photo
          .replace(/^.*[\\\/]/, '')
          .split('.')
          .shift()}`
      )
    );
}

export function goToPrint(_, photo) {
  return dispatch =>
    dispatch(
      push(
        `/print/${photo
          .replace(/^.*[\\\/]/, '')
          .split('.')
          .shift()}`
      )
    );
}
