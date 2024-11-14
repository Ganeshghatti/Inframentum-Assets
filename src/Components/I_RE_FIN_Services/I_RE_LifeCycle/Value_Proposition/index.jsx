import vp from "@/assets/images/vp.jpg";

export default function Value_Proposition() {
  return (
    <div className="max-md:-mt-10 md:-mt-20 space-y-12">
      <div>
        <h1 className="font-bold max-md:text-xl text-center max-md:text-center md:text-3xl lg:text-4xl xl:text-5xl capitalize">
          Value Proposition
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-6 max-md:gap-14">
        <div className="col-span-4 max-lg:col-span-6 flex flex-col justify-center space-y-10 max-lg:order-2">
          <div className="col-span-2 max-lg:col-span-3 flex items-start justify-start ">
            <ul className="text-xl max-md:text-sm list-inside list-disc">
              Inframentum<sup>TM</sup> is a Clean Energy Asset Life Cycle
              Management Platform addressing flexible ownership of
              <div className="text-base font-normal mt-4 space-y-2 max-md:text-sm ml-4">
                <li>Solar and Wind Power based Assets</li>
                <li>Clean Energy Drinking Water Assets</li>
                <li>
                  Operating Lease and Rental of Electric Construction and
                  Material Handling Equipments
                </li>
              </div>
            </ul>
          </div>
          <div className="col-span-2 max-lg:col-span-3 flex  items-start justify-start">
            <ul className="text-xl max-md:text-sm list-inside list-disc">
              We enable our platform users for
              <div className="text-base font-normal mt-4 space-y-2 max-md:text-sm ml-4">
                <li>Consumption of Lower Levelised Cost of Energy</li>
                <li>Through Green energy sources while</li>
                <li>Investing, Managing or Trading in Renewable Energy </li>
                <li>
                  To augment optimal usage of the generated power, we also
                  assist in acquiring Clean energy assets through our Operating
                  Lease and Rental Platform
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="col-span-2 max-lg:col-span-6 w-full flex items-center justify-center max-lg:order-1">
          <img
            src={vp}
            alt="Solution"
            className="w-full  rounded-tl-[10%] rounded-br-[10%] shadow-2xl shadow-darkBg "
          />
        </div>
      </div>
    </div>
  );
}
