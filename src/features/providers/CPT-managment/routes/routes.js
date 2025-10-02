import { lazy } from 'react';
import withSuspense from '../../../../app/components/with-suspense';

const CPTManagement = lazy(() => import('../pages/CPT-management'));
const NewService = lazy(() => import('../pages/new-service'));

export const ProvidersCPTManagementRoutes = [
  {
    path: 'CPT-management',
    element: withSuspense(CPTManagement),
  },
  { path: '/providers/new-service', element: withSuspense(NewService) },
];
