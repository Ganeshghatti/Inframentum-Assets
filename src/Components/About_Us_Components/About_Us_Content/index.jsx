import aboutImg from "../../../assets/images/aboutImg.png";

export default function About_Us_Content() {
  return (
    <div className="bg-bgShade flex flex-col gap-10 w-full py-20">
      <div className="w-full flex flex-col gap-10 space-y-6">
        <div>
          <h1 className="flex  items-center justify-center gap-3 max-lg:text-3xl text-5xl capitalize font-semibold">
            <span className="text-secondaryColor">About</span>
            <span>us</span>
          </h1>
        </div>
        <div className="flex flex-col gap-5 space-y-8 px-4 lg:w-[80%] max-lg:w-full mx-auto lg:text-[18px]  ">
          <p className="">
            Inframentum<sup>TM</sup> is a Company focused on Asset Life Cycle
            Management for Renewable Energy, Water and sustainable
            Infrastructure assets
          </p>
          <ul
            className="list-inside font-semibold"
            style={{ listStyleType: "square" }}
          >
            Experienced founders with a track record of over 100 + years
            covering
            <div className="space-y-4 mt-4 font-normal">
              <li>Infrastructure Finance</li>
              <li>Construction Equipment and Logistics Finance</li>
              <li>
                Equipment Leasing, Rental, and Refurbished Equipment Trading
              </li>
              <li>Renewable Energy Industry value chain</li>
            </div>
          </ul>
        </div>
        <div className="w-full">
          <img src={aboutImg} alt="About Us Image" className="w-full" />
        </div>
        <div className="flex flex-col gap-5 space-y-8 px-4 lg:w-[80%] max-lg:w-full mx-auto lg:text-[18px]  ">
          <ul
            className="list-inside font-semibold"
            style={{ listStyleType: "square" }}
          >
            The Company’s target segments are predominantly those enterprises
            that require to transition to clean energy across all their core
            operations. The domain expertise of the founders is enabling the
            focus towards those businesses that are
            <div className="space-y-4 mt-4 font-normal">
              <li>Infrastructure, Quarrying & Mining Enterprises</li>
              <li>Manufacturing and Service Sector for Energy reduction </li>
              <li>Logistics, Urban Infrastructure, Commercial segments</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
