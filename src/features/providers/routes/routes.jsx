import ProvidersManagement from '../pages/providers-management';
import ProviderData from '../layouts/provider-data';
import ProviderLocations from '../views/provider-locations';
import ProviderContacts from '../views/provider-contacts';
import ProviderAccount from '../views/provider-account';
import ProviderDiscount from '../views/provider-discount';
import ProviderFinancial from '../views/provider-financial';
import ProviderPricelists from '../views/provider-pricelists';
import ProviderExtraFinance from '../views/provider-extra-finance';

export const providersRoutes = [
  {
    path: '/providers',
    children: [
      { index: true, element: <ProvidersManagement /> },
      {
        path: ':providerId',
        element: <ProviderData />,
        children: [
          { path: 'locations', element: <ProviderLocations /> },
          { path: 'contacts', element: <ProviderContacts /> },
          { path: 'accountant', element: <ProviderAccount /> },
          { path: 'volume-discounts', element: <ProviderDiscount /> },
          { path: 'financial-clearance', element: <ProviderFinancial /> },
          { path: 'pricelists', element: <ProviderPricelists /> },
          { path: 'extra-Finance-Info', element: <ProviderExtraFinance /> },
        ],
      },
    ],
  },
];
