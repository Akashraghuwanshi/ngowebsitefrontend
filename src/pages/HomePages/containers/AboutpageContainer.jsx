import  { useState, useEffect } from 'react';

const Container = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100000) {
          return prevCounter + 1;
        } else {
          clearInterval(interval);
          return prevCounter;
        }
      });
    }, 10); // Adjust the interval timing as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between p-4 bg-gray-100 min-h-30">
      <div className="w-3/4 bg-white p-4 shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">Main Title</h1>
        <div className="content">
          {/* Add your content here */}
          <p>This is some content below the main title.</p>
        </div>
      </div>
      <div className="w-1/4 bg-white p-4 shadow-md rounded ml-4">
        <h2 className="text-xl font-semibold mb-4">Counter Title</h2>
        <div className="counter">
          {counter.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Container;
