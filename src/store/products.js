import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
const api = 'https://storefront-api-mh.herokuapp.com';
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state, action) => {
      action.payload.sort((a, b) => {
        return a.id - b.id;
      });
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export default productsSlice.reducer;
export const { getProducts, addProduct } = productsSlice.actions;

export const getAllProducts = () => (dispatch, state) => {
  return superagent.get(`${api}/products`).then((res) => {
    dispatch(getProducts(res.body));
  });
};

export const updateProduct = (action, product) => (dispatch, state) => {
  state();
  let newProduct = product;
  switch (action) {
    case 'decrement':
      newProduct = { ...product, inventory: product.inventory - 1 };
      break;
    case 'increment':
      newProduct = { ...product, inventory: product.inventory + 1 };
      break;
    case 'return':
      newProduct = {
        ...product,
        inventory: product.inventory + product.quantity,
      };
      break;
    default:
      break;
  }

  return superagent
    .put(`${api}/products/${product.id}`)
    .send({ inventory: newProduct.inventory })
    .then((res) => {
      dispatch(getProducts(res.body));
    });
};

// const initialState = {
//   products: [],
// };
// export default function products(state = initialState, action) {
//   switch (action.type) {
//     case 'GET_PRODUCTS':
//       action.payload.sort((a, b) => {
//         return a.id - b.id;
//       });
//       return { ...state, products: action.payload };
//     case 'ADD_PRODUCT':
//       return {
//         ...state,
//         products: [...state.products, action.payload],
//       };

//     default:
//       return state;
//   }
// }
// export const addProduct = (product) => {
//   return {
//     type: 'ADD_PRODUCT',
//     payload: product,
//   };
// };

// export const getProducts = () => {
//   return {
//     type: 'GET_PRODUCTS',
//   };
// };
