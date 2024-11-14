import provide_1 from "@/assets/images/provide_1.png";

export default function Platform_Providers() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 max-lg:order-2 max-lg:col-span-3 flex items-center justify-center">
        <ol className="list-decimal list-inside max-md:text-xl md:text-4xl font-semibold capitalize">
          I-RentalFirst provides
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
      <div className="col-span-1 max-lg:order-1 max-lg:col-span-3 max-md:mb-8 w-full">
        <img src={provide_1} alt="Provider" className="w-full" />
      </div>
    </div>
  );
}
