import { lazy } from 'react';
import withSuspense from '../../../../app/components/with-suspense';
import { approvalsReqRoutes } from '../../approval-request/routes/routes';

const ApprovalsManagement = lazy(() => import('../pages/approvals-management'));
const NewApproval = lazy(() => import('../pages/new-approval'));
export const approvalsRoutes = [
  {
    path: '/approvals',
    children: [
      { index: true, element: withSuspense(ApprovalsManagement) },
      { path: 'new-request', element: withSuspense(NewApproval) },
      ...approvalsReqRoutes,
    ],
  },
];
