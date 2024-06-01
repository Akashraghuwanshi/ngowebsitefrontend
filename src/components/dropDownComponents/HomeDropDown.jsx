
import { Link } from 'react-router-dom';

const HomeDropDownMenu = () => {
  return (
    <div className="absolute top-full mt-5 w-48 rounded-md shadow-lg bg-slate-300 ring-1 ring-opacity-5 z-10 ">
      <div className="py-1">
        <Link to="/about" className="block px-4 py-2  text  text-orange-400 hover:text-orange-500 ">
          ABOUT
        </Link>
        <Link to="/advisoryboard" className="block px-4 py-2 text text-orange-400 hover:text-orange-500">
           ADVISORY BOARD
        </Link>
        <Link to="/members" className="block px-4 py-2 text text-orange-400 hover:text-orange-500">
           MEMBERS
        </Link>
        <Link to="/managementcommunity" className="block px-4 py-2 text text-orange-400 hover:text-orange-500">
           MANAGEMENT 
        </Link>
        <Link to="/events" className="block px-4 py-2 text-orange-400 hover:text-orange-500">
         EVENTS
        </Link>
      </div>
    </div>
  );
};

export default HomeDropDownMenu;












/* // DropdownMenu.js
import { Link } from 'react-router-dom';

const HomeDropDownMenu = () => {
  return (
    <div className="absolute py-1 w-48 rounded-md shadow-lg bg-orange ring-1  ring-opacity-5 z-10">
      <div className="py-1">
        <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          ABOUT
        </Link>
        <Link to="/managementcommunity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          MANAGEMENT COMMUNITY
        </Link>
        <Link to="/subpage3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          OFFICE BEARERS
        </Link>
      </div>
    </div>
  );
};

export default HomeDropDownMenu;
 */