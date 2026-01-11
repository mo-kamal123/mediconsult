import { lazy } from 'react';
import withSuspense from '../../../../app/components/with-suspense';

const PolicyManagement = lazy(() => import('../pages/policy-management'));
const PolicyPayments = lazy(() => import('../pages/policy-payments'));
const PolicyDetails = lazy(() => import('../pages/policy-details'));
const NewPolicy = lazy(() => import('../pages/new-policy'));
// const TOBViewer = lazy(() => import('../pages/tob-viewer'));

export const policyRoutes = [
  {
    path: '/policy',
    children: [
      { index: true, element: withSuspense(PolicyManagement) },
      { path: 'new', element: withSuspense(NewPolicy) },
      { path: ':policyId', element: withSuspense(PolicyDetails) },
      { path: ':policyId/payments', element: withSuspense(PolicyPayments) },
    ],
  },
  // {
  //   path: '/tob-viewer',
  //   element: withSuspense(TOBViewer),
  // },
];
