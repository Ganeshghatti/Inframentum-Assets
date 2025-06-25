import provider from "@/assets/images/Fin/provide_10.png";

export default function Corporate_Finance_Services() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#fde8d0] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Corporate Finance Services
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Dividend Policy Advisory :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Advise on dividend policies, helping renewable energy companies
                balance shareholder returns with reinvestment in growth and
                sustainability.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Treasury and Cash Management :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Provide treasury management services to optimize cash flows,
                manage liquidity, and reduce the cost of capital.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Tax Optimization :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Offer tax advisory services to optimize the tax structure of
                renewable energy projects and investments, including tax equity
                financing.
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
