import provider from "@/assets/images/First/provide_3.png";

export default function Asserts_Sustainable_Supply_Chain() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#fde8d0] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-1 flex items-center justify-center mb-4 md:mb-0">
        <img
          src={provider}
          alt="Image"
          className="lg:w-[33pc] lg:h-[350px] rounded-[25px]"
        />
      </div>
      <div className="lg:ml-5 col-span-1 md:col-span-2 flex items-center">
        <ul className="text-xl md:text-4xl font-semibold">
          Sustainable Supply Chain
          <div className="font-normal text-base space-y-8 mt-6">
            <li>
              <span className="text-secondaryColor font-semibold text-lg">
                Eco-Friendly Suppliers :{" "}
              </span>
              <span className="font-normal text-base">
                Equipment manufacturers and suppliers that prioritize
                sustainability through their green energy assets, by enabling
                them to participate in our Manufacturer or Dealer led programs
                for Rental verticals.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg">
                Local Sourcing :{" "}
              </span>
              <span className="font-normal text-base">
                Our association with Manufacturer representatives locally
                enables us to focus on sourcing equipment and parts locally to
                reduce transportation emissions and support local businesses.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
