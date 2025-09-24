import { lazy } from "react";
import withSuspense from "../../../../app/components/with-suspense";

const ProvidersLocations = lazy(() => import('../pages/providers-locations'));



export const providersLocationsRoutes = [
    {path: 'locations', element: withSuspense(ProvidersLocations)},
]