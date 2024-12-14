import provider from "@/assets/images/First/provide_5.png";

export default function Asserts_Green_Certification_Support() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#fde8d0] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img
          src={provider}
          alt="Image"
          className="lg:w-[33pc] lg:h-[350px] rounded-[25px]"
        />
      </div>
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-lg text-4xl font-semibold">
          Green Certification Support
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                LEED and Green Building Certification Assistance :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Provide support services to help clients achieve green building
                certifications such as LEED, including equipment documentation
                and energy efficiency compliance.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Carbon Footprint Reduction Programs :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
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
