import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'status',
  initialState: {
    login: false,
    currentPage: '',
  },
  reducers: {
    sigIn: state => {
      state.login = true;
    },
    sigOut: state => {
      state.login = false;
    },
    setCurrentPage: (state, action) => {
      const { payload } = action;
      state.currentPage = payload
    },
  },
});

export const { sigIn, sigOut, setCurrentPage } = slice.actions;

export default slice.reducer;