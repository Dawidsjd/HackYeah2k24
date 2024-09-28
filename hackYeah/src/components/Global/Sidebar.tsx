import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { ImBooks } from 'react-icons/im';
import { FaPencilAlt } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { LuUser2 } from 'react-icons/lu';
import Logo from '../../assets/25c61999-863f-4e6a-b440-da5f296ec0e3.jfif.jpeg';

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-1/5 h-screen px-5 py-8 overflow-y-auto bg-gray-900">
      <NavLink to="/" className="flex items-center space-x-2">
        <img src={Logo} alt="logo" className="w-8 h-8 rounded-full" />
        <p className="text-tertiary">Investify</p>
      </NavLink>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg 
                ${
                  isActive
                    ? 'bg-tertiary text-primary'
                    : 'dark:text-gray-200 text-gray-600 hover:bg-tertiary hover:text-primary'
                }`
              }
            >
              <IoHomeOutline />
              <span className="mx-2 text-sm font-medium">Home</span>
            </NavLink>
            <NavLink
              to={'/course'}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg 
                ${
                  isActive
                    ? 'bg-tertiary text-primary'
                    : 'dark:text-gray-200 text-gray-600 hover:bg-tertiary hover:text-primary'
                }`
              }
            >
              <ImBooks />
              <span className="mx-2 text-sm font-medium">Course</span>
            </NavLink>
            <NavLink
              to={'/exams'}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg 
                ${
                  isActive
                    ? 'bg-tertiary text-primary'
                    : 'dark:text-gray-200 text-gray-600 hover:bg-tertiary hover:text-primary'
                }`
              }
            >
              <FaPencilAlt />
              <span className="mx-2 text-sm font-medium">Exams</span>
            </NavLink>
            <NavLink
              to={'/traiding'}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg 
                ${
                  isActive
                    ? 'bg-tertiary text-primary'
                    : 'dark:text-gray-200 text-gray-600 hover:bg-tertiary hover:text-primary'
                }`
              }
            >
              <GiTakeMyMoney />
              <span className="mx-2 text-sm font-medium">Demo Traiding</span>
            </NavLink>
          </div>
        </nav>

        {/* Settings Link at the Bottom, in the same nav section */}
        <div className="mt-auto">
          <NavLink
            to={'/settings'}
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
          >
            <LuUser2 />
            <span className="mx-2 text-sm font-medium">Settings</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
