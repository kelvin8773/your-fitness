import { createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';

export const slice = createSlice({
  name: 'user',
  initialState: {
    id: 1,
    name: 'Kelvin',
    age: 35,
    sex: 'male',
  },
  reducers: {
    updateUser: (state, action) => {
      const { payload } = action;
      Object.assign(state, payload)
    },
  },
});

export async function fetchUsers() {
  const { data } = await api.get(`/users`);
  return data;
}


export async function fetchUser(uid) {
  const { data } = await api.get(`/users/${uid}`);
  return data;
}



export const {
  updateUser,
} = slice.actions;
export default slice.reducer;
