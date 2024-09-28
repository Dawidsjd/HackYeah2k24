import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { ImBooks } from 'react-icons/im';
import { FaPencilAlt } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-1/5 h-screen px-5 py-8 overflow-y-auto bg-gray-900">
      <a href="#">{/* Logo */}</a>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              content
            </label>
            <NavLink
              to={'/'}
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <IoHomeOutline />
              <span className="mx-2 text-sm font-medium">Home</span>
            </NavLink>
            <NavLink
              to={'/course'}
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <ImBooks />
              <span className="mx-2 text-sm font-medium">Course</span>
            </NavLink>
            <NavLink
              to={'/exercises'}
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <FaPencilAlt />
              <span className="mx-2 text-sm font-medium">Exercises</span>
            </NavLink>
            <NavLink
              to={'/traiding'}
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <GiTakeMyMoney />
              <span className="mx-2 text-sm font-medium">Demo Traiding</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
