import provider from "@/assets/images/Rental/provide_7.png";

export default function Asserts_Compliance_Reporting() {
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
          Compliance and Reporting
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Regulatory Compliance Management :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Use compliance management tools to ensure that renewable energy
                assets meet all local, national, and international regulatory
                requirements.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Sustainability Reporting :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Implement software for tracking and reporting on sustainability
                metrics, such as carbon emissions reductions and resource
                efficiency.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
