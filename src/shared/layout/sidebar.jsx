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
import { Link } from 'react-router-dom';

const sidebar_url = [
  {
    name: 'Clients',
    url: 'sss',
    icon: <FaUsers />,
    sub: [
      { name: 'Clients Management', url: '/clients' },
      { name: 'Service Request (SR)' },
      { name: 'Service Request Management', url: '' },
      { name: 'SR Call Back Management', url: '' },
      { name: 'Inpatient Follow up Management', url: '' },
      { name: 'Providers Locations', url: '' },
      { name: 'Insurance Transfer Management', url: '' },
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
  const [active, setActive] = useState('');
  const [subActive, setSubActive] = useState('');

  const handleOpenDropdown = (item) => {
    if (active && active === item) {
      setActive('');
    } else {
      setActive(item);
    }
  };
  return (
    <aside
      className={`bg-white h-svh w-full md:w-80 overflow-scroll fixed ${isOpen ? 'left-0' : '-left-[100%]'}  md:left-0 pb-30 pt-5 mt-23 transition-all duration-300`}
    >
      <ul className="flex flex-col justify-between gap-3 pl-8">
        {sidebar_url.map((item) => (
          <li className="flex flex-col  gap-1 p-2">
            <div
              onClick={() => handleOpenDropdown(item.name)}
              className={`flex items-center justify-between gap-1 p-2 rounded cursor-pointer ${active === item.name && 'bg-[#ECF3FF]'}`}
            >
              <p
                className={`flex items-center gap-2 ${active === item.name && 'text-[#1F4ED6]'}`}
              >
                <p>{item.icon}</p>
                <p>{item.name}</p>
              </p>
              <p
                className={`${active === item.name && 'rotate-180 text-[#1F4ED6]'} transition-all duration-300`}
              >
                <IoIosArrowDown />
              </p>
            </div>
            {active === item.name && (
              <ul className="flex flex-col gap-2 pl-5 transition-all duration-300">
                {item.sub.map((sub) => (
                  <Link
                    to={sub.url}
                    className={`text-sm text-[#8B8B9B] py-2 transition-all duration-300 hover:text-black hover:font-semibold ${subActive === sub.name && 'text-black font-semibold'}`}
                    onClick={() => {
                      closeSidebar()
                      setSubActive(sub.name)
                    }}
                  >
                    {sub.name}
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="w-40">
          <img src={pro} alt="side-img" />
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
