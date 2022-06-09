import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';

const api = 'https://storefront-api-mh.herokuapp.com';

const catagorySlice = createSlice({
  name: 'catagory',
  initialState: {
    catagories: [],
    activeCatagory: localStorage.getItem('activeCatagory') || '',
  },
  reducers: {
    getCatagory(state, action) {
      state.catagories = action.payload;
    },
    getActiveCatagory(state, action) {
      let activeCatagory = state.catagories.find(
        (catagory) => catagory.id === action.payload
      );
      localStorage.setItem('activeCatagory', JSON.stringify(activeCatagory));
      state.activeCatagory = activeCatagory;
    },
  },
});
export const { getCatagory, getActiveCatagory } = catagorySlice.actions;
export default catagorySlice.reducer;

export const getCatagories = (value) => (dispatch, state) => {
  return superagent.get(`${api}/catagories`).then((res) => {
    dispatch(getCatagory(res.body));
    if (value) {
      dispatch(getActiveCatagory(value));
    }
  });
};
