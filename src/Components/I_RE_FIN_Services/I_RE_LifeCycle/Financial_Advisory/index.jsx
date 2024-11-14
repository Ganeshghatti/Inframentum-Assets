import provider from "@/assets/images/provide_1.png";

export default function Financial_Advisory() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img src={provider} alt="Image" className="w-full" />
      </div>
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-lg text-4xl font-semibold">
          Financial Advisory
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Valuation Services :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Provide valuation services for renewable energy assets,
                companies, and projects, using various methodologies like
                discounted cash flow (DCF), comparable company analysis (CCA),
                and precedent transactions.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Financial Restructuring :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Assist companies in the renewable energy sector with financial
                restructuring, including debt restructuring, refinancing, and
                corporate reorganization.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Risk Management :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Offer risk management solutions, including hedging strategies
                for commodity prices, interest rates, and foreign exchange risks
                related to renewable energy projects.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
