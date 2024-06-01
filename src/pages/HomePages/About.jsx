import AboutContainer from "./containers/AboutpageContainer"

const About = () => {
  return (
    <main className="min-h-100">
    <div className="m-2 relative w-full h-64 md:h-96">
  <img
    src="/AboutPageImages/about.png"
    className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-top"
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
    <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">Title Here</h1>
    <p className="text-white text-base md:text-lg">
      This is the content section where you can add a description or any other information. It is fully responsive and adjusts based on screen size.
    </p>
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
                  src="/AboutPageImages/about_2.png"
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
                  consequat. Vivamus eu ligula ut erat rutrum vehicula vel non
                  est. Nulla posuere dui nec ligula iaculis, id lacinia urna
                  feugiat. Integer pharetra ligula nec nulla laoreet vehicula.
                  Quisque rutrum vitae velit nec rutrum. Vestibulum eu ex eros.
                  Vivamus consectetur, ex nec tristique tempus, neque magna
                  faucibus enim, id fringilla quam purus eu purus. Suspendisse
                  potenti. Sed id nibh quis metus eleifend tristique.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
       <AboutContainer/>
      </div>

      
    </main>
  );
};

export default About;



