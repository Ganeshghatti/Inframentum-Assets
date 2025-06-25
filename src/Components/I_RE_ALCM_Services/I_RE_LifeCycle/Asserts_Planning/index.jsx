import provider from "@/assets/images/Rental/provide_2.png";

export default function Asserts_Planning() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#e0d9c8] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2">
        <h2 className="max-md:text-xl md:text-4xl font-semibold mb-6">
          Planning and Design
        </h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-secondaryColor font-semibold mb-2  ">
              Project Planning:
            </h3>
            <p className="  max-md:text-sm">
              Implement comprehensive project planning tools for renewable
              energy installations, including site assessment, resource
              evaluation, and feasibility studies.
            </p>
          </li>
          <li>
            <h3 className="text-secondaryColor font-semibold mb-2  ">
              Design Optimization:
            </h3>
            <p className="  max-md:text-sm">
              Use advanced design software to optimize system layout, component
              selection, and performance predictions.
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
