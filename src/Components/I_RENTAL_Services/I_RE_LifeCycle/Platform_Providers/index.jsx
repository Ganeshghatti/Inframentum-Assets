import provide_1 from "@/assets/images/provide_1.png";

export default function Platform_Providers() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 max-lg:order-2 max-lg:col-span-3 flex items-center justify-center">
        <ol className="list-decimal list-inside max-md:text-xl md:text-4xl font-semibold capitalize">
          RE-ALCM platform provides
          <div className="text-base font-normal space-y-4 mt-4 max-md:text-sm">
            <li>
              Renewable Energy Asset Life Cycle Management Services addressing{" "}
            </li>
            <li>
              Management of renewable energy assets—such as solar panels, wind
              turbines, and energy storage systems—throughout their entire life
              cycle, from planning and design to decommissioning and recycling.
            </li>
            <li>
              Through Implementation of specialized solutions, RE-ALCM can
              enable clients to enhance the performance, efficiency, and
              profitability of renewable energy projects.
            </li>
          </div>
        </ol>
      </div>
      <div className="col-span-1 max-lg:order-1 max-lg:col-span-3 max-md:mb-8 w-full">
        <img src={provide_1} alt="Provider" className="w-full" />
      </div>
    </div>
  );
}
