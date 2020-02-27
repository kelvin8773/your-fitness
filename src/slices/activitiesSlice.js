import { createSlice } from '@reduxjs/toolkit';
import { makeActivityID, formatDate } from '../helpers/index';

export const slice = createSlice({
  name: 'activities',
  initialState: [
    {
      id: makeActivityID(),
      date: formatDate(new Date("2020-02-25")),
      type: 'cycling',
      amount: 45,
    },
    {
      id: makeActivityID(),
      date: formatDate(new Date("2020-02-23")),
      type: 'running',
      amount: 5,
    },


  ],
  reducers: {
    createActivity: (state, action) => {
      state.unshift(action.payload);
    },

    actUpdate: (state, action) => {
      const { id, type, amount } = action.payload;
      const actToUpdate = state.find(activity => activity.id === id);

      if (actToUpdate) {
        actToUpdate.type = type;
        actToUpdate.amount = amount;
      }
    },
  },
});


export const { createActivity, actUpdate } = slice.actions;
export default slice.reducer;
