import superagent from 'superagent';

const api = 'https://storefront-api-mh.herokuapp.com';

//______________________________________________________________________________
// Cart Actions
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
// export const openCart = () => {
//   return {
//     type: 'OPEN_CART',
//   };
// };
// export const closeCart = () => {
//   return {
//     type: 'CLOSE_CART',
//   };
// };

// export const selectCatagories = (value) => {
//   return {
//     type: 'SELECT_CATAGORY',
//     payload: value,
//   };
// };
//..................................................................................
// catagory actions
export const getCatagory = (value) => {
  return {
    type: 'GET_CATAGORY',
    payload: value,
  };
};

// export const addCatagory = (value) => {
//   return {
//     type: 'ADD_CATAGORY',
//     payload: value,
//   };
// };

// export const deleteCatagory = (value) => {
//   return {
//     type: 'DELETE_CATAGORY',
//     payload: value,
//   };
// };

export const getActiveCatagory = (value) => {
  return {
    type: 'GET_ACTIVE_CATAGORY',
    payload: value,
  };
};

//______________________________________________________________________________
// // product actions
// export const addProduct = (product) => {
//   return {
//     type: 'ADD_PRODUCT',
//     payload: product,
//   };
// };
// export const deleteProduct = (id) => {
//   return {
//     type: 'DELETE_PRODUCT',
//     payload: id,
//   };
// };
export const getProducts = (value) => {
  return {
    type: 'GET_PRODUCTS',
    payload: value,
  };
};
// export const decrementInventory = (id) => {
//   return {
//     type: 'DECREMENT_INVENTORY',
//     payload: id,
//   };
// };

// export const incrementInventory = (id) => {
//   return {
//     type: 'INCREMENT_INVENTORY',
//     payload: id,
//   };
// };
// export const returnInventory = (item) => {
//   return {
//     type: 'RETURN_INVENTORY',
//     payload: item,
//   };
// };

//api actions
export const getCatagories = (value) => (dispatch, state) => {
  return superagent.get(`${api}/catagories`).then((res) => {
    // console.log(res.body);
    dispatch(getCatagory(res.body));
  });
};

export const getAllProducts = (value) => (dispatch, state) => {
  return superagent.get(`${api}/products`).then((res) => {
    // console.log(res.body);
    dispatch(getProducts(res.body));
    dispatch(getActiveCatagory(value));
  });
};

// export const addProductToCart = (product) => (dispatch, state) => {
//   return superagent.post(`${api}/cart`, { product }).then((res) => {
//     dispatch(addToCart(res.body));
//   });
// };