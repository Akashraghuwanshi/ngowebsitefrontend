import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const HomeDropDownMenu = ({ closeMobileMenu }) => {
  return (
    <div className="absolute top-full whitespace-nowrap rounded-md shadow-lg bg-slate-300 ring-1 ring-opacity-5 z-10">
      <div className="py-1">
        <Link to="/about" className="whitespace-nowrap block px-4 py-2 text text-orange-400 hover:text-orange-500" onClick={closeMobileMenu}>
          ABOUT
        </Link>
        <Link to="/advisoryboard" className="whitespace-nowrap block px-4 py-2 text text-orange-400 hover:text-orange-500" onClick={closeMobileMenu}>
          ADVISORY BOARD
        </Link>
        <Link to="/members" className="whitespace-nowrap block px-4 py-2 text text-orange-400 hover:text-orange-500" onClick={closeMobileMenu}>
          MEMBERS
        </Link>
        <Link to="/managementcommunity" className="whitespace-nowrap block px-4 py-2 text text-orange-400 hover:text-orange-500" onClick={closeMobileMenu}>
          MANAGEMENT 
        </Link>
        <Link to="/events" className="whitespace-nowrap block px-4 py-2 text-orange-400 hover:text-orange-500" onClick={closeMobileMenu}>
          EVENTS
        </Link>
      </div>
    </div>
  );
};
HomeDropDownMenu.propTypes = {
  closeMobileMenu: PropTypes.func.isRequired,
};


export default HomeDropDownMenu;







// import { Link } from 'react-router-dom';

// const HomeDropDownMenu = () => {
//   return (
//     <div className="absolute top-full whitespace-nowrap rounded-md shadow-lg bg-slate-300 ring-1 ring-opacity-5 z-10">
//       <div className="py-1">
//         <Link to="/about" className="whitespace-nowrap block px-4 py-2 text text-orange-400 hover:text-orange-500">
//           ABOUT
//         </Link>
//         <Link to="/advisoryboard" className="whitespace-nowrap block px-4 py-2 text text-orange-400 hover:text-orange-500">
//           ADVISORY BOARD
//         </Link>
//         <Link to="/members" className="whitespace-nowrap block px-4 py-2 text text-orange-400 hover:text-orange-500">
//           MEMBERS
//         </Link>
//         <Link to="/managementcommunity" className="whitespace-nowrap block px-4 py-2 text text-orange-400 hover:text-orange-500">
//           MANAGEMENT 
//         </Link>
//         <Link to="/events" className="whitespace-nowrap block px-4 py-2 text-orange-400 hover:text-orange-500">
//           EVENTS
//         </Link>
//       </div>
//     </div>
//   );
// };



// export default HomeDropDownMenu;


















