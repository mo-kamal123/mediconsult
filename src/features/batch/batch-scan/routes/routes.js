import { lazy } from "react";
import withSuspense from "../../../../app/components/with-suspense";



const BatchScan = lazy(() => import('../pages/batch-scan'));

export const batchScanRoutes = [
    {path: 'scan', element: withSuspense(BatchScan) },
]