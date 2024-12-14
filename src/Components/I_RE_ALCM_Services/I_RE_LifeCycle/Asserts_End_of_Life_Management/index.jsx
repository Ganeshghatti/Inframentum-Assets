import provider from "@/assets/images/Rental/provide_9.png";

export default function Asserts_End_of_Life_Management() {
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
          End-of-Life Management
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Decommissioning Planning :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Develop detailed plans for the safe and cost-effective
                decommissioning of renewable energy assets, including the
                recycling or disposal of materials.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Asset Recycling Solutions :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Utilize specialized solutions for the recycling of renewable
                energy components, such as solar panels and wind turbine blades,
                to minimize environmental impact.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
