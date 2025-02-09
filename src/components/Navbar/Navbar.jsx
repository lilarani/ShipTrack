import { useContext, useState } from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between my-1 container mx-auto items-center">
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

      <div className="flex gap-5 text-base font-semibold">
        <p className="button ">Sign-in</p>
        <p className="button">Sign-Up</p>
      </div>
    </div>
  );
};

export default Navbar;
