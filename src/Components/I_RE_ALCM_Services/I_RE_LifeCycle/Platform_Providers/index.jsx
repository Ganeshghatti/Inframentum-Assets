import provide_1 from "@/assets/images/Rental/provide_1.png";

export default function Platform_Providers() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#cef5fc] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-2 max-lg:order-2 max-lg:col-span-3">
        <h2 className="max-md:text-xl md:text-4xl font-semibold mb-6">
          RE-ALCM platform provides
        </h2>
        <ul className="space-y-4">
          <li className="max-md:text-sm">
            Renewable Energy Asset Life Cycle Management Services addressing
          </li>
          <li className="  max-md:text-sm">
            Management of renewable energy assets—such as solar panels, wind
            turbines, and energy storage systems—throughout their entire life
            cycle
          </li>
          <li className="  max-md:text-sm">
            Through Implementation of specialized solutions, RE-ALCM can enable
            clients to enhance the performance
          </li>
        </ul>
      </div>
      <div className="col-span-1 max-lg:order-1 max-lg:col-span-3 max-md:mb-8 w-full">
        <img
          src={provide_1}
          alt="Provider"
          className="lg:w-[33pc] lg:h-[350px] rounded-[25px]"
        />
      </div>
    </div>
  );
}
