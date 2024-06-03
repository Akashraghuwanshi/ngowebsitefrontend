import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <nav className="hidden md:flex flex-col md:flex-row items-center justify-between p-5 bg-white shadow-md ">
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src="Images/navbar1logo.jpg"
          alt="navbar1logo"
          className="h-16 w-16 md:h-20 md:w-20 mr-4"
        />
        <div className="flex flex-col text-center md:text-left">
          <span className="text-xl sm:text-2xl md:text-3xl text-orange-600">
            लोक उत्थान
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl text-orange-600">
            पहल फाउंडेशन
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
        <Link to="/donate">
          <button className="text-2xl font-mono bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 mx-2 mb-2 md:mb-0">
            DONATE NOW
          </button>
        </Link>
        <Link to="/become-volunteer">
          <button className="text-2xl font-mono bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 mx-2">
            BECOME A VOLUNTEER
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex">
          <img
            className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-full m-2"
            src="Images/apjimage.png"
            alt="apjimage"
          />
          <img
            className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-full m-2"
            src="Images/india-republic-day.jpg"
            alt="india-republic-day"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
