import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import statusReducer from './slices/statusSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    status: statusReducer,
  },
});
