import NewClientModal from '../components/new-client-modal';
import ClientsManagement from '../pages/clients-management';

export const clientsRoutes = [
  {
    path: 'clients',
    element: <ClientsManagement />,
    children: [{ path: 'new', element: <NewClientModal /> }],
  },
];
