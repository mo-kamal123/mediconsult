import path from 'path';
import { MonthlyChronicRoutes } from '../monthly-chronic-approvals/routes/routes';

export const ChronicApprovalRoutes = [
  { path: '/chronic-approvals', children: [...MonthlyChronicRoutes] },
];
