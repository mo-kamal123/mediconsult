import { batchReceivedRoutes } from '../batch-received/routes/routes';
import { batchScanRoutes } from '../batch-scan/routes/routes';
import { claimBooksHandleRoutes } from '../claim-books-handle/routes/routes';

export const batchRoutes = [
  {
    path: '/batch',
    children: [
      ...batchReceivedRoutes,
      ...batchScanRoutes,
      ...claimBooksHandleRoutes,
    ],
  },
];
