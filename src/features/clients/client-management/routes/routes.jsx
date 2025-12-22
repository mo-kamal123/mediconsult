import { lazy } from 'react';
import withSuspense from '@/app/components/with-suspense';
import ClientsManagement from '../pages/clients-management';

/**
 * Client Management Routes Configuration
 * Defines all routes related to client management functionality
 *
 * Routes Structure:
 * - /clients - Main clients list page
 * - /clients/new-client/* - Multi-step form for creating new clients
 * - /clients/:clientId/* - Viewing/editing existing client data
 */

// Lazy-loaded components for new client creation flow
const NewClient = lazy(() => import('../views/new-client/new-client-info'));
const NewClientData = lazy(() => import('../layouts/new-client-data'));
const NewContactInfo = lazy(
  () => import('../views/new-client/new-client-contacts')
);
const NewBranchInfo = lazy(
  () => import('../views/new-client/new-client-branch')
);
const NewContractsInfo = lazy(
  () => import('../views/new-client/new-client-contracts')
);
const NewMembers = lazy(() => import('../views/new-client/new-client-members'));

// Lazy-loaded components for existing client management
const ClientData = lazy(() => import('../layouts/client-data'));
const ClientInfo = lazy(() => import('../views/client-info'));
const ContactInfo = lazy(() => import('../views/contact-info'));
const BranchInfo = lazy(() => import('../views/branch-info'));
const ContractsInfo = lazy(() => import('../views/contracts-nfo'));
const Members = lazy(() => import('../views/client-members'));

/**
 * Client Management Routes
 *
 * Route structure:
 * 1. Main clients list page (non-lazy loaded for better initial load)
 * 2. New client creation flow with nested routes for multi-step form
 * 3. Existing client view/edit with nested routes for different data sections
 */
export const clientsRoutes = [
  {
    path: 'clients',
    children: [
      // Main clients management page - displays list of all clients
      {
        path: '',
        element: <ClientsManagement />,
      },

      // New client creation flow - multi-step form
      {
        path: 'new-client',
        element: withSuspense(NewClientData),
        children: [
          { path: 'client-info', element: withSuspense(NewClient) },
          { path: 'contact-info', element: withSuspense(NewContactInfo) },
          { path: 'branch-info', element: withSuspense(NewBranchInfo) },
          { path: 'contracts-info', element: withSuspense(NewContractsInfo) },
          { path: 'members', element: withSuspense(NewMembers) },
        ],
      },

      // Existing client view/edit - displays client data with tabs
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
