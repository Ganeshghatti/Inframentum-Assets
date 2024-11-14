import provide_1 from "@/assets/images/provide_1.png";

export default function RE_Providers() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 max-lg:order-2 max-lg:col-span-3 flex items-center justify-center">
        <ul className="list-inside max-md:text-xl md:text-4xl font-semibold capitalize">
          Inframentum<sup>TM</sup> enables a wide range of financial services
          that support the growth and development of various players within the
          industry, including project developers, equipment manufacturers,
          utility companies, and investors.
          <div className="text-base font-normal space-y-4 mt-4 max-md:text-sm">
            <li></li>
          </div>
        </ul>
      </div>
      <div className="col-span-1 max-lg:order-1 max-lg:col-span-3 max-md:mb-8 w-full">
        <img src={provide_1} alt="Provider" className="w-full" />
      </div>
    </div>
  );
}
