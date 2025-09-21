import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../features/auth/store/auth-slice';

export const store = configureStore({
  reducer: {
    // Add reducers here
    auth: authSlice,
  },
});
