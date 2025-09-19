import { MdEditDocument, MdOutlineDashboardCustomize } from 'react-icons/md';
import logo from '../../app/assets/mediconsult_logo.png';
import { IoMenu, IoSettings, IoTicketSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { LuPanelLeftClose } from 'react-icons/lu';

// nav items data
const navItems = [
  { id: 1, icon: <MdEditDocument />, label: 'Request' },
  { id: 2, icon: <IoTicketSharp />, label: 'Ticket' },
  { id: 3, icon: <MdOutlineDashboardCustomize />, label: 'Portals' },
  { id: 4, icon: <IoSettings />, label: 'Setting' },
];
const Navbar = ({ openSidebar, isOpen }) => {
  return (
    <nav className="bg-white fixed top-0 z-50 w-full pt-7 pb-3 px-5 flex justify-between items-center border-b border-[#C2C2C2]">
      {/* logo and sidebar toggle */}
      <div className="flex items-center gap-20">
        <Link to={'/'} className="w-50">
          <img src={logo} alt="logo-img" />
        </Link>
        <p
          className={`text-2xl cursor-pointer ${isOpen && 'rotate-180'} hidden md:block transition-all duration-300`}
          onClick={openSidebar}
        >
          <LuPanelLeftClose />
        </p>
      </div>
      {/* nav items */}
      <ul className="flex items-center justify-between gap-10">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="hidden md:flex flex-col items-center gap-1"
          >
            <p className="text-xl">{item.icon}</p>
            <p>{item.label}</p>
          </li>
        ))}
        {/* menu icon for mobile */}
        <li className="text-2xl md:hidden cursor-pointer" onClick={openSidebar}>
          <IoMenu />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
