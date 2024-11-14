import provider from "@/assets/images/provide_1.png";

export default function Investor_Relations_and_Market_Communication() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img src={provider} alt="Image" className="w-full" />
      </div>
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-lg text-4xl font-semibold">
          Investor Relations and Market Communication
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Investor Relations Support :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Provide support in managing investor relations, including the
                development of investor presentations, roadshows, and
                communication strategies for public companies in the renewable
                energy sector.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Market Positioning and Branding :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Assist companies in positioning themselves as leaders in the
                renewable energy market, including branding and communication
                strategies
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
