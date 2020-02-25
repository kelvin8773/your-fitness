import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: 3,
    sex: '',
    login: false,
  },
  reducers: {
    login: state => state.login = true,
    logout: state => state.login = false,

    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setAge: (state, action) => {
      state.age = action.payload.age;
    },
    setSex: (state, action) => {
      state.sex = action.payload.sex;
    },

  },
});

export const { name, age, sex } = state => state.user;
export const { setName, setAge, setSex } = slice.actions;

export default slice.reducer;
