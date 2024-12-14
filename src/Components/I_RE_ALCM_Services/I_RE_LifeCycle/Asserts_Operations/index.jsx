import provider from "@/assets/images/Rental/provide_5.png";

export default function Asserts_Operations() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#cef5fc] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2">
        <h2 className="max-md:text-xl md:text-4xl font-semibold mb-6">
          Operations Management
        </h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-secondaryColor font-semibold mb-2  ">
              Performance Monitoring:
            </h3>
            <p className="max-md:text-sm  ">
              Deploy real-time monitoring systems to track asset performance,
              energy production, and system health.
            </p>
          </li>
          <li>
            <h3 className="text-secondaryColor font-semibold mb-2  ">
              Maintenance Planning:
            </h3>
            <p className="  max-md:text-sm">
              Schedule and track preventive maintenance activities to optimize
              asset performance and longevity.
            </p>
          </li>
          <li>
            <h3 className="text-secondaryColor font-semibold mb-2  ">
              Resource Management:
            </h3>
            <p className="  max-md:text-sm  ">
              Manage inventory, spare parts, and maintenance resources
              efficiently.
            </p>
          </li>
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
