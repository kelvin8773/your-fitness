import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'status',
  initialState: {
    login: false,
  },
  reducers: {
    sigIn: state => {
      state.login = true;
    },
    sigOut: state => {
      state.login = false;
    },
  },
});

export const { sigIn, sigOut } = slice.actions;

export default slice.reducer;