import { lazy } from "react";
import withSuspense from "../../../../app/components/with-suspense";

const ClaimBooHandle = lazy(() => import('../pages/claim-book-handle'));

export const claimBooksHandleRoutes = [
    {path: 'claim-books-handle', element: withSuspense(ClaimBooHandle)}
]