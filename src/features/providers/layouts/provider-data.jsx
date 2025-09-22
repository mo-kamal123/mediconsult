import { Outlet, useParams } from 'react-router-dom';
import MainHeader from '../../../shared/UI/main-header';
import Tabs from '../../../shared/UI/tabs';
import ProviderForm from '../components/provider-form';

const ProviderData = () => {
  const { providerId } = useParams();
  const tabsData = [
    { path: 'locations', label: 'Locations' },
    { path: 'contacts', label: 'Contacts' },
    { path: 'accountant', label: 'Accountant' },
    { path: 'volume-discounts', label: 'Volume Discounts' },
    { path: 'financial-clearance', label: 'Financial clearance' },
    { path: 'pricelists', label: 'Pricelists' },
    { path: 'extra-Finance-Info', label: 'Extra Finance Info' },
  ];

  return (
    <div className="flex flex-col gap-10 w-[95%] m-auto">
      <MainHeader>Provider</MainHeader>
      <ProviderForm />
      <div className="bg-white p-4 rounded-2xl border border-borders">
        <Tabs tabsData={tabsData} route={'providers'} id={providerId} />
        <div className="w-[95%] m-auto my-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProviderData;
