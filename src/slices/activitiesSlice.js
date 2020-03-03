import { createSlice } from '@reduxjs/toolkit';
import { makeActivityID, formatDate } from '../helpers/index';

export const slice = createSlice({
  name: 'activities',
  initialState: [
    {
      id: makeActivityID(),
      date: formatDate(new Date('2020-02-25')),
      kind: 'cycling',
      amount: 45,
    },
    {
      id: makeActivityID(),
      date: formatDate(new Date('2020-02-23')),
      kind: 'walking',
      amount: 2350,
    },
  ],
  reducers: {
    createActivity: (state, action) => {
      state.unshift(action.payload);
    },

    updateActivity: (state, action) => {
      const { id, kind, amount } = action.payload;
      const actToUpdate = state.find(activity => activity.id === id);

      if (actToUpdate) {
        actToUpdate.kind = kind;
        actToUpdate.amount = amount;
      }
    },
  },
});


export const { createActivity, updateActivity } = slice.actions;
export default slice.reducer;
