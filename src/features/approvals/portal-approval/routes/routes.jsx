import { lazy } from 'react';
import withSuspense from '../../../../app/components/with-suspense';

const PortalApproval = lazy(() => import('../pages/portal-approvals'));
const NewPortalApproval = lazy(() => import('../pages/new-portal-approval'));

//  Approvals Routes
export const PortalApprovalRoutes = [
  { path: 'portal-approval', element: withSuspense(PortalApproval) },
  {
    path: 'portal-approval/:approvalId',
    element: withSuspense(NewPortalApproval),
  },
];
