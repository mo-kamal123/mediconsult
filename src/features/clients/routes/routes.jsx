import BranchInfo from '../components/branch-info';
import ClientInfo from '../components/client-info';
import ContactInfo from '../components/contact-info';
import ContractsInfo from '../components/contracts-nfo';
import MembersInfo from '../components/members-info';
import NewClientModal from '../components/new-client-modal';
import ClientData from '../pages/client-data';
import ClientsManagement from '../pages/clients-management';

export const clientsRoutes = [
  {
    path: 'clients',
    element: <ClientsManagement />,
    children: [{ path: 'new', element: <NewClientModal /> }],
  },
  {
    path: 'clients/:clientId',
    element: <ClientData />,
    children: [
        { index: true, element: <ClientInfo /> },
        { path: 'contact-info', element: <ContactInfo /> },
        { path: 'branch-info', element: <BranchInfo /> },
        { path: 'contracts-info', element: <ContractsInfo /> },
        { path: 'Members-info', element: <MembersInfo /> },
],
  },
];
