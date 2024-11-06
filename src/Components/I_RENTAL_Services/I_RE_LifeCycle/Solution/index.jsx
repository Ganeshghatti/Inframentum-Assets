import solution from "@/assets/images/solution.png";

export default function Solution() {
  return (
    <div className="max-md:-mt-10 md:-mt-20 space-y-12">
      <div>
        <h1 className="font-bold max-md:text-xl max-md:text-center md:text-3xl lg:text-4xl xl:text-5xl">
          Asset Life Cycle Management Solutions
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 max-lg:col-span-3 w-full flex items-center justify-center">
          <img src={solution} alt="Solution" className="w-full" />
        </div>
        <div className="col-span-2 max-lg:col-span-3 flex items-center justify-center">
          <ul className="text-xl max-md:text-sm">
            Renewable Energy Asset Management: Covers management throughout the
            entire lifecycle, from planning and design to decommissioning and
            recycling.
            <div className="text-base font-normal mt-4 space-y-6 max-md:text-sm">
              <li>
                <span className="text-lg font-semibold max-md:text-sm">
                  Performance Optimization :
                </span>{" "}
                <span>
                  Utilizes AI-driven predictive maintenance, remote monitoring,
                  and energy management systems.
                </span>
              </li>
              <li>
                <span className="text-lg font-semibold max-md:text-sm">
                  Lifecycle Cost Management :
                </span>{" "}
                <span>
                  Implements tools for Total Cost of Ownership (TCO) analysis,
                  financial management, and end-of-life planning.
                </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
