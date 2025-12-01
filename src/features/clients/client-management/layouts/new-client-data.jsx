import { Outlet, useParams } from 'react-router-dom';
import MainHeader from '../../../../shared/UI/main-header';
import Tabs from '../../../../shared/UI/tabs';
import { NewClientProvider } from '../context/NewClientContext';

// Tabs data for client management
const clientTabs = [
  { label: 'Client Info', path: 'client-info' },
  { label: 'Contact Info', path: 'contact-info' },
  { label: 'Branch Info', path: 'branch-info' },
  { label: 'Contracts Info', path: 'contracts-info' },
  { label: 'Members', path: 'members' },
];

const NewClientData = () => {
  const { clientId } = useParams(); // assuming route like /clients/:id/...
  return (
    <NewClientProvider>
      <div className="md:w-[95%] w-[95%] mx-auto flex flex-col gap-10">
        <MainHeader>New Client</MainHeader>
        <Tabs tabsData={clientTabs} route={'new-client'} id={clientId} />
        <Outlet />
      </div>
    </NewClientProvider>
  );
};

export default NewClientData;
