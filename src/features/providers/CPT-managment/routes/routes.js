import { lazy } from 'react';
import withSuspense from '../../../../app/components/with-suspense';

const CPTManagement = lazy(() => import('../pages/CPT-management'));

export const ProvidersCPTManagementRoutes = [
  { path: 'CPT-management', element: withSuspense(CPTManagement) },
];
