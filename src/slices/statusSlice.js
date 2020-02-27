import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'status',
  initialState: {
    login: false,
    currentPage: 'You.Fit',
    goals: [
      {
        type: 'walking',
        amount: 8000,
      },
      {
        type: 'running',
        amount: 10,
      },
      {
        type: 'cycling',
        amount: 50,
      },
      {
        type: 'exercise',
        amount: 60,
      },
      {
        type: 'swimming',
        amount: 1000,
      },
    ],
  },
  reducers: {
    sigIn: state => {
      state.login = true;
    },
    sigOut: state => {
      state.login = false;
    },
    setCurrentPage: (state, action) => {
      const { payload } = action;
      state.currentPage = payload;
    },
    setGoal: (state, action) => {
      const { type, amount } = action.payload;

      const findGoal = state.goals.find(goal => goal.type === type);

      if (findGoal) {
        findGoal.amount = amount;
      } else {
        state.goals.push({
          type, amount,
        });
      }
    },
  },
});

export const {
  sigIn, sigOut, setCurrentPage, setGoal,
} = slice.actions;

export default slice.reducer;
