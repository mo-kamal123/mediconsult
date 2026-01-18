import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../features/auth/store/auth-slice';
import clientsSlice from '../../features/clients/client-management/store/clients-slice';
import membersSlice from '../../features/clients/members/store/members-slice';
import providersSlice from '../../features/providers/providers-management/store/providers-slice';
import providersLocationsSlice from '../../features/providers/providers-locations/store/providers-locations-slice';
import providersPricelistsSlice from '../../features/providers/providers-pricelist/store/pricelists-slice';
import monthlyCronicSlice from '../../features/chronic-approvals/monthly-chronic-approvals/store/monthly-cronic-slice';
import clientDataSlice from '../../features/clients/client-management/store/client-data-slice';
import policySlice from '../../features/clients/policy-management/store/policy-slice';

// Redux store - centralized state management for entire app
export const store = configureStore({
  reducer: {
    auth: authSlice,
    clients: clientsSlice,
    clientData: clientDataSlice,
    members: membersSlice,
    policy: policySlice,
    providers: providersSlice,
    providersLocations: providersLocationsSlice,
    providersPricelists: providersPricelistsSlice,
    monthlyChronic: monthlyCronicSlice,
  },

  // Customize middleware to handle non-serializable data (File objects for uploads)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['clientData/addClientInfo'],
        ignoredActionPaths: ['payload.ImageUrl'],
        ignoredPaths: ['clientData.ImageUrl'],
      },
    }),
});
