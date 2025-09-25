// src/features/providers/routes/providersRoutes.jsx

import { lazy } from 'react';
import withSuspense from '@/app/components/with-suspense';
import { providersLocationsRoutes } from '../../providers-locations/routes/routes';
import { providersPricelistRoutes } from '../../providers-pricelist/routes/routes';
import { ProvidersCPTManagementRoutes } from '../../CPT-managment/routes/routes';

// Lazy-loaded components
const ProvidersManagement = lazy(() => import('../pages/providers-management'));
const ProviderData = lazy(() => import('../layouts/provider-data'));

const ProviderLocations = lazy(() => import('../views/provider-locations'));
const ProviderContacts = lazy(() => import('../views/provider-contacts'));
const ProviderAccount = lazy(() => import('../views/provider-account'));
const ProviderDiscount = lazy(() => import('../views/provider-discount'));
const ProviderFinancial = lazy(() => import('../views/provider-financial'));
const ProviderPricelists = lazy(() => import('../views/provider-pricelists'));
const ProviderExtraFinance = lazy(() => import('../views/provider-extra-finance'));

// Routes
export const providersRoutes = [
  {
    path: '/providers',
    children: [
      {
        index: true,
        element: withSuspense(ProvidersManagement),
      },
      {
        path: ':providerId',
        element: withSuspense(ProviderData),
        children: [
          { path: 'locations', element: withSuspense(ProviderLocations) },
          { path: 'contacts', element: withSuspense(ProviderContacts) },
          { path: 'accountant', element: withSuspense(ProviderAccount) },
          { path: 'volume-discounts', element: withSuspense(ProviderDiscount) },
          { path: 'financial-clearance', element: withSuspense(ProviderFinancial) },
          { path: 'pricelists', element: withSuspense(ProviderPricelists) },
          { path: 'extra-Finance-Info', element: withSuspense(ProviderExtraFinance) },
        ],
      },
      ...providersLocationsRoutes,
      ...providersPricelistRoutes,
      ...ProvidersCPTManagementRoutes,

    ],
  },
];
