import { lazy } from 'react';
import withSuspense from '@/app/components/with-suspense';
import ClientsManagement from '../pages/clients-management';

// Lazy-loaded pages
// const ClientsManagement = lazy(() => import('../pages/clients-management'));
const NewClient = lazy(() => import('../views/new-client/new-client-info'));
const NewClientData = lazy(() => import('../layouts/new-client-data'));
const ClientData = lazy(() => import('../layouts/client-data'));

const ClientInfo = lazy(() => import('../views/client-info'));
const ContactInfo = lazy(() => import('../views/contact-info'));
const NewContactInfo = lazy(() => import('../views/new-client/new-client-contacts'));
const BranchInfo = lazy(() => import('../views/branch-info'));
const NewBranchInfo = lazy(() => import('../views/new-client/new-client-branch'));
const ContractsInfo = lazy(() => import('../views/contracts-nfo'));
const NewContractsInfo = lazy(() => import('../views/new-client/new-client-contracts'));
const Members = lazy(() => import('../views/members'));
const NewMembers = lazy(() => import('../views/new-client/new-client-members'));

// withSuspense(ClientsManagement)
export const clientsRoutes = [
  {
    path: 'clients',
    children: [
      {
        path: '',
        element: <ClientsManagement />,
      },
      {
        path: 'new-client',
        element: withSuspense(NewClientData),
        children: [
          {path: 'client-info', element: withSuspense(NewClient)},
          { path: 'contact-info', element: withSuspense(NewContactInfo) },
          { path: 'branch-info', element: withSuspense(NewBranchInfo) },
          { path: 'contracts-info', element: withSuspense(NewContractsInfo) },
          { path: 'members', element: withSuspense(NewMembers) },
        ],  
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
