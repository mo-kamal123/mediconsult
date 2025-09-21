import { Outlet, NavLink, useParams, Link } from 'react-router-dom';
import MainHeader from '../../../../shared/UI/main-header';
import { useState } from 'react';
import Tabs from '../../../../shared/UI/tabs';

// Tabs data for client management
const clientTabs = [
  { label: 'Client Info', path: 'client-info' },
  { label: 'Contact Info', path: 'contact-info' },
  { label: 'Branch Info', path: 'branch-info' },
  { label: 'Contracts Info', path: 'contracts-info' },
  { label: 'Members', path: 'members' },
];

const ClientData = () => {
  const { clientId } = useParams(); // assuming route like /clients/:id/...
  return (
    <div className="md:w-[95%] w-[95%] mx-auto flex flex-col gap-10">
      <MainHeader>Client Data</MainHeader>
      <Tabs tabsData={clientTabs} route={'clients'} id={clientId} />
      <Outlet />
    </div>
  );
};

export default ClientData;
