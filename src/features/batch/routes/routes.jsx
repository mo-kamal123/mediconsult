import { BatchReceivedRoutes } from '../batch-received/routes/routes';

export const batchRoutes = [
  {
    path: '/batch',
    children: [...BatchReceivedRoutes],
  },
];
