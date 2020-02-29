import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: 30,
    sex: 'male',
  },
  reducers: {
    getUser: (state, action) => {

    },

    updateUser: (state, action) => {
      const { payload } = action;
      Object.assign(state, payload);
    },

  },
});


export const {
  getUser,
  updateUser,
} = slice.actions;
export default slice.reducer;
