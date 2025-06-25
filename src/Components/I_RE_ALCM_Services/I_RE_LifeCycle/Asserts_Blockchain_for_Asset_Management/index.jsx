import provider from "@/assets/images/Rental/provide_11.png";

export default function Asserts_Blockchain_for_Asset_Management() {
  return (
    <div className="grid grid-cols-3 gap-4  bg-[#cef5fc] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img
          src={provider}
          alt="Image"
          className="lg:w-[33pc] lg:h-[350px] rounded-[25px]"
        />
      </div>
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Blockchain for Asset Management
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Blockchain Integration :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Use blockchain technology to enhance transparency and security
                in renewable energy asset management, particularly in areas like
                energy trading, contract management, and supply chain
                traceability.
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
