import provider from "@/assets/images/Rental/provide_8.png";

export default function Asserts_Lifecycle_CostManagement() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#fde8d0] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Lifecycle Cost Management
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Total Cost of Ownership (TCO) Analysis :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Implement tools to analyses and manage the total cost of
                ownership of renewable assets, including capital expenditures,
                operational expenses, and end-of-life costs.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Financial Management Solutions :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Use specialized software to manage the financial aspects of
                renewable energy projects, including funding, investment
                analysis, and financial forecasting.
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
