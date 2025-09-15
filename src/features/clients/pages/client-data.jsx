import { Outlet, NavLink, useParams, Link } from "react-router-dom";
import MainHeader from "../../../shared/UI/main-header";
import { useState } from "react";

const clientTabs = [
  { label: "Client Info", path: "" },
  { label: "Contact Info", path: "contact-info" },
  { label: "Branch Info", path: "branch-info" },
  { label: "Contracts Info", path: "contracts-info" },
  { label: "Members Info", path: "Members-info" },
];

const ClientData = () => {
  const { clientId } = useParams(); // assuming route like /clients/:id/...
  const [active, setActive] = useState('Client Info');
  return (
    <div className="md:w-[95%] w-[95%] mx-auto flex flex-col gap-10">
      <MainHeader>Client Data</MainHeader>

      <div className="flex items-center gap-10 bg-white p-4 rounded-2xl border border-borders overflow-x-auto">
        {clientTabs.map((tab) => (
          <Link
            key={tab.path}
            to={`/clients/${clientId}/${tab.path}`}
            onClick={() => setActive(tab.label)}
            className={`${active === tab.label ? 'text-blue-600 font-semibold  border-blue-600/100' : 'text-gray-600 hover:text-blue-500 hover:border-blue-600/100 '} min-w-fit text-xs md:text-base border-b-2 border-blue-600/0 transition-all duration-300`} >
            {tab.label}
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default ClientData;
