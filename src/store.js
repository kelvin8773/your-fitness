import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import statusReducer from './slices/statusSlice';
import activitiesReducer from './slices/activitiesSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    status: statusReducer,
    activities: activitiesReducer,
  },
});
