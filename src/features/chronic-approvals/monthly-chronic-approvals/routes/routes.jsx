import { lazy } from "react";
import withSuspense from "../../../../app/components/with-suspense";

const MonthlyChronic = lazy(() => import('../pages/monthly-chronic'));

export const MonthlyChronicRoutes = [
    {path: 'monthly-chronic', element: withSuspense(MonthlyChronic) },
] 