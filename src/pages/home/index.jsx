import HomeIntro from "@/Components/Home_Page_Components/Home_Intro";
import HomeSlider from "@/Components/Home_Page_Components/HomeSlider";

export default function Home() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-screen border-b-8 border-secondaryColor">
      <HomeIntro />
      {/* HOME SLIDER */}
      <div className="col-span-1 max-lg:order-1 lg:min-h-screen cursor-pointer">
        <HomeSlider />
      </div>
    </section>
  );
}
