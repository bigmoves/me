// Actions
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Reducer
const defaultState = {
  items: [],
  total: 0
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case REMOVE_FROM_CART:
      const index = state.items.findIndex(i => i.img === action.item.img);
      return {
        ...state,
        items: [...state.items.slice(0, index), ...state.items.slice(index + 1)]
      };

    // do reducer stuff
    default:
      return state;
  }
}

// const cart = (state = { items: [], total: 0 }, action) => {
//   const { item } = action;

//   if (action.type === 'ADD_TO_CART') {
//     // don't add duplicates
//     // if (state.items.find(i => (i.img === cartitem.img) && ())) {
//     //   return state;
//     // }

//     state.items = [...state.items, action.item];
//     state.items.forEach(i => (state.total += +i.price * i.quantity));
//   } else if (action.type === 'REMOVE_FROM_CART') {
//     const index = state.items.findIndex(i => i.img === action.item.img);
//     state.items = [...state.items.slice(0, index), ...state.items.slice(index + 1)];
//     state.total = 0;
//     state.items.forEach(i => (state.total += +i.price * i.quantity));
//   }

//   return {
//     ...state
//   };
// };

// Action creators
export function addToCart(item) {
  return { type: ADD_TO_CART, item };
}

export function removeFromCart(item) {
  return { type: REMOVE_FROM_CART, item };
}
