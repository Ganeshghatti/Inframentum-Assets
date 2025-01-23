export default function Target_Customer() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-bold max-md:text-xl text-center max-md:text-center md:text-3xl lg:text-4xl xl:text-5xl capitalize">
          Our Target Customers
        </h1>
      </div>
      <div className="grid grid-cols-2 pt-6 gap-6 max-lg:gap-10">
        <div className="col-span-1 max-lg:col-span-2 flex items-center justify-center">
          <ul className="font-semibold max-md:text-xl  md:text-2xl lg:text-3xl xl:text-4xl capitalize list-inside list-disc">
            REALCM
            <div className="font-normal text-base text-start ml-4 pt-4 space-y-4">
              <li>Renewable Energy EPC companies</li>
              <li>Renewable Energy Consultants and Advisors</li>
              <li>Buyers of Clean Energy</li>
              <li>Sellers of Clean Energy</li>
              <li>Investors in Clean Energy</li>
              <li>Financial Institutions financing clean energy assets</li>
            </div>
          </ul>
        </div>
        <div className="col-span-1 max-lg:col-span-2 flex items-center justify-center">
          <ul className="font-semibold max-md:text-xl  md:text-2xl lg:text-3xl xl:text-4xl capitalize list-inside list-disc">
            RENTAL FIRST
            <div className="font-normal text-base text-start ml-4 pt-4 space-y-4">
              <li>Infrastructure Developers</li>
              <li>Logistics and Warehousing</li>
              <li>Mining & Quarrying Businesses</li>
              <li>Data Centres</li>
              <li>Commercial & Residential Complexes</li>
              <li>
                Industries, SMEs and Large Manufacturing and Services set ups
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
