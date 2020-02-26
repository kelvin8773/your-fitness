import { createSlice } from '@reduxjs/toolkit';
import { makeExerciseID } from '../helpers/index';

export const slice = createSlice({
  name: 'activities',
  initialState: [
    {
      id: makeExerciseID(),
      date: '2020-02-24',
      type: 'cycling',
      amount: 45,
    },
    {
      id: makeExerciseID(),
      date: '2020-02-20',
      type: 'swimming',
      amount: 1200,
    },
    {
      id: makeExerciseID(),
      date: '2020-02-13',
      type: 'running',
      amount: 8,
    },
    {
      id: makeExerciseID(),
      date: '2020-02-10',
      type: 'walking',
      amount: 7500,
    },

  ],
  reducers: {
    createActivity: (state, action) => {
      const { type, amount, date } = action.payload;

      state.push({
        id: makeExerciseID(),
        type: type,
        date: date,
        amount: amount,
      });
    },
    actIncrease: (state, action) => {
      const { payload } = action;
      const actToEdit = state.find(activity => activity.id === payload);
      if (actToEdit) {
        actToEdit.amount += 1;
      }
    },

    actDecrease: (state, action) => {
      const { payload } = action;
      const actToEdit = state.find(activity => activity.id === payload);
      if (actToEdit) {
        actToEdit.amount -= 1;
      }
    },
    actUpdate: (state, action) => {
      const { id, type, amount } = action.payload;
      const actToUpdate = state.find(activity => activity.id === id)

      if (actToUpdate) {
        actToUpdate.type = type;
        actToUpdate.amount = amount;
      }
    },
  },
});


export const { actIncrease, actDecrease, actUpdate } = slice.actions;
export default slice.reducer;
