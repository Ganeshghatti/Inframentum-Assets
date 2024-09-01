import HomeIntro from "@/Components/Home_Page_Components/Home_Intro";
import HomeSlider from "@/Components/Home_Page_Components/HomeSlider";

export default function Home() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center ">
      <HomeIntro />
      {/* HOME SLIDER */}
      <div className="col-span-1 max-lg:order-1">
        <HomeSlider />
      </div>
    </section>
  );
}
