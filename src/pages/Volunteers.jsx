import { useState, useEffect } from 'react';
import axios from 'axios';

const Volunteers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://ngowebsitebackend.onrender.com/becomevolunteer/info');
      const volunteersData = response.data;
      console.log(volunteersData);
      setData(volunteersData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(data);

  return (
    <main>
      <div className='flex justify-center bg-orange-400 mt-5'>
        <h1 className='text-2xl font-bold'>OUR VOLUNTEERS</h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {data.map(item => (
            <div key={item._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover object-center"
                  style={{ width: '170px', height: '170px' }}
                />
                <div className="p-4">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-gray-600">{item.contactNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">{`${item.district}, ${item.state}`}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Volunteers;





































