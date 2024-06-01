
// import CarasoulHomepage from "../../components/carasoulHomepage";
// import ImageCardSlider from "../../assets/ImagesCardSlider";
import ImageContainer from "./HomeContainerFunctions/Imagesgrid";
const Home = () => {
  return (
    <main>
    <div className="relative m-10">
  <div className="m-2 relative w-full pb-[56.25%] md:pb-[40%] lg:pb-[30%]">
    <img
      src="/CarasoulImages/home.png"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  </div>
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <div className="text-white text-center">
      <h1 className="text-4xl font-bold font-lora-italic">
        LOK UTHAAN PEHEL FOUNDATION
      </h1>
      <p className="mt-2 text-lg">
        Your content goes here. This is a description or any other text you want to place above the image.
      </p>
    </div>
  </div>
</div>


    
    <div className="bg-gray-200 py-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <img
                  src="/EducationImagesContainer/img_box-1.jpg"
                  alt="About Us"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:col-span-1">
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam hendrerit odio at mauris cursus, vitae sagittis nisi
                  dapibus. Donec elementum sapien ac commodo dignissim. Nullam
                  molestie libero nec ligula commodo, nec condimentum turpis
                  consequat. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <ImageContainer/>
      </div>
    </main>
  );
};

export default Home;


