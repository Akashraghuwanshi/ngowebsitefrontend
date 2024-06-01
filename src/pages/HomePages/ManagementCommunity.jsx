const ManagementCommunity = () => {
  return (
    <main>
      <div className="m-2 relative w-full h-64 md:h-96">
        <img
          src="/CarasoulImages/home.png"
          alt="Description"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
            Title Here
          </h1>
          <p className="text-white text-base md:text-lg">
            This is the content section where you can add a description or any
            other information. It is fully responsive and adjusts based on
            screen size.
          </p>
        </div>
      </div>
      <div>
        <div className="container mx-auto p-4">
          {/* First div: Image on the left, content on the right */}
          <div className="flex items-center border p-4 rounded-lg shadow-lg mb-4">
            <div className="w-1/3">
              <img
                src="/AdvisoryBoardImages/team_1.jpg"
                alt="team1"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="w-2/3">
              <div className="w-1/1 pl-1">
                <h2 className="text-xl font-bold mb-2">
                  Dr. Rishi Mohan Bhatnagar
                </h2>
                <h4 className="text font-bold mb-2">
                  Business and Technology Leader, Mentor, Author and
                  Humanitarian
                </h4>
                <p className="text-gray-700"></p>
              </div>
              <div>
                Dr Rishi Mohan Bhatnagar is a proven business leader with 25
                years of industry experience in the technology spere. He has
                built a reputation for his integrity, objectivity and
                professionalism in dealing with complex stakeholder management.
                Further, he is known for inspiring people towards achieving a
                common vision while ensuring upholding best-in class governance.
                Rishi is  strong cultural adaptation he has travelled to all
                continents, managed multiple global customers and worked on
                cross-functional teams across the world. He started his career
                as a technologist, moved to sales and business operations,
                business unit head with P&L responsibility and last role
                function as President and Board Member of aeris global and CEO
                of its subsidiary in India. As President and Board Member, aeris
                Communications  having JV is with Softbank and
                JV with Volkswagen, also acquired IoT business of Ericsson in
                2022, Rishi is tasked with spearheading two equally important
                portfolios, aeris digital solutions world-wide business and
                heading aeris India as its founder employee. In the digital
                solutions domain, Rishi is steering aeris Communications in
                forging world-changing Internet of Things  innovations in
                developing a more inclusive, trustworthy, and sustainable
                digital society for everyone, everywhere. Prior to Aeris, Rishi
                worked with Tech Mahindra for a decade in various portfolios. He
                served as the Global Head for Digital Enterprise Services and
                operations head for NOIDA centre. He was head of sales and
                business operations for Europe and the SPOC for marquee global
                customers such as AT&T and Deutsch Telecom, Prior to Tech
                Mahindra, Rishi worked with HCL Perot Systems for eight years in
                various roles. He served as the Director Perot Systems Ireland.
                He has co-authored the book “Enterprise IoT” in 2015. Rishi
                founded the IET IoT Panel in India in 2015, which is now IET
                future Tech Panel and he continues to spear head the future
                technology narrative to make India a pioneer in digital
                solutions. Creating a credible global platform and echo systems
                for future technology has been his forte. He is the Chairman of
                the CII IoT Summit since 2018, and member of multiple CII and
                NASSCOM committees. Rishi is the recipient of the Economic Times
                CEO of the Year  in 2022, ET Now is Business Leader of the
                year 2019 Award, the Voice & Data “Leadership Recognition Award”
                 India 2018, Indian ISV “IoT CEO of the Year 2018” and BTVI
                “Business Leader of the Year 2018”and many more.
              </div>
            </div>
          </div>

          {/* Second div: Content on the left, image on the right */}
          <div className="flex items-center border p-4 rounded-lg shadow-lg">
            <div className="w-2/3 pr-4">
              <h2 className="text-xl font-bold mb-2">Content Title</h2>
              <p className="text-gray-700">
                This is the content section. You can place any content you want
                here.
              </p>
            </div>
            <div className="w-1/3">
              <img
                src="/AdvisoryBoardImages/team_2.jpg"
                alt="Sample"
                className="w-full h-auto rounded"
              />
            </div>
          </div>

          {/* First div: Image on the left, content on the right */}
          <div className="flex items-center border p-4 rounded-lg shadow-lg mb-4">
            <div className="w-1/3">
              <img
                src="/AdvisoryBoardImages/team_1.jpg"
                alt="team1"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="w-2/3 pl-4">
              <h2 className="text-xl font-bold mb-2">Content Title</h2>
              <p className="text-gray-700">
                This is the content section. You can place any content you want
                here.
              </p>
            </div>
          </div>
          {/* Second div: Content on the left, image on the right */}
          <div className="flex items-center border p-4 rounded-lg shadow-lg">
            <div className="w-2/3 pr-4">
              <h2 className="text-xl font-bold mb-2">Content Title</h2>
              <p className="text-gray-700">
                This is the content section. You can place any content you want
                here.
              </p>
            </div>
            <div className="w-1/3">
              <img
                src="/AdvisoryBoardImages/team_2.jpg"
                alt="Sample"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManagementCommunity;
