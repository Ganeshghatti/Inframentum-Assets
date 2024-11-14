import provider from "@/assets/images/provide_1.png";

export default function Asserts_Digital_Twin_Technology() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-lg text-4xl font-semibold">
          Digital Twin Technology
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Digital Twin Models :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Create digital twins of renewable energy assets to simulate,
                monitor, and optimize their performance throughout the life
                cycle, providing insights into maintenance needs, efficiency
                improvements, and lifespan extension.
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
