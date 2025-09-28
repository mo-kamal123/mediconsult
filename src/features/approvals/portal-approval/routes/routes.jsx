import { lazy } from 'react';
import withSuspense from '../../../../app/components/with-suspense';

const PortalApproval = lazy(() => import('../pages/portal-approvals'));

//  Approvals Routes
export const PortalApprovalRoutes = [
  { path: 'portal-approval', element: withSuspense(PortalApproval) },
];
