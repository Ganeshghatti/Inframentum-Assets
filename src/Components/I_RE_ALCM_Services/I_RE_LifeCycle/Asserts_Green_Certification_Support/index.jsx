import provider from "@/assets/images/First/provide_5.png";

export default function Asserts_Green_Certification_Support() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#fde8d0] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-1 flex items-center justify-center mb-4 md:mb-0">
        <img
          src={provider}
          alt="Image"
          className="lg:w-[33pc] lg:h-[350px] rounded-[25px]"
        />
      </div>
      <div className="col-span-1 md:col-span-2 flex items-center">
        <ul className="text-2xl font-semibold">
          <h2 className="text-4xl mb-4">Green Certification Support</h2>
          <div className="font-normal text-base space-y-8 mt-6">
            <li>
              <span className="text-secondaryColor font-semibold text-lg">
                LEED and Green Building Certification Assistance :{" "}
              </span>
              <span className="font-normal text-base">
                Provide support services to help clients achieve green building
                certifications such as LEED, including equipment documentation
                and energy efficiency compliance.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg">
                Carbon Footprint Reduction Programs :{" "}
              </span>
              <span className="font-normal text-base">
                Offer tools and guidance to help clients reduce their carbon
                footprint through the use of sustainable equipment and
                practices.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
