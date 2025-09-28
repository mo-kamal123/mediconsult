import { lazy } from 'react';
import withSuspense from '../../../../app/components/with-suspense';
import PricelistManagement from '../layouts/pricelist-management';
import PricelistInfo from '../pages/pricelist-info';

const priceListTable = lazy(() => import('../views/pricelist-table'));

export const providersPricelistRoutes = [
  {
    path: 'pricelists',
    children: [
      {
        path: '',
        element: <PricelistManagement />,
        children: [
          { index: true, element: withSuspense(priceListTable) },
          { path: ':pricelistId', element: <PricelistInfo /> },
          { path: 'new', element: <div>New Pricelist</div> },
        ],
      },
    ],
  },
];
