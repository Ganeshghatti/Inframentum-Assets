import provider from "@/assets/images/Fin/provide_9.png";

export default function Private_Placements_and_Venture_Capital() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#cef5fc] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img
          src={provider}
          alt="Image"
          className="lg:w-[33pc] lg:h-[350px] rounded-[25px]"
        />
      </div>
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-lg text-4xl font-semibold">
          Private Placements and Venture Capital
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Private Equity Placements :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Arrange private equity placements for renewable energy companies
                seeking growth capital from institutional investors, including
                private equity firms and sovereign wealth funds.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Venture Capital Funding :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Facilitate venture capital funding for early-stage renewable
                energy startups, helping them scale their operations and develop
                new technologies.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Family Office and High-Net-Worth Individual (HNWI) Placements :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Connect renewable energy companies with family offices and HNWIs
                interested in sustainable and impact investing.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
