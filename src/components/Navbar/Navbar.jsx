import { useContext, useState } from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);

  const userLogOut = () => {
    signOutUser()
      .then(result => toast.success('Log-out successfully'))
      .catch(error => {
        toast.error('Failed Log-out');
      });
  };

  console.log(user);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between p-1 container mx-auto items-center sticky top-0">
      <h2 className="text-base md:text-2xl font-bold hidden md:block">
        ShipTrack
      </h2>
      <div className="sm:flex hidden">
        <ul className="flex gap-8 text-base">
          <li>Home</li>
          <li>
            <IoIosNotificationsOutline className="text-xl" />
          </li>
          <li>Home</li>
        </ul>
      </div>

      <div className="sm:block lg:hidden items-center">
        <RxHamburgerMenu onClick={toggleMenu} />
      </div>
      {/* dropdown items */}
      {isOpen && (
        <div className="w-40 bg-base-100 absolute top-10 ">
          <ul className=" gap-2 text-base flex flex-col bg-gray-50">
            <li className="hover:button">Home</li>
            <li>
              <IoIosNotificationsOutline className="text-xl" />
            </li>
            <li>Home</li>
          </ul>
        </div>
      )}

      {user ? (
        <div className="">
          <img src={user.photoURL} alt="" />
          <button onClick={userLogOut} className="button">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-5 text-base font-semibold">
          <Link to={'/login'} className="button ">
            Sign-in
          </Link>
          <Link
            to={'/signUp'}
            className="border border-orange-400 px-3 rounded-md text-orange-400 hover:text-orange-500 py-1"
          >
            Sign-Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
