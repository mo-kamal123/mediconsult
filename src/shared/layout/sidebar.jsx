import pro from '../imgs/bro.png';
import { useState } from 'react';
import SidebarItem from '../UI/sidebar-item';
import { sidebar_url } from '../constants/sidebarUrls';

const Sidebar = ({ closeSidebar, isOpen }) => {
  const [active, setActive] = useState('');
  const [subActive, setSubActive] = useState('');

  const handleOpenDropdown = (itemName) => {
    setActive((prev) => (prev === itemName ? '' : itemName));
  };

  return (
    <aside
      className={`bg-white h-svh w-full z-40 md:w-89 overflow-y-auto shadow-xl fixed transition-all duration-300 pb-30 pt-5 mt-21 ${
        isOpen ? 'left-0' : '-left-[100%]'
      }`}
    >
      <ul className="flex flex-col gap-3 pl-8 pr-4">
        {sidebar_url.map((item, i) => (
          <SidebarItem
            key={i}
            item={item}
            isActive={active === item.name}
            onToggle={handleOpenDropdown}
            closeSidebar={closeSidebar}
            subActive={subActive}
            setSubActive={setSubActive}
          />
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
