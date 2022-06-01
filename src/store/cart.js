const initialState = {
  items: [{}],
  total: 0,
  numberOfItems: 0,
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
        numberOfItems: state.numberOfItems + 1,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        total: state.total - action.payload.price,
        numberOfItems: state.numberOfItems - 1,
      };
    default:
      return state;
  }
}

export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};
export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: item,
  };
};
