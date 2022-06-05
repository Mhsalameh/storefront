let initialState = { items: [], total: 0, numberOfItems: 0, isCartOpen: false };
export default function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      let newItem = action.payload;
      let newCart = [...state.items];
      let newTotal = state.total;
      let newNumberOfItems = state.numberOfItems ? state.numberOfItems : 0;
      let existingItem = newCart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.inventory -= 1;
        newTotal += existingItem.price;
        newNumberOfItems += 1;
      } else {
        existingItem = {
          ...newItem,
          quantity: 1,
        };
        existingItem.inventory -= 1;
        newCart.push(existingItem);
        newTotal += existingItem.price;
        newNumberOfItems += 1;
      }
      return {
        ...state,
        items: newCart,
        total: newTotal,
        numberOfItems: newNumberOfItems,
      };
    case 'REMOVE_FROM_CART':
      let newCart2 = [...state.items];
      let newTotal2 = state.total;
      let newNumberOfItems2 = state.numberOfItems ? state.numberOfItems : 0;
      let existingItem2 = newCart2.find((item) => item.id === action.payload);
      if (existingItem2) {
        existingItem2.quantity -= 1;
        existingItem2.inventory += 1;
        newTotal2 -= existingItem2.price;
        newNumberOfItems2 -= 1;
        if (existingItem2.quantity === 0) {
          newCart2 = newCart2.filter((item) => item.id !== action.payload);
        }
      }
      return {
        ...state,
        items: newCart2,
        total: newTotal2,
        numberOfItems: newNumberOfItems2,
      };
    case 'GET_CART':
      return state;

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0,
        numberOfItems: 0,
      };

    case 'OPEN_CART':
      return {
        ...state,
        isCartOpen: true,
      };
    case 'CLOSE_CART':
      return {
        ...state,
        isCartOpen: false,
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
export const getCart = () => {
  return {
    type: 'GET_CART',
  };
};
export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};
export const openCart = () => {
  return {
    type: 'OPEN_CART',
  };
};
export const closeCart = () => {
  return {
    type: 'CLOSE_CART',
  };
};
