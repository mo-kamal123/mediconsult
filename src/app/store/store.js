import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../features/auth/store/auth-slice';
import clientsSlice from '../../features/clients/client-management/store/clients-slice';
import membersSlice from '../../features/clients/members/store/members-slice';
import providersSlice from '../../features/providers/store/providers-slice';

export const store = configureStore({
  reducer: {
    // Add reducers here
    auth: authSlice,
    clients: clientsSlice,
    members: membersSlice,
    providers: providersSlice,
  },
});
