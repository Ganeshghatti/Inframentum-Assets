import provider from "@/assets/images/provide_1.png";

export default function Market_Entry_and_Expansion_Strategies() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Market Entry and Expansion Strategies
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Market Analysis and Feasibility Studies :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Conduct market analysis, feasibility studies, and due diligence
                for companies looking to enter new markets or expand their
                renewable energy operations.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Regulatory and Compliance Advisory :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Provide advisory services on navigating regulatory environments,
                securing permits, and complying with local, national, and
                international regulations.
              </span>
            </li>
          </div>
        </ul>
      </div>
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img src={provider} alt="Image" className="w-full" />
      </div>
    </div>
  );
}
