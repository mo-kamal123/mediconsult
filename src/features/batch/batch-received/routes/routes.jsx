import { lazy } from "react";
import withSuspense from "../../../../app/components/with-suspense";


const BatchReceived = lazy(() => import('../pages/batch-received'));

export const batchReceivedRoutes = [
    {path: 'received', element: withSuspense( BatchReceived) }
]