import { lazy } from 'react';
import withSuspense from '../../../../app/components/with-suspense';

const BatchReceived = lazy(() => import('../pages/batch-received'));
const NewBatch = lazy(() => import('../pages/new-batch'));
const ViewClaim = lazy(() => import('../pages/view-claim'));

export const batchReceivedRoutes = [
  { path: 'received', element: withSuspense(BatchReceived) },
  { path: 'new', element: withSuspense(NewBatch) },
  { path: ':batchId/claim/:claimId', element: withSuspense(ViewClaim) },
];
