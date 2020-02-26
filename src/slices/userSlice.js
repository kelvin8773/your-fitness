import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: 0,
    sex: '',
    weight: 0,
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
    setWeight: (state, action) => {
      state.weight = action.payload;
    },

  },
});


export const { setName, setAge, setSex, setWeight } = slice.actions;
export default slice.reducer;
