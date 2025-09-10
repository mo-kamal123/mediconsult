import { MdEditDocument, MdOutlineDashboardCustomize } from 'react-icons/md';
import logo from '../../app/assets/mediconsult_logo.png';
import { IoMenu, IoSettings, IoTicketSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const navItems = [
  { id: 1, icon: <MdEditDocument />, label: 'Request' },
  { id: 2, icon: <IoTicketSharp />, label: 'Ticket' },
  { id: 3, icon: <MdOutlineDashboardCustomize />, label: 'Portals' },
  { id: 4, icon: <IoSettings />, label: 'Setting' },
];
const Navbar = ({ openSidebar }) => {
  return (
    <nav className="bg-white fixed top-0 w-full pt-7 pb-3 px-5 flex justify-between items-center border-b border-[#C2C2C2]">
      <Link to={'/'} className="w-50">
        <img src={logo} alt="logo-img" />
      </Link>
      <ul className="flex items-center justify-between gap-10">
        <ul className="hidden md:flex items-center justify-between gap-10">
          {navItems.map((item) => (
            <li key={item.id} className="flex flex-col items-center gap-1">
              <p className="text-xl">{item.icon}</p>
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
        <p className="text-2xl md:hidden" onClick={openSidebar}>
          <IoMenu />
        </p>
      </ul>
    </nav>
  );
};

export default Navbar;
