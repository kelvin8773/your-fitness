import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './slices/usersSlice';
import statusReducer from './slices/statusSlice';
import activitiesReducer from './slices/activitiesSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    status: statusReducer,
    activities: activitiesReducer,
  },
});
