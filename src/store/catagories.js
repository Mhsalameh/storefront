let initialState = {
  catagories: [],
};

export default function catagory(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_CATAGORY':
      let catagory = state.catagories.find(
        (catagory) => catagory.id === action.payload
      );
      return catagory;
    case 'GET_CATAGORY':
      // localStorage.setItem('catagories', JSON.stringify(state));
      // console.log(action.payload);
      return {
        ...state,
        catagories: action.payload,
        activeCatagory: action.payload[0],
      };
    case 'ADD_CATAGORY':
      let newCatagory = {
        id: state.catagories.length,
        name: action.payload.name,
        description: action.payload.description,
        subCatagories: action.payload.subCatagories,
      };
      return { ...state, catagories: [...state.catagories, newCatagory] };

    case 'DELETE_CATAGORY':
      let newCatagories = state.catagories.filter((catagory) => {
        return catagory.id !== action.payload;
      });
      return { ...state, catagories: newCatagories };

    case 'GET_ACTIVE_CATAGORY':
      let activeCatagory = state.catagories.find(
        (catagory) => catagory.id === action.payload
      );
      // console.log(activeCatagory);
      return { ...state, activeCatagory };

    default:
      return { ...state, products: action.payload };
  }
}

export const selectCatagories = (value) => {
  return {
    type: 'SELECT_CATAGORY',
    payload: value,
  };
};

export const getCatagory = (value) => {
  return {
    type: 'GET_CATAGORY',
    payload: value,
  };
};

export const addCatagory = (value) => {
  return {
    type: 'ADD_CATAGORY',
    payload: value,
  };
};

export const deleteCatagory = (value) => {
  return {
    type: 'DELETE_CATAGORY',
    payload: value,
  };
};

export const addSubCatagory = (value) => {
  return {
    type: 'ADD_SUB_CATAGORY',
    payload: value,
  };
};

export const getActiveCatagory = (value) => {
  return {
    type: 'GET_ACTIVE_CATAGORY',
    payload: value,
  };
};
