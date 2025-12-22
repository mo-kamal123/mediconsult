import { configureStore } from '@reduxjs/toolkit';

// Feature-specific Redux slices
import authSlice from '../../features/auth/store/auth-slice';
import clientsSlice from '../../features/clients/client-management/store/clients-slice';
import membersSlice from '../../features/clients/members/store/members-slice';
import providersSlice from '../../features/providers/providers-management/store/providers-slice';
import providersLocationsSlice from '../../features/providers/providers-locations/store/providers-locations-slice';
import providersPricelistsSlice from '../../features/providers/providers-pricelist/store/pricelists-slice';
import monthlyCronicSlice from '../../features/chronic-approvals/monthly-chronic-approvals/store/monthly-cronic-slice';
import clientDataSlice from '../../features/clients/client-management/store/client-data-slice';

/**
 * Redux Store Configuration
 * Centralized state management for the entire application
 *
 * Reducers:
 * - auth: Authentication state (user login, tokens, etc.)
 * - clients: Clients list and management
 * - clientData: Individual client data and form state
 * - members: Members management and data
 * - providers: Healthcare providers data
 * - providersLocations: Provider location information
 * - providersPricelists: Provider pricing lists
 * - monthlyChronic: Monthly chronic approval data
 */
export const store = configureStore({
  reducer: {
    auth: authSlice,
    clients: clientsSlice,
    clientData: clientDataSlice,
    members: membersSlice,
    providers: providersSlice,
    providersLocations: providersLocationsSlice,
    providersPricelists: providersPricelistsSlice,
    monthlyChronic: monthlyCronicSlice,
  },

  /**
   * Middleware configuration
   * Customizes Redux Toolkit's default middleware to handle non-serializable data
   * (e.g., File objects in client data forms)
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore File objects in serialization check (for image uploads)
        ignoredActions: ['clientData/addClientInfo'],
        ignoredActionPaths: ['payload.ImageUrl'],
        ignoredPaths: ['clientData.ImageUrl'],
      },
    }),
});
