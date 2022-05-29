import { v4 as uuid } from 'uuid';
const initialState = {
  products: [
    {
      id: uuid(),
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      subCategory: 'Sub Category 1',
    },
  ],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
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
};
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
