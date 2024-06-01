
const SelfEmployment = () => {
  return (
    <main className="bg-slate-400">
      <div>
      <div className="relative m-10">
  <div className="m-2 relative w-full pb-[56.25%] md:pb-[40%] lg:pb-[30%]">
    <img
      src="/SelfEmploymentImages/self-employment.png"
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

      <div className="flex items-center p-6 bg-gray-100 m-10">
        <div className="w-1/2">
          <img
            src="/AboutPageImages/about_2.png"
            alt="About"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
            This is where you can write some content about the image. You can
            add more text here to describe what the image is about, or provide
            any relevant information that you do like to share.
          </p>
        </div>
      </div>
      </div>
    </main>
  )
}

export default SelfEmployment