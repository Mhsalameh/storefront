import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cart')) || {
    items: [],
    total: 0,
    numberOfItems: 0,
  },
  reducers: {
    addToCart(state, action) {
      let newItem = action.payload;
      let itemExists = state.items.find((item) => item.id === newItem.id);
      let newTotal = state.total;
      let numberOfItems = state.numberOfItems ? state.numberOfItems : 0;
      if (itemExists) {
        itemExists.quantity++;
        itemExists.inventory--;
        newTotal += itemExists.price;
        numberOfItems++;
      } else {
        newItem = { ...newItem, quantity: 1 };
        newItem.inventory--;
        newTotal += newItem.price;
        numberOfItems++;
        state.items.push(newItem);
      }
      state.total = newTotal;
      state.numberOfItems = numberOfItems;
      localStorage.setItem(
        'cart',
        JSON.stringify({
          items: state.items,
          total: state.total,
          numberOfItems: state.numberOfItems,
        })
      );
    },
    removeFromCart(state, action) {
      let numberOfItems = state.numberOfItems ? state.numberOfItems : 0;
      let newTotal = state.total;
      let itemExists = state.items.find((item) => item.id === action.payload);
      if (itemExists) {
        itemExists.quantity--;
        itemExists.inventory++;
        newTotal -= itemExists.price;
        numberOfItems--;
        if (itemExists.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== itemExists.id);
        }
      }
      state.total = newTotal;
      state.numberOfItems = numberOfItems;
      localStorage.setItem(
        'cart',
        JSON.stringify({
          items: state.items,
          total: state.total,
          numberOfItems: state.numberOfItems,
        })
      );
    },
    getCart(state, action) {
      state.items = action.payload;
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
      state.numberOfItems = 0;
      localStorage.setItem(
        'cart',
        JSON.stringify({ items: [], total: 0, numberOfItems: 0 })
      );
    },
  },
});
export const { addToCart, removeFromCart, clearCart, getCart } =
  cartSlice.actions;
export default cartSlice.reducer;

// let initialState = { items: [], total: 0, numberOfItems: 0, isCartOpen: false };
// export default function cart(
//   state = JSON.parse(localStorage.getItem('cart')) || initialState,
//   action
// ) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       let newItem = action.payload;
//       let newCart = [...state.items];
//       let newTotal = state.total;
//       let newNumberOfItems = state.numberOfItems ? state.numberOfItems : 0;
//       let existingItem = newCart.find((item) => item.id === newItem.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//         existingItem.inventory -= 1;
//         newTotal += existingItem.price;
//         newNumberOfItems += 1;
//       } else {
//         existingItem = {
//           ...newItem,
//           quantity: 1,
//         };
//         existingItem.inventory -= 1;
//         newCart.push(existingItem);
//         newTotal += existingItem.price;
//         newNumberOfItems += 1;
//       }
//       localStorage.setItem(
//         'cart',
//         JSON.stringify({
//           ...state,
//           items: newCart,
//           total: newTotal,
//           numberOfItems: newNumberOfItems,
//         })
//       );
//       return {
//         ...state,
//         items: newCart,
//         total: newTotal,
//         numberOfItems: newNumberOfItems,
//       };
//     case 'REMOVE_FROM_CART':
//       let newCart2 = [...state.items];
//       let newTotal2 = state.total;
//       let newNumberOfItems2 = state.numberOfItems ? state.numberOfItems : 0;
//       let existingItem2 = newCart2.find((item) => item.id === action.payload);
//       if (existingItem2) {
//         existingItem2.quantity -= 1;
//         existingItem2.inventory += 1;
//         newTotal2 -= existingItem2.price;
//         newNumberOfItems2 -= 1;
//         if (existingItem2.quantity === 0) {
//           newCart2 = newCart2.filter((item) => item.id !== action.payload);
//         }
//       }
//       localStorage.setItem(
//         'cart',
//         JSON.stringify({
//           ...state,
//           items: newCart2,
//           total: newTotal2,
//           numberOfItems: newNumberOfItems2,
//         })
//       );
//       return {
//         ...state,
//         items: newCart2,
//         total: newTotal2,
//         numberOfItems: newNumberOfItems2,
//       };
//     case 'GET_CART':
//       return state;

//     case 'CLEAR_CART':
//       localStorage.setItem('cart', JSON.stringify(initialState));
//       return {
//         ...state,
//         items: [],
//         total: 0,
//         numberOfItems: 0,
//       };

//     default:
//       return state;
//   }
// }

// export const addToCart = (item) => {
//   return {
//     type: 'ADD_TO_CART',
//     payload: item,
//   };
// };
// export const removeFromCart = (item) => {
//   return {
//     type: 'REMOVE_FROM_CART',
//     payload: item,
//   };
// };
// export const getCart = () => {
//   return {
//     type: 'GET_CART',
//   };
// };
// export const clearCart = () => {
//   return {
//     type: 'CLEAR_CART',
//   };
// };
