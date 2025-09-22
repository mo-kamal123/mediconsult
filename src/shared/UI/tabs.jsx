import { NavLink } from 'react-router-dom';

const Tabs = ({ tabsData, route, id }) => {
  return (
    <div className="flex items-center gap-10 bg-white p-4 rounded-2xl border border-borders overflow-x-auto">
      {tabsData.map((tab) => (
        <NavLink
          key={tab.path}
          to={`/${route}/${id}/${tab.path}`}
          // end={tab.path === ''}
          className={({ isActive }) =>
            `min-w-fit text-xs md:text-base border-b-3 border-blue-600/0 transition-all duration-300
            ${isActive ? 'text-blue-600 font-semibold border-blue-600/100' : 'text-gray-600 hover:text-blue-500 hover:border-blue-600/100'}`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Tabs;
