import provider from "@/assets/images/First/provide_2.png";

export default function Asserts_After_Buy_Services() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#cef5fc] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          I-RentalFirst platform enables through our after-buy services
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Preventive Maintenance :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Implement rigorous maintenance programs to extend the lifespan
                of equipment, ensuring that assets are used efficiently, and
                waste is minimized.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Refurbishment and Recycling :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Focus on refurbishing older equipment and recycling parts,
                keeping resources in use for as long as possible.
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
