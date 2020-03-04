import { createSlice } from '@reduxjs/toolkit';

import api from '../helpers/api';

export const slice = createSlice({
  name: 'activities',
  initialState: [],
  reducers: {
    updateActivities: (state, action) => {
      const { payload } = action;
      return payload;
    },

  },
});

export async function fetchActivities(userID) {
  try {
    const { status, data } = await api.get(`/users/${userID}/activities`);
    if (status === 200) return data;
  } catch (err) {
    alert(err);
  }
}

export async function fetchActivity(userID, id) {
  try {
    const { status, data } = await api.get(`/users/${userID}/activities/${id}`);
    if (status === 200) return data;
  } catch (err) {
    alert(err);
  }
}

export async function createActivity(activity) {
  try {
    const { status } = await api.post(`/users/${activity.user_id}/activities`, activity);
    if (status === 201) return true;
  } catch (err) {
    alert(err);
  }
}

export async function updateActivity(activity) {
  try {
    const { status } = await api.put(`/users/${activity.user_id}/activities/${activity.id}`, activity);
    if (status === 204) return true;
  } catch (err) {
    alert(err);
  }
}

export async function deleteActivity(activity) {
  try {
    const { status } = await api.delete(`/users/${activity.user_id}/activities/${activity.id}`, activity);
    if (status === 204) return true;
  } catch (err) {
    alert(err);
  }
}

export const { updateActivities } = slice.actions;
export default slice.reducer;
