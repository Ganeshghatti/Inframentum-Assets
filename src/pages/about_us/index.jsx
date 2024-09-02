import AboutInframentum from "@/Components/About_Page_Components/About_Inframentum";
import About_Inframentum_Img from "@/Components/About_Page_Components/About_Inframentum/About_Inframentum_Img";

export default function AboutUS() {
  return (
    <section
      id="about-us"
      className="bg-[#F5FAFE] flex flex-col xl:flex-row items-center justify-between xl:gap-10 max-xl:py-10 max-xl:px-5 xl:p-10 scroll-mt-24"
    >
      {/* ABOUT INFRAMENTUM */}
      <AboutInframentum />
      {/* ABOUT INFRAMENTUM IMAGE*/}
      <About_Inframentum_Img />
    </section>
  );
}
