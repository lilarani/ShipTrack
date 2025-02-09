import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div
      className="container mx-auto bg text-[#F5DEB3]
    "
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Layout;
