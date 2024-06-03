import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectsDropDownMenu = ({ closeMobileMenu }) => {
  return (
    <div className="absolute top-full mt-1 rounded-md shadow-lg bg-slate-300 ring-1 ring-opacity-5 z-10">
      <div className="py-1">
        <Link to="/education" className="whitespace-nowrap block px-4 py-2 text-orange-400 hover:text-orange-500" onClick={closeMobileMenu}>
          EDUCATION
        </Link>
        <Link to="/job-oriented" className="whitespace-nowrap block px-4 py-2 text-orange-400 hover:text-orange-500" onClick={closeMobileMenu}>
          JOB ORIENTED
        </Link>
        <Link to="/self-employment" className="whitespace-nowrap block px-4 py-2 text-orange-400 hover:text-orange-500" onClick={closeMobileMenu}>
          SELF EMPLOYMENT
        </Link>
        <Link to="/self-help-groups" className="whitespace-nowrap block px-4 py-2 text-orange-400 hover:text-orange-500" onClick={closeMobileMenu}>
          SELF HELP GROUPS
        </Link>
      </div>
    </div>
  );
};
ProjectsDropDownMenu.propTypes = {
  closeMobileMenu: PropTypes.func.isRequired,
};
export default ProjectsDropDownMenu;











// import { Link } from 'react-router-dom';

// const ProjectsDropDownMenu = () => {
//   return (
//     <div className="absolute top-full mt-1 rounded-md shadow-lg bg-slate-300 ring-1  ring-opacity-5 z-10 ">
//       <div className="py-1">
//         <Link to="/education" className="whitespace-nowrap block px-4 py-2  text-orange-400 hover:text-orange-500">
//         EDUCATION
//         </Link>
//         <Link to="/job-oriented" className="whitespace-nowrap block px-4 py-2  text-orange-400 hover:text-orange-500">
//         JOB ORIENTED
//         </Link>
//         <Link to="/self-employment" className="whitespace-nowrap block px-4 py-2  text-orange-400 hover:text-orange-500">
//         SELF EMPLOYMENT
//         </Link>
//         <Link to="/self-help-groups" className=" whitespace-nowrap block px-4 py-2  text-orange-400 hover:text-orange-500">
//         SELF HELP GROUPS
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProjectsDropDownMenu;






















// DropdownMenu.js
/* import { Link } from 'react-router-dom';

const ProjectDropDownMenu = () => {
  return (
    <div className="absolute mt-44 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
      <div className="py-1">
        <Link to="/subpage1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          About
        </Link>
        <Link to="/subpage2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Management Community
        </Link>
        <Link to="/subpage3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Office Bearers
        </Link>
      </div>
    </div>
  );
};

export default ProjectDropDownMenu; */
