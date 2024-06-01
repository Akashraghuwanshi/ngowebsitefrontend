import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HomeDropDownMenu from "./dropDownComponents/HomeDropDown";
import ProjectsDropDownMenu from "./dropDownComponents/ProjectDropDown";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileHomeDropdownOpen, setIsMobileHomeDropdownOpen] = useState(false);
  const [isMobileProjectsDropdownOpen, setIsMobileProjectsDropdownOpen] = useState(false);
  
  const homeDropdownRef = useRef(null);
  const projectsDropdownRef = useRef(null);

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  const toggleMobileHomeDropdown = () => {
    setIsMobileHomeDropdownOpen(!isMobileHomeDropdownOpen);
  };

  const toggleMobileProjectsDropdown = () => {
    setIsMobileProjectsDropdownOpen(!isMobileProjectsDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (homeDropdownRef.current && !homeDropdownRef.current.contains(event.target)) {
      setIsHomeDropdownOpen(false);
    }
    if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target)) {
      setIsProjectsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-300 h-16 relative">
      <div className="flex items-center justify-between h-full px-4">
        {/* Logo part */}
        <Link to="/">
          
          <div className="flex items-center rounded-lg shadow-lg">
  <img
    src="Images/logo.png"
    alt="logo"
    className="h-12 w-auto sm:h-14 sm:w-auto md:h-16 md:w-auto lg:h-20 lg:w-auto xl:h-24 xl:w-auto"
    // onClick={toggleMenu}
  />
</div>

        </Link>

         {/* New section for DONATE NOW and BECOME A VOLUNTEER links */}
         <div className="md:hidden flex">
         <div className="flex justify-center">
            <Link to="/donate"  className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 mx-2"
            // onClick={toggleMenu}
            >
              DONATE NOW
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="/become-volunteer"  className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 mx-2" 
                //  onClick={toggleMenu}
            >
              BECOME A VOLUNTEER
            </Link>
          </div>
          </div>
          {/* End of new section */}

        <div className="md:hidden">
          <button className="text-orange-400 p-2" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8 md:text-xl md:text-orange-400 md:w-full md:justify-center h-full items-center">
          <li className="relative flex items-center" ref={homeDropdownRef}>
            <Link to="/" className="hover:text-orange-500 flex items-center">
              HOME
            </Link>
            <button onClick={toggleHomeDropdown} className="hover:text-orange-500 flex items-center ml-1">
              <IoIosArrowDropdown />
            </button>
            {isHomeDropdownOpen && <HomeDropDownMenu />}
          </li>
          <li className="relative flex items-center" ref={projectsDropdownRef}>
            <Link to="/projects" className="hover:text-orange-500 flex items-center">
              PROJECTS
            </Link>
            <button onClick={toggleProjectsDropdown} className="hover:text-orange-500 flex items-center ml-1">
              <IoIosArrowDropdown />
            </button>
            {isProjectsDropdownOpen && <ProjectsDropDownMenu />}
          </li>
          <li>
            <Link to="/partner" className="hover:text-orange-500">
              PARTNER
            </Link>
          </li>
          <li>
            <Link to="/volunteers" className="hover:text-orange-500">
              VOLUNTEERS
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500">
              CONTACT-US
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav 
        // onClick={toggleMenu}
        >
        <ul className="absolute top-16 left-0 right-0 bg-gray-300 p-4 flex flex-col md:hidden text-2xl text-orange-400 space-y-4 z-10">
          <li className="relative">
            <div className="flex justify-between items-center">
              <Link to="/" className="hover:text-orange-500" onClick={toggleMenu}>
                Home
              </Link>
              <button onClick={toggleMobileHomeDropdown} className="hover:text-orange-500 flex items-center text-4xl">
                <IoIosArrowDropdown />
              </button>
            </div>
            {isMobileHomeDropdownOpen && (
              <div className="px-24">
                <HomeDropDownMenu />
              </div>
            )}
          </li>
          <li className="relative">
            <div className="flex justify-between items-center">
              <Link to="/projects" className="hover:text-orange-500" onClick={toggleMenu}>
                Projects
              </Link>
              <button onClick={toggleMobileProjectsDropdown} className="hover:text-orange-500 flex items-center text-4xl">
                <IoIosArrowDropdown />
              </button>
            </div>
            {isMobileProjectsDropdownOpen && (
              <div className="bg-gray-300 p-2">
                <ProjectsDropDownMenu />
              </div>
            )}
          </li>
         
          <li>
            <Link to="/partner" className="hover:text-orange-500" onClick={toggleMenu}>
              Partner
            </Link>
          </li>
          <li>
            <Link to="/volunteers" className="hover:text-orange-500" onClick={toggleMenu}>
              Volunteers
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      
          )
      }
    </nav>
  );
};

export default Navbar;



// {/* <nav>
//         <ul className="absolute top-16 left-0 right-0 bg-gray-300 p-4 flex flex-col md:hidden text-2xl text-orange-400 space-y-4 z-10">
//           <li className="relative">
//             <div className="flex justify-between items-center">
//               <Link to="/" className="hover:text-orange-500" onClick={toggleMenu}>
//                 Home
//               </Link>
//               <button onClick={toggleMobileHomeDropdown} className="hover:text-orange-500 flex items-center">
//                 <IoIosArrowDropdown />
//               </button>
//             </div>
//             {isMobileHomeDropdownOpen && (
//               <div className="px-24">
//                 <HomeDropDownMenu />
//               </div>
//             )}
//           </li>
//           <li className="relative">
//             <div className="flex justify-between items-center">
//               <Link to="/projects" className="hover:text-orange-500" onClick={toggleMenu}>
//                 Projects
//               </Link>
//               <button onClick={toggleMobileProjectsDropdown} className="hover:text-orange-500 flex items-center">
//                 <IoIosArrowDropdown />
//               </button>
//             </div>
//             {isMobileProjectsDropdownOpen && (
//               <div className="bg-gray-300 p-2">
//                 <ProjectsDropDownMenu />
//               </div>
//             )}
//           </li>
//           <li>
//             <Link to="/partner" className="hover:text-orange-500" onClick={toggleMenu}>
//               Partner
//             </Link>
//           </li>
//           <li>
//             <Link to="/volunteers" className="hover:text-orange-500" onClick={toggleMenu}>
//               Volunteers
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-orange-500" onClick={toggleMenu}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//         </nav> */}









































































 