import provider from "@/assets/images/provide_1.png";

export default function Asserts_Construction() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Construction, Installation and Commissioning
          <div className="font-normal max-md:text-sm text-base space-y-8 mt-6">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Project Management Support :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Our clients can use our services to not only have the entire
                project managed right from initiation, construction,
                installation and commissioning. They can also utilize project
                management tools to oversee construction schedules, resource
                allocation, and budgetary control.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Cloud based Inspection :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                We provide real-time monitoring of projects post commissioning
                through usage of IoT solutions.
              </span>
            </li>
            <li>
              <span>
                In Future we propose to deploy drones and AI for real-time
                monitoring of construction sites, ensuring that installations
                are performed correctly and identifying any issues early to
                minimize time and cost over-runs.
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
