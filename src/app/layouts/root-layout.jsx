import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/layout/navbar';
import Sidebar from '../../shared/layout/sidebar';

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <div className="">
        <Sidebar />
        <div className="ml-80">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
