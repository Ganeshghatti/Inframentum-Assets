import { Link } from "react-router-dom";

export default function HomeIntro() {
  return (
    <div className="col-span-1 space-y-8 lg:space-y-10  max-lg:order-2 max-lg:container md:mx-auto lg:px-10 max-lg:py-5">
      <div className="lg:w-full space-y-8 lg:space-y-10">
        <h1 className="text-4xl md:text-[50px] md:leading-[70px] max-lg:leading-[50px]  capitalize font-bold max-lg:pt-6">
          Streamlining Renewable{" "}
          <span className="text-secondaryColor">Energy</span> Solutions
        </h1>
        <p className="text-base md:text-[18px] text-slate-700">
          Empowering communities with accessible, efficient, and user-friendly
          renewable energy solutions for a sustainable and greener tomorrow.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to={"/calculator"}
          className="bg-secondaryColor text-white text-sm md:text-base  px-4 py-3 rounded-full hover:bg-secondaryColor_hover transition-all duration-200 hover:drop-shadow-md"
        >
          Get started free
        </Link>
        <a
          href="#"
          className=" text-slate-950 border border-black text-sm md:text-base  px-4 py-3 rounded-full hover:bg-black hover:text-white transition duration-300 hover:drop-shadow-md"
        >
          Book a Meeting
        </a>
      </div>
    </div>
  );
}
