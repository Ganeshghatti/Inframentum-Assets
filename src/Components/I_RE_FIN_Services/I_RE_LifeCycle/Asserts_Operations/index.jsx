import provider from "@/assets/images/provide_1.png";

export default function Asserts_Operations() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img src={provider} alt="Image" className="w-full" />
      </div>
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-2xl text-4xl font-semibold">
          Operation and Maintenance (O&M)
          <div className="font-normal text-base space-y-8 mt-6">
            <li>
              <span className="text-secondaryColor font-semibold text-lg">
                Predictive Maintenance :{" "}
              </span>
              <span className="font-normal text-base">
                Implement AI-driven predictive maintenance to forecast potential
                failures and optimize maintenance schedules, reducing downtime
                and repair costs.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg">
                Remote Monitoring Systems :{" "}
              </span>
              <span className="font-normal text-base">
                Use IoT and SCADA systems for continuous, real-time monitoring
                of asset performance, allowing for quick responses to any
                operational issues.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg">
                Energy Management Software :{" "}
              </span>
              <span className="font-normal text-base">
                Integrate energy management systems to optimize the performance
                of renewable energy assets, ensuring they generate the maximum
                possible energy.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
