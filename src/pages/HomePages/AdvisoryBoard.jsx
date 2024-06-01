

const AdvisoryBoard = () => {

  return (
    <div>
         <div className="container mx-auto p-4">
      {/* First div: Image on the left, content on the right */}
      <div className="flex items-center border p-4 rounded-lg shadow-lg mb-4">
        <div className="w-1/3">
          <img src="/AdvisoryBoardImages/team_1.jpg" alt="team1" className="w-full h-auto rounded" />
        </div>
        <div className="w-2/3 pl-4">
          <h2 className="text-xl font-bold mb-2">Content Title</h2>
          <p className="text-gray-700">This is the content section. You can place any content you want here.</p>
        </div>
      </div>

      {/* Second div: Content on the left, image on the right */}
      <div className="flex items-center border p-4 rounded-lg shadow-lg">
        <div className="w-2/3 pr-4">
          <h2 className="text-xl font-bold mb-2">Content Title</h2>
          <p className="text-gray-700">This is the content section. You can place any content you want here.</p>
        </div>
        <div className="w-1/3">
          <img src="/AdvisoryBoardImages/team_2.jpg" alt="Sample" className="w-full h-auto rounded" />
        </div>
      </div>

       {/* First div: Image on the left, content on the right */}
       <div className="flex items-center border p-4 rounded-lg shadow-lg mb-4">
        <div className="w-1/3">
          <img src="/AdvisoryBoardImages/team_1.jpg" alt="team1" className="w-full h-auto rounded" />
        </div>
        <div className="w-2/3 pl-4">
          <h2 className="text-xl font-bold mb-2">Content Title</h2>
          <p className="text-gray-700">This is the content section. You can place any content you want here.</p>
        </div>
      </div>
       {/* Second div: Content on the left, image on the right */}
       <div className="flex items-center border p-4 rounded-lg shadow-lg">
        <div className="w-2/3 pr-4">
          <h2 className="text-xl font-bold mb-2">Content Title</h2>
          <p className="text-gray-700">This is the content section. You can place any content you want here.</p>
        </div>
        <div className="w-1/3">
          <img src="/AdvisoryBoardImages/team_2.jpg" alt="Sample" className="w-full h-auto rounded" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdvisoryBoard