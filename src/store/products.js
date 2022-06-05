const initialState = {
  products: [
    // {
    //   catagoryId: 2,
    //   name: 'black Suit',
    //   description: 'This is a black suit',
    //   image:
    //     'https://cdn.pixabay.com/photo/2017/12/15/18/50/isolated-3021541_960_720.png',
    //   price: 1500,
    //   inventory: 10,
    // },
    // {
    //   catagoryId: 2,
    //   name: 'White T-Shirt',
    //   description: 'This is a white T-shirt',
    //   image:
    //     'https://cdn.pixabay.com/photo/2016/03/16/21/43/t-shirt-1261820_960_720.png',
    //   price: 1000,
    //   inventory: 10,
    // },
    // {
    //   catagoryId: 3,
    //   name: 'tv',
    //   description: 'This is a tv',
    //   image:
    //     'https://cdn.pixabay.com/photo/2013/07/12/14/49/flatscreen-148843__340.png',
    //   price: 3000,
    //   inventory: 10,
    // },
    // {
    //   catagoryId: 1,
    //   name: 'Apple',
    //   description: 'red and tasty',
    //   image:
    //     'https://cdn.europosters.eu/image/1300/art-photo/red-apple-i81609.jpg',
    //   price: 100,
    //   inventory: 10,
    // },
  ],
};
export default function products(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      // localStorage.setItem('products', JSON.stringify(state));
      // console.log(action.payload);
      return { ...state, products: action.payload };
    case 'ADD_PRODUCT':
      // console.log(action.payload);
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
    case 'INCREMENT_INVENTORY':
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return { ...product, inventory: product.inventory + 1 };
          } else {
            return product;
          }
        }),
      };

    case 'DECREMENT_INVENTORY':
      let newProducts = state.products.map((product) => {
        if (product.id === action.payload && product.inventory > 0) {
          return { ...product, inventory: product.inventory - 1 };
        } else {
          return product;
        }
      });
      return {
        ...state,
        products: newProducts,
      };

    case 'RETURN_INVENTORY':
      let newProducts2 = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            inventory: product.inventory + action.payload.quantity,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        products: newProducts2,
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
export const decrementInventory = (id) => {
  return {
    type: 'DECREMENT_INVENTORY',
    payload: id,
  };
};

export const incrementInventory = (id) => {
  return {
    type: 'INCREMENT_INVENTORY',
    payload: id,
  };
};
export const returnInventory = (item) => {
  return {
    type: 'RETURN_INVENTORY',
    payload: item,
  };
};
