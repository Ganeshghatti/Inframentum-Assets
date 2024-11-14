import provider from "@/assets/images/provide_1.png";

export default function Mergers_and_Acquisitions() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img src={provider} alt="Image" className="w-full" />
      </div>
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Mergers and Acquisitions (M&A)
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                M&A Advisory:{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Advise on mergers, acquisitions, and divestitures within the
                renewable energy sector, including target identification,
                valuation, and deal structuring.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Strategic Partnerships and Joint Ventures :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Facilitate the formation of strategic alliances, joint ventures,
                and partnerships between companies in the renewable energy
                space, helping to expand market reach and share resources.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Cross-Border Transactions :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Provide expertise in managing cross-border M&A transactions,
                ensuring compliance with local regulations and optimizing tax
                efficiency.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
