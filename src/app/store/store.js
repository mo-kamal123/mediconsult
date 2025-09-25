import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../features/auth/store/auth-slice';
import clientsSlice from '../../features/clients/client-management/store/clients-slice';
import membersSlice from '../../features/clients/members/store/members-slice';
import providersSlice from '../../features/providers/providers-management/store/providers-slice';
import providersLocationsSlice from '../../features/providers/providers-locations/store/providers-locations-slice';
import providersPricelistsSlice from '../../features/providers/providers-pricelist/store/pricelists-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    clients: clientsSlice,
    members: membersSlice,
    providers: providersSlice,
    providersLocations: providersLocationsSlice,
    providersPricelists: providersPricelistsSlice,
  },
});
