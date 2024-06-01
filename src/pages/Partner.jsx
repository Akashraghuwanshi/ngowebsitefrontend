import { Card } from "flowbite-react";



const Partner = () => {
  return (
    <main>
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
      <div>
      </div>
    </div>
   <div className="flex justify-center items-center">
    <div className="flex justify-center items-center ">
    <Card className="max-w-sm" imgSrc="PartnerFolderImages/bhatnagarSir.jpeg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Dr. Rishi Mohan Bhatnagar
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Dr Rishi Mohan Bhatnagar is a proven business leader with 25 years of industry experience in the technology spere. He has built a reputation for his integrity, objectivity and professionalism in dealing with complex stakeholder management. Further, he is known for inspiring people towards achieving a common vision while ensuring upholding best-in class governance. 


      </p>
    </Card>
    </div>
    <div className="flex justify-center items-center mt-5 mb-5">
    <Card className="max-w-sm" imgSrc="PartnerFolderImages/bhatnagarSir.jpeg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Dr. Rishi Mohan Bhatnagar
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Dr Rishi Mohan Bhatnagar is a proven business leader with 25 years of industry experience in the technology spere. He has built a reputation for his integrity, objectivity and professionalism in dealing with complex stakeholder management. Further, he is known for inspiring people towards achieving a common vision while ensuring upholding best-in class governance. 
      </p>
    </Card>
     </div>
    </div>

    <div className="flex justify-center items-center mt-5 mb-5">
    <div className="flex justify-center items-center ">
    <Card className="max-w-sm" imgSrc="PartnerFolderImages/bhatnagarSir.jpeg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Dr. Rishi Mohan Bhatnagar
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Dr Rishi Mohan Bhatnagar is a proven business leader with 25 years of industry experience in the technology spere. He has built a reputation for his integrity, objectivity and professionalism in dealing with complex stakeholder management. Further, he is known for inspiring people towards achieving a common vision while ensuring upholding best-in class governance. 
    </p>
    </Card>
    </div>
    <div className="flex justify-center items-center ">
    <Card className="max-w-sm" imgSrc="PartnerFolderImages/bhatnagarSir.jpeg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Dr. Rishi Mohan Bhatnagar
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Dr Rishi Mohan Bhatnagar is a proven business leader with 25 years of industry experience in the technology spere. He has built a reputation for his integrity, objectivity and professionalism in dealing with complex stakeholder management. Further, he is known for inspiring people towards achieving a common vision while ensuring upholding best-in class governance.   </p>
    </Card>
     </div>
    </div>

        
 </main>

  )
}

export default Partner