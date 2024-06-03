import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const BecomeAVolunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    gender: "",
    age: "",
    state: "",
    district: "",
    areaOfInterest: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    const {
      name,
      contactNumber,
      gender,
      age,
      state,
      district,
      areaOfInterest,
      image,
    } = formData;
    if (
      !name ||
      !contactNumber ||
      !gender ||
      !age ||
      !state ||
      !district ||
      !areaOfInterest ||
      !image
    ) {
      alert("All fields are required.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("contactNumber", contactNumber);
    formDataToSend.append("gender", gender);
    formDataToSend.append("age", age);
    formDataToSend.append("state", state);
    formDataToSend.append("district", district);
    formDataToSend.append("areaOfInterest", areaOfInterest);
    formDataToSend.append("image", image);

    try {
      const response = await axios.post(
        'https://ngowebsitebackend.onrender.com/becomevolunteer/info',
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const volunteerInfo = response.data;
      console.log(volunteerInfo);

      if (response.status === 200) {
        // Handle successful submission
        console.log("Form submitted successfully");
      } else {
        // Handle errors
        console.error("Form submission failed");
      }

      setFormData({
        name: "",
        contactNumber: "",
        gender: "",
        age: "",
        state: "",
        district: "",
        areaOfInterest: "",
        image: null,
      });
      setImagePreview(null);
    } catch (error) {
      console.error("Form submission failed", error);
    }
  };

  return (
    <main>
      <div className="flex justify-center bg-orange-400 mt-1">
        <h1 className="text-2xl font-bold">
          Be the change you wish to see—volunteer with us today and make a
          lasting impact!
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full mx-auto p-4 space-y-4 bg-orange-100 rounded shadow-md m-5 md:max-w-xl lg:max-w-3xl"
      >
        {/* Existing input fields */}
        <div>
          <label
            htmlFor="name"
            className="block text-xl font-bold text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 block w-full p-2 border-4 border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-none text-3xl"
          />
        </div>
        <div>
          <label
            htmlFor="contactNumber"
            className="block text-xl font-bold text-gray-700"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="mt-2 block w-full p-2 border-4 border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-none text-3xl"
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block text-xl font-bold text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-2 block w-full p-2 border-4 border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-none text-2xl"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="age"
            className="block text-xl font-bold text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-2 block w-full p-2 border-4 border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-none text-3xl"
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-xl font-bold text-gray-700"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-2 block w-full p-2 border-4 border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-none text-2xl"
          />
        </div>
        <div>
          <label
            htmlFor="district"
            className="block text-xl font-bold text-gray-700"
          >
            District
          </label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="mt-2 block w-full p-2 border-4 border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-none text-2xl"
          />
        </div>
        <div>
          <label
            htmlFor="areaOfInterest"
            className="block text-xl font-bold text-gray-700"
          >
            Area of Interest
          </label>
          <input
            type="text"
            id="areaOfInterest"
            name="areaOfInterest"
            value={formData.areaOfInterest}
            onChange={handleChange}
            className="mt-2 block w-full p-2 border-4 border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-none text-2xl"
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-xl font-bold text-gray-700"
          >
            Upload-Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-2 block w-full p-2 border-4 border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-none text-2xl"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Image Preview"
              className="mt-2 w-24 h-24 object-cover border-2 border-gray-300 rounded"
              style={{ width: "150px", height: "150px" }}
            />
          )}
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 block w-full p-2 border-4 border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-none text-2xl"
          >
            Submit
          </button>
        </div>
      </form>
      <Link to="/volunteers">
        <div className="flex">
          <button
            type="submit"
            className="max-w-lg w-full mx-auto p-4 space-y-4 bg-orange-100 rounded shadow-md m-5 md:max-w-xl lg:max-w-3xl text-xl font-bold"
          >
            OUR VOLUNTEERS
          </button>
        </div>
      </Link>
    </main>
  );
};

export default BecomeAVolunteer;
