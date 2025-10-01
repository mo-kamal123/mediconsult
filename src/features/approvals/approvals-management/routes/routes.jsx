import { lazy } from 'react';
import withSuspense from '../../../../app/components/with-suspense';
import { PortalApprovalRoutes } from '../../portal-approval/routes/routes';

const ApprovalsManagement = lazy(() => import('../pages/approvals-management'));
const NewPharmacyApproval = lazy(
  () => import('../pages/new-pharmacy-approval')
);
const NewRegularApproval = lazy(() => import('../pages/new-regular-approval'));
export const approvalsRoutes = [
  {
    path: '/approvals',
    children: [
      { index: true, element: withSuspense(ApprovalsManagement) },
      {
        path: 'new-pharmacy-approval',
        element: withSuspense(NewPharmacyApproval),
      },
      {
        path: 'new-regular-approval',
        element: withSuspense(NewRegularApproval),
      },
      ...PortalApprovalRoutes,
    ],
  },
];
