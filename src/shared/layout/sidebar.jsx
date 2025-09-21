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
import { Link, NavLink } from 'react-router-dom';

// sidebar items data
const sidebar_url = [
  {
    name: 'Clients',
    icon: <FaUsers />,
    sub: [
      { name: 'Clients Management', url: '/clients' },
      { name: 'Members Management', url: 'members' },
      { name: 'Deactivated Members Management', url: '' },
      { name: 'Members History', url: '' },
      { name: 'Policy Management', url: '' },
      { name: 'TOB Viewer', url: '' },
      { name: 'TOB Builder', url: '' },
    ],
  },
  {
    name: 'Providers',
    icon: <FaClipboard />,
    sub: [],
  },
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
  const [active, setActive] = useState(''); // track active main menu item
  const [subActive, setSubActive] = useState(''); // track active sub menu item

  // handle dropdown open/close
  const handleOpenDropdown = (item) => {
    if (active && active === item) {
      setActive('');
    } else {
      setActive(item);
    }
  };
  return (
    <aside
      className={`bg-white h-svh w-full z-50 md:w-82 overflow-scroll shadow-xl fixed ${isOpen ? 'left-0' : '-left-[100%]'}   pb-30 pt-5 mt-23 transition-all duration-300`}
    >
      <ul className="flex flex-col justify-between gap-3 pl-8">
        {/* sidebar items */}
        {sidebar_url.map((item, i) => (
          <li key={i} className="flex flex-col  gap-1 p-2">
            <div
              onClick={() => handleOpenDropdown(item.name)}
              className={`flex items-center justify-between gap-1 p-2 rounded cursor-pointer ${active === item.name && 'bg-[#ECF3FF]'}`}
            >
              <div
                className={`flex items-center gap-2 ${active === item.name && 'text-[#1F4ED6]'}`}
              >
                <p>{item.icon}</p>
                <p>{item.name}</p>
              </div>
              <p
                className={`${active === item.name && 'rotate-180 text-[#1F4ED6]'} transition-all duration-300`}
              >
                <IoIosArrowDown />
              </p>
            </div>
            {/* render sub menu if exists */}
            {active === item.name && (
              <ul className="flex flex-col gap-2 pl-5 transition-all duration-300">
                {/* render sub items */}
                {item.sub.map((sub) => (
                  <NavLink
                    key={sub.name}
                    to={sub.url}
                    className={({ isActive }) =>
                      `text-sm py-2 transition-all duration-300 hover:text-black hover:font-semibold ${
                        isActive ? 'text-black font-semibold' : 'text-[#8B8B9B]'
                      }`
                    }
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        closeSidebar(true);
                      }
                      setSubActive(sub.name); // optional, but NavLink manages active styling anyway
                    }}
                  >
                    {sub.name}
                  </NavLink>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="w-40 ml-8">
          <img src={pro} alt="side-img" />
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
