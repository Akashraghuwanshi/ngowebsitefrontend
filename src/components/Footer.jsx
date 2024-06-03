
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 font-mono ">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/4 lg:w-1/6 mb-4 flex items-center">
          {/* Your logo */}
          <img src="Images/logo.png" alt="Logo" className="w-16 h-16 mr-2" />
          <span className='text-xl'>लोक उथान पहल फाउंडेशन</span>
        </div>
        <nav className="w-full md:w-3/4 lg:w-2/3 mb-4 md:mb-0 text-lg">
          {/* Menu Links */}
          <ul className="flex flex-col md:flex-row justify-center md:justify-end space-x-6 text-xl">
            <li><Link to="/"> HOME </Link></li>
            <li><Link to="/project">PROJECTS</Link></li>
            <li><Link to="/partner">PARTNERS</Link></li>
            <li><Link to="/become-volunteer">BECOME-A-VOLUNTEER</Link></li>
            <li><Link to="/volunteer">VOLUNTEERS</Link></li>
          </ul>
        </nav>
        <div className="w-full md:w-1/4 lg:w-1/6 flex justify-center md:justify-end items-center text-3xl">
          {/* Social Media Links */}
          <ul className="flex space-x-4">
            <li><a href="https://github.com/"><FaFacebook /></a></li>
            <li><a href="https://github.com/"><FaTwitter /></a></li>
            <li><a href="https://github.com/"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
      {/* Donate Link with QR Code */}
      <div className="container mx-auto mt-4">
  <div className="flex items-center justify-center space-x-4">
    <a href="/donate" className="text-white text-4xl bg-orange-500 px-6 py-3 rounded-lg transition duration-300 hover:bg-orange-600 hover:text-white">Donate Now</a>
    <img src="Images/qrcode.png" alt="Donate QR Code" className="w-30 h-25" />
  </div>
</div>
      {/* Contact Us */}
      <div className="container mx-auto mt-4 text-center">
        <p className="text-2xl">Contact Us: Adress: 1662/2, Gali No.17, Govind Puri, Kalkaji, New Delhi-110019, Phone: +91 01117479993, Email: info@lokutthanfoundation.in</p>
      </div>
    </footer>
  );
}

export default FooterComponent;





// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const FooterComponent = () => {
//   return (
//     <footer className="bg-gray-800 text-gray-300 py-12 h-30">
//       <div className="container mx-auto flex flex-wrap justify-between items-center">
//         <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
//           {/* Your logo */}
//           <img src="Images/logo.png" alt="Logo" className="w-24" />
//           <span className='text-2xl'>लोक उथान पहल फाउंडेशन</span>
//         </div>
//         <nav className="w-full md:w-3/4 lg:w-2/3 mb-8 md:mb-0 text-xl ">
//           {/* Menu Links */}
//           <ul className="flex flex-col justify-center md:justify-end space-x-6">
//             <li><Link to="/" className='m-6'> HOME </Link></li>
//             <li><Link to="/project">PROJECTS</Link></li>
//             <li><Link to="/partner">PARTNERS</Link></li>
//             <li><Link to="/become-volunteer">BECOME A VOLUNTEER</Link></li>
//             <li><Link to="/volunteer">VOLUNTEER</Link></li>
//           </ul>
//         </nav>
//         <div className="w-full md:w-1/4 lg:w-1/6 flex justify-center md:justify-end text-3xl">
//           {/* Social Media Links */}
//           <ul className="flex space-x-4">
//             <li><a href="https://facebook.com"><FaFacebook /></a></li>
//             <li><a href="https://twitter.com"><FaTwitter /></a></li>
//             <li><a href="https://instagram.com"><FaInstagram /></a></li>
//           </ul>
//         </div>
//       </div>
//       {/* Donate Link with QR Code */}
//       <div className="container mx-auto mt-8">
//         <div className="flex items-center justify-center space-x-4">
//           <a href="/donate" className="text-white-500 text-2xl">Donate Now</a>
//           <img src="Images/qrcode.png" alt="Donate QR Code" className="w-30" />
//         </div>
//       </div>
//       {/* Contact Us */}
//       <div className="container mx-auto mt-8 text-center">
//         <p className="text-2xl">Contact Us:Adress:1662/2, Gali No.17, Govind Puri, Kalkaji, New Delhi-110019,Phone:+91 01117479993,
//         Email: info@lokutthanfoundation.in</p>
//       </div>
//     </footer>
//   );
// }

// export default FooterComponent;
