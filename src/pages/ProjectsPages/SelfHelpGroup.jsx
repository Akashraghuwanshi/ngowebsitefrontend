import { Card } from "flowbite-react";
const SelfHelpGroup = () => {
  return (
    <main>
  <div className="relative m-10">
  <div className="m-2 relative w-full pb-[56.25%] md:pb-[40%] lg:pb-[30%]">
    <img
      src="/SelfHelpGroupsContainer/self-help-group.jpg"
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
<div>
<Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/Cara
      ouselImages/causes_3.jpg"
    >
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

export default SelfHelpGroup