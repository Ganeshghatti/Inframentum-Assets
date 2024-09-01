import AboutInframentum from "@/Components/Home_Page_Components/About_Inframentum";
import About_Inframentum_Img from "@/Components/Home_Page_Components/About_Inframentum/About_Inframentum_Img";
import HomeIntro from "@/Components/Home_Page_Components/Home_Intro";
import HomeSlider from "@/Components/Home_Page_Components/HomeSlider";
import Marquee_Animation from "@/Components/Home_Page_Components/Marquee";
import Partners from "@/Components/Home_Page_Components/Partners";
import RE_ALCM_Image from "@/Components/Home_Page_Components/RE-ALCM/RE-ALCM_Img";
import RE_ALCM_Intro from "@/Components/Home_Page_Components/RE-ALCM/RE-ALCM_Intro";
import ReFinImage from "@/Components/Home_Page_Components/Re_Fin/Re_Fin_Image";
import ReFinIntro from "@/Components/Home_Page_Components/Re_Fin/Re_Fin_Intro";
import Rental_First_Image from "@/Components/Home_Page_Components/RentalFirst/Rental_First_Image";
import Rental_First_Intro from "@/Components/Home_Page_Components/RentalFirst/Rental_First_Intro";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* SECTION - 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <HomeIntro />
        {/* HOME SLIDER */}
        <div className="col-span-1 max-md:order-1">
          <HomeSlider />
        </div>
      </section>
      {/* SECTION - 2 */}
      <section className="container mx-auto space-y-8">
        <h1 className="text-2xl capitalize font-semibold">
          Partnered for holistic Focus
        </h1>
        <Partners />
      </section>
      {/* SECTION - 3 */}
      <section className="bg-[#F5FAFE] flex flex-col md:flex-row items-center justify-between gap-10 p-5 md:p-10">
        {/* ABOUT INFRAMENTUM */}
        <AboutInframentum />
        {/* ABOUT INFRAMENTUM IMAGE*/}
        <About_Inframentum_Img />
      </section>
      {/* SECTION - 4 */}
      <section className="bg-[#6A2D1A] text-white py-1 -rotate-0 overflow-hidden">
        <div className="bg-secondaryColor py-8  rotate-1 border border-secondaryColor_hover">
          <Marquee_Animation />
        </div>
      </section>
      {/* SECTION - 5 */}
      <section className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-5xl font-semibold">Services</h1>
        <p className="text-base md:text-lg text-slate-500">
          <span className="text-slate-950 font-semibold">Inframentum™</span> is
          a Company focused on Asset Life Cycle Management for Renewable Energy,
          Water and sustainable Infrastructure assets.
        </p>
      </section>
      {/* SECTION - 6 */}
      <section className="container mx-auto border bg-background_Color_1 flex flex-col md:flex-row items-center justify-around gap-10 md:gap-5 p-8 rounded-3xl">
        <RE_ALCM_Intro />
        <RE_ALCM_Image />
      </section>
      {/* SECTION - 7 */}
      <section className="container mx-auto border bg-background_Color_2 flex flex-col md:flex-row items-center justify-around gap-10 md:gap-5 p-8 rounded-3xl">
        <Rental_First_Image />
        <Rental_First_Intro />
      </section>
      {/* SECTION - 8 */}
      <section className="container mx-auto border bg-background_Color_3 flex flex-col md:flex-row items-center justify-around gap-10 md:gap-5 p-8 rounded-3xl">
        <ReFinIntro />
        <ReFinImage />
      </section>
    </div>
  );
}
