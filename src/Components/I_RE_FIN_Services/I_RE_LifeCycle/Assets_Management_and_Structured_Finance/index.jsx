import provider from "@/assets/images/Fin/provide_7.png";

export default function Assets_Management_and_Structured_Finance() {
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
          Asset Management and Structured Finance
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Asset Securitization :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Structure and manage asset-backed securities (ABS) linked to
                renewable energy assets, allowing companies to monetize their
                projects and raise capital.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Yieldco Formation:{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Assist in the formation of Yieldcos, which are publicly traded
                companies that own operating renewable energy assets and
                distribute cash flows to investors.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Portfolio Management :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Offer portfolio management services for investors in renewable
                energy assets, optimizing returns and managing risks.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
