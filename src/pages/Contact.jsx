import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <div className="m-2 relative w-full h-64 md:h-96">
        <img
          src="/ContactUsImages/contact.png"
          alt="Description"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
            Title Here
          </h1>
          <p className="text-white text-base md:text-lg">
            This is the content section where you can add a description or any
            other information. It is fully responsive and adjusts based on
            screen size.
          </p>
        </div>
      </div>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 py-6 mt-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Address:</h3>
          <p>1662/2, Gali No.17, Govind Puri, Kalkaji, New Delhi-110019</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Phone:</h3>
          <p>+91 11-41521162</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Email:</h3>
          <p>info@lokutthanfoundation.in</p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Social Media:</h3>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 py-6 mt-8 mb-8">
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
