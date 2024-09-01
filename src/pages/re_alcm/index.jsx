import RE_ALCM_Image from "@/Components/Re-Alcm_Page_Components/RE-ALCM_Img";
import RE_ALCM_Intro from "@/Components/Re-Alcm_Page_Components/RE-ALCM_Intro";

export default function Re_Alcm() {
  return (
    <section className="container mx-auto border bg-background_Color_1 flex flex-col md:flex-row items-center justify-around gap-10 md:gap-5 p-8 rounded-3xl">
      <RE_ALCM_Intro />
      <RE_ALCM_Image />
    </section>
  );
}
