import provider from "@/assets/images/Rental/provide_6.png";

export default function Asserts_Performance() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#fde8d0] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Performance Optimization
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Predictive Maintenance :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Implement AI-driven predictive maintenance to forecast potential
                failures and optimize maintenance schedules, reducing downtime
                and repair costs.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Remote Monitoring Systems :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Through IoT and SCADA systems for continuous, real-time
                monitoring of asset performance, allowing for quick responses to
                any operational issues.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Energy Management Software :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Integrate energy management systems to optimize the performance
                of renewable energy assets, ensuring they generate the maximum
                possible energy.
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
