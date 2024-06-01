import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Members1 = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const members = [
    { id: 1, name: 'John Doe', position: 'CEO', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Jane Smith', position: 'CTO', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Sam Johnson', position: 'CFO', image: '/path/to/image3.jpg' },
    { id: 4, name: 'Alice Brown', position: 'CMO', image: '/path/to/image4.jpg' },
    // Add more members as needed
  ];

  return (
    <main className='mb-10'>
      <div className="m-2 relative w-full h-64 md:h-96">
        <img
          src="/CarasoulImages/home.png"
          alt="Description"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">Title Here</h1>
          <p className="text-white text-base md:text-lg">This is the content section where you can add a description or any other information. It is fully responsive and adjusts based on screen size.</p>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-center text-2xl font-bold mb-4">Our Members</h2>
        <Slider {...carouselSettings}>
          {members.map(member => (
            <div key={member.id} className="p-2">
              <div className="bg-slate-300 shadow-md rounded-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-24 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}

export default Members1;
