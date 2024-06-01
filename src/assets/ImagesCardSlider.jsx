import 'tailwindcss/tailwind.css';
import { useState, useEffect, useMemo } from 'react';
import team1 from './CSImages/team_1.jpg';
import team2 from './CSImages/team_2.jpg';
import team3 from './CSImages/team_4.jpg';

const ImageCardSlider = () => {
  const images = useMemo(() => [
    { id: 1, src: team1, name: 'Image 1' },
    { id: 2, src: team2, name: 'Image 2' },
    { id: 3, src: team3, name: 'Image 3' },
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cloneImages, setCloneImages] = useState([]);

  useEffect(() => {
    // Clone the images array to enable infinite scrolling
    setCloneImages([...images, ...images]);

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    // Reset index to 0 when reaching the middle of the array
    if (currentIndex === images.length) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 1000); // Adjust timing to match transition duration
    }
  }, [currentIndex, images.length]);

  const visibleImages = 3; // Number of visible images
  const cardWidth = 300; // Fixed width for each card

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex % images.length) * (cardWidth / visibleImages)}px)` }}
      >
        {cloneImages.map((image, index) => (
          <div key={index} className="flex-none" style={{ width: `${cardWidth}px` }}>
            <div className="bg-white shadow-md rounded-md overflow-hidden mx-2">
              <img src={image.src} alt={image.name} className="w-full h-52 object-cover" />
              <div className="p-2 text-center">
                <h2 className="text-lg font-semibold">{image.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCardSlider;

