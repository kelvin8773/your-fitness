import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'body',
  initialState: {

  },
  reducers: {

  },
});


export const { setName, setAge, setSex } = slice.actions;

export default slice.reducer;
