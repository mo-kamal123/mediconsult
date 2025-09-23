import { lazy } from 'react';
import withSuspense from '@/app/components/with-suspense';

// Lazy-loaded pages
const ClientsManagement = lazy(() => import('../pages/clients-management'));
const NewClient = lazy(() => import('../views/new-client'));
const ClientData = lazy(() => import('../layouts/client-data'));

const ClientInfo = lazy(() => import('../views/client-info'));
const ContactInfo = lazy(() => import('../views/contact-info'));
const BranchInfo = lazy(() => import('../views/branch-info'));
const ContractsInfo = lazy(() => import('../views/contracts-nfo'));
const Members = lazy(() => import('../views/members'));

export const clientsRoutes = [
  {
    path: 'clients',
    children: [
      {
        path: '',
        element: withSuspense(ClientsManagement),
      },
      {
        path: 'new',
        element: withSuspense(NewClient),
      },
      {
        path: ':clientId',
        element: withSuspense(ClientData),
        children: [
          { path: 'client-info', element: withSuspense(ClientInfo) },
          { path: 'contact-info', element: withSuspense(ContactInfo) },
          { path: 'branch-info', element: withSuspense(BranchInfo) },
          { path: 'contracts-info', element: withSuspense(ContractsInfo) },
          { path: 'members', element: withSuspense(Members) },
        ],
      },
    ],
  },
];
