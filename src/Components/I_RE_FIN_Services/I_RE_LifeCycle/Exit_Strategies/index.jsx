import provider from "@/assets/images/provide_1.png";

export default function Exit_Strategies() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img src={provider} alt="Image" className="w-full" />
      </div>
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-lg text-4xl font-semibold">
          Exit Strategies
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                IPO Advisory :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Prepare and advise renewable energy companies on going public
                through an IPO, including valuation, underwriting, and market
                timing.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Strategic Sale or Spin-Off :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Advise on the sale or spin-off of renewable energy assets or
                business units as part of a broader corporate strategy.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
