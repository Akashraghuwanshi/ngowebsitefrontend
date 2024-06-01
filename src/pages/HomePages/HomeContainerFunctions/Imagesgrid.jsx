// src/ImageContainer.jsx

const images = [
  {
    src: '/EducationImagesContainer/projects-slider_1.jpg', // Replace with your image URLs
    title: 'Image 1 Title',
    content: 'This is the content for Image 1',
  },
  {
    src: '/EducationImagesContainer/projects-slider_2.jpg',
    title: 'Image 2 Title',
    content: 'This is the content for Image 2',
  },
  {
    src: '/EducationImagesContainer/projects-slider_3.jpg',
    title: 'Image 3 Title',
    content: 'This is the content for Image 3',
  },
];

const ImageContainer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {images.map((image, index) => (
          <div key={index} className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={image.src} alt={image.title} />
            <div className="p-4">
              <h2 className="text-lg font-bold">{image.title}</h2>
              <p className="text-gray-600">{image.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
