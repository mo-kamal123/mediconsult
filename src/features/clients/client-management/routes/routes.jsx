import ClientsManagement from '../pages/clients-management';
import NewClientModal from '../components/new-client-modal';

import ClientData from '../layouts/client-data';
import ClientInfo from '../views/client-info';
import ContactInfo from '../views/contact-info';
import BranchInfo from '../views/branch-info';
import Members from '../views/members';
import ContractsInfo from '../views/contracts-nfo';

// Clients Routes
export const clientsRoutes = [
  {
    path: 'clients',
    children: [
      {
        index: true,
        element: <ClientsManagement />,
      },
      {
        path: 'new',
        element: <NewClientModal />,
      },
      {
        path: ':clientId',
        element: <ClientData />,
        children: [
          { index: true, element: <ClientInfo /> },
          { path: 'contact-info', element: <ContactInfo /> },
          { path: 'branch-info', element: <BranchInfo /> },
          { path: 'contracts-info', element: <ContractsInfo /> },
          { path: 'members', element: <Members /> },
        ],
      },
    ],
  },
];
