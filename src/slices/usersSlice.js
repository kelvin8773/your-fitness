import { createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';
import { showMessage } from '../helpers/index';

export const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    updateUsers: (state, action) => {
      const { payload } = action;
      return payload;
    },
    updateUser: (state, action) => {
      const { payload } = action;
      const idx = state.findIndex(user => user.id === payload.id);
      if (idx !== -1) state.splice(idx, 1, payload);
    },

    addUser: (state, action) => {
      const { payload } = action;
      state.push(payload);
    },

  },
});

export async function fetchUsers() {
  try {
    const { status, data } = await api.get('/users');
    if (status === 200) return data;
  } catch (err) {
    showMessage(err);
  }
  return false;
}

export async function fetchUser(uid) {
  try {
    const { status, data } = await api.get(`/users/${uid}`);
    if (status === 200) return data;
  } catch (err) {
    showMessage(err);
  }
  return false;
}

export async function createUser(user) {
  try {
    const { status, data } = await api.post('/users/', user);
    if (status === 201) return data;
  } catch (err) {
    showMessage(err);
  }
  return false;
}

export async function pushUser(user) {
  try {
    const { status } = await api.put(`/users/${user.id}`, user);
    if (status === 204) return true;
  } catch (err) {
    showMessage(err);
  }
  return false;
}

export const {
  updateUsers,
  updateUser,
  addUser,
} = slice.actions;
export default slice.reducer;
