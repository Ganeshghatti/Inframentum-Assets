import provider from "@/assets/images/Rental/provide_3.png";

export default function Asserts_Procurement() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#cef5fc] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img
          src={provider}
          alt="Image"
          className="lg:w-[33pc] lg:h-[350px] rounded-[25px]"
        />
      </div>
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl  text-4xl font-semibold">
          Asset Procurement
          <div className="font-normal max-md:text-sm  text-base space-y-8 mt-6">
            <li>
              <span className="text-secondaryColor   max-md:text-sm font-semibold text-lg">
                Supplier Management Solutions :{" "}
              </span>
              <span className="font-normal   text-base max-md:text-sm">
                Provide support to manage relationships with suppliers, ensuring
                that components meet quality standards and are delivered on
                time. In future we plan to enable these through automated
                solutions with minimal requirement of manpower.{" "}
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Contract Management :{" "}
              </span>
              <span className="font-normal   text-base max-md:text-sm">
                Enable automated contract management systems to streamline
                procurement processes and ensure compliance with contractual
                obligations.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
