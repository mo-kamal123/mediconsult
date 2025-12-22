import { Outlet, useParams } from 'react-router-dom';
import MainHeader from '../../../../shared/UI/main-header';
import Tabs from '../../../../shared/UI/tabs';

/**
 * ClientData Layout Component
 * Layout wrapper for viewing/editing existing client data
 *
 * Features:
 * - Tabbed navigation between different client data sections
 * - Displays client information, contacts, branches, contracts, and members
 * - Used when viewing/editing an existing client (route: /clients/:clientId/*)
 */

// Tab configuration for client data sections
const clientTabs = [
  { label: 'Client Info', path: 'client-info' },
  { label: 'Contact Info', path: 'contact-info' },
  { label: 'Branch Info', path: 'branch-info' },
  { label: 'Contracts Info', path: 'contracts-info' },
  { label: 'Members', path: 'members' },
];

const ClientData = () => {
  // Get client ID from URL parameters
  const { clientId } = useParams();

  return (
    <div className="md:w-[95%] w-[95%] mx-auto flex flex-col gap-10">
      <MainHeader>Client Data</MainHeader>
      {/* Tab navigation for different client data sections */}
      <Tabs tabsData={clientTabs} route={'clients'} id={clientId} />
      {/* Renders child route components (ClientInfo, ContactInfo, etc.) */}
      <Outlet />
    </div>
  );
};

export default ClientData;
