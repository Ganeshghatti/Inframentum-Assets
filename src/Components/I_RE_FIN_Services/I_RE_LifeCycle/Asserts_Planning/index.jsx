import provider from "@/assets/images/provide_1.png";

export default function Asserts_Planning() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Asset Planning and Design
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Simulation and Modelling Tools :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Use advanced software for simulation and modelling to optimize
                the design of renewable energy projects, ensuring they are
                cost-effective and aligned with long-term performance goals.{" "}
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Feasibility Analysis :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Conduct comprehensive feasibility studies to assess site
                conditions, resource availability, and regulatory requirements.
                In future we are building capacity to enable these analyses
                through usage of Artificial Intelligence and Big Data
              </span>
            </li>
          </div>
        </ul>
      </div>
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img src={provider} alt="Image" className="w-full" />
      </div>
    </div>
  );
}
