import provider from "@/assets/images/First/provide_6.png";

export default function Asserts_Sustainability_Reporting_and_Compliance() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#cef5fc] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
        <ul className="text-2xl font-semibold">
          <h2 className="text-4xl mb-4">
            Sustainability Reporting and Compliance
          </h2>
          <div className="font-normal text-base space-y-8 mt-6">
            <li>
              <span className="text-secondaryColor font-semibold text-lg">
                Environmental Impact Reporting :{" "}
              </span>
              <span className="font-normal text-base">
                Provide detailed reports on the environmental impact of rented
                equipment, including energy usage, emissions, and carbon
                footprint.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg">
                Regulatory Compliance Support :{" "}
              </span>
              <span className="font-normal text-base">
                Assist clients in ensuring that their use of rental equipment
                complies with environmental regulations and sustainability
                standards.
              </span>
            </li>
          </div>
        </ul>
      </div>
      <div className="col-span-1 flex items-center justify-center mb-4 md:mb-0">
        <img
          src={provider}
          alt="Image"
          className="lg:w-[33pc] lg:h-[350px] rounded-[25px]"
        />
      </div>
    </div>
  );
}
