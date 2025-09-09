import ApprovalsManagement from '../pages/approvals-management';
import ApprovalsRequests from '../pages/approvals-requests';
import CanceledApprovals from '../pages/canceled-approval';
import RejectedRequests from '../pages/rejected-requests';

export const approvalsRoutes = [
  { path: '/approvals-management', element: <ApprovalsManagement /> },
  { path: '/canceled-approval', element: <CanceledApprovals /> },
  { path: '/approval-requests', element: <ApprovalsRequests /> },
  { path: '/rejected-requests', element: <RejectedRequests /> },
];
