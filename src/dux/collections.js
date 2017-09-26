import config from '../config';

// Actions
export const REQUEST_COLLECTIONS = 'REQUEST_COLLECTIONS';
export const RECEIVE_COLLECTIONS = 'RECEIVE_COLLECTIONS';
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

// Reducer
const defaultState = {
  items: []
};
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case RECEIVE_COLLECTIONS:
      return {
        ...state,
        items: action.collections.slice()
      };
    case RECEIVE_COLLECTION:
      return {
        ...state,
        items: [...state.items, action.collection]
      };
    default:
      return state;
  }
}

// Action Creators
function requestCollections() {
  return {
    type: RECEIVE_COLLECTIONS
  };
}

function receiveCollections(collections) {
  return {
    type: RECEIVE_COLLECTIONS,
    collections
  };
}

export function fetchCollections() {
  return dispatch => {
    dispatch(requestCollections);

    return fetch(`${config.API_HOST}/collections`)
      .then(
        response => response.json(),
        error => console.log('Error fetching collections', error)
      )
      .then(json => {
        dispatch(receiveCollections(json));
      });
  };
}

function receiveCollection(collection) {
  return {
    type: RECEIVE_COLLECTION,
    collection
  };
}

export function createCollection(data) {
  return dispatch => {
    return fetch(`${config.API_HOST}/collections`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(
        response => response.json(),
        error => console.log('Error creating collection', error)
      )
      .then(json => {
        dispatch(receiveCollection(json));
      });
  };
}

function receivePhoto(photo) {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
}

export function uploadFile(file, collectionId) {
  const form = new FormData();
  form.append('file', file);
  return dispatch => {
    return fetch(`${config.API_HOST}/photos/upload`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json'
      },
      body: form
    })
      .then(
        response => response.json(),
        error => console.log('Error creating photo', error)
      )
      .then(json => {
        dispatch(
          createPhoto({
            collection: collectionId,
            ...json
          })
        );
      });
  };
}

function createPhoto(data) {
  return dispatch => {
    return fetch(`${config.API_HOST}/photos`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(
        response => response.json(),
        error => console.log('Error creating photo', error)
      )
      .then(json => {
        dispatch(receivePhoto(json));
      });
  };
}
