import provide_1 from "@/assets/images/First/provide_1.png";

export default function Platform_Providers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#cef5fc] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-1 md:col-span-2 flex items-center">
        <ol className=" list-decimal list-inside max-md:text-xl md:text-4xl font-semibold capitalize">
          RentalFirst provides
          <div className="text-base font-normal space-y-4 mt-4 max-md:text-sm">
            <li>Energy-Efficient Fleet</li>
            <li>
              <span className="font-semibold">Eco-Friendly Equipment :</span>{" "}
              Enabling clients to invest and operate energy-efficient and
              low-emission equipment, such as battery-operated Material Handling
              Equipments, Electric Construction Equipments to address the
              reduction of carbon footprint as well as increase efficiency,
              productivity and financial viability
            </li>
            <li>
              <span className="font-semibold">Alternative Power Sources :</span>{" "}
              Providing equipments that use renewable energy sources, like
              solar-powered generators or electric vehicles.
            </li>
          </div>
        </ol>
      </div>
      <div className="col-span-1 flex items-center justify-center mb-4 md:mb-0">
        <img
          src={provide_1}
          alt="Image"
          className="lg:w-[33pc] lg:h-[350px] rounded-[25px]"
        />
      </div>
    </div>
  );
}
