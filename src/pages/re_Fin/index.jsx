import ReFinImage from "@/Components/Re_Fin_Page_Components/Re_Fin_Image";
import ReFinIntro from "@/Components/Re_Fin_Page_Components/Re_Fin_Intro";

export default function ReFin() {
  return (
    <section
      id="i-re-fin"
      className="container mx-auto border bg-background_Color_3 flex flex-col md:flex-row items-center justify-around gap-10 md:gap-5 p-8 rounded-3xl scroll-mt-36"
    >
      <ReFinIntro />
      <ReFinImage />
    </section>
  );
}
