import {
  FaUsers,
  FaCog,
  FaClipboard,
  FaFolderOpen,
  FaDatabase,
  FaFileAlt,
  FaRegFileAlt,
  FaBoxes,
  FaUserAlt,
  FaChartBar,
  FaRegNewspaper,
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import pro from '../imgs/bro.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Sidebar items data
const sidebar_url = [
  {
    name: 'Clients',
    icon: <FaUsers />,
    sub: [
      { name: 'Clients Management', url: '/clients' },
      { name: 'Members Management', url: 'members' },
      { name: 'Deactivated Members Management', url: 'Deactivated' },
      { name: 'Members History', url: 'History' },
      { name: 'Policy Management', url: 'Policy' },
      { name: 'TOB Viewer', url: 'Viewer' },
      { name: 'TOB Builder', url: 'Builder' },
    ],
  },
  {
    name: 'Providers',
    icon: <FaClipboard />,
    sub: [
      { name: 'Providers Management', url: '/providers' },
      { name: 'Providers Locations', url: '/providers/locations' },
      { name: 'Providers Finance Report', url: '/providers/finance-report' },
      { name: 'Pricelists Management', url: '/providers/pricelists' },
      { name: 'Archived Pricelists Management', url: '/providers/pricelists/archived' },
      { name: 'Master CPT Management', url: '/providers/master-cpt' },
      { name: 'Not Found Acts Management', url: '/providers/not-found-acts' },
      { name: 'CDT Acts Management', url: '/providers/cdt-acts' },
      { name: 'Files Checker', url: '/providers/files-checker' },
    ]  },
  {
    name: 'Service Request (SR)',
    icon: <FaFolderOpen />,
    sub: [],
  },
  {
    name: 'Approvals',
    icon: <FaDatabase />,
    sub: [
      { name: 'Approvals Management', url: '' },
      { name: 'Canceled Approval Management', url: '' },
      { name: 'Portals Approvals Requests', url: '/approval-requests' },
      { name: 'Rejected Requests', url: '' },
    ],
  },
  {
    name: 'Chronic Approval',
    url: 'sss',
    icon: <FaDatabase />,
    sub: [],
  },
  {
    name: 'Batch',
    url: 'sss',
    icon: <FaBoxes />,
    sub: [],
  },
  {
    name: 'Reimbursement',
    url: 'sss',
    icon: <FaFileAlt />,
    sub: [],
  },
  {
    name: 'Medicines',
    url: 'sss',
    icon: <FaRegFileAlt />,
    sub: [],
  },
  {
    name: 'Account Manager',
    url: 'sss',
    icon: <FaUserAlt />,
    sub: [],
  },
  {
    name: 'Data Mapping',
    url: 'sss',
    icon: <FaChartBar />,
    sub: [],
  },
  {
    name: 'Data Analysis',
    url: 'sss',
    icon: <FaChartBar />,
    sub: [],
  },
  {
    name: 'Administrator',
    url: 'sss',
    icon: <FaCog />,
    sub: [],
  },
  {
    name: 'Reports',
    url: 'sss',
    icon: <FaRegNewspaper />,
    sub: [],
  },
];

const Sidebar = ({ closeSidebar, isOpen }) => {
  const [active, setActive] = useState('');
  const [subActive, setSubActive] = useState('');

  const handleOpenDropdown = (itemName) => {
    setActive((prev) => (prev === itemName ? '' : itemName));
  };

  return (
    <aside
      className={`bg-white h-svh w-full z-50 md:w-89 overflow-y-auto shadow-xl fixed transition-all duration-300 pb-30 pt-5 mt-23 ${
        isOpen ? 'left-0' : '-left-[100%]'
      }`}
    >
      <ul className="flex flex-col gap-3 pl-8 pr-4">
        {sidebar_url.map((item, i) => (
          <li key={i} className="flex flex-col gap-1 p-2">
            <div
              onClick={() => handleOpenDropdown(item.name)}
              className={`flex items-center justify-between gap-1 p-2 rounded cursor-pointer transition-colors ${
                active === item.name ? 'bg-[#ECF3FF]' : ''
              }`}
            >
              <div
                className={`flex items-center gap-3 text-sm md:text-base  ${
                  active === item.name ? 'text-[#1F4ED6]' : ''
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
              {item.sub.length > 0 && (
                <span
                  className={`transition-transform duration-300 ${
                    active === item.name ? 'rotate-180 text-[#1F4ED6]' : ''
                  }`}
                >
                  <IoIosArrowDown />
                </span>
              )}
            </div>

            {/* Submenu */}
            {item.sub.length > 0 && (
              <ul
                className={`overflow-hidden pl-5 transition-all duration-300 ${
                  active === item.name
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                {item.sub.map((sub) => (
                  <NavLink
                    key={sub.name}
                    to={sub.url}
                    className={({ isActive }) =>
                      `text-sm py-2 block transition-all duration-300 hover:text-black hover:font-semibold ${
                        isActive
                          ? 'text-black font-semibold'
                          : 'text-[#8B8B9B]'
                      }`
                    }
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        closeSidebar(true);
                      }
                      setSubActive(sub.name);
                    }}
                  >
                    {sub.name}
                  </NavLink>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* Sidebar image */}
        <li className="w-40 ml-8 mt-4">
          <img src={pro} alt="sidebar illustration" />
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
