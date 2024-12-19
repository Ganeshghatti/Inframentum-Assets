import provider from "@/assets/images/First/provide_6.png";

export default function Asserts_Sustainability_Reporting_and_Compliance() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#cef5fc] rounded-3xl px-6 py-8 text-black">
      <div className="lg:w-[55pc] col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Sustainability Reporting and Compliance
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Environmental Impact Reporting :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Provide detailed reports on the environmental impact of rented
                equipment, including energy usage, emissions, and carbon
                footprint.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Regulatory Compliance Support :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Assist clients in ensuring that their use of rental equipment
                complies with environmental regulations and sustainability
                standards.
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
