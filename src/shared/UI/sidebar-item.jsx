import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import React from 'react';

const SidebarItem = ({
  item,
  isActive,
  onToggle,
  closeSidebar,
  setSubActive,
}) => {
  const Icon = item.icon;

  return (
    <li className="flex flex-col gap-1 p-2">
      <div
        onClick={() => onToggle(item.name)}
        className={`flex items-center justify-between gap-1 p-2 rounded cursor-pointer transition-colors ${
          isActive ? 'bg-[#ECF3FF]' : ''
        }`}
      >
        <div
          className={`flex items-center gap-3 text-sm md:text-base ${isActive ? 'text-[#1F4ED6]' : ''}`}
        >
          <span>
            <Icon />
          </span>
          <span>{item.name}</span>
        </div>
        {item.sub.length > 0 && (
          <span
            className={`transition-transform duration-300 ${isActive ? 'rotate-180 text-[#1F4ED6]' : ''}`}
          >
            <IoIosArrowDown />
          </span>
        )}
      </div>

      {item.sub.length > 0 && (
        <ul
          className={`overflow-hidden pl-5 transition-all duration-300 ${
            isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {item.sub.map((sub) => (
            <NavLink
              key={sub.name}
              to={sub.url}
              className={({ isActive }) =>
                `text-sm py-2 block transition-all duration-300 hover:text-black hover:font-semibold ${
                  isActive ? 'text-black font-semibold' : 'text-[#8B8B9B]'
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
  );
};

export default React.memo(SidebarItem);
