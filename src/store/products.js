import { v4 as uuid } from 'uuid';
const initialState = {
  products: [
    {
      catId: 1,
      id: uuid(),
      name: 'black Suit',
      description: 'This is a black suit',
      image:
        'https://cdn.pixabay.com/photo/2017/12/15/18/50/isolated-3021541_960_720.png',
      price: 10,
      inventory: 10,
    },
    {
      catId: 1,
      id: uuid(),
      name: 'White T-Shirt',
      description: 'This is a white T-shirt',
      image:
        'https://cdn.pixabay.com/photo/2016/03/16/21/43/t-shirt-1261820_960_720.png',
      price: 10,
      inventory: 10,
    },
    {
      catId: 2,
      id: uuid(),
      name: 'tv',
      description: 'This is a tv',
      image:
        'https://cdn.pixabay.com/photo/2013/07/12/14/49/flatscreen-148843__340.png',
      price: 10,
      inventory: 10,
    },
    {
      catId: 0,
      id: uuid(),
      name: 'Apple',
      description: 'red and tasty',
      image:
        'https://cdn.europosters.eu/image/1300/art-photo/red-apple-i81609.jpg',
      price: 10,
      inventory: 10,
    },
  ],
};
export default function products(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      // localStorage.setItem('products', JSON.stringify(state));
      return state;
    case 'ADD_PRODUCT':
      console.log(action.payload);
      // if (state.products[0])
      // localStorage.setItem('products', JSON.stringify(state));
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};
export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: id,
  };
};
export const getProducts = () => {
  return {
    type: 'GET_PRODUCTS',
  };
};
