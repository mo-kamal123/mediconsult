import { lazy } from 'react';
import withSuspense from '../../../../app/components/with-suspense';
import ApprovalsRequests from '../pages/approvals-requests';

const ApprovalsManagement = lazy(() => import('../pages/approvals-requests'));

//  Approvals Routes
export const approvalsReqRoutes = [
  { path: 'approval-requests', element: withSuspense(ApprovalsManagement) },
];
