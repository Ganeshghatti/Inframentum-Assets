export default function HomeIntro() {
  return (
    <div className="col-span-1 space-y-8 lg:space-y-10  max-lg:order-2 container md:mx-auto">
      <div className="lg:w-2/3 space-y-8 lg:space-y-10">
        <h1 className="text-4xl md:text-[56px] md:leading-[70px] max-lg:leading-[50px]  capitalize font-bold max-lg:pt-6">
          Streamlining Renewable Energy Solutions
        </h1>
        <p className="text-[18px] text-slate-700">
          Empowering communities with accessible, efficient, and user-friendly
          renewable energy solutions for a sustainable and greener tomorrow.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="bg-secondaryColor text-white text-sm md:text-base  px-4 py-3 rounded-full hover:bg-secondaryColor_hover transition-all duration-200 hover:drop-shadow-md"
        >
          Get started free
        </a>
        <a
          href="#"
          className=" text-slate-950 border border-black text-sm md:text-base  px-4 py-3 rounded-full hover:bg-black hover:text-white transition duration-300 hover:drop-shadow-md"
        >
          Book a demo
        </a>
      </div>
    </div>
  );
}
