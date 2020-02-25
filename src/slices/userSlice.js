import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: 0,
    sex: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setSex: (state, action) => {
      state.sex = action.payload;
    },

  },
});


export const { setName, setAge, setSex } = slice.actions;
export default slice.reducer;
