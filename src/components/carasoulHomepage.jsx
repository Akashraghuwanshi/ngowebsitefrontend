

import { Carousel } from "flowbite-react";


const carasoulHomepage = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center bg-orange-200 dark:bg-gray-700 dark:text-white">
          <img src="/CarasoulImages/home.png" alt="slide1" width="100%" className="h-full" />
        </div>
        <div className="flex h-full items-center justify-center bg-orange-200 dark:bg-gray-700 dark:text-white">
          <img src="/CarasoulImages/trusties.png" alt="silder2" width="100%" className="h-full"/>
        </div>
        <div className="flex h-full items-center justify-center bg-orange-200 dark:bg-gray-700 dark:text-white">
          <img src="/CarasoulImages/causes_3.jpg" alt="silder3" className="h-full" width="100%"/>
        </div>
      </Carousel>
    </div>
  )
}

export default carasoulHomepage


