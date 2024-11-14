import provider from "@/assets/images/provide_1.png";

export default function Asserts_Sustainable_Supply_Chain() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img src={provider} alt="Image" className="w-full" />
      </div>
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Sustainable Supply Chain
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Eco-Friendly Suppliers :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Equipment manufacturers and suppliers that prioritize
                sustainability through their green energy assets, by enabling
                them to participate in our Manufacturer or Dealer led programs
                for Rental verticals .{" "}
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Local Sourcing :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Our association with Manufacturer representatives locally
                enables us to Focus on sourcing equipment and parts locally to
                reduce transportation emissions and support local businesses.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
