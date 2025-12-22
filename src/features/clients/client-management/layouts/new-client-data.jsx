import { Outlet, useParams } from 'react-router-dom';
import MainHeader from '../../../../shared/UI/main-header';
import Tabs from '../../../../shared/UI/tabs';

/**
 * NewClientData Layout Component
 * Layout wrapper for creating new client data
 *
 * Features:
 * - Multi-step form with tabbed navigation
 * - Collects client information, contacts, branches, contracts, and members
 * - Used when creating a new client (route: /clients/new-client/*)
 * - Data is stored in Redux during the creation flow
 */

// Tab configuration for new client creation flow
const clientTabs = [
  { label: 'Client Info', path: 'client-info' },
  { label: 'Contact Info', path: 'contact-info' },
  { label: 'Branch Info', path: 'branch-info' },
  { label: 'Contracts Info', path: 'contracts-info' },
  { label: 'Members', path: 'members' },
];

const NewClientData = () => {
  // Get client ID from URL parameters (may be undefined for new clients)
  const { clientId } = useParams();

  return (
    <div className="md:w-[95%] w-[95%] mx-auto flex flex-col gap-10">
      <MainHeader>New Client</MainHeader>
      {/* Tab navigation for different sections of new client form */}
      <Tabs tabsData={clientTabs} route={'new-client'} id={clientId} />
      {/* Renders child route components (NewClient, NewContactInfo, etc.) */}
      <Outlet />
    </div>
  );
};

export default NewClientData;
