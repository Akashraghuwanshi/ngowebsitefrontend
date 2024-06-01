import { Card } from "flowbite-react";

const JobOriented = () => {
  return (
    <main>
    <div className="m-2 relative w-full h-64 md:h-96">
      <img
        src="/JobOrientedImages/job-oriented.png"
        alt="Description"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">Title Here</h1>
        <p className="text-white text-base md:text-lg">This is the content section where you can add a description or any other information. It is fully responsive and adjusts based on screen size.</p>
      </div>
    </div>
    <div>

    <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    </div>

    </main>
  )
}

export default JobOriented