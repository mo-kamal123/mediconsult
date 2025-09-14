import ClientsManagement from '../pages/clients-management';

export const clientsRoutes = [
  {
    path: '/clients',
    element: <ClientsManagement />,
    Children: [{ path: 'new', element: <ClientsManagement /> }],
  },
];
