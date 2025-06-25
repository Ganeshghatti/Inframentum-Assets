import provider from "@/assets/images/Fin/provide_2.png";

export default function Capital_Raising_for_RE_Sector() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#fde8d0] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Capital Raising for RE Sector
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Equity Financing :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Assist renewable energy companies in raising capital through the
                issuance of equity, including initial public offerings (IPOs),
                follow-on offerings, private placements, and venture capital
                funding.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Debt Financing :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Arrange debt financing options, such as corporate bonds, green
                bonds, and syndicated loans, to fund renewable energy projects
                and corporate expansion.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Mezzanine Financing :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Provide mezzanine financing as a hybrid between debt and equity,
                offering flexibility and allowing companies to raise additional
                capital without diluting ownership significantly.
              </span>
            </li>
          </div>
        </ul>
      </div>
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img
          src={provider}
          alt="Image"
          className="lg:w-[33pc] lg:h-[350px] rounded-[25px]"
        />
      </div>
    </div>
  );
}
